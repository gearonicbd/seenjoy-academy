"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Lock, Tag, CheckCircle, X } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { validateEmail } from "@/lib/utils";
import { useCampaign } from "@/hooks/useCampaign";
import type { OrderFormData, AppliedCoupon } from "@/types";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  terms?: string;
  submit?: string;
}

type FormField = "name" | "email" | "phone";

interface CheckoutFormProps {
  appliedCoupon: AppliedCoupon | null;
  onCouponChange: (coupon: AppliedCoupon | null) => void;
}

export default function CheckoutForm({
  appliedCoupon,
  onCouponChange,
}: CheckoutFormProps) {
  const router = useRouter();
  const { price: basePrice } = useCampaign();
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Coupon state
  const [couponInput, setCouponInput] = useState("");
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponError, setCouponError] = useState<string | null>(null);

  function validateField(name: FormField, value: string): string | undefined {
    if (!value.trim()) {
      const labels: Record<FormField, string> = {
        name: "নাম",
        email: "ইমেইল",
        phone: "হোয়াটসঅ্যাপ নম্বর",
      };
      return `${labels[name]} দেওয়া আবশ্যিক`;
    }
    if (name === "email" && !validateEmail(value)) {
      return "সঠিক ইমেইল ঠিকানা দিন";
    }
    if (name === "phone" && value.trim().length < 5) {
      return "সঠিক ফোন নম্বর দিন";
    }
    return undefined;
  }

  function handleBlur(name: FormField) {
    const error = validateField(name, formData[name] ?? "");
    setErrors((prev) => ({ ...prev, [name]: error }));
  }

  function handleChange(name: FormField, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validateAll(): boolean {
    const newErrors: FormErrors = {};
    (["name", "email", "phone"] as FormField[]).forEach((key) => {
      const error = validateField(key, formData[key] ?? "");
      if (error) newErrors[key] = error;
    });
    if (!agreedToTerms) {
      newErrors.terms = "শর্তাবলী মেনে নেওয়া আবশ্যিক";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleApplyCoupon() {
    if (!couponInput.trim()) return;
    setCouponLoading(true);
    setCouponError(null);

    try {
      const res = await fetch("/api/coupons/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: couponInput.trim() }),
      });
      const data = await res.json();

      if (!res.ok) {
        setCouponError(data.error ?? "কুপন কোড প্রয়োগ করা যায়নি");
        onCouponChange(null);
      } else {
        onCouponChange({
          code: data.code,
          type: data.type,
          value: data.value,
          discountAmount: data.discountAmount,
          finalPrice: data.finalPrice,
        });
      }
    } catch {
      setCouponError("কুপন যাচাই করা সম্ভব হয়নি");
    } finally {
      setCouponLoading(false);
    }
  }

  function handleRemoveCoupon() {
    onCouponChange(null);
    setCouponInput("");
    setCouponError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateAll()) return;

    setLoading(true);
    setErrors((prev) => ({ ...prev, submit: undefined }));

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          couponCode: appliedCoupon?.code ?? null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "অনুরোধ ব্যর্থ হয়েছে");
      }

      window.location.href = data.paymentUrl;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।";
      setErrors((prev) => ({ ...prev, submit: message }));
    } finally {
      setLoading(false);
    }
  }

  const displayPrice = appliedCoupon
    ? appliedCoupon.finalPrice
    : basePrice;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <h2 className="text-text-primary font-bold text-2xl mb-1">
          আপনার তথ্য দিন
        </h2>
        <p className="text-text-secondary text-sm">
          নিচের ফর্মটি পূরণ করুন এবং পেমেন্টে এগিয়ে যান
        </p>
      </div>

      <Input
        label="পূর্ণ নাম"
        placeholder="আপনার নাম লিখুন"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        onBlur={() => handleBlur("name")}
        error={errors.name}
        autoComplete="name"
      />

      <Input
        label="ইমেইল ঠিকানা"
        type="email"
        placeholder="example@gmail.com"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        onBlur={() => handleBlur("email")}
        error={errors.email}
        autoComplete="email"
      />

      <Input
        label="হোয়াটসঅ্যাপ নম্বর"
        type="tel"
        placeholder="+880 1X / +1 XXX / any"
        hint="WhatsApp নম্বর (যেকোনো দেশ)"
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        onBlur={() => handleBlur("phone")}
        error={errors.phone}
        autoComplete="tel"
      />

      {/* Coupon code */}
      <div>
        <p className="text-text-secondary text-sm font-medium mb-2 flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5" />
          কুপন কোড (ঐচ্ছিক)
        </p>

        {appliedCoupon ? (
          <div className="flex items-center justify-between bg-success/10 border border-success/30 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success shrink-0" />
              <div>
                <span className="text-success text-sm font-semibold">
                  {appliedCoupon.code}
                </span>
                <span className="text-text-secondary text-xs ml-2">
                  — ৳{appliedCoupon.discountAmount} ছাড়
                  {appliedCoupon.type === "PERCENTAGE" &&
                    ` (${appliedCoupon.value}%)`}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleRemoveCoupon}
              className="text-text-secondary hover:text-error transition-colors"
              aria-label="Remove coupon"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={couponInput}
              onChange={(e) => {
                setCouponInput(e.target.value.toUpperCase());
                setCouponError(null);
              }}
              onKeyDown={(e) =>
                e.key === "Enter" && (e.preventDefault(), handleApplyCoupon())
              }
              placeholder="কুপন কোড লিখুন"
              className="flex-1 bg-bg-secondary border border-border-default text-text-primary rounded-xl px-4 py-3 text-sm placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all"
            />
            <button
              type="button"
              onClick={handleApplyCoupon}
              disabled={!couponInput.trim() || couponLoading}
              className="flex items-center justify-center gap-2 px-4 py-3 min-w-[96px] bg-bg-tertiary border border-border-default text-text-secondary hover:text-text-primary hover:border-accent-gold rounded-xl text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {couponLoading ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  যাচাই...
                </>
              ) : (
                "প্রয়োগ করুন"
              )}
            </button>
          </div>
        )}

        {couponError && (
          <p className="text-error text-xs mt-1.5">{couponError}</p>
        )}
      </div>

      {/* Terms checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => {
              setAgreedToTerms(e.target.checked);
              if (e.target.checked)
                setErrors((prev) => ({ ...prev, terms: undefined }));
            }}
            className="mt-0.5 w-4 h-4 shrink-0 accent-accent-gold cursor-pointer"
          />
          <span className="text-text-secondary text-sm leading-snug">
            আমি{" "}
            <Link
              href="/terms-and-conditions"
              target="_blank"
              className="text-accent-teal hover:underline"
            >
              Terms &amp; Conditions
            </Link>
            ,{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-accent-teal hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            এবং{" "}
            <Link
              href="/refund-policy"
              target="_blank"
              className="text-accent-teal hover:underline"
            >
              Refund Policy
            </Link>{" "}
            পড়েছি এবং মেনে নিচ্ছি।
          </span>
        </label>
        {errors.terms && (
          <p className="text-error text-xs mt-1.5 ml-7">{errors.terms}</p>
        )}
      </div>

      {errors.submit && (
        <div className="bg-error/10 border border-error/30 rounded-xl px-4 py-3">
          <p className="text-error text-sm">{errors.submit}</p>
        </div>
      )}

      <Button type="submit" size="lg" loading={loading} className="w-full mt-2">
        পেমেন্ট করুন ৳{displayPrice}
      </Button>

      <div className="flex items-center justify-center gap-2 text-text-secondary text-xs">
        <Lock className="w-3.5 h-3.5" />
        <span>
          SSLCommerz দ্বারা সুরক্ষিত পেমেন্ট আপনার তথ্য সম্পূর্ণ নিরাপদ
        </span>
      </div>

      <div className="flex justify-center pt-2">
        <Image
          src="/payment/payment-banner-desktop.png"
          alt="SSLCommerz Payment Methods"
          width={420}
          height={60}
          className="hidden md:block mx-auto"
        />
        <Image
          src="/payment/payment-banner_mobile.png"
          alt="SSLCommerz Payment Methods"
          width={400}
          height={80}
          className="block md:hidden mx-auto"
        />
      </div>
    </form>
  );
}
