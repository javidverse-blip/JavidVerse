import Link from "next/link";
import { Globe, CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata = {
  title: "Web Creation & Marketing — JavidVerse",
  description: "Website development and structured digital presence support.",
  keywords: ["web creation", "marketing", "website development", "digital presence"]
};

const services = [
  { title: "Website development", description: "Custom websites built with modern frameworks and responsive design." },
  { title: "Digital marketing", description: "Strategic campaigns to grow your online presence and reach." },
  { title: "SEO optimization", description: "Search engine optimization to improve visibility and rankings." },
  { title: "Content strategy", description: "Compelling content creation and management for your brand." }
];

const processSteps = [
  "Strategy and planning", "Design and development", "Testing and launch", "Ongoing support and optimization"
];

export default function WebCreationMarketingPage() {
  return (
    <>
      <div className="w-full border-t border-gray-200"></div>
      <Hero
        title="Web Creation & Marketing"
        subtitle="We build structured, high-performing digital platforms that position your brand with clarity and purpose."
      />

      <SectionWrapper title="Overview" subtitle="Comprehensive digital solutions for modern businesses.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-base leading-7 text-primary/70">From concept to launch, we create websites and marketing strategies that drive results. Our approach combines technical expertise with creative vision to deliver digital experiences that engage and convert.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-primary/20 bg-light p-6 shadow-premium">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Performance focused</p>
                <p className="mt-3 text-sm leading-6 text-primary/70">Optimized for speed, SEO, and user experience.</p>
              </div>
              <div className="rounded-3xl border border-primary/20 bg-light p-6 shadow-premium">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Scalable solutions</p>
                <p className="mt-3 text-sm leading-6 text-primary/70">Built to grow with your business needs.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-primary/20 bg-light/50 p-8 shadow-premium">
            <div className="flex items-center gap-3 text-primary">
              <Globe className="h-6 w-6" />
              <p className="text-sm font-semibold">Web & Marketing Services</p>
            </div>
            <ul className="mt-6 space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-primary">{service.title}</p>
                    <p className="text-sm text-primary/70">{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Our process" subtitle="A streamlined approach to digital success." className="bg-gray-50">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-light font-bold">
                {index + 1}
              </div>
              <p className="text-sm font-semibold text-primary">{step}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Ready to build your digital presence?" subtitle="Let's create something amazing together.">
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-light font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start your project
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}