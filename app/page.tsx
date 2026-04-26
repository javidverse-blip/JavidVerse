import Link from "next/link";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Testimonial from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "JavidVerse — Home",
  description: "Discover JavidVerse: premium creative services for books, video, branding, and digital presence.",
  keywords: ["creative agency", "home", "book design", "video production", "branding"]
};

const services = [
  {
    title: "Book Services",
    description: "Professional formatting, cover design, and publishing support.",
    href: "/book-services",
    icon: "BookOpen" as const
  },
  {
    title: "Video Services",
    description: "Engaging ads, promos, and motion graphics.",
    href: "/video-services",
    icon: "Film" as const
  },
  {
    title: "Graphic Design & Branding",
    description: "Logo design, brand identity creation, digital posters, and visual brand management.",
    href: "/graphic-design-branding",
    icon: "LayoutGrid" as const
  },
  {
    title: "Web Creation & Marketing",
    description: "Website development and digital marketing.",
    href: "/web-creation-marketing",
    icon: "Globe" as const
  }
];

const testimonials = [
  {
    quote: "JavidVerse turned our concept into a polished brand identity and launch campaign with clarity and impact.",
    name: "Amina Harris",
    role: "Founder, Auric Studio"
  },
  {
    quote: "The book design and editorial process felt effortless — the team delivered premium quality on every step.",
    name: "Jordan Lee",
    role: "Author"
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionWrapper title="Services" subtitle="A tailored set of creative services designed for clarity and growth.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} href={service.href} icon={service.icon} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Trusted by ambitious clients" subtitle="Focused support for authors, startups, and creative teams." className="bg-blue-900" titleClass="text-white" subtitleClass="text-white/80">
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} quote={testimonial.quote} name={testimonial.name} role={testimonial.role} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Contact"
        subtitle="Send a brief note and we’ll connect within one business day."
        className="bg-gray-50"
      >
        <div className="rounded-xl border-2 border-primary bg-light p-8 shadow-premium sm:p-10">
          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}
