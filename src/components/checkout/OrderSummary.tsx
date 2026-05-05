"use client";

import { Calendar, Clock, Globe, User } from "lucide-react";
import Card from "@/components/ui/Card";
import { COURSE_INFO } from "@/lib/constants";
import type { AppliedCoupon } from "@/types";

interface OrderSummaryProps {
  appliedCoupon: AppliedCoupon | null;
}

export default function OrderSummary({ appliedCoupon }: OrderSummaryProps) {
  const basePrice = COURSE_INFO.price;
  const discountFromOriginal = COURSE_INFO.originalPrice - basePrice;
  const couponDiscount = appliedCoupon?.discountAmount ?? 0;
  const finalPrice = basePrice - couponDiscount;
  const discountLabel = "Live Discount";

  return (
    <Card glass className="sticky top-8">
      {/* Course logo */}
      <div className="aspect-video rounded-xl bg-bg-tertiary border border-border-default flex items-center justify-center mb-5 overflow-hidden">
        <img
          src="/assets/speak-to-win-logo.png"
          alt="Speak To Win"
          width={320}
          height={180}
          className="w-full h-full object-contain p-4"
        />
      </div>

      <h2 className="text-text-primary font-bold text-xl mb-1">
        {COURSE_INFO.name}
      </h2>
      <p className="text-text-secondary text-sm mb-5">পাবলিক স্পিকিং মাস্টারক্লাস</p>

      <div className="space-y-3 mb-5">
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <User className="w-4 h-4 text-accent-gold shrink-0" />
          <span>{COURSE_INFO.mentor}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <Calendar className="w-4 h-4 text-accent-gold shrink-0" />
          <span>{COURSE_INFO.dates}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <Clock className="w-4 h-4 text-accent-gold shrink-0" />
          <span>{COURSE_INFO.time} ({COURSE_INFO.durationPerClass}/ক্লাস)</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <Globe className="w-4 h-4 text-accent-gold shrink-0" />
          <span>{COURSE_INFO.platform} — লাইভ অনলাইন</span>
        </div>
      </div>

      <div className="border-t border-border-default pt-4 mb-4 space-y-2">
        <div className="flex justify-between items-center text-sm text-text-secondary">
          <span>নিয়মিত মূল্য</span>
          <span className="line-through">৳{COURSE_INFO.originalPrice}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-text-secondary">
          <span>{discountLabel}</span>
          <span className="text-success">−৳{discountFromOriginal}</span>
        </div>
        {appliedCoupon && (
          <div className="flex justify-between items-center text-sm text-text-secondary">
            <span>
              কুপন ({appliedCoupon.code}
              {appliedCoupon.type === "PERCENTAGE" && ` · ${appliedCoupon.value}%`})
            </span>
            <span className="text-success">−৳{couponDiscount}</span>
          </div>
        )}
      </div>

      <div className="border-t border-border-default pt-4">
        <div className="flex justify-between items-center">
          <span className="text-text-primary font-semibold">মোট পরিমাণ</span>
          <span className="text-3xl font-bold text-white">৳{finalPrice}</span>
        </div>
      </div>
    </Card>
  );
}
