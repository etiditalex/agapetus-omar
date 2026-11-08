"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import type { HeroSlide } from "@/types/content";

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [reduce, slides.length]);

  if (slides.length === 0) return null;

  return (
    <section className="relative h-[22rem] overflow-hidden bg-[#121212] text-white sm:h-[32rem] lg:h-[36rem]" aria-roledescription="carousel" aria-label="Leadership quotes">
      {slides.map((slide, itemIndex) => {
        const active = itemIndex === index;
        return (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 ${active ? "" : "pointer-events-none"}`}
            initial={false}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: reduce ? 0 : 0.9, ease: "easeInOut" }}
            aria-hidden={!active}
          >
            <div className="relative h-full">
              <div className="absolute inset-0 sm:hidden">
                <Image
                  src={slide.image}
                  alt={active ? slide.imageAlt : ""}
                  fill
                  priority={itemIndex === 0}
                  quality={90}
                  sizes="100vw"
                  className="object-cover object-[62%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/55 to-transparent" />
              </div>
              <div className="hero-portrait-frame absolute inset-y-0 right-0 hidden w-[38%] sm:block lg:w-[40%]">
                <Image
                  src={slide.image}
                  alt={active ? slide.imageAlt : ""}
                  fill
                  sizes="(min-width: 1024px) 40vw, 38vw"
                  className="hero-portrait object-cover object-center"
                />
              </div>
              <div className="relative z-[1] flex h-full items-center px-4 pb-8 sm:px-8 sm:pb-12 sm:pr-[42%] lg:pl-16 lg:pr-[44%]">
                <div className="min-w-0 max-w-[13.5rem] sm:max-w-2xl">
                  <p className="text-lg font-light leading-snug text-white sm:text-3xl lg:text-5xl">{slide.quote}</p>
                  <p className="mt-2 text-xl font-bold leading-tight sm:mt-3 sm:text-4xl lg:text-5xl">{slide.emphasis}</p>
                  <div className="mt-4 sm:mt-8">
                    <Logo tone="light" compact />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {slides.length}. {slides[index]?.emphasis}
      </p>
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Show slide ${itemIndex + 1}`}
            aria-selected={itemIndex === index}
            className={`h-2.5 w-2.5 rounded-full ${itemIndex === index ? "bg-teal" : "bg-white/50"}`}
            onClick={() => setIndex(itemIndex)}
          />
        ))}
      </div>
    </section>
  );
}
