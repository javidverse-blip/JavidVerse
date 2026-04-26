"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="border-t border-primary/20"></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 overlay-primary"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 max-w-5xl"
      >
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <div className="bg-white rounded-full p-4 shadow-lg">
            <div className="rounded-full border-4 border-white">
              <Image
                src="/short-logo.png"
                alt="JavidVerse"
                width={70}
                height={70}
              />
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        {title ? (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-4xl font-bold leading-tight sm:text-5xl text-light mb-6"
          >
            {title}
          </motion.h1>
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-6xl md:text-7xl font-bold leading-tight text-light mb-6"
          >
            JavidVerse
          </motion.h1>
        )}

        {/* Subheading */}
        {subtitle ? (
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-lg md:text-xl text-light max-w-3xl mb-12 leading-relaxed font-normal"
          >
            {subtitle}
          </motion.p>
        ) : (
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-3xl md:text-4xl font-bold text-accent mb-8 tracking-wide"
          >
            For All Creative Solutions
          </motion.p>
        )}

        {/* Description */}
        {!title && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-lg md:text-xl text-light max-w-3xl mb-12 leading-relaxed font-normal"
          >
            At JavidVerse, we help individuals and businesses turn ideas into structured, professional creative work. From concept to completion, we provide focused creative services designed to present your vision clearly and effectively.
          </motion.p>
        )}

        {/* CTA Button */}
        {!title && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-4 bg-accent text-primary font-bold text-lg rounded-lg hover:scale-110 transition-all duration-300 hover:brightness-125 shadow-premium"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
