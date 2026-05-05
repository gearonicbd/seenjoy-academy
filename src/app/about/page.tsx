import Link from "next/link";
import { ArrowLeft, Globe, Mail, MapPin, Users, Camera } from "lucide-react";

export const dynamic = "force-static";

const sections = [
  {
    title: "Who We Are",
    body: "Seenjoy Academy is an inclusive platform for anyone who is driven to learn, grow, and improve themselves in meaningful ways. Our goal is to go beyond traditional learning and system education, focusing instead on what truly shapes a person's journey in the real world.",
  },
  {
    title: "Our Goal",
    body: "Our target is to help you become a better, more capable version of yourself—confident in your abilities, clear in your direction, and prepared to face real-world challenges. Seenjoy Academy is for anyone willing to learn, evolve, and take charge of their personal growth journey.",
  },
  {
    title: "Our Approach",
    body: "We focus on teaching real-life skills and mindsets that shape a person's journey—from personal development and critical thinking to practical life skills and self-improvement. Seenjoy Academy aims to support dynamic growth by making quality content easily accessible for everyone.",
  },
  {
    title: "What We Believe",
    body: "We believe that true success comes from continuous self-development, not just academic achievement. That's why we create and share meaningful content designed to inspire, guide, and empower learners in their everyday lives.",
  },
  {
    title: "What We Offer",
    body: "We are committed to delivering value through thoughtfully designed courses, engaging live classes, and well-structured learning materials. Our programs are tailored to meet evolving learner needs, combining modern teaching methods with real-world applications to ensure lasting impact. We regularly provide freely available informative content from our official pages and accounts.",
  },
  {
    title: "Who It's For",
    body: "Whether you're looking to develop new skills, expand your knowledge, strengthen your mindset, or explore new areas of interest, Seenjoy Academy is here to support your journey.",
  },
  {
    title: "Our Community & Vision",
    body: "We strive to create a supportive learning environment where curiosity is encouraged, growth is continuous, and every learner has the opportunity to succeed. Join us as we work towards building a future where learning is truly for everyone.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Nav */}
      <nav className="border-b border-border-default bg-bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/assets/main-logo.png"
              alt="Seenjoy Academy"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            হোমে ফিরুন
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-14">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            About Seenjoy Academy
          </h1>
          <div className="w-16 h-0.5 bg-accent-gold mx-auto" />
        </div>

        {/* Content sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border-l-2 border-accent-gold pl-5"
            >
              <h2 className="text-text-primary font-semibold text-lg mb-2">
                {section.title}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Stay Connected */}
        <div className="mt-12 border-t border-border-default pt-10">
          <h2 className="text-text-primary font-semibold text-lg mb-5 border-l-2 border-accent-gold pl-5">
            Stay Connected With Us
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6 pl-5">
            To get regular updates on our content, classes and upcoming courses
            follow us on our officials.
          </p>
          <div className="flex flex-col gap-3 pl-5">
            <a
              href="https://seenjoy.academy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-accent-gold transition-colors group"
            >
              <Globe className="w-4 h-4 text-accent-gold shrink-0" />
              <span className="group-hover:underline underline-offset-4">
                seenjoy.academy
              </span>
            </a>
            <a
              href="https://www.facebook.com/share/1HPmKVgQWP/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-accent-gold transition-colors group"
            >
              <Users className="w-4 h-4 text-accent-gold shrink-0" />
              <span className="group-hover:underline underline-offset-4">
                facebook.com/seenjoyacademy
              </span>
            </a>
            <a
              href="https://www.instagram.com/seenjoyacademy?igsh=NG5vaWlzY2RhZHcz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-accent-gold transition-colors group"
            >
              <Camera className="w-4 h-4 text-accent-gold shrink-0" />
              <span className="group-hover:underline underline-offset-4">
                instagram.com/seenjoyacademy
              </span>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-10 border-t border-border-default pt-10">
          <h2 className="text-text-primary font-semibold text-lg mb-5 border-l-2 border-accent-gold pl-5">
            How To Contact Us
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4 pl-5">
            For any queries you can leave a message on our official pages and
            accounts or contact us at:
          </p>
          <a
            href="mailto:contact@seenjoy.academy"
            className="flex items-center gap-3 text-text-secondary hover:text-accent-gold transition-colors group pl-5"
          >
            <Mail className="w-4 h-4 text-accent-gold shrink-0" />
            <span className="group-hover:underline underline-offset-4">
              contact@seenjoy.academy
            </span>
          </a>
          <div className="flex items-center gap-3 text-text-secondary pl-5 mt-3">
            <MapPin className="w-4 h-4 text-accent-gold shrink-0" />
            <span>Road 02, Block G, Aftabnagar, Dhaka</span>
          </div>
        </div>

        {/* Other Information */}
        <div className="mt-10 border-t border-border-default pt-10">
          <h2 className="text-text-primary font-semibold text-lg mb-5 border-l-2 border-accent-gold pl-5">
            Other Information
          </h2>
          <div className="flex flex-col gap-2 pl-5">
            <Link
              href="/privacy-policy"
              className="text-text-secondary hover:text-accent-gold transition-colors hover:underline underline-offset-4 w-fit"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              className="text-text-secondary hover:text-accent-gold transition-colors hover:underline underline-offset-4 w-fit"
            >
              Refund Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-text-secondary hover:text-accent-gold transition-colors hover:underline underline-offset-4 w-fit"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-border-default pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-text-secondary text-sm">
            Legal TRAD/DNCC/046533/2025
          </p>
          <p className="text-text-secondary text-sm">
            Copyright © 2026 Seenjoy Academy. All Rights Reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
