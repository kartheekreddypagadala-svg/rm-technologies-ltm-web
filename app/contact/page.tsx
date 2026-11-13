
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contactInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us | RulingMindTech",
  description:
    "Contact RulingMindTech to discuss your business, technology and software requirements.",
};

type ContactPageProps = {
  searchParams: Promise<{
    service?: string;
    role?: string;
  }>;
};

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const params = await searchParams;

  const defaultService = params.service || "Other";

  const defaultMessage = params.role
    ? `I would like to apply for the ${params.role} position.`
    : "";

  return (
    <main className="min-h-screen bg-white text-black">

      <section className="wrap grid gap-12 py-12 md:grid-cols-[0.78fr_1.22fr] md:gap-16 md:py-14 lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="pt-1">

          <p className="mb-5 text-xs font-bold uppercase tracking-[2px] text-[#f2553f]">
            RulingMindTech
          </p>

          <h1 className="font-display text-[clamp(42px,5vw,60px)] font-medium leading-[1.08] tracking-[-2px]">
            Contact Us
          </h1>

          <div className="mt-12 max-w-[550px] space-y-5 text-[17px] leading-[1.65] text-[#171717] md:mt-14 md:text-[19px]">
            <p>
              We believe in solving complex business challenges of the
              converging world, by using cutting-edge technologies.
            </p>

            <p>
              Discover how RulingMindTech can help your business
              innovate, transform and grow.
            </p>
          </div>

          {/* CONTACT DETAILS */}
          <div className="mt-12 space-y-5 border-t border-[#e5e5e5] pt-7">
            <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#777]">
              Get in touch
            </p>

            <a
              href={`mailto:${contactInfo.email}`}
              className="block text-[16px] transition hover:text-[#f2553f]"
            >
              {contactInfo.email}
            </a>

            {contactInfo.phone &&
              !contactInfo.phone.includes("00000") && (
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="block text-[16px] transition hover:text-[#f2553f]"
                >
                  {contactInfo.phone}
                </a>
              )}
          </div>

        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="w-full">
          <ContactForm
            defaultService={defaultService}
            defaultMessage={defaultMessage}
          />
        </div>

      </section>
    </main>
  );
}
