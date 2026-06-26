import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Timeline from '../components/Timeline';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  title: string;
  images: string[];
  paragraphs: string[];
  timelineEvents?: {
    year: string;
    title: string;
    description: string;
  }[];
};

export default function CandiTemplate({ title, images, paragraphs, timelineEvents }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // GSAP animations for content
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power3.out'
      });
    }

    // Animate paragraphs with stagger effect
    paragraphRefs.current.forEach((p, index) => {
      if (p) {
        gsap.from(p, {
          scrollTrigger: {
            trigger: p,
            start: 'top 85%',
          },
          duration: 0.8,
          opacity: 0,
          y: 30,
          delay: index * 0.1,
          ease: 'power2.out'
        });
      }
    });

    // Animate images with special effects
    imageRefs.current.forEach((img, index) => {
      if (img) {
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: 'top 90%',
          },
          duration: 0.8,
          opacity: 0,
          scale: 0.9,
          rotationY: -90,
          delay: index * 0.2,
          ease: 'back.out(1.7)',
          onComplete: () => {
            gsap.to(img, {
              duration: 1,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              ease: 'power2.inOut'
            });
          }
        });
      }
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-[#F5EFE4] to-[#EDE4D6] py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 px-3 xs:px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden"
    >
      {/* Enhanced batik pattern background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 xs:opacity-5 sm:opacity-10">
        {/* Large batik pattern in background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgPHBhdGggZD0iTTQwIDBMODAgMjBWNDBMODAgNjBMMzIgODBIMDBGNDIgNjBIMjBMMCA0MFYyMEw0MCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGQ9Ik0yMCAxMEw0MCAyMEw2MCAxMEw4MCAyMFY0MEw2MCA1MEw4MCA2MFY4MEw2MCA3MEw0MCA4MEwyMCA3MEwwIDgwVjYwTDAgNDBMMCAyMEwyMCAxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGQ9Ik0yMCAzMEEyIDIgMCAwIDEgMjQgMzRBMiAyIDAgMCAxIDIwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCAzMEEyIDIgMCAwIDEgNjQgMzRBMiAyIDAgMCAxIDYwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik0yMCA1MEEyIDIgMCAwIDEgMjQgNTRBMiAyIDAgMCAxIDIwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCA1MEEyIDIgMCAwIDEgNjQgNTRBMiAyIDAgMCAxIDYwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L3BhdHRlcm4+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiYXRpaykiLz4KPC9zdmc+')]"></div>

        {/* Secondary overlapping pattern */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrMiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0zMCAxMEw0NSAyMEwzMCAzMEwxNSAyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cGF0aCBkPSJNMTUgNDVMNDAgNjBMMjUgNDVIMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggZD0iTTQ1IDQ1TDYwIDYwTDQ1IDQ1TDQ1IDM1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2JhdGlrMikiLz4KPC9zdmc+')] opacity-10 xs:opacity-10 sm:opacity-15"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 xs:h-0.5 sm:h-1 lg:h-2 bg-gradient-to-r from-transparent via-[#D4B896] to-transparent"></div>

      {/* Title with enhanced styling and batik-inspired border */}
      <h1
        ref={titleRef}
        className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#2C1A0E] mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 text-center drop-shadow-sm max-w-[95%] xs:max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl z-10 relative"
      >
        <span className="relative inline-block">
          {title}
          <div className="absolute -bottom-1.5 xs:-bottom-2 sm:-bottom-2.5 lg:-bottom-3 left-0 right-0 h-0.5 sm:h-0.5 lg:h-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxwYXRoIGQ9Ik0wIDBMNDAgMTBMMjAgMjBMMC4wMDEgMTBaIE0wIDMwTDIwIDQwTDQwIDMwTDIwIDIwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')] bg-repeat-x h-2 w-full transform -translate-y-1/2"></div>
        </span>
      </h1>

      <div className="max-w-[95%] xs:max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full flex flex-col gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-12 z-10 relative">
        {/* Render paragraphs and interleave images */}
        {paragraphs.map((text, index) => (
          <React.Fragment key={index}>
            {/* Show an image before specific paragraphs if available */}
            {index === 0 && images[0] && (
              <div
                ref={el => imageRefs.current[0] = el}
                className="w-full rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-md xs:shadow-lg sm:shadow-xl border border-[#D4B896] sm:border-2 bg-[#FAF7F2] transform-gpu relative"
              >
                <div className="absolute inset-0 border border-dashed border-[#D4B896]/30 rounded-lg xs:rounded-xl sm:rounded-2xl -m-0.5 xs:-m-1 sm:-m-2 pointer-events-none"></div>
                <img
                  src={images[0]}
                  alt={`${title} - view 1`}
                  className="w-full h-[25vh] xs:h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-1.5 xs:bottom-2 sm:bottom-3 left-1.5 xs:left-2 sm:left-3 bg-[#2C1A0E]/80 text-white px-1.5 xs:px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs">
                  Gambar Utama
                </div>
              </div>
            )}

            {index === 2 && images[1] && (
              <div
                ref={el => imageRefs.current[1] = el}
                className="w-full rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-md xs:shadow-lg sm:shadow-xl border border-[#D4B896] sm:border-2 bg-[#FAF7F2] my-3 xs:my-4 sm:my-5 transform-gpu relative"
              >
                <div className="absolute inset-0 border border-dashed border-[#D4B896]/30 rounded-lg xs:rounded-xl sm:rounded-2xl -m-0.5 xs:-m-1 sm:-m-2 pointer-events-none"></div>
                <img
                  src={images[1]}
                  alt={`${title} - view 2`}
                  className="w-full h-[25vh] xs:h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-1.5 xs:bottom-2 sm:bottom-3 left-1.5 xs:left-2 sm:left-3 bg-[#2C1A0E]/80 text-white px-1.5 xs:px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs">
                  Detail Arsitektur
                </div>
              </div>
            )}

            {index === 4 && images[2] && (
              <div
                ref={el => imageRefs.current[2] = el}
                className="w-full rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-md xs:shadow-lg sm:shadow-xl border border-[#D4B896] sm:border-2 bg-[#FAF7F2] my-3 xs:my-4 sm:my-5 transform-gpu relative"
              >
                <div className="absolute inset-0 border border-dashed border-[#D4B896]/30 rounded-lg xs:rounded-xl sm:rounded-2xl -m-0.5 xs:-m-1 sm:-m-2 pointer-events-none"></div>
                <img
                  src={images[2]}
                  alt={`${title} - view 3`}
                  className="w-full h-[25vh] xs:h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-1.5 xs:bottom-2 sm:bottom-3 right-1.5 xs:right-2 sm:right-3 bg-[#2C1A0E]/80 text-white px-1.5 xs:px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs">
                  Panorama
                </div>
              </div>
            )}

            {/* Paragraph Text with enhanced styling and batik-inspired border */}
            <div className="relative">
              <div className="absolute -inset-2 xs:-inset-3 sm:-inset-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDBMNDAgMTBMMjAgMjBMMC4wMDEgMTBaIE0wIDMwTDIwIDQwTDQwIDMwTDIwIDIwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] opacity-10 xs:opacity-15 sm:opacity-20 rounded-md xs:rounded-lg sm:rounded-xl -z-10"></div>
              <p
                ref={el => paragraphRefs.current[index] = el}
                className="text-[#4A2C18] font-body text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose text-justify bg-white/70 backdrop-blur-sm p-3 xs:p-4 sm:p-5 rounded-md xs:rounded-lg sm:rounded-xl border border-[#EDE4D6] shadow-sm relative"
              >
                {text}
              </p>
            </div>
          </React.Fragment>
        ))}

        {/* Additional images grid with enhanced animations */}
        {images.slice(paragraphs.length > 4 ? 3 : 1).length > 0 && (
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 mt-6 xs:mt-7 sm:mt-8">
            {images.slice(paragraphs.length > 4 ? 3 : (paragraphs.length > 2 ? 2 : 1)).map((img, i) => (
              <div
                key={i}
                ref={el => imageRefs.current[i + 3] = el}
                className="w-full rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-md xs:shadow-lg border border-[#D4B896] group transform-gpu relative"
              >
                <div className="absolute inset-0 border border-dashed border-[#D4B896]/30 rounded-lg xs:rounded-xl sm:rounded-2xl -m-0.5 xs:-m-1 pointer-events-none"></div>
                <img
                  src={img}
                  alt={`${title} - additional view ${i + 1}`}
                  className="w-full h-32 xs:h-36 sm:h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-xs xs:text-sm">Lihat Detail</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Timeline section if provided */}
        {timelineEvents && timelineEvents.length > 0 && (
          <div className="mt-10 mb-5 xs:mt-12 xs:mb-6 sm:mt-14 sm:mb-7 bg-white/50 backdrop-blur-sm p-3 xs:p-4 sm:p-5 rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#EDE4D6] shadow-lg">
            <Timeline
              events={timelineEvents}
              title="Sejarah Singkat"
            />
          </div>
        )}

        {/* Bottom decorative element */}
        <div className="mt-10 mb-5 xs:mt-12 xs:mb-6 sm:mt-14 sm:mb-7 w-full h-0.5 xs:h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#D4B896] to-transparent relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxwYXRoIGQ9Ik0wIDBMNDAgMTBMMjAgMjBMMC4wMDEgMTBaIE0wIDMwTDIwIDQwTDQwIDMwTDIwIDIwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')] bg-repeat-x h-full w-full transform -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
}