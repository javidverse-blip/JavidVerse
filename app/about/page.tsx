import Link from "next/link";
import { Flag, HeartHandshake, Lightbulb, Users } from "lucide-react";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata = {
  title: "About JavidVerse",
  description: "At JavidVerse, we help individuals and businesses turn ideas into structured, professional creative work.",
  keywords: ["about", "creative agency", "mission", "values"]
};

const values = [
  { title: "Clarity", description: "Simple storytelling and design decisions that communicate immediately." },
  { title: "Structure", description: "Organized creative systems and workflows for reliable results." },
  { title: "Creativity", description: "Bold visual thinking that elevates every project." },
  { title: "Excellence", description: "High-quality output with attention to detail across every deliverable." }
];

export default function AboutPage() {
  return (
    <>
      <div className="w-full border-t border-gray-200"></div>
      <Hero
        title="About JavidVerse"
        subtitle="At JavidVerse, we help individuals and businesses turn ideas into structured, professional creative work."
      />

      <SectionWrapper title="Mission & Vision" subtitle="A premium creative partner with a focus on clarity, structure, and thoughtful delivery.">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.85fr]">
          <div className="rounded-[2rem] border border-primary/20 bg-light p-10 shadow-premium">
            <p className="text-lg font-semibold text-primary">Mission</p>
            <p className="mt-4 text-sm leading-7 text-primary/70">To help creatives and organizations present their work with premium polish, straightforward structure, and measurable impact.</p>
          </div>
          <div className="rounded-[2rem] border border-primary/20 bg-light p-10 shadow-premium">
            <p className="text-lg font-semibold text-primary">Vision</p>
            <p className="mt-4 text-sm leading-7 text-primary/70">To be the go-to agency for thoughtful creative services that feel elevated but remain grounded in audience clarity.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Founder" subtitle="A small team with big creative focus.">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.8fr]">
          <div className="rounded-[2rem] border border-primary/20 bg-light p-10 shadow-premium">
            <p className="text-lg font-semibold text-primary">Meet the founder</p>
            <p className="mt-4 text-sm leading-7 text-primary/70">A creative leader with experience crafting launch systems, book interiors, visual campaigns, and brand identities for ambitious clients.</p>
          </div>
          <div className="rounded-[2rem] border border-primary/20 bg-light/50 p-10 shadow-premium">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Team focus</p>
            <p className="mt-4 text-lg font-semibold text-primary">Small, connected, and intentionally collaborative.</p>
            <p className="mt-4 text-sm leading-7 text-primary/70">The team is built for clear communication, on-time delivery, and premium creative reliability.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Values" subtitle="What guides our work and client relationships.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-[2rem] border border-primary/20 bg-light p-8 shadow-premium">
              <div className="mb-4 inline-flex items-center gap-3 text-primary">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">•</span>
                <h3 className="text-lg font-semibold text-primary">{value.title}</h3>
              </div>
              <p className="text-sm leading-6 text-primary/70">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <div className="bg-primary py-20 text-light">
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Bring clarity and structure to your creative work.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-light/80">We build premium creative systems that support growth, visibility, and confident launches.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-primary transition hover:bg-accent/90">
            Book a consultation
          </Link>
        </div>
      </div>
    </>
  );
}
