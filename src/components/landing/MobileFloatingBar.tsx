"use client";

import Link from "next/link";
import { COURSE_INFO } from "@/lib/constants";
import { useCampaign } from "@/hooks/useCampaign";

export default function MobileFloatingBar() {
  const { price } = useCampaign();
  const discountLabel = "Discount";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-md border-t border-border-default safe-area-inset-bottom">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex flex-col min-w-0">
          <span className="text-text-secondary text-xs line-through leading-none">
            ৳{COURSE_INFO.originalPrice}
          </span>
          <span className="text-white font-bold text-2xl leading-none mt-0.5">
            ৳{price}
          </span>
          <span className="text-accent-gold text-[10px] font-medium leading-none mt-0.5">
            {discountLabel}
          </span>
        </div>

        <Link
          href="/checkout"
          className="shrink-0 bg-accent-gold text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-accent-gold-hover transition-colors active:scale-95"
        >
          JOIN NOW
        </Link>
      </div>
    </div>
  );
}
