import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export default function PrivacyPolicyPage() {
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
          <h1 className="text-2xl font-bold text-text-primary mb-1">SEENJOY ACADEMY — PRIVACY POLICY</h1>
          <p className="text-text-secondary text-sm">Effective Date: April 2026</p>
        </div>

        <div className="space-y-8 text-text-secondary leading-relaxed">

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">1. Introduction &amp; Binding Agreement</h2>
            <p className="mb-3">This Privacy Policy constitutes a legally binding agreement between the user (&quot;you&quot;) and Seenjoy Academy (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By accessing, registering, purchasing, visiting or using our website, platforms, services and by interacting with us you:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Provide informed and explicit consent to data collection and processing</li>
              <li>Enter into a binding agreement under the Contract Act, 1872</li>
              <li>Agree to all terms stated herein</li>
            </ul>
            <p className="mb-2">If you do not agree, you must immediately discontinue use.</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Use by a minor = guardian&apos;s consent</li>
              <li>In this case guardian is liable and legally bound</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">2. Governing Legal Framework (Bangladesh)</h2>
            <p className="mb-3">This Policy is governed and enforceable under:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Article 43, Constitution of Bangladesh (Right to privacy — subject to lawful restriction)</li>
              <li>Contract Act, 1872 (legally binding agreements)</li>
              <li>Digital Security Act, 2018 (cybercrime, fraud, defamation, unauthorized access)</li>
              <li>Information and Communication Technology Act, 2006 (Amended 2013)</li>
              <li>Copyright Act, 2000 (Amended 2005)</li>
              <li>Evidence Act, 1872 (admissibility of electronic records)</li>
              <li>Any other appropriate acts, laws if required by us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">3. Information We Collect</h2>
            <p className="mb-3">We may collect and process:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Personal Information: Name, phone number, email, address, etc.</li>
              <li>Account Data: Login credentials, course enrollment, usage history, etc.</li>
              <li>Payment Data: Processed securely via SSLCommerz (we do NOT store card/banking details)</li>
              <li>Technical Data: IP address, browser type, device identifiers, etc.</li>
              <li>Usage Data: Activity logs, course interaction, behavioral analytics, etc.</li>
              <li>Communication Data: Messages, feedback, support requests, etc.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">4. Purpose of Data Processing</h2>
            <p className="mb-3">We use data for:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Service delivery and account management</li>
              <li>Payment processing and verification</li>
              <li>Fraud prevention, piracy detection, and abuse control</li>
              <li>Legal enforcement and rights protection</li>
              <li>Platform improvement and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">5. Data Retention</h2>
            <p className="mb-3">We retain user data:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>For as long as necessary to provide services</li>
              <li>To comply with legal obligations</li>
              <li>To resolve disputes and enforce agreements</li>
              <li>Data may be securely deleted or anonymized when no longer required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">6. Data Security &amp; Risk Allocation</h2>
            <p className="mb-3">We implement commercially reasonable and industry-standard safeguards. However:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>No system is completely secure</li>
              <li>Users acknowledge inherent cyber risks</li>
              <li>Data transmission occurs at user&apos;s own risk</li>
            </ul>
            <p className="mb-3">Seenjoy Academy shall not be liable for unauthorized access beyond reasonable control, including:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Cyber attacks</li>
              <li>Third-party breaches</li>
              <li>System vulnerabilities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">7. Data Sharing &amp; Disclosure</h2>
            <p className="mb-3">We may disclose data:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>To SSLCommerz for payment processing</li>
              <li>To law enforcement or regulatory authorities when legally required</li>
              <li>To enforce rights, investigate fraud, or prevent unlawful activity</li>
            </ul>
            <p>We do NOT sell personal data.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">8. Third-Party Disclaimer</h2>
            <p className="mb-3">We are NOT responsible for:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Fake websites, impersonators, or phishing attempts</li>
              <li>Unauthorized resellers or agents</li>
              <li>External services or links</li>
            </ul>
            <p>Users bear responsibility to verify official channels, sources, links, website, platforms, etc.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">9. User Obligations</h2>
            <p className="mb-3">Users must:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain confidentiality of login credentials</li>
              <li>Avoid unauthorized account sharing or misuse</li>
            </ul>
            <p>Violation may result in immediate legal action.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">10. Policy Updates</h2>
            <p className="mb-3">We reserve the right to modify this Policy:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>At any time</li>
              <li>With or without prior notice</li>
            </ul>
            <p>Changes become effective upon publication. Continued use = acceptance.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">11. Legal Enforcement Rights</h2>
            <p className="mb-3">We reserve the full right to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Initiate civil and criminal proceedings</li>
              <li>Seek damages, injunctions, and compensation</li>
              <li>Report violations to authorities</li>
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
