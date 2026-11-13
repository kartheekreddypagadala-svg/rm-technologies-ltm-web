
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

export default function Home() {
  return (
    <>
      {/* 1. LTM-STYLE HERO SECTION */}

      <section className="relative bg-black px-4 pb-5 pt-5 text-white sm:px-6 lg:px-8">
        <div
          className="relative mx-auto flex min-h-[650px] max-w-[1680px] items-center overflow-hidden rounded-[28px] bg-cover bg-center bg-no-repeat md:min-h-[690px] lg:min-h-[720px]"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(5, 8, 17, 0.98) 0%,
                rgba(5, 8, 17, 0.91) 34%,
                rgba(5, 8, 17, 0.55) 58%,
                rgba(5, 8, 17, 0.05) 100%
              ),
              url('/assets/hero-innovation.png')
            `,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-10 w-full px-7 py-24 sm:px-12 md:px-16 lg:px-20">
            <Reveal className="max-w-[850px]">
              {/* BRAND */}
              <div className="mb-9 flex flex-wrap items-center gap-4">
                <span className="font-display text-[34px] font-extrabold tracking-[-2px] text-[#ff6258] sm:text-[43px]">
                  RULINGMIND
                </span>

                <span className="h-10 w-px bg-white/50" />

                <span className="text-xs font-bold uppercase tracking-[4px] text-white">
                  TECHNOLOGIES
                </span>
              </div>

              {/* HEADING */}
              <h1 className="font-display text-[clamp(38px,5.3vw,76px)] font-semibold leading-[1.08] tracking-[-2px] md:tracking-[-3px]">
                Engineering the future
                <br />
                with{" "}
                <span className="text-[#ff6258]">
                  intelligent technology.
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-[710px] text-[17px] leading-[1.7] text-white/75 md:text-[19px]">
                We help businesses transform through cloud computing,
                artificial intelligence, software engineering and
                intelligent digital solutions.
              </p>

              <p className="mt-5 max-w-[750px] text-[15px] leading-[1.8] text-white/65 md:text-base">
                From modernising enterprise infrastructure to building
                next-generation applications, RulingMind Technologies
                brings people, processes and technology together to
                create meaningful business outcomes.
              </p>

              {/* BUTTONS */}
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 bg-[#ff6258] px-7 py-4 text-sm font-bold text-black transition hover:bg-white"
                >
                  Explore our capabilities
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-white/60 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#ff6258] hover:bg-[#ff6258] hover:text-black"
                >
                  Let's talk
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* BOTTOM LABEL */}
          <div className="absolute bottom-7 left-7 right-7 z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5 sm:left-12 sm:right-12 lg:left-20 lg:right-20">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/65">
              Technology · Innovation · Transformation
            </span>

            <span className="text-xs font-semibold text-white/65">
              Building what's next.
            </span>
          </div>
        </div>
      </section>

     

{/* 2. RULINGMIND TECHNOLOGIES - OUR CAPABILITIES */}

<section className="bg-black py-24 text-white md:py-32">
  <div className="mx-auto max-w-[1320px] px-6 lg:px-10">

    {/* SECTION INTRODUCTION */}
    <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-start">

      <Reveal>
        <h2 className="font-display text-[clamp(38px,5vw,64px)] font-semibold leading-[1.05] tracking-tight">
          Engineering possibilities.
          <br />
          <span className="text-[#ff6258]">
            Building what's next.
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="max-w-[570px] text-lg leading-[1.7] text-white/75 md:ml-auto">
          Our technology expertise spans artificial intelligence,
          software engineering, cloud infrastructure and enterprise
          solutions. We turn business challenges into practical,
          scalable technology solutions.
        </p>
      </Reveal>

    </div>

    {/* CAPABILITY CARDS */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

      {/* 1. AI SOLUTIONS - LARGE CARD */}
      <Link
        href="/solutions/ai-powered-business-solutions"
        className="group relative flex min-h-[350px] overflow-hidden rounded-[28px] bg-[#071522] p-8 md:col-span-2 md:min-h-[370px]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(3,12,24,.92), rgba(3,12,24,.2)),
            url('${img("photo-1451187580459-43490279c0fa")}')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col">

          <span className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#ff8178]">
            Artificial Intelligence
          </span>

          <h3 className="max-w-[570px] font-display text-4xl font-semibold md:text-5xl">
            AI & Intelligent Solutions
          </h3>

          <p className="mt-5 max-w-[480px] text-base leading-7 text-white/80">
            Building intelligent applications using artificial
            intelligence, machine learning, generative AI,
            intelligent automation and data-driven technologies.
          </p>



        </div>
      </Link>

      {/* 2. SOFTWARE DEVELOPMENT - TALL CARD */}
      <Link
        href="/services/software-development"
        className="group relative flex min-h-[480px] overflow-hidden rounded-[28px] bg-[#241018] p-8 md:row-span-2"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(30,5,15,.85), rgba(10,5,10,.25)),
            url('${img("photo-1522071820081-009f0129c71c")}')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col">

          <span className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#ff8178]">
            Software Engineering
          </span>

          <h3 className="font-display text-4xl font-semibold">
            Custom Software Development
          </h3>

          <p className="mt-5 text-base leading-7 text-white/80">
            Designing and developing web applications, mobile
            applications, enterprise platforms and custom
            software tailored to business requirements.
          </p>

    

        </div>
      </Link>

      {/* 3. CLOUD & DEVOPS */}
      <Link
        href="/services/cloud-computing-infrastructure"
        className="group relative flex min-h-[300px] overflow-hidden rounded-[28px] bg-[#171019] p-8"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(20,8,15,.9), rgba(20,8,15,.2)),
            url('${img("photo-1518770660439-4636190af475")}')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col">

          <span className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#ff8178]">
            Cloud & DevOps
          </span>

          <h3 className="font-display text-3xl font-semibold">
            Cloud & DevOps Engineering
          </h3>

          <p className="mt-4 max-w-[360px] text-sm leading-6 text-white/80">
            Building scalable cloud infrastructure, automating
            deployments, implementing CI/CD pipelines and
            modernising application environments.
          </p>

    

        </div>
      </Link>

      {/* 4. DATA & ENTERPRISE SOLUTIONS */}
      <Link
        href="/solutions/enterprise-digital-transformation"
        className="group relative flex min-h-[300px] overflow-hidden rounded-[28px] bg-[#101820] p-8"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(5,12,20,.9), rgba(5,12,20,.25)),
            url('${img("photo-1460925895917-afdab827c52f")}')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col">

          <span className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#ff8178]">
            Data & Enterprise Technology
          </span>

          <h3 className="font-display text-3xl font-semibold">
            Data & Enterprise Solutions
          </h3>

          <p className="mt-4 max-w-[360px] text-sm leading-6 text-white/80">
            Delivering data engineering, analytics, database
            management, enterprise integration and digital
            transformation solutions.
          </p>

      

        </div>
      </Link>

    </div>
  </div>
</section>
{/* 3. UPDATES AND ANNOUNCEMENTS */}
<UpdatesAnnouncements />
{/* 3. OUTCREATING CASE STUDY CAROUSEL */}
<OutcreatingCarousel />

{/* OUR PEOPLE AND TECHNOLOGY SECTION */}

<section className="overflow-hidden bg-[#191919] px-6 py-24 text-white md:px-10 md:py-32">
  <div className="mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-2 lg:gap-24">

    {/* LEFT CONTENT */}
    <div>
      <p className="mb-6 text-xs font-bold uppercase tracking-[4px] text-[#ff6258]">
        RulingMind Technologies
      </p>

      <h2 className="font-display text-[clamp(42px,5.5vw,72px)] font-semibold leading-[1.08] tracking-tight">
        We are the
        <br />
        <span className="text-[#ff6258]">Minds behind</span>
        <br />
        the technology.
      </h2>

      <p className="mt-8 max-w-[680px] text-lg leading-[1.8] text-white/80">
        We are problem-solvers, innovators and engineers who turn
        business challenges into meaningful digital solutions.
      </p>

      <p className="mt-5 max-w-[650px] text-base leading-[1.8] text-white/60">
        Together, we bring ideas to life through artificial intelligence,
        cloud engineering, software development and continuous innovation.
        We believe technology creates its greatest impact when people,
        ideas and engineering come together.
      </p>

      <Link
        href="/careers"
        className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#ff6258] px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
      >
        Be part of our team
        <span className="text-xl">→</span>
      </Link>
    </div>

    {/* RIGHT CONTENT - NO IMAGES */}
    <div className="relative border-l border-white/15 pl-8 md:pl-14">

      <p className="mb-10 text-xs font-bold uppercase tracking-[4px] text-white/40">
        What drives us
      </p>

      <div className="space-y-10">

        <div>
          <h3 className="font-display text-4xl font-semibold md:text-5xl">
            Innovation<span className="text-[#ff6258]">.</span>
          </h3>
          <p className="mt-2 text-white/55">
            Thinking beyond the ordinary.
          </p>
        </div>

        <div>
          <h3 className="font-display text-4xl font-semibold md:text-5xl">
            Engineering<span className="text-[#ff6258]">.</span>
          </h3>
          <p className="mt-2 text-white/55">
            Building with purpose and precision.
          </p>
        </div>

        <div>
          <h3 className="font-display text-4xl font-semibold md:text-5xl">
            Collaboration<span className="text-[#ff6258]">.</span>
          </h3>
          <p className="mt-2 text-white/55">
            Creating better outcomes together.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>


{/* TECHNOLOGY ECOSYSTEM SECTION */}

<section className="relative isolate overflow-hidden bg-[#dedede] px-5 py-16 text-black md:px-10 md:py-20">

  {/* LEFT CORAL DECORATION */}
  <div className="pointer-events-none absolute -left-20 top-0 -z-0 h-[540px] w-[180px] rounded-[50%] bg-[#ff6258] blur-[2px]" />

  {/* RIGHT CORAL DECORATION */}
  <div className="pointer-events-none absolute -right-20 top-0 -z-0 h-[540px] w-[180px] rounded-[50%] bg-[#ff6258] blur-[2px]" />

  <div className="relative z-10 mx-auto max-w-[1450px]">

    <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-3 md:gap-x-12 md:gap-y-8">

      {/* CENTRAL CONTENT */}
      <div className="order-first flex min-h-[300px] flex-col items-center justify-center px-2 text-center md:order-none md:col-start-2 md:row-start-2 md:min-h-[280px]">

        <p className="mb-5 text-xs font-bold uppercase tracking-[4px] text-[#ff6258]">
          RulingMind Technologies
        </p>

        <h2 className="font-display text-[clamp(38px,4.5vw,64px)] font-semibold leading-[1.05] tracking-tight text-black">
          Our technology
          <br />
          ecosystem
        </h2>

        <p className="mt-5 max-w-[480px] text-base leading-7 text-[#333]">
          Combining modern platforms, cloud technologies and
          intelligent tools to build scalable business solutions.
        </p>

        <Link
          href="/services"
          className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#e93636] px-7 py-4 font-semibold text-white transition hover:bg-black"
        >
          Explore our capabilities
          <span className="text-xl">→</span>
        </Link>
      </div>

      {/* ORACLE - TOP LEFT */}
      <div className="flex justify-center md:col-start-1 md:row-start-1 md:justify-end">
        <div className="flex h-[135px] w-full max-w-[245px] items-center justify-center rounded-[25px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2">
          <span className="text-[30px] font-bold tracking-tight text-[#c74634]">
            ORACLE
          </span>
        </div>
      </div>

      {/* SAP - TOP CENTER */}
      <div className="flex justify-center md:col-start-2 md:row-start-1">
        <div className="flex h-[135px] w-full max-w-[245px] items-center justify-center rounded-[25px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2">
          <span className="rounded-md bg-[#087bbd] px-6 py-2 text-[38px] font-extrabold italic text-white">
            SAP
          </span>
        </div>
      </div>

      {/* GOOGLE CLOUD - TOP RIGHT */}
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

      {/* MICROSOFT - MIDDLE LEFT */}
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

      {/* AWS - MIDDLE RIGHT */}
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

      {/* NVIDIA - BOTTOM LEFT */}
      <div className="flex justify-center md:col-start-1 md:row-start-3 md:justify-end">
        <div className="flex h-[135px] w-full max-w-[245px] items-center justify-center rounded-[25px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2">
          <span className="bg-[#76b900] px-5 py-3 text-[25px] font-extrabold text-black">
            NVIDIA
          </span>
        </div>
      </div>

      {/* SERVICENOW - BOTTOM RIGHT */}
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




    


      {/* 12. CONTACT CTA */}

     <ContactReadySection/>
    </>
  );
}
