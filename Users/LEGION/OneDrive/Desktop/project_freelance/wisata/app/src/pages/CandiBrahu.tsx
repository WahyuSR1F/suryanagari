const CandiBrahu = () => {
  useEffect(() => {
    // Create floating animated elements
    const floatAnimation1 = gsap.to(".float-element-3", {
      y: [0, -15, 0],
      x: [0, 10, 0],
      rotation: [0, 10, 0],
      duration: 7,
      repeat: -1,
      ease: "sine.inOut"
    });

    const floatAnimation2 = gsap.to(".float-element-4", {
      y: [0, 12, 0],
      x: [0, -8, 0],
      rotation: [0, -8, 0],
      duration: 5,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Animation for the timeline info box
    gsap.from(".timeline-info", {
      scrollTrigger: {
        trigger: ".timeline-info",
        start: "top 90%",
      },
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.5
    });

    // Cleanup animations on unmount
    return () => {
      floatAnimation1.kill();
      floatAnimation2.kill();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Batik pattern background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="float-element-3 absolute top-1/3 right-20 w-28 h-28 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHBhdGggIGlkPSJiYXRpay1lbGVtZW50IiBkPSJNNCAyQzQgMy4xMDQ1NyAzLjEwNDU3IDQgMiA0Qy44OTU0MzAgNCAwIDMuMTA0NTcgMCAyQzAgLjg5NTQzMSAuODk1NDMwIDAgMiAwQzMuMTA0NTcgMCA0IC44OTU0MzEgNCAyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L2RlZnM+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrLXBhdHRlcm4iIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNiYXRpay1lbGVtZW50IiB4PSIwIiB5PSIwIi8+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNiYXRpay1lbGVtZW50IiB4PSIxMCIgeT0iMTAiLz4KICA8L3BhdHRlcm4+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiYXRpay1wYXR0ZXJuKSIvPgo8L3N2Zz4K')]"></div>
        <div className="float-element-4 absolute bottom-1/4 left-1/4 w-20 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHBhdGggIGlkPSJiYXRpay1lbGVtZW50MiIgZD0iTTAgNEEyIDIgMCAwIDEgNCAyQTQgNCAwIDAgMSAwIDR6IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvZGVmcz4KICA8cGF0dGVybiBpZD0iYmF0aWstcGF0dGVybjIiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNiYXRpay1lbGVtZW50MiIgeD0iMCIgeT0iMCIvPgogICAgPHVzZSB4bGluazpocmVmPSIjYmF0aWstZWxlbWVudDIiIHg9IjEwIiB5PSIxMCIvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2JhdGlrLXBhdHRlcm4yKSIvPgo8L3N2Zz4K')]"></div>
      </div>
      
      <CandiTemplate
        title="Candi Brahu"
        images={images}
        paragraphs={paragraphs}
        timelineEvents={timelineEvents}
      />
      
      {/* Interactive timeline element with batik-inspired design */}
      <div className="timeline-info fixed bottom-24 right-6 bg-gradient-to-r from-[#D4B896] to-[#C5A880] text-white p-4 rounded-full shadow-lg z-50 border-2 border-[#2C1A0E]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxwYXRoIGQ9Ik0wIDBMNDAgMTBMMjAgMjBMMC4wMDEgMTBaIE0wIDMwTDIwIDQwTDQwIDMwTDIwIDIwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMkMxQTBFIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3N2Zz4K')] opacity-10"></div>
        <span className="text-xs relative z-10">Sejarah</span>
      </div>
    </div>
  );
};

export default CandiBrahu;