"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { MENTOR_INFO, SECTIONS } from "@/lib/constants";

export default function MentorSection() {
  return (
    <section
      id="mentor"
      className="py-16 md:py-24 max-w-6xl mx-auto px-4 md:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title={SECTIONS.mentor.title}
          subtitle={SECTIONS.mentor.subtitle}
        />
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="shrink-0"
        >
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-accent-gold/50 shadow-[0_0_40px_rgba(245,166,35,0.15)] overflow-hidden">
            <img
              src="/assets/seenjoy.png"
              alt={MENTOR_INFO.name}
              width={256}
              height={256}
              className="w-full h-full object-cover"
           
            />
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1"
        >
          <h3 className="text-3xl font-bold text-center md:text-left text-text-primary mb-2">
            {MENTOR_INFO.name}
          </h3>
          <p className="text-accent-gold text-center md:text-left font-medium mb-6">
            {MENTOR_INFO.tagline}
          </p>

          <ul className="space-y-4">
            {MENTOR_INFO.credentials.map((credential, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-text-primary/80 leading-relaxed">
                  {credential}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
