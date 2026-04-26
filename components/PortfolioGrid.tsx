"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "Book launch system", subtitle: "Editorial design & paperback presentation" },
  { title: "Video campaign suite", subtitle: "Motion assets for social ads" },
  { title: "Brand identity refresh", subtitle: "Logo, palette, and digital system" },
  { title: "Web presence design", subtitle: "Landing page and lead generation layout" }
];

export default function PortfolioGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {projects.map((project) => (
        <motion.div key={project.title} whileHover={{ y: -8 }} className="group overflow-hidden rounded-xl border-2 border-accent/30 bg-light p-6 text-primary shadow-premium transition">
          <div className="mb-4 h-40 rounded-lg bg-gradient-to-br from-primary to-primary/80 p-6 text-light">
            <div className="flex h-full flex-col justify-between">
              <span className="text-sm uppercase tracking-widest text-accent font-bold">Featured</span>
              <p className="text-xl font-bold leading-tight">{project.title}</p>
            </div>
          </div>
          <p className="text-sm leading-6 text-primary/70">{project.subtitle}</p>
        </motion.div>
      ))}
    </div>
  );
}
