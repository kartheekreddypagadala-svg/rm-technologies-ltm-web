
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "@/lib/content";

const slides = [
  {
    eyebrow: "Outcreating",
    title: "intelligent business solutions",
    description:
      "Turn business challenges into intelligent opportunities. We help organisations explore artificial intelligence, machine learning and generative AI to build smarter applications and workflows.",
    statement: "Making technology work smarter for your business.",
    image: "photo-1451187580459-43490279c0fa",
    href: "/solutions/ai-powered-business-solutions",
    linkText: "Explore AI solutions",
  },
  {
    eyebrow: "Outcreating",
    title: "cloud possibilities",
    description:
      "Build a stronger digital foundation with cloud architecture, infrastructure modernisation and scalable environments designed around your business requirements.",
    statement: "Creating a foundation for what's next.",
    image: "photo-1518770660439-4636190af475",
    href: "/solutions/cloud-modernization",
    linkText: "Explore cloud solutions",
  },
  {
    eyebrow: "Outcreating",
    title: "software experiences",
    description:
      "From web applications to enterprise platforms, we design and develop custom software focused on performance, usability, security and long-term maintainability.",
    statement: "Turning ideas into useful digital experiences.",
    image: "photo-1522071820081-009f0129c71c",
    href: "/services/software-development",
    linkText: "Explore software development",
  },
  {
    eyebrow: "Outcreating",
    title: "connected digital operations",
    description:
      "Bring development and operations together through DevOps practices, CI/CD automation, containerisation and modern infrastructure management.",
    statement: "Helping teams deliver with confidence.",
    image: "photo-1486406146926-c627a92ad1ab",
    href: "/services/devops-automation",
    linkText: "Explore DevOps services",
  },
];

export default function OutcreatingCarousel() {
  const [active, setActive] = useState(0);

  const current = slides[active];

  const previous = () => {
    setActive((value) => (value - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setActive((value) => (value + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8">

        {/* Section heading */}
        <div className="mb-12 max-w-[850px]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#e94343]">
            RulingMind Technologies
          </p>

          <h2 className="font-display text-[clamp(34px,5vw,62px)] font-semibold leading-[1.08] tracking-tight text-[#171717]">
            The technology partner for
            <span className="text-[#e94343]"> what's next.</span>
          </h2>

          <p className="mt-5 max-w-[700px] text-base leading-7 text-[#555] md:text-lg">
            Discover how our technology capabilities can help businesses
            innovate, modernise and move forward.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">

          <div
            className="relative min-h-[590px] overflow-hidden rounded-[28px] bg-[#14221e] md:min-h-[650px]"
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(5, 18, 16, 0.96) 0%,
                  rgba(5, 18, 16, 0.86) 36%,
                  rgba(5, 18, 16, 0.43) 70%,
                  rgba(5, 18, 16, 0.12) 100%
                ),
                url('${img(current.image)}')
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "background-image 400ms ease",
            }}
          >

            {/* Content */}
            <div
              key={active}
              className="relative z-10 flex min-h-[590px] max-w-[780px] flex-col px-7 py-12 text-white animate-in fade-in duration-500 sm:px-12 md:min-h-[650px] md:justify-center md:px-16 lg:px-20"
            >
              <p className="mb-3 text-[clamp(32px,4vw,54px)] font-semibold tracking-tight">
                {current.eyebrow}
              </p>

              <h3 className="max-w-[700px] font-display text-[clamp(29px,4vw,49px)] font-semibold leading-[1.12]">
                {current.title}
              </h3>

              <p className="mt-9 max-w-[620px] text-base leading-[1.8] text-white/85 md:text-[18px]">
                {current.description}
              </p>

              <p className="mt-8 max-w-[620px] text-base font-semibold leading-7 text-white md:text-lg">
                {current.statement}
              </p>

              <div className="mt-12">
                <Link
                  href={current.href}
                  className="inline-flex items-center gap-4 rounded-full bg-[#e94343] px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  {current.linkText}
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-7 right-7 z-20 flex items-center gap-2 text-sm font-semibold text-white md:bottom-9 md:right-12">
              <span className="text-xl">{String(active + 1).padStart(2, "0")}</span>
              <span className="text-white/50">/</span>
              <span className="text-white/60">
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>

          </div>

          {/* Previous arrow */}
          <button
            type="button"
            onClick={previous}
            aria-label="Previous slide"
            className="absolute -left-3 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#a5a5a5] text-white shadow-lg transition hover:bg-[#e94343] sm:-left-6 md:h-14 md:w-14"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute -right-3 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#e94343] text-white shadow-lg transition hover:bg-black sm:-right-6 md:h-14 md:w-14"
          >
            <ChevronRight size={30} />
          </button>

        </div>

        {/* Slide indicators */}
        <div className="mt-7 flex justify-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-12 bg-[#e94343]"
                  : "w-3 bg-[#c9c9c9] hover:bg-[#777]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
