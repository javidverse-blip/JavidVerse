"use client";

import { useState } from "react";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <form className="space-y-6" onSubmit={(event) => {
      event.preventDefault();
      setPending(true);
      setTimeout(() => {
        setPending(false);
        setSent(true);
      }, 800);
    }}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-primary">
          Name
          <input type="text" required className="w-full rounded-3xl border border-primary/20 bg-light px-4 py-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
        </label>
        <label className="space-y-2 text-sm font-medium text-primary">
          Email
          <input type="email" required className="w-full rounded-3xl border border-primary/20 bg-light px-4 py-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-primary">
        Project brief
        <textarea required rows={5} className="w-full rounded-[1.5rem] border border-primary/20 bg-light px-4 py-4 text-sm text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
      </label>
      <button type="submit" disabled={pending} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-light transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/50">
        {pending ? "Sending..." : sent ? "Message sent" : "Send inquiry"}
      </button>
      {sent ? <p className="text-sm text-accent">Thanks! We’ll review your message and reply shortly.</p> : null}
    </form>
  );
}
