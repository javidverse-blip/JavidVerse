import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — JavidVerse",
  description: "Contact JavidVerse for creative services in book design, video production, branding, and web marketing.",
  keywords: ["contact", "creative agency", "book services", "video services", "branding"]
};

export default function ContactPage() {
  return (
    <>
      <div className="w-full border-t border-gray-200"></div>
      <Hero
        title="Contact"
        subtitle="Work with JavidVerse to elevate your creative story."
      />

      <SectionWrapper title="Get in touch" subtitle="A simple way to share your project goals and start the conversation.">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.75fr]">
          <div className="rounded-[2rem] border border-primary/20 bg-light p-10 shadow-premium">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-3xl bg-primary/10 p-4 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Email</p>
                  <Link href="mailto:hello@javidverse.com" className="mt-2 block text-sm text-primary/70">hello@javidverse.com</Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-3xl bg-primary/10 p-4 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Schedule</p>
                  <p className="mt-2 text-sm text-primary/70">Let us know your availability and we&apos;ll propose a call time.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-3xl bg-primary/10 p-4 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Location</p>
                  <p className="mt-2 text-sm text-primary/70">Remote agency with selective in-person planning for local clients.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-primary/20 bg-light/50 p-10 shadow-premium">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
