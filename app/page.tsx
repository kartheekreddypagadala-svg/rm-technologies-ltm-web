
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Cards, Cta, Intro, Photo } from "@/components/ui";
import Icon from "@/components/Icon";
import UpdatesAnnouncements from "@/components/UpdatesAnnouncements";
import OutcreatingCarousel from "@/components/OutcreatingCarousel";
import ContactReadySection from "@/components/ContactReadySection";
import {
  articles,
  caseStudies,
  img,
  industries,
  services,
  solutions,
  stats,
} from "@/lib/content";

const featuredSlugs = [
  "cloud-computing-infrastructure",
  "aws-cloud-services",
  "devops-automation",
  "ai-machine-learning",
  "software-development",
  "cybersecurity",
];

const featured = featuredSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s));

const tech = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Kubernetes",
  "Terraform",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "React & Next.js",
  "GitHub Actions",
  "Amazon Bedrock",
  "Docker",
];

const pillars = [
  {
    tag: "Run",
    icon: "Headset",
    title: "Keep the business running",
    text: "Proactive monitoring, support and infrastructure care so your teams can focus on the business.",
    href: "/services/managed-it-services",
  },
  {
    tag: "Transform",
    icon: "Rocket",
    title: "Change what's possible",
    text: "A joined-up roadmap from strategy to delivery, across cloud, data and applications.",
    href: "/solutions/enterprise-digital-transformation",
  },
  {
    tag: "Apply AI",
    icon: "Bot",
    title: "Put AI to work",
    text: "Practical AI on your own data and workflows, with people in control.",
    href: "/solutions/ai-powered-business-solutions",
  },
];

const steps = [
  ["Assess", "Understand goals, systems and constraints."],
  ["Design", "Shape architecture, roadmap and success measures."],
  ["Build", "Deliver in small, testable increments."],
  ["Operate", "Monitor, support and keep improving."],
];

/* ==========================================
   REUSABLE HERO ILLUSTRATION
========================================== */

function HeroArtwork() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F3F6FA] to-white" />

      <div className="absolute inset-0">
        <svg
          viewBox="0 0 650 420"
          className="absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Abstract geometric technology illustration"
        >
          <g stroke="#42658A" strokeWidth="1.2" opacity="0.7">
            <path d="M50 230 L190 170 L310 210 L440 90 L590 45" />
            <path d="M90 110 L220 155 L350 65 L510 125 L610 80" />
            <path d="M40 330 L190 280 L330 320 L480 260 L620 300" />
            <path d="M190 170 L190 350" />
            <path d="M310 65 L310 320" />
            <path d="M440 90 L440 345" />
            <path d="M590 45 L590 300" />
            <path d="M90 110 L90 250" />
            <path d="M510 125 L510 345" />
          </g>

          <g fill="#B28B36">
            <circle cx="50" cy="230" r="4" />
            <circle cx="190" cy="170" r="4" />
            <circle cx="310" cy="210" r="4" />
            <circle cx="440" cy="90" r="4" />
            <circle cx="590" cy="45" r="4" />
            <circle cx="90" cy="110" r="4" />
            <circle cx="510" cy="125" r="4" />
            <circle cx="620" cy="300" r="4" />
          </g>

          <g fill="#071536">
            <circle cx="350" cy="65" r="3" />
            <circle cx="480" cy="260" r="3" />
            <circle cx="190" cy="350" r="3" />
          </g>
        </svg>

        {/* GLASS PANEL 1 */}

        <div
          className="absolute left-[15%] top-[14%] h-[47%] w-[24%] border border-[#8CB4D7]/70 bg-gradient-to-br from-white/90 via-[#DCEAF6]/75 to-[#8DB8DB]/40 shadow-[0_12px_35px_rgba(7,21,54,0.08)]"
          style={{
            clipPath: "polygon(0 25%, 100% 0, 100% 80%, 0 100%)",
          }}
        />

        {/* GLASS PANEL 2 */}

        <div
          className="absolute left-[42%] top-[5%] h-[65%] w-[24%] border border-[#7FA9CE]/60 bg-gradient-to-br from-white/80 via-[#D4E6F5]/70 to-[#669AC5]/60"
          style={{
            clipPath: "polygon(0 25%, 100% 0, 100% 75%, 0 100%)",
          }}
        />

        {/* GLASS PANEL 3 */}

        <div
          className="absolute left-[66%] top-[28%] h-[45%] w-[25%] border border-[#8BB5D6]/70 bg-gradient-to-br from-[#EAF3FA]/80 to-[#A9CBE5]/70 shadow-lg"
          style={{
            clipPath: "polygon(0 0, 100% 20%, 100% 85%, 0 100%)",
          }}
        />

        {/* NAVY PANEL 1 */}

        <div
          className="absolute left-[39%] top-[39%] h-[38%] w-[17%] bg-gradient-to-br from-[#071536] to-[#17416D]"
          style={{
            clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* NAVY PANEL 2 */}

        <div
          className="absolute left-[67%] top-[10%] h-[34%] w-[16%] bg-gradient-to-br from-[#071536] to-[#244F79]"
          style={{
            clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0 75%)",
          }}
        />

        {/* LOWER GLASS PANEL */}

        <div
          className="absolute left-[54%] top-[65%] h-[26%] w-[25%] border border-[#8CB4D7]/60 bg-gradient-to-br from-white/80 to-[#9DC4E2]/70"
          style={{
            clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 75%)",
          }}
        />

        {/* DECORATIVE LIGHT PANELS */}

        <div
          className="absolute left-[7%] top-[62%] h-[20%] w-[27%] bg-gradient-to-br from-[#EAF3FA]/70 to-[#A9C9E3]/60"
          style={{
            clipPath: "polygon(0 40%, 100% 0, 100% 80%, 0 100%)",
          }}
        />

        {/* GOLD ACCENT */}

        <div className="absolute bottom-[12%] left-[25%] h-[2px] w-[55%] rotate-[-8deg] bg-gradient-to-r from-transparent via-[#B28B36]/70 to-transparent" />
      </div>
    </>
  );
}

