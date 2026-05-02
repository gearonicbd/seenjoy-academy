"use client";

import { useState, useEffect } from "react";
import { Flame, Zap, CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCampaign } from "@/hooks/useCampaign";
import { CAMPAIGN_PRICE, CAMPAIGN_END } from "@/lib/campaign";
import { COURSE_INFO } from "@/lib/constants";

const DEADLINE_TEXT = "৩ মে ২০২৬, রাত ১১:৫৯";
const CAMPAIGN_LABEL = "Early Bird Discount";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

type TimeLeft = { d: number; h: number; m: number; s: number };

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    function calc() {
      const diff = CAMPAIGN_END.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }
      const totalSecs = Math.floor(diff / 1000);
      setTimeLeft({
        d: Math.floor(totalSecs / 86400),
        h: Math.floor((totalSecs % 86400) / 3600),
        m: Math.floor((totalSecs % 3600) / 60),
        s: totalSecs % 60,
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

function BannerUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black/30 backdrop-blur-sm rounded-md px-2 py-1 min-w-[36px] text-center">
        <span className="font-mono font-black text-white text-base leading-none">{value}</span>
      </div>
      <span className="text-violet-200 text-[9px] leading-none mt-0.5 uppercase tracking-wide">{label}</span>
    </div>
  );
}

interface Props {
  variant: "banner" | "hero" | "cta" | "floating" | "checkout";
  className?: string;
}

export default function CampaignTimer({ variant, className }: Props) {
  const { isActive, mounted } = useCampaign();
  const timeLeft = useCountdown();

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

          {/* Row 2: Countdown blocks with labels */}
          <div className="flex items-end gap-1.5">
            <span className="text-violet-200 text-xs font-medium whitespace-nowrap self-center mb-4">
              শেষ হচ্ছে:
            </span>
            {timeLeft && timeLeft.d > 0 && (
              <>
                <BannerUnit value={String(timeLeft.d)} label="দিন" />
                <span className="text-violet-300 font-black text-base self-center mb-4">:</span>
              </>
            )}
            <BannerUnit value={timeLeft ? pad(timeLeft.h) : "--"} label="ঘণ্টা" />
            <span className="text-violet-300 font-black text-base self-center mb-4">:</span>
            <BannerUnit value={timeLeft ? pad(timeLeft.m) : "--"} label="মিনিট" />
            <span className="text-violet-300 font-black text-base self-center mb-4">:</span>
            <BannerUnit value={timeLeft ? pad(timeLeft.s) : "--"} label="সেকেন্ড" />
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
        {timeLeft && (
          <span className="font-mono text-[9px] font-black text-violet-300 leading-none mt-0.5 tracking-widest">
            {pad(timeLeft.h)}:{pad(timeLeft.m)}:{pad(timeLeft.s)}
          </span>
        )}
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
          <div className="flex flex-col items-center gap-2 bg-violet-900/30 border border-violet-500/30 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2">
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
            {timeLeft && (
              <div className="flex items-center gap-1.5">
                {[{ label: "ঘণ্টা", val: pad(timeLeft.h) }, { label: "মিনিট", val: pad(timeLeft.m) }, { label: "সেকেন্ড", val: pad(timeLeft.s) }].map(({ label, val }, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    {i > 0 && <span className="text-violet-400 font-black text-lg leading-none">:</span>}
                    <div className="flex flex-col items-center bg-violet-950/60 border border-violet-500/30 rounded-lg px-3 py-1.5 min-w-[48px]">
                      <span className="font-mono font-black text-white text-xl leading-none tracking-widest">
                        {val}
                      </span>
                      <span className="text-violet-400 text-[9px] mt-0.5 tracking-wide">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
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

        {/* Countdown row */}
        {timeLeft && (
          <div className="flex items-center justify-center gap-1.5 px-3 pb-3">
            {[{ label: "ঘণ্টা", val: pad(timeLeft.h) }, { label: "মিনিট", val: pad(timeLeft.m) }, { label: "সেকেন্ড", val: pad(timeLeft.s) }].map(({ label, val }, i) => (
              <div key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-violet-400 font-black text-base leading-none">:</span>}
                <div className="flex flex-col items-center bg-violet-950/60 border border-violet-500/30 rounded-lg px-2.5 py-1 min-w-[42px]">
                  <span className="font-mono font-black text-white text-base leading-none tracking-widest">
                    {val}
                  </span>
                  <span className="text-violet-400 text-[8px] mt-0.5 tracking-wide">{label}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}
