import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  href: string;
  action: string;
}

export default function CTASection({ title, description, href, action }: CTASectionProps) {
  return (
    <section className="bg-primary py-20 text-light">
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Start today</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-light/80">{description}</p>
        <Link href={href} className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-primary transition hover:bg-accent/90">
          {action}
        </Link>
      </div>
    </section>
  );
}
