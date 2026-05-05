import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export default function TermsAndConditionsPage() {
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
          <h1 className="text-2xl font-bold text-text-primary mb-1">SEENJOY ACADEMY — TERMS &amp; CONDITIONS</h1>
          <p className="text-text-secondary text-sm">Effective Date: April 2026</p>
        </div>

        <div className="space-y-8 text-text-secondary leading-relaxed">

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">1. Binding Acceptance</h2>
            <p className="mb-3">By accessing, registering, purchasing, visiting or using our website, platforms, services and by interacting with us you:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Agree to all policies, terms and conditions</li>
              <li>Enter a legally binding agreement</li>
            </ul>
            <p className="mb-3">Electronic actions (clicking "Register", "Buy", or similar) constitute <span className="text-text-primary font-medium">valid legal acceptance</span> under applicable law.</p>
            <p className="mb-2">If you do not agree — <span className="text-text-primary font-medium">DO NOT USE THE PLATFORM</span></p>
            <p>Use by a minor = guardian's consent. In this case guardian is liable and legally bound.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">2. Minor User</h2>
            <p className="mb-3">Use by a minor = confirmation of guardian consent</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Guardian is legally bound by all policies, terms and conditions</li>
            </ul>
            <p className="mb-3">Guardian is jointly and severally liable for:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Actions</li>
              <li>Breaches</li>
              <li>Payments</li>
              <li>Legal consequences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">3. Eligibility</h2>
            <p className="mb-3">Users must:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Be legally competent under the Contract Act, 1872</li>
              <li>Provide accurate and truthful information</li>
            </ul>
            <p className="mb-3">For Users Under 18 (Minors):</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Must use the platform only with parent/legal guardian consent</li>
              <li>Parent/guardian is deemed to have accepted all Terms and Policies</li>
            </ul>
            <p className="mb-3">Parent/guardian is fully responsible and liable for:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Minor's actions</li>
              <li>Compliance with all terms</li>
              <li>Payments and legal consequences</li>
            </ul>
            <p>User Responsibility: "Users are solely responsible for ensuring eligibility" — Seenjoy Academy is not responsible for verifying age or legal capacity. Any misrepresentation = user's full legal responsibility.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">4. License to Use</h2>
            <p className="mb-3">Seenjoy Academy grants users a:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Limited</li>
              <li>Non-exclusive</li>
              <li>Non-transferable</li>
              <li>Revocable license</li>
            </ul>
            <p>To access purchased content strictly for personal, non-commercial use. Any violation will result in strict actions and legal consequences.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">5. Intellectual Property Rights (STRICT ENFORCEMENT)</h2>
            <p className="mb-3">All content is exclusively owned by Seenjoy Academy:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Videos, classes, recordings</li>
              <li>Notes, PDFs, materials</li>
              <li>Website design, logo, branding</li>
            </ul>
            <p className="mb-3">Protected under:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Copyright Act, 2000</li>
              <li>Digital Security Act, 2018</li>
              <li>Any other appropriate acts and laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">6. Anti-Piracy &amp; Prohibited Conduct</h2>
            <p className="mb-3">STRICTLY PROHIBITED:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Recording or copying content</li>
              <li>Screen capturing or downloading</li>
              <li>Sharing login credentials</li>
              <li>Redistributing or reselling content</li>
              <li>Uploading content externally to any other platforms</li>
              <li>Impersonation or fraud or fraudulent representation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">7. Legal Consequences</h2>
            <p className="mb-3">Violations may result in:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Immediate termination</li>
              <li>Permanent ban</li>
              <li>Civil and criminal legal action</li>
            </ul>
            <p className="mb-3">Applicable laws include:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Copyright Act, 2000</li>
              <li>Digital Security Act, 2018</li>
              <li>ICT Act, 2006</li>
              <li>Any other appropriate acts and laws</li>
            </ul>
            <p className="mb-3">Remedies include:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Monetary damages</li>
              <li>Injunctions</li>
              <li>Content takedown orders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">8. Defamation &amp; False Statements</h2>
            <p className="mb-3">Users must not:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Post false reviews</li>
              <li>Spread misinformation</li>
              <li>Make defamatory statements</li>
            </ul>
            <p className="mb-3">Legal action may be taken under:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Penal Code, 1860</li>
              <li>Digital Security Act, 2018</li>
              <li>Any other appropriate acts or laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">9. Account Responsibility</h2>
            <p className="mb-3">Users are solely responsible for:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>All activity under their account</li>
              <li>Maintaining credential confidentiality</li>
            </ul>
            <p>Access/account sharing or misuse = violation. Any violation will result in strict actions and legal consequences.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">10. Platform Misuse</h2>
            <p className="mb-3">Strictly prohibited:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Hacking or unauthorized access</li>
              <li>System disruption</li>
              <li>Bots or automation abuse</li>
              <li>Harassment or abuse of any kind</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">11. Service Availability &amp; Modifications</h2>
            <p className="mb-3">We:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Do not guarantee uninterrupted service</li>
              <li>May modify, suspend, or discontinue services at any time</li>
            </ul>
            <p>No liability shall arise from such actions.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">12. AI Usage Policy</h2>
            <p className="mb-3">Seenjoy Academy may use:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Artificial Intelligence (AI)</li>
              <li>Machine learning</li>
              <li>Automated systems</li>
              <li>Other AI services</li>
            </ul>
            <p className="mb-3">For:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Content creation or enhancement</li>
              <li>Student support</li>
              <li>Recommendations &amp; personalization</li>
              <li>Analytics &amp; system improvement</li>
            </ul>
            <p className="mb-3">Users acknowledge:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>AI-generated or AI-assisted content may be used</li>
              <li>AI use does not constitute service deficiency</li>
              <li>Outputs may have limitations or inaccuracies</li>
            </ul>
            <p>Seenjoy Academy shall not be liable for errors in AI-generated content or decisions made based on AI outputs (to the extent permitted by law).</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">13. User Generated Content License</h2>
            <p className="mb-3">By submitting any content (text, images, videos, assignments, messages), users grant Seenjoy Academy a:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Worldwide license</li>
              <li>Perpetual license</li>
              <li>Irrevocable license</li>
              <li>Royalty-free license</li>
              <li>Transferable &amp; sublicensable rights</li>
            </ul>
            <p className="mb-3">Allow us to:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Use, copy, modify, adapt</li>
              <li>Publish, distribute, display</li>
              <li>Create derivative works</li>
            </ul>
            <p className="mb-3">Applicable for:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Education</li>
              <li>Marketing</li>
              <li>Promotion</li>
              <li>Analytics</li>
              <li>Platform improvement</li>
              <li>Legal reasons</li>
            </ul>
            <p className="mb-3">Users agree:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>No compensation or payment required</li>
              <li>No additional permission required</li>
              <li>Waive ownership-related claims (where legally allowed)</li>
              <li>Confirm that Seenjoy Academy has rights to share the content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">14. Force Majeure</h2>
            <p className="mb-3">We shall not be liable for failure or delay due to events beyond reasonable control, including:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Natural disasters</li>
              <li>Government actions</li>
              <li>Internet disruptions</li>
              <li>Political unrest</li>
              <li>Any other relevant issues/causes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">15. Third-Party Fraud Disclaimer</h2>
            <p className="mb-3">We are not liable for:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Unauthorized agents or resellers</li>
              <li>External scams or impersonation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">16. Limitation of Liability (COURT-DEFENSIBLE)</h2>
            <p className="mb-3">Seenjoy Academy shall not be liable for:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Learning outcomes or results</li>
              <li>Internet or device issues</li>
              <li>Third-party failures and issues</li>
              <li>User negligence</li>
            </ul>
            <p className="mb-3">Services are provided "as is" and "as available" — No warranties (express or implied).</p>
            <p>Where liability cannot be excluded by law, it shall be limited to the amount paid by the user.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">17. Indemnity</h2>
            <p className="mb-3">Users agree to indemnify and hold Seenjoy Academy harmless from:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Claims</li>
              <li>Losses</li>
              <li>Damages</li>
              <li>Legal expenses</li>
            </ul>
            <p className="mb-3">Arising from:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Violation of terms</li>
              <li>Misuse of platform</li>
              <li>Infringement of rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">18. Enforcement &amp; Account Control</h2>
            <p className="mb-3">We reserve the right to:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Suspend or terminate accounts</li>
              <li>Remove content</li>
              <li>Restrict access</li>
            </ul>
            <p>With or without prior notice.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">19. Policy Modification</h2>
            <p className="mb-3">We may update at any time:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Terms</li>
              <li>Conditions</li>
              <li>Policies</li>
              <li>Services</li>
            </ul>
            <p>Changes take effect upon publication. Continued use = acceptance.</p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">20. Assumption of Risk</h2>
            <p className="mb-3">Users acknowledge:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>All risks of digital services</li>
              <li>Responsibility for usage</li>
              <li>Our right to take strict legal action</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">21. Governing Law &amp; Jurisdiction</h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Governed by laws of Bangladesh</li>
              <li>Exclusive jurisdiction: Courts of Bangladesh</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">22. Enforcement Rights</h2>
            <p className="mb-3">We retain full authority to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Issue legal notices</li>
              <li>File cases</li>
              <li>Claim damages</li>
              <li>Remove infringing content</li>
              <li>Take any other required legal action</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-base mb-3 border-l-2 border-accent-gold pl-3">23. Entire Agreement</h2>
            <p>These policies constitute the entire legal agreement between user and Seenjoy Academy.</p>
          </section>

        </div>

        <div className="mt-12 pt-6 border-t border-border-default">
          <p className="text-text-secondary text-sm mb-2">Seenjoy Academy retains complete ownership, authority, and control over all content and materials, platform systems, and branding and intellectual property. ANY violation will result in immediate enforcement action, civil and criminal proceedings, and maximum penalties permitted under Bangladesh law.</p>
          <p className="text-text-secondary text-xs">Copyright © 2026 Seenjoy Academy. All Rights Reserved.</p>
        </div>
      </main>
    </div>
  );
}
