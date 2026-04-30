"use client";

import { Flame, Zap, CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCampaign } from "@/hooks/useCampaign";
import { CAMPAIGN_PRICE } from "@/lib/campaign";
import { COURSE_INFO } from "@/lib/constants";

const DEADLINE_TEXT = "৩ মে ২০২৬, রাত ১১:৫৯";
const CAMPAIGN_LABEL = "Early Bird Discount";

interface Props {
  variant: "banner" | "hero" | "cta" | "floating" | "checkout";
  className?: string;
}

export default function CampaignTimer({ variant, className }: Props) {
  const { isActive, mounted } = useCampaign();

  if (mounted && !isActive) return null;

  // ── Banner — violet alert strip ────────────────────────────────────────
  if (variant === "banner") {
    return (
      <div
        className={cn("w-full relative overflow-hidden", className)}
        style={{
          background:
            "linear-gradient(135deg, #4c1d95 0%, #6d28d9 30%, #7c3aed 50%, #6d28d9 70%, #4c1d95 100%)",
        }}
      >
        {/* Shimmer sweep */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
            animation: "shimmer-sweep 3s ease-in-out infinite",
          }}
        />

        <div className="relative flex flex-col items-center px-3 py-2.5 gap-1.5">
          {/* Row 1: Label + Price */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-violet-200 shrink-0" />
              <span className="text-white font-black text-sm uppercase tracking-widest whitespace-nowrap">
                {CAMPAIGN_LABEL}
              </span>
            </div>
            <span className="text-violet-400/50 font-thin">|</span>
            <div className="flex items-center gap-1.5">
              <span className="text-violet-200/70 text-sm line-through whitespace-nowrap">
                ৳{COURSE_INFO.originalPrice}
              </span>
              <span className="bg-white text-violet-700 font-black text-sm px-3 py-0.5 rounded-full whitespace-nowrap shadow-lg">
                ৳{CAMPAIGN_PRICE}
              </span>
            </div>
          </div>

          {/* Row 2: Deadline */}
          <div className="flex items-center gap-1.5">
            <CalendarClock className="w-4 h-4 text-violet-200 shrink-0" />
            <span className="text-violet-100 text-sm font-bold whitespace-nowrap">
              অফার শেষ: {DEADLINE_TEXT}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ── Floating (compact for mobile floating bar) ─────────────────────────
  if (variant === "floating") {
    return (
      <div className={cn("flex flex-col items-start", className)}>
        <span className="text-accent-gold font-bold text-[9px] uppercase tracking-widest">
          Early Bird Discount
        </span>
        <span className="text-text-secondary text-[9px] leading-none mt-0.5">
          শেষ: {DEADLINE_TEXT}
        </span>
      </div>
    );
  }

  // ── Hero / CTA — large glowing block ──────────────────────────────────
  if (variant === "hero" || variant === "cta") {
    const discountPct = Math.round(
      ((COURSE_INFO.originalPrice - CAMPAIGN_PRICE) / COURSE_INFO.originalPrice) * 100
    );

    return (
      <div
        className={cn("rounded-2xl overflow-hidden border-2 border-violet-500/70", className)}
        style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
      >
        {/* Header strip */}
        <div
          className="px-4 py-2.5 flex items-center justify-between gap-3"
          style={{ background: "linear-gradient(90deg, #6d28d9, #7c3aed)" }}
        >
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-violet-200 shrink-0" />
            <span className="text-white font-black text-sm uppercase tracking-wide">
              Early Bird Discount!
            </span>
          </div>
          <span className="bg-white text-violet-700 font-black text-xs px-2.5 py-1 rounded-full whitespace-nowrap">
            {discountPct}% ছাড়
          </span>
        </div>

        {/* Body */}
        <div
          className={cn(
            "px-4 py-4",
            variant === "hero" ? "bg-bg-secondary" : "bg-black/30"
          )}
        >
          {/* Pricing */}
          <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
            <span className="text-text-secondary line-through text-sm">
              ৳{COURSE_INFO.originalPrice}
            </span>
            <span className="text-white font-black text-3xl leading-none">
              ৳{CAMPAIGN_PRICE}
            </span>
          </div>

          {/* Deadline */}
          <div className="flex items-center justify-center gap-2 bg-violet-900/30 border border-violet-500/30 rounded-xl px-4 py-3">
            <CalendarClock className="w-4 h-4 text-violet-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-violet-300 text-xs font-bold uppercase tracking-wider">
                অফার শেষ হবে
              </span>
              <span className="text-white font-bold text-sm">
                {DEADLINE_TEXT}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Checkout — urgent alert bar ───────────────────────────────────────
  if (variant === "checkout") {
    return (
      <div
        className={cn(
          "w-full rounded-xl overflow-hidden border-2 border-violet-500/60",
          className
        )}
        style={{
          background:
            "linear-gradient(135deg, rgba(109,40,217,0.15) 0%, rgba(124,58,237,0.1) 100%)",
        }}
      >
        {/* Top strip */}
        <div
          className="flex items-center gap-2 px-3 py-1.5"
          style={{ background: "linear-gradient(90deg, #4c1d95, #6d28d9)" }}
        >
          <Zap className="w-3.5 h-3.5 text-violet-200 shrink-0" />
          <span className="text-white font-black text-xs uppercase tracking-widest">
            Early Bird Discount — সীমিত সময়!
          </span>
        </div>

        {/* Deadline row */}
        <div className="flex items-center justify-between px-3 py-3 flex-wrap gap-2">
          <div className="flex items-center gap-1.5">
            <CalendarClock className="w-4 h-4 text-violet-400 shrink-0" />
            <span className="text-text-secondary text-xs">অফার শেষ:</span>
          </div>
          <span className="text-violet-200 font-bold text-sm">{DEADLINE_TEXT}</span>
        </div>
      </div>
    );
  }

  return null;
}
