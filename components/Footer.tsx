import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/upcoming-features", label: "Coming Soon" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold text-purple">
              NabPrize
            </Link>
            <p className="mt-4 text-warm-gray-light text-sm leading-relaxed">
              Play the classic Dots &amp; Boxes game against AI, earn NP-Coins,
              and redeem exciting rewards. Free to play, fun to win.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-gray-light hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-warm-gray-light">
              <li>
                <a href="mailto:nabprize.official@gmail.com" className="hover:text-white transition-colors">
                  nabprize.official@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/923474054450" className="hover:text-white transition-colors">
                  WhatsApp: +92 347 405 4450
                </a>
              </li>
              <li>
                <a href="mailto:webdevhasu@gmail.com" className="hover:text-white transition-colors">
                  Developer: webdevhasu@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-6 text-center">
          <p className="text-sm text-warm-gray">
            &copy; 2025 NabPrize. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
