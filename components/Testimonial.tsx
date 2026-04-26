interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

export default function Testimonial({ quote, name, role }: TestimonialProps) {
  return (
    <article className="rounded-[2rem] border border-primary/20 bg-light p-8 shadow-premium">
      <p className="text-lg leading-8 text-primary">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6">
        <p className="text-sm font-semibold text-primary">{name}</p>
        <p className="mt-1 text-sm text-primary/60">{role}</p>
      </div>
    </article>
  );
}
