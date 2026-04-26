import Link from "next/link";
import { BookOpen, CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata = {
  title: "Book Services — JavidVerse",
  description: "Formatting, cover design, proofreading, and publishing support for authors and organizations.",
  keywords: ["book services", "cover design", "proofreading", "publishing support"]
};

const services = [
  { title: "Formatting & layout", description: "Professional interior formatting for print and digital editions." },
  { title: "Cover design", description: "Strategic cover systems for audience-first presentation." },
  { title: "Proofreading", description: "Line editing and review to enhance readability and polish." },
  { title: "Publishing support", description: "Guidance through self-publishing workflows and asset delivery." }
];

const processSteps = [
  "Discovery and brief", "Creative direction and design", "Review and refinement", "Final delivery and launch support"
];

export default function BookServicesPage() {
  return (
    <>
      <div className="w-full border-t border-gray-200"></div>
      <Hero
        title="Book Services"
        subtitle="We help every page, cover, and publishing detail feel aligned with your story and audience."
      />

      <SectionWrapper title="Overview" subtitle="Structured support for book projects at every creative stage.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-base leading-7 text-primary/70">JavidVerse combines editorial precision with premium visual design so your book reads and looks exceptional. Ideal for authors, non-profits, and teams wanting a polished publishing path.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-primary/20 bg-light p-6 shadow-premium">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Focused review</p>
                <p className="mt-3 text-sm leading-6 text-primary/70">Review for structure, pacing, and visual flow.</p>
              </div>
              <div className="rounded-3xl border border-primary/20 bg-light p-6 shadow-premium">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Design-ready files</p>
                <p className="mt-3 text-sm leading-6 text-primary/70">Print-ready and digital exports with clean production specs.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-primary/20 bg-light/50 p-8 shadow-premium">
            <div className="flex items-center gap-3 text-primary">
              <BookOpen className="h-6 w-6" />
              <p className="text-sm font-semibold uppercase tracking-[0.24em]">Project highlight</p>
            </div>
            <p className="mt-5 text-lg font-semibold leading-8 text-primary">High-conversion book assets that create trust, readability, and a premium shelf presence.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Services breakdown" subtitle="A clear service menu aligned to the needs of authors and creative teams." className="bg-gray-50">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-primary/20 bg-light p-8 shadow-premium">
              <div className="mb-4 inline-flex items-center gap-3 text-primary">
                <CheckCircle2 className="h-5 w-5" />
                <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
              </div>
              <p className="text-sm leading-6 text-primary/70">{service.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Process" subtitle="A simple step-by-step workflow for smooth delivery.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-[2rem] border border-primary/20 bg-light p-6 text-primary shadow-premium">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">{index + 1}</div>
              <p className="text-sm leading-6">{step}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <div className="bg-primary py-20 text-light">
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Start Your Book Project</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-light/80">Bring your manuscript to life with premium visual design and publishing-ready support.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-primary transition hover:bg-accent/90">
            Start Your Book Project
          </Link>
        </div>
      </div>
    </>
  );
}
