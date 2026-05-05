import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <nav className="border-b border-border-default bg-bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img src="/assets/main-logo.png" alt="Seenjoy Academy" width={140} height={40} className="h-10 w-auto object-contain" />
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            হোমে ফিরুন
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-10 pb-6 border-b border-border-default">
          <h1 className="text-2xl font-bold text-text-primary mb-1">SEENJOY ACADEMY — NO REFUND POLICY</h1>
          <p className="text-text-secondary text-sm">Effective Date: April 2026</p>
        </div>

        <div className="space-y-8 text-text-secondary leading-relaxed">

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">1. Strict No Refund Policy</h2>
            <p className="mb-3">All payments are:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Final</li>
              <li>Non-refundable</li>
              <li>Non-transferable</li>
            </ul>
            <p className="mb-3">Applicable to all:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Live classes</li>
              <li>Recorded courses</li>
              <li>Digital materials</li>
              <li>Any paid services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">2. Non-Refundable Conditions</h2>
            <p className="mb-3">Refunds will NOT be granted for:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Failure to attend classes</li>
              <li>Change of mind</li>
              <li>User-side technical issues</li>
              <li>Dissatisfaction after purchase</li>
              <li>Partial usage</li>
              <li>Misinterpretation of course details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">3. Informed Consent &amp; Waiver</h2>
            <p className="mb-3">By making payment, users:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Confirm full understanding of services</li>
              <li>Voluntarily accept this policy</li>
              <li>Enter a binding contract under the Contract Act, 1872</li>
            </ul>
            <p>In case of minor user, guardian is liable and legally bound. Users agree not to initiate unjustified or fraudulent disputes or chargebacks, except where permitted under applicable law.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">4. Chargebacks &amp; Fraudulent Disputes</h2>
            <p className="mb-3">Any attempt to:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Reverse transactions</li>
              <li>File false disputes</li>
              <li>Commit payment fraud</li>
            </ul>
            <p className="mb-3">Will result in:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Immediate account suspension or termination</li>
              <li>Permanent access restriction</li>
              <li>Legal action under Digital Security Act, 2018 and Penal Code, 1860 (Cheating &amp; Fraud)</li>
              <li>Recovery of financial damages and legal costs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">5. Exception Clause</h2>
            <p>While this is a strict no-refund policy, Seenjoy Academy reserves sole and absolute discretionary authority to assess exceptional cases only where required under applicable law.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">6. Termination Without Refund</h2>
            <p className="mb-3">We reserve the right to:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Suspend or terminate accounts immediately</li>
              <li>Restrict or revoke access</li>
            </ul>
            <p className="mb-3">In such cases:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>No refund will be provided</li>
              <li>Access to content may be removed</li>
              <li>Legal action may be taken if necessary</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">7. Policy Updates</h2>
            <p className="mb-3">We reserve the right to modify this Policy:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>At any time</li>
              <li>With or without prior notice</li>
            </ul>
            <p>Changes become effective upon publication. Continued use = acceptance.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">8. Enforcement Rights</h2>
            <p className="mb-3">We reserve the right to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Deny access to services</li>
              <li>Block accounts</li>
              <li>Take legal action against abuse of payment systems or any other abuse and harassment</li>
            </ul>
          </section>

        </div>

        <div className="mt-12 pt-6 border-t border-border-default">
          <p className="text-text-secondary text-xs">Copyright © 2026 Seenjoy Academy. All Rights Reserved.</p>
        </div>
      </main>
    </div>
  );
}
