"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Film, LayoutGrid, Globe } from "lucide-react";

const iconMap = {
  BookOpen,
  Film,
  LayoutGrid,
  Globe
};

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: keyof typeof iconMap;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  const Icon = iconMap[icon];
  
  return (
    <motion.article whileHover={{ y: -6 }} className="group overflow-hidden rounded-xl border-2 border-primary bg-light p-8 shadow-premium transition-all duration-300">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-accent">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-primary/70">{description}</p>
      <Link href={href} className="mt-6 inline-flex items-center text-sm font-semibold text-accent transition group-hover:translate-x-1">
        View details
      </Link>
    </motion.article>
  );
}
