"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { NAV } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Urgency banner */}
      <div
        className="w-full relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #3b0764 0%, #6d28d9 35%, #7c3aed 50%, #6d28d9 65%, #3b0764 100%)",
        }}
      >
        {/* Shimmer sweep */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.10) 50%, transparent 100%)",
            animation: "shimmer-sweep 3s ease-in-out infinite",
          }}
        />
        <div className="relative flex items-center justify-center gap-3 px-4 py-2.5">
          {/* Live dot */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>

          <p className="text-white text-xl font-black tracking-wide whitespace-nowrap">
            ক্লাস শুরু হচ্ছে&nbsp;<span className="text-violet-200 underline underline-offset-2 decoration-dotted">৮ই মে</span>
          </p>

          <span className="text-violet-400/60 font-thin hidden sm:inline">|</span>

          <p className="text-violet-100 text-sm font-semibold hidden sm:block">
            সীমিত আসন — আজই নিশ্চিত করুন!
          </p>

          {/* Arrow CTA pill */}
          <Link
            href="/checkout"
            className="ml-1 hidden sm:flex items-center gap-1 bg-white/15 hover:bg-white/25 transition-colors border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full shrink-0"
          >
            এখনই ভর্তি হোন →
          </Link>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        className={cn(
          "transition-all duration-300 border-b",
          scrolled
            ? "bg-bg-primary/95 backdrop-blur-md border-border-default shadow-lg"
            : "bg-bg-primary/80 backdrop-blur-sm border-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/assets/main-logo.png"
              alt={NAV.logo}
              width={180}
              height={52}
              className="h-13 w-auto object-contain"
              priority
            />
          </Link>
          <Link href="/checkout">
            <Button size="sm">{NAV.ctaText}</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
