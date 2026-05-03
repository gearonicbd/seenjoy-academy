"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Globe, Timer, Mic2, Play, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { COURSE_INFO, HERO, MENTOR_INFO } from "@/lib/constants";

const YOUTUBE_ID = "mHi0dcXjSHY";

function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title="Speak To Win Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function HeroImage({ onPlayClick }: { onPlayClick: () => void }) {
  return (
    <div className="relative w-full max-w-[340px] md:max-w-[400px]">
      {/* Ambient glow */}
      <div className="absolute inset-4 rounded-3xl bg-accent-gold/20 blur-3xl" />

      {/* Image frame */}
      <div className="relative rounded-3xl overflow-hidden border border-accent-gold/25 shadow-[0_0_60px_rgba(245,166,35,0.12)]">
        {/* Top accent bar */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-transparent via-accent-gold to-transparent z-10" />

        {/* Thumbnail — 4:5 ratio */}
        <div className="relative aspect-4/5 w-full bg-bg-secondary">
          <img
            src="/images/seenjoy.jpeg"
            alt={`${MENTOR_INFO.name} — Speak To Win মাস্টারক্লাস`}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Play button overlay */}
          <button
            onClick={onPlayClick}
            aria-label="ভিডিও দেখুন"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(220,38,38,0.7)] transition-all duration-300">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
          </button>

          {/* Bottom name plate */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/60 to-transparent px-5 pt-10 pb-5 pointer-events-none">
            <p className="text-text-primary font-bold text-lg leading-tight">
              {MENTOR_INFO.name}
            </p>
            <p className="text-accent-gold text-xs mt-0.5 font-medium">
              পাবলিক স্পিকার ও কন্টেন্ট ক্রিয়েটর
            </p>
          </div>
        </div>
      </div>

      {/* Bottom-right: Live class */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -bottom-4 -right-4 flex items-center gap-2 bg-bg-secondary/95 backdrop-blur-sm border border-border-default rounded-2xl px-3 py-2 shadow-xl"
      >
        <div className="w-8 h-8 rounded-xl bg-error/15 flex items-center justify-center shrink-0">
          <Mic2 className="w-4 h-4 text-error" />
        </div>
        <div>
          <p className="text-text-primary text-xs font-bold leading-none">
            লাইভ ক্লাস
          </p>
          <p className="text-text-secondary text-[10px] leading-none mt-0.5">
            Zoom-এ
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
    {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,_#0d4744_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,_#062422_0%,_transparent_60%)]" />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #20b2aa 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* Mobile-only heading — renders above the image */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:hidden text-2xl sm:text-3xl font-bold text-text-primary leading-[1.2] mb-8 text-center"
        >
          SPEAK TO WIN:{" "}
          <span className="relative text-accent-gold">
            LIVE MASTERCLASS and COMMUNITY
          </span>{" "}
          on Communication and Public Speaking
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12 items-center">
          {/* ── Left: Text ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Desktop-only heading — inside the left column */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden lg:block text-4xl xl:text-5xl font-bold text-text-primary leading-[1.15] mb-6"
            >
              SPEAK TO WIN:{" "}
              <span className="relative text-accent-gold">
                LIVE MASTERCLASS and COMMUNITY
              </span>{" "}
              on Communication and Public Speaking
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-text-primary/90 mb-4 leading-relaxed"
            >
              {HERO.subHeadline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-primary/90 leading-relaxed mb-7 text-base"
            >
              {HERO.description}
            </motion.p>

            {/* Info badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start"
            >
              <Badge
                icon={<Calendar className="w-4 h-4" />}
                className="text-sm"
              >
                {COURSE_INFO.dates}
              </Badge>
              <Badge
                icon={<Clock className="w-4 h-4" />}
                className="text-sm"
              >
                {COURSE_INFO.time}
              </Badge>
              <Badge
                icon={<Globe className="w-4 h-4" />}
                className="text-sm"
              >
                {COURSE_INFO.platform} — অনলাইন
              </Badge>
              <Badge
                icon={<Timer className="w-4 h-4" />}
                className="text-sm"
              >
                {COURSE_INFO.durationPerClass} / ক্লাস
              </Badge>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-5"
            >
              <Link href="/checkout" className="w-full sm:w-auto">
                <Button size="xl" className="w-full sm:w-auto">
                  JOIN NOW
                </Button>
              </Link>
              <a
                href="#curriculum"
                className="text-accent-teal hover:text-accent-teal/80 transition-colors text-sm font-medium underline-offset-4 hover:underline text-center sm:text-left"
              >
                কোর্স সম্পর্কে জানুন ↓
              </a>
            </motion.div>

            {/* Urgency */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-2 text-warning text-sm font-medium justify-center lg:justify-start"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-warning shrink-0"
              />
              {HERO.urgency}
            </motion.p>
          </div>

          {/* ── Right: Thumbnail + video modal ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end pt-6 pb-6"
          >
            <HeroImage onPlayClick={() => setVideoOpen(true)} />
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
