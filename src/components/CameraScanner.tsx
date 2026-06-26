import React, { useRef, useEffect, useState } from 'react';
import jsQR from 'jsqr';

export default function CameraScanner({ onClose }: { onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const requestRef = useRef<number>(0);

  // 🔥 REF BARU: Untuk mencegah false positive (halusinasi QR dari noise/pola acak)
  const lastScanRef = useRef<{ data: string; count: number } | null>(null);
  const REQUIRED_CONSECUTIVE_FRAMES = 10; // Harus terdeteksi 10 frame berturut-turut

  useEffect(() => {
    let mounted = true;
    let localStream: MediaStream | null = null;

    async function startCamera() {
      try {
        const media = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } }
        });

        if (!mounted) {
          media.getTracks().forEach(t => t.stop());
          return;
        }

        localStream = media;
        setStream(media);

        if (videoRef.current) {
          videoRef.current.srcObject = media;
          await videoRef.current.play().catch(e => console.warn("Auto-play prevented", e));
          requestRef.current = requestAnimationFrame(tick);
        }
      } catch (err) {
        console.error('Camera error', err);
        if (mounted) {
          alert('Tidak dapat mengakses kamera. Mohon izinkan akses kamera di pengaturan browser Anda (atau pastikan bukan localhost selain HTTPS). Error: ' + (err as Error).message);
        }
      }
    }

    startCamera();

    return () => {
      mounted = false;
      cancelAnimationFrame(requestRef.current);
      if (localStream) {
        localStream.getTracks().forEach(t => t.stop());
      }
    };
  }, []);

  const tick = () => {
    if (videoRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (canvas) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: "dontInvert",
          });

          if (code) {
            // 🔥 CEK KONSEKU TIF: Apakah data yang sama terdeteksi secara berturut-turut?
            if (lastScanRef.current && lastScanRef.current.data === code.data) {
              lastScanRef.current.count += 1;
            } else {
              lastScanRef.current = { data: code.data, count: 1 };
            }

            // Hanya proses jika terdeteksi sebanyak REQUIRED_CONSECUTIVE_FRAMES
            if (lastScanRef.current.count >= REQUIRED_CONSECUTIVE_FRAMES) {
              console.log("Found valid QR code", code.data);
              onClose(); // Auto close after successful scan

              // Redirect logic
              if (code.data.startsWith('http://') || code.data.startsWith('https://')) {
                window.location.href = code.data;
              } else if (code.data.startsWith('/')) {
                window.location.href = code.data;
              } else {
                // Jika bukan link, tetap tampilkan alert
                alert("Data QR Code: " + code.data);
              }
              return; // Stop checking
            }
          } else {
            // 🔥 RESET: Jika tidak ada QR code yang terdeteksi di frame ini, reset counter
            lastScanRef.current = null;
          }
        }
      }
    }
    requestRef.current = requestAnimationFrame(tick);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 p-4">
      <div className="relative w-full max-w-md bg-[#2C1A0E] border-2 border-[#7A3218]/50 rounded-[2rem] shadow-2xl overflow-hidden p-2">
        <div className="relative rounded-[1.5rem] overflow-hidden bg-black aspect-[3/4]">
          <video ref={videoRef} className="w-full h-full object-cover" autoPlay playsInline muted />

          {/* Frame / Viewfinder */}
          <div className="absolute inset-8 border-2 border-white/20 rounded-xl z-10 pointer-events-none">
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-[#7A3218] rounded-tl-xl" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-[#7A3218] rounded-tr-xl" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-[#7A3218] rounded-bl-xl" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-[#7A3218] rounded-br-xl" />
          </div>

          {/* Animated Laser Line */}
          <style>{`
             @keyframes scan-line {
               0%, 100% { top: 15%; opacity: 0; }
               10%, 90% { opacity: 0.8; }
               50% { top: 85%; opacity: 0.8; }
             }
             .animate-scan-line {
               animation: scan-line 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
             }
           `}</style>
          <div className="absolute left-8 right-8 h-[2px] bg-[#7A3218] shadow-[0_0_12px_3px_rgba(122,50,24,0.8)] animate-scan-line z-10 pointer-events-none"></div>
        </div>

        {/* Hidden canvas for jsQR */}
        <canvas ref={canvasRef} className="hidden" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-[#7A3218] transition z-20 shadow-lg border border-white/10"
        >
          ✕
        </button>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 pointer-events-none">
          <p className="text-white/90 font-body text-sm bg-black/60 px-6 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-lg tracking-wide">
            Arahkan kamera ke QR Code
          </p>
        </div>
      </div>
    </div>
  );
}