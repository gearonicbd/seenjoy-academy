import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-secondary/50 py-10 pb-28 md:pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/assets/main-logo.png"
              alt="Seenjoy Academy"
              width={180}
              height={52}
              className="h-13 w-auto object-contain mb-4"
            />
            <p className="text-text-secondary text-sm mt-1">
              Copyright © 2026 Seenjoy Academy. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-text-secondary text-sm">
              সাপোর্ট:{" "}
              <a
                href="mailto:contact@seenjoy.academy"
                className="text-accent-teal hover:underline"
              >
                contact@seenjoy.academy
              </a>
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/seenjoyacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-1 text-text-secondary hover:text-accent-gold transition-colors text-sm"
              >
                Facebook <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.instagram.com/seenjoyacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-1 text-text-secondary hover:text-accent-gold transition-colors text-sm"
              >
                Instagram <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
              <Link href="/about" className="text-text-secondary hover:text-accent-gold transition-colors text-xs">
                About
              </Link>
              <span className="text-border-default text-xs">|</span>
              <Link href="/privacy-policy" className="text-text-secondary hover:text-accent-gold transition-colors text-xs">
                Privacy Policy
              </Link>
              <span className="text-border-default text-xs">|</span>
              <Link href="/refund-policy" className="text-text-secondary hover:text-accent-gold transition-colors text-xs">
                Refund Policy
              </Link>
              <span className="text-border-default text-xs">|</span>
              <Link href="/terms-and-conditions" className="text-text-secondary hover:text-accent-gold transition-colors text-xs">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