/* ==========================================
   HOMEPAGE
========================================== */

export default function Home() {
  return (
    <>
      {/* ==========================================
          1. RESPONSIVE HERO SECTION
      ========================================== */}

      <section className="relative overflow-hidden border-t-[4px] border-[#B28B36] bg-white">

        <div className="mx-auto max-w-[1600px]">

          {/* DESKTOP HERO */}

          <div className="hidden min-h-[420px] items-center lg:grid lg:grid-cols-[1fr_1fr]">

            {/* LEFT CONTENT */}

            <div className="relative z-20 px-7 py-14 sm:px-12 lg:py-16 lg:pl-16 xl:pl-20">

              <Reveal className="max-w-[650px]">


                <h1 className="font-display text-[clamp(40px,5vw,58px)] font-extrabold leading-[1.02] tracking-[-2px] text-[#071536]">
                  Building Intelligent
                  <br />
                  Businesses
                </h1>

                <p className="mt-5 max-w-[590px] text-[17px] leading-[1.55] text-[#374151] sm:text-[19px]">
                  Technology, cloud, cybersecurity and AI services that help
                  organisations improve their digital capabilities.
                </p>

                <div className="mt-7 flex flex-wrap gap-4">

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-3 rounded-md bg-[#071536] px-7 py-3.5 text-[15px] font-bold text-white shadow-sm transition duration-300 hover:bg-[#B28B36]"
                  >
                    Explore Our Services
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-md border-2 border-[#071536] px-7 py-3 text-[15px] font-bold text-[#071536] transition duration-300 hover:bg-[#071536] hover:text-white"
                  >
                    Talk to Us
                    <ArrowUpRight size={17} />
                  </Link>

                </div>

              </Reveal>
            </div>

            {/* RIGHT GEOMETRIC VISUAL */}

            <div className="relative h-[420px] overflow-hidden">
              <HeroArtwork />
            </div>

          </div>

          {/* MOBILE HERO - LTM INSPIRED */}

          <div className="px-4 py-5 sm:px-6 sm:py-7 lg:hidden">

            <div className="overflow-hidden rounded-[24px] bg-[#071536] shadow-[0_18px_50px_rgba(7,21,54,0.16)]">

              {/* MOBILE TEXT CONTENT */}

              <div className="px-6 pb-1 pt-7 sm:px-8 sm:pt-9">



                <h1 className="max-w-[520px] font-display text-[clamp(34px,8vw,48px)] font-extrabold leading-[1.04] tracking-[-1.5px] text-white">
                  Building Intelligent Businesses
                </h1>

                <p className="mt-4 max-w-[560px] text-[15px] leading-[1.65] text-white/80 sm:text-base">
                  Technology, cloud, cybersecurity and AI services that help
                  organisations improve their digital capabilities.
                </p>

                {/* MOBILE CTA BUTTONS */}

                <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row">

                  <Link
                    href="/services"
                    className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-md bg-[#B28B36] px-5 py-3 text-sm font-bold text-[#071536] transition hover:bg-white"
                  >
                    Explore Our Services
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-md border border-white/80 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#071536]"
                  >
                    Talk to Us
                    <ArrowUpRight size={17} />
                  </Link>

                </div>

              </div>

              {/* COMPLETE MOBILE ILLUSTRATION */}

              <div className="relative mx-3 mb-3 mt-6 aspect-[650/420] overflow-hidden rounded-[17px] bg-[#F3F6FA] sm:mx-4 sm:mb-4">
                <HeroArtwork />
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM ACCENT */}

        <div className="h-[12px] bg-[#F3F6FA]" />

      </section>

      {/* ==========================================
          2. OUR CAPABILITIES
      ========================================== */}

      <section className="bg-[#071536] py-24 text-white md:py-32">

        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">

          {/* SECTION INTRODUCTION */}

          <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-start">

            <Reveal>

              <h2 className="font-display text-[clamp(38px,5vw,64px)] font-semibold leading-[1.05] tracking-tight text-white">
                Engineering possibilities.
                <br />
                <span className="text-[#B28B36]">
                  Building what's next.
                </span>
              </h2>

            </Reveal>

            <Reveal delay={0.1}>

              <p className="max-w-[570px] text-lg leading-[1.7] text-[#DDE3EC] md:ml-auto">
                Our technology expertise spans artificial intelligence,
                software engineering, cloud infrastructure and enterprise
                solutions. We turn business challenges into practical,
                scalable technology solutions.
              </p>

            </Reveal>

          </div>

          {/* CAPABILITY CARDS */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* AI SOLUTIONS */}

            <Link
              href="/solutions/ai-powered-business-solutions"
              className="group relative flex min-h-[350px] overflow-hidden rounded-[28px] bg-[#071536] p-8 md:col-span-2 md:min-h-[370px]"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(7,21,54,.94), rgba(7,21,54,.35)),
                  url('${img("photo-1451187580459-43490279c0fa")}')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              <div className="relative z-10 flex flex-col">

                <span className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#B28B36]">
                  Artificial Intelligence
                </span>

                <h3 className="max-w-[570px] font-display text-4xl font-semibold text-white md:text-5xl">
                  AI & Intelligent Solutions
                </h3>

                <p className="mt-5 max-w-[480px] text-base leading-7 text-white/90">
                  Building intelligent applications using artificial
                  intelligence, machine learning, generative AI,
                  intelligent automation and data-driven technologies.
                </p>

              </div>

            </Link>

            {/* SOFTWARE DEVELOPMENT */}

            <Link
              href="/services/software-development"
              className="group relative flex min-h-[480px] overflow-hidden rounded-[28px] bg-[#071536] p-8 md:row-span-2"
              style={{
                backgroundImage: `
                  linear-gradient(180deg, rgba(7,21,54,.92), rgba(7,21,54,.48)),
                  url('${img("photo-1522071820081-009f0129c71c")}')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              <div className="relative z-10 flex flex-col">

                <span className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#B28B36]">
                  Software Engineering
                </span>

                <h3 className="font-display text-4xl font-semibold text-white">
                  Custom Software Development
                </h3>

                <p className="mt-5 text-base leading-7 text-white/90">
                  Designing and developing web applications, mobile
                  applications, enterprise platforms and custom
                  software tailored to business requirements.
                </p>

              </div>

            </Link>

            {/* CLOUD & DEVOPS */}

            <Link
              href="/services/cloud-computing-infrastructure"
              className="group relative flex min-h-[300px] overflow-hidden rounded-[28px] bg-[#071536] p-8"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(7,21,54,.94), rgba(7,21,54,.40)),
                  url('${img("photo-1518770660439-4636190af475")}')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              <div className="relative z-10 flex flex-col">

                <span className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#B28B36]">
                  Cloud & DevOps
                </span>

                <h3 className="font-display text-3xl font-semibold text-white">
                  Cloud & DevOps Engineering
                </h3>

                <p className="mt-4 max-w-[360px] text-sm leading-6 text-white/90">
                  Building scalable cloud infrastructure, automating
                  deployments, implementing CI/CD pipelines and
                  modernising application environments.
                </p>

              </div>

            </Link>

            {/* DATA & ENTERPRISE SOLUTIONS */}

            <Link
              href="/solutions/enterprise-digital-transformation"
              className="group relative flex min-h-[300px] overflow-hidden rounded-[28px] bg-[#071536] p-8"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(7,21,54,.94), rgba(7,21,54,.40)),
                  url('${img("photo-1460925895917-afdab827c52f")}')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              <div className="relative z-10 flex flex-col">

                <span className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#B28B36]">
                  Data & Enterprise Technology
                </span>

                <h3 className="font-display text-3xl font-semibold text-white">
                  Data & Enterprise Solutions
                </h3>

                <p className="mt-4 max-w-[360px] text-sm leading-6 text-white/90">
                  Delivering data engineering, analytics, database
                  management, enterprise integration and digital
                  transformation solutions.
                </p>

              </div>

            </Link>

          </div>

        </div>

      </section>

      {/* ==========================================
          3. UPDATES AND ANNOUNCEMENTS
      ========================================== */}

      <UpdatesAnnouncements />

      {/* ==========================================
          4. OUTCREATING CASE STUDY CAROUSEL
      ========================================== */}

      <OutcreatingCarousel />

      {/* ==========================================
          5. OUR PEOPLE AND TECHNOLOGY
      ========================================== */}

      <section className="overflow-hidden bg-[#071536] px-6 py-24 text-white md:px-10 md:py-32">

        <div className="mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* LEFT CONTENT */}

          <div>



            <h2 className="font-display text-[clamp(42px,5.5vw,72px)] font-semibold leading-[1.08] tracking-tight text-white">
              We are the
              <br />
              <span className="text-[#B28B36]">Minds behind</span>
              <br />
              the technology.
            </h2>

            <p className="mt-8 max-w-[680px] text-lg leading-[1.8] text-[#DDE3EC]">
              We are problem-solvers, innovators and engineers who turn
              business challenges into meaningful digital solutions.
            </p>

            <p className="mt-5 max-w-[650px] text-base leading-[1.8] text-[#DDE3EC]/80">
              Together, we bring ideas to life through artificial intelligence,
              cloud engineering, software development and continuous innovation.
              We believe technology creates its greatest impact when people,
              ideas and engineering come together.
            </p>

            <Link
              href="/careers"
              className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#B28B36] px-8 py-4 font-semibold text-[#071536] transition hover:bg-white hover:text-[#071536]"
            >
              Be part of our team
              <span className="text-xl">→</span>
            </Link>

          </div>

          {/* RIGHT CONTENT */}

          <div className="relative border-l border-white/15 pl-8 md:pl-14">

            <p className="mb-10 text-xs font-bold uppercase tracking-[4px] text-[#DDE3EC]/70">
              What drives us
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="font-display text-4xl font-semibold text-white md:text-5xl">
                  Innovation<span className="text-[#B28B36]">.</span>
                </h3>
                <p className="mt-2 text-[#DDE3EC]/80">
                  Thinking beyond the ordinary.
                </p>
              </div>

              <div>
                <h3 className="font-display text-4xl font-semibold text-white md:text-5xl">
                  Engineering<span className="text-[#B28B36]">.</span>
                </h3>
                <p className="mt-2 text-[#DDE3EC]/80">
                  Building with purpose and precision.
                </p>
              </div>

              <div>
                <h3 className="font-display text-4xl font-semibold text-white md:text-5xl">
                  Collaboration<span className="text-[#B28B36]">.</span>
                </h3>
                <p className="mt-2 text-[#DDE3EC]/80">
                  Creating better outcomes together.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
          6. TECHNOLOGY ECOSYSTEM
      ========================================== */}

      <section className="relative isolate overflow-hidden bg-[#F3F6FA] px-5 py-16 text-[#071536] md:px-10 md:py-20">

        {/* LEFT GOLD DECORATION */}

        <div className="pointer-events-none absolute -left-20 top-0 -z-0 h-[540px] w-[180px] rounded-[50%] bg-[#B28B36]/80 blur-[2px]" />

        {/* RIGHT GOLD DECORATION */}

        <div className="pointer-events-none absolute -right-20 top-0 -z-0 h-[540px] w-[180px] rounded-[50%] bg-[#B28B36]/80 blur-[2px]" />

        <div className="relative z-10 mx-auto max-w-[1450px]">

          <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-3 md:gap-x-12 md:gap-y-8">

            {/* CENTRAL CONTENT */}

            <div className="order-first flex min-h-[300px] flex-col items-center justify-center px-2 text-center md:order-none md:col-start-2 md:row-start-2 md:min-h-[280px]">



              <h2 className="font-display text-[clamp(38px,4.5vw,64px)] font-semibold leading-[1.05] tracking-tight text-[#071536]">
                Our technology
                <br />
                ecosystem
              </h2>

              <p className="mt-5 max-w-[480px] text-base leading-7 text-[#374151]">
                Combining modern platforms, cloud technologies and
                intelligent tools to build scalable business solutions.
              </p>

              <Link
                href="/services"
                className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#071536] px-7 py-4 font-semibold text-white transition hover:bg-[#B28B36] hover:text-[#071536]"
              >
                Explore our capabilities
                <span className="text-xl">→</span>
              </Link>

            </div>

            {/* ORACLE */}

            <div className="flex justify-center md:col-start-1 md:row-start-1 md:justify-end">
              <div className="flex h-[135px] w-full max-w-[245px] items-center justify-center rounded-[25px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2">
                <span className="text-[30px] font-bold tracking-tight text-[#c74634]">
                  ORACLE
                </span>
              </div>
            </div>

            {/* SAP */}

            <div className="flex justify-center md:col-start-2 md:row-start-1">
              <div className="flex h-[135px] w-full max-w-[245px] items-center justify-center rounded-[25px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2">
                <span className="rounded-md bg-[#087bbd] px-6 py-2 text-[38px] font-extrabold italic text-white">
                  SAP
                </span>
              </div>
            </div>

            {/* GOOGLE CLOUD */}

            <div className="flex justify-center md:col-start-3 md:row-start-1 md:justify-start">
              <div className="flex h-[135px] w-full max-w-[245px] flex-col items-center justify-center rounded-[25px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2">
                <span className="text-center text-[25px] font-semibold text-[#555]">
                  Google Cloud
                </span>
                <span className="mt-1 text-sm text-[#777]">
                  Platform
                </span>
              </div>
            </div>

            {/* MICROSOFT */}

            <div className="flex justify-center md:col-start-1 md:row-start-2 md:justify-end">
              <div className="flex h-[135px] w-full max-w-[245px] items-center justify-center gap-3 rounded-[25px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2">

                <span className="grid grid-cols-2 gap-[3px]">
                  <span className="h-5 w-5 bg-[#f25022]" />
                  <span className="h-5 w-5 bg-[#7fba00]" />
                  <span className="h-5 w-5 bg-[#00a4ef]" />
                  <span className="h-5 w-5 bg-[#ffb900]" />
                </span>

                <span className="text-[23px] font-semibold text-[#666]">
                  Microsoft
                </span>

              </div>
            </div>

            {/* AWS */}

            <div className="flex justify-center md:col-start-3 md:row-start-2 md:justify-start">
              <div className="flex h-[135px] w-full max-w-[245px] flex-col items-center justify-center rounded-[25px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2">
                <span className="text-[42px] font-bold tracking-tight text-[#232f3e]">
                  aws
                </span>
                <span className="text-xs font-semibold tracking-[3px] text-[#f39b24]">
                  CLOUD
                </span>
              </div>
            </div>

            {/* NVIDIA */}

            <div className="flex justify-center md:col-start-1 md:row-start-3 md:justify-end">
              <div className="flex h-[135px] w-full max-w-[245px] items-center justify-center rounded-[25px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2">
                <span className="bg-[#76b900] px-5 py-3 text-[25px] font-extrabold text-black">
                  NVIDIA
                </span>
              </div>
            </div>

            {/* SERVICENOW */}

            <div className="flex justify-center md:col-start-3 md:row-start-3 md:justify-start">
              <div className="flex h-[135px] w-full max-w-[245px] items-center justify-center rounded-[25px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2">
                <span className="text-[27px] font-bold tracking-tight text-[#174b43]">
                  servicenow
                </span>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
          7. CONTACT CTA
      ========================================== */}

      <ContactReadySection />

    </>
  );
}
