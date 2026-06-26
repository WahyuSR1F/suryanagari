import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

type TimelineProps = {
  events: TimelineEvent[];
  title: string;
};

const Timeline: React.FC<TimelineProps> = ({ events, title }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const scrollTriggers: ScrollTrigger[] = [];

    if (timelineRef.current) {
      const tween = gsap.from(timelineRef.current, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
      });
      if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
    }

    eventRefs.current.forEach((event, index) => {
      if (event) {
        const tween = gsap.from(event, {
          scrollTrigger: {
            trigger: event,
            start: 'top 90%',
          },
          opacity: 0,
          // Mobile: slide dari kiri saja. Desktop: bolak-balik kiri/kanan
          x: isMobile ? -30 : index % 2 === 0 ? -50 : 50,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
        });
        if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
      }
    });

    return () => {
      scrollTriggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="font-display text-2xl md:text-3xl text-[#2C1A0E] mb-8 text-center relative">
        <span className="relative inline-block">
          {title}
          <div className="absolute -bottom-2 left-0 right-0 h-2 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxwYXRoIGQ9Ik0wIDBMNDAgMTBMMjAgMjBMMC4wMDEgMTBaIE0wIDMwTDIwIDQwTDQwIDMwTDIwIDIwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')] bg-repeat-x"></div>
        </span>
      </h2>

      <div ref={timelineRef} className="relative">
        {/* Garis vertikal: kiri di mobile, tengah di desktop */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 md:w-1 bg-[#D4B896]" />

        <div className="space-y-8 md:space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              ref={(el) => (eventRefs.current[index] = el)}
              className="relative"
            >
              {/* Dot: kiri di mobile, tengah di desktop */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#D4B896] border-2 md:border-4 border-white z-10 shadow-lg top-5 md:top-6" />

              {/* Konten: satu kolom di mobile, bolak-balik kiri/kanan di desktop */}
              <div
                className={`ml-10 md:ml-0 md:w-[calc(50%-1.5rem)] ${index % 2 !== 0 ? 'md:ml-auto' : ''
                  }`}
              >
                <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-[#EDE4D6] shadow-md">
                  <div className="bg-[#D4B896] text-white px-3 py-1 rounded-full text-xs md:text-sm inline-block mb-2">
                    {event.year}
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-[#2C1A0E] mb-1 md:mb-2">
                    {event.title}
                  </h3>
                  <p className="text-[#4A2C18] font-body text-sm md:text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;