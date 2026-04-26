import Link from "next/link";
import { LayoutGrid, Mail, Palette, PenTool, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata = {
  title: "Graphic Design & Branding — JavidVerse",
  description: "Logo design, brand identity creation, digital posters, and visual brand management.",
  keywords: ["graphic design", "branding", "web creation", "marketing", "brand identity"]
};

const categories = [
  { title: "Brand identity", description: "Logos, color systems, and visual guidelines." },
  { title: "Digital assets", description: "Social, posters, and campaign visuals." },
  { title: "Web creation", description: "Landing pages and structured digital presence." },
  { title: "Marketing support", description: "Launch assets, email visuals, and campaign flow." }
];

const brandingProcess = [
  "Discovery and mood", "Identity design", "Visual assets", "Delivery and application"
];

export default function GraphicDesignBrandingPage() {
  return (
    <>
      <Hero
        title="Graphic Design & Branding"
        subtitle="We develop premium visual systems and digital presence support for creative brands and organizations."
      />

      <SectionWrapper title="Web Creation & Marketing" subtitle="Website development and structured digital presence support.">
        <div className="rounded-[2rem] border border-primary/20 bg-light p-10 shadow-premium">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr]">
            <div>
              <p className="text-lg font-semibold text-primary">Web Creation & Marketing</p>
              <p className="mt-4 text-base leading-7 text-primary/70">From landing page concepts to structured site flow, we create digital touchpoints that support your visual brand and audience journey.</p>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-primary p-6 text-light">
                <p className="font-semibold">Discovery-led structure</p>
                <p className="mt-2 text-sm text-light/80">Clear content hierarchy and conversion-focused layouts.</p>
              </div>
              <div className="rounded-3xl bg-primary p-6 text-light">
                <p className="font-semibold">Campaign-ready launch</p>
                <p className="mt-2 text-sm text-light/80">Assets designed to support marketing momentum and audience capture.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Service categories" subtitle="A wide range of visual work delivered with premium polish.">
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((category) => (
            <div key={category.title} className="rounded-[2rem] border border-primary/20 bg-light p-8 shadow-premium">
              <div className="mb-4 inline-flex items-center gap-3 text-primary">
                <LayoutGrid className="h-5 w-5" />
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>
              <p className="text-sm leading-6 text-primary/70">{category.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Visual examples" subtitle="Mock placeholders to represent visual direction and premium delivery.">
        <div className="grid gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-[2rem] border border-primary/20 bg-primary p-8 text-light shadow-premium">
              <div className="mb-6 h-44 rounded-3xl bg-gradient-to-br from-primary via-primary/80 to-primary/60" />
              <p className="text-lg font-semibold">Creative mockup {index + 1}</p>
              <p className="mt-3 text-sm leading-6 text-light/80">A polished brand asset concept designed for campaign consistency.</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Branding process" subtitle="A structured creative path from discovery to application.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brandingProcess.map((step, index) => (
            <div key={step} className="rounded-[2rem] border border-primary/20 bg-light p-6 shadow-premium">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-accent/15 text-accent">{index + 1}</div>
              <p className="text-sm font-semibold text-primary">{step}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <div className="bg-primary py-20 text-light">
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Build a consistent brand with premium visual structure.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-light/80">From logos to web creation, your brand receives focused support for a strong market presence.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-primary transition hover:bg-accent/90">
            Start branding today
          </Link>
        </div>
      </div>
    </>
  );
}
