
"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
} from "lucide-react";
import { articles, img } from "@/lib/content";

const articleImages = [
  "photo-1451187580459-43490279c0fa",
  "photo-1551076805-e1869033e561",
  "photo-1486406146926-c627a92ad1ab",
  "photo-1460925895917-afdab827c52f",
  "photo-1518770660439-4636190af475",
];

export default function UpdatesAnnouncements() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    sliderRef.current?.scrollBy({
      left: direction === "right" ? 460 : -460,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-[#191919] py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1540px] px-6 lg:px-10">

        {/* Section heading */}
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#ff6258]">
              RulingMind Technologies
            </p>

            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-semibold leading-[1.05] tracking-tight">
              Updates and
              <br />
              <span className="text-[#ff6258]">Announcements</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
              Stay connected with RulingMind Technologies. Explore our latest
              company updates, technology insights, announcements and
              developments.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-4 rounded-full bg-[#f5ffc4] px-7 py-4 font-semibold text-black transition hover:bg-[#ff6258]"
          >
            View all updates
            <ArrowRight size={19} />
          </Link>
        </div>

        {/* Article slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-7 overflow-x-auto pb-6"
            style={{
              scrollbarWidth: "none",
              scrollSnapType: "x mandatory",
            }}
          >
            {articles.map((article, index) => (
              <article
                key={article.slug}
                className="group flex w-[310px] shrink-0 flex-col sm:w-[390px] lg:w-[430px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <Link href={`/insights/${article.slug}`}>
                  <h3 className="min-h-[105px] font-display text-2xl font-semibold leading-tight transition group-hover:text-[#ff8178] md:text-[28px]">
                    {article.title}
                  </h3>
                </Link>

                <div className="mb-6 mt-4 flex items-center gap-2 text-xs text-white/50">
                  <CalendarDays size={14} />
                  <time dateTime={article.date}>
                    {new Date(`${article.date}T12:00:00`).toLocaleDateString(
                      "en-IN",
                      { month: "long", year: "numeric" }
                    )}
                  </time>
                </div>

                <Link
                  href={`/insights/${article.slug}`}
                  aria-label={`Read ${article.title}`}
                  className="relative block h-[250px] overflow-hidden rounded-2xl bg-[#292929] sm:h-[290px]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${img(
                        articleImages[index % articleImages.length]
                      )}')`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <span className="absolute bottom-6 left-6 inline-flex items-center gap-3 font-semibold text-white">
                    Read more
                    <ArrowRight size={19} />
                  </span>
                </Link>
              </article>
            ))}
          </div>

          {/* Slider controls */}
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-7">
            <p className="text-sm text-white/45">
              Discover what's happening at RulingMind Technologies
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Previous updates"
                onClick={() => scroll("left")}
                className="grid h-12 w-12 place-items-center rounded-full bg-[#414638] transition hover:bg-[#f5ffc4] hover:text-black"
              >
                <ChevronLeft size={23} />
              </button>

              <button
                type="button"
                aria-label="Next updates"
                onClick={() => scroll("right")}
                className="grid h-12 w-12 place-items-center rounded-full bg-[#f5ffc4] text-black transition hover:bg-[#ff6258]"
              >
                <ChevronRight size={23} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
