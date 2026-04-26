import Link from "next/link";
import { Film, Play } from "lucide-react";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata = {
  title: "Video Services — JavidVerse",
  description: "Professional video editing, advertisement creation, promotional videos, and motion graphics.",
  keywords: ["video services", "video editing", "motion graphics", "promotional videos"]
};

const services = [
  { title: "Video editing", description: "Polished edits for brand stories, social ads, and presentations." },
  { title: "Advertisement creation", description: "Short-form video content designed for conversion and engagement." },
  { title: "Promotional videos", description: "Launch films, product showcases, and campaign narratives." },
  { title: "Motion graphics", description: "Animated visual systems to lift brand messaging." }
];

const workflow = [
  "Concept & storyboard", "Production planning", "Editing & motion", "Review and delivery"
];

export default function VideoServicesPage() {
  return (
    <>
      <Hero
        title="Video Services"
        subtitle="We shape video work with a premium look, fast iteration, and campaign-ready delivery."
      />

      <SectionWrapper title="Services grid" subtitle="Video services made for growth-focused brands and storytellers.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-primary/20 bg-light p-7 shadow-premium">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                <Film className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-primary/70">{service.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Sample video placeholders" subtitle="Preview concept layouts for campaign and promotional video assets.">
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="group overflow-hidden rounded-[2rem] border border-primary/20 bg-primary p-6 text-light shadow-premium transition hover:-translate-y-1">
              <div className="flex h-48 items-center justify-center rounded-3xl bg-primary/80">
                <Play className="h-12 w-12 text-accent" />
              </div>
              <p className="mt-5 text-lg font-semibold">Campaign sample {index + 1}</p>
              <p className="mt-3 text-sm leading-6 text-light/70">A polished visual placeholder to represent motion content direction.</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Workflow" subtitle="A smooth, transparent process from concept through delivery.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((item, index) => (
            <div key={item} className="rounded-[2rem] border border-primary/20 bg-light p-6 shadow-premium">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-accent/15 text-accent">{index + 1}</div>
              <p className="text-sm font-semibold text-primary">{item}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <div className="bg-primary py-20 text-light">
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Craft video work that moves your audience.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-light/80">From first cut to final export, we deliver motion assets that feel premium and ready to perform.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-primary transition hover:bg-accent/90">
            Start your video project
          </Link>
        </div>
      </div>
    </>
  );
}
