"use client";

import { useState } from "react";
import Link from "next/link";
import AppScreen from "@/components/AppScreen";

const faqItems = [
  {
    q: "Is this real money?",
    a: "Yes. NabPrize pays real cash via PayPal or Prepaid Visa — your choice. There are no coins, points, or gimmicks — when you earn, you earn actual dollars you can withdraw.",
  },
  {
    q: "How do I get paid — PayPal or something else?",
    a: "Once your earnings meet the minimum withdrawal threshold, you can cash out via PayPal or a Prepaid Visa card — your choice. Payments are processed within a few business days.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. We never sell your personal data. All information is encrypted and used only to verify your account and process payments.",
  },
  {
    q: "What countries are supported?",
    a: "NabPrize is available worldwide. Some offerwall tasks may be region-specific, but the lucky draw and PayPal and Prepaid Visa withdrawals work globally.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-peach-100 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-navy leading-tight">
                Complete Simple Tasks.{" "}
                <span className="text-coral">Earn Real Money.</span>
              </h1>
              <p className="mt-6 text-lg text-warm-gray max-w-lg leading-relaxed">
                Join thousands earning cash rewards through tasks, surveys, and
                our weekly $1,000+ lucky draw.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/nabprize.apk" download className="btn-primary text-center">
                  Download for Android
                </a>
                <a
                  href="#how-it-works"
                  className="text-purple font-semibold hover:text-purple-dark transition-colors flex items-center justify-center gap-1"
                >
                  How it works ↓
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-[480px] bg-white rounded-[32px] shadow-card overflow-hidden border-4 border-purple/20">
                <AppScreen />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* PLACEHOLDER — update these numbers with real data before launch */}
            <div>
              <div className="text-2xl font-bold text-navy">10,000+</div>
              <div className="text-sm text-warm-gray mt-1">Downloads</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-navy">Real</div>
              <div className="text-sm text-warm-gray mt-1">
                PayPal & Visa Payouts
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-coral">$1,000+</div>
              <div className="text-sm text-warm-gray mt-1">
                Weekly Prize Draws
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-navy">4.5★</div>
              <div className="text-sm text-warm-gray mt-1">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-section">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto bg-purple/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                Complete Tasks
              </h3>
              <p className="text-warm-gray leading-relaxed">
                Browse offerwalls, complete app installs, fill out surveys, or
                try new products — each task earns you real cash.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto bg-coral/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                Earn Instantly
              </h3>
              <p className="text-warm-gray leading-relaxed">
                Your earnings are credited right away. Watch your balance grow
                with every completed task — no waiting around.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto bg-success/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                Withdraw or Win
              </h3>
              <p className="text-warm-gray leading-relaxed">
                Cash out via PayPal or Prepaid Visa whenever you hit the minimum, or use your
                earnings to qualify for the weekly $1,000+ lucky draw.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lucky Draw Highlight */}
      <section className="bg-peach-100 py-section">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Every Week, Someone Wins Big
          </h2>
          <div className="inline-block bg-white rounded-card shadow-card p-8 mb-8">
            <div className="text-5xl md:text-6xl font-bold text-coral">
              $847+
            </div>
            <div className="text-warm-gray mt-2">this week&apos;s prize pool</div>
          </div>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto mb-8 leading-relaxed">
            Complete tasks throughout the week to earn draw entries. Every
            Monday, we randomly select winners and pay out instantly via PayPal or Prepaid Visa.
            The more tasks you complete, the higher your chances.
          </p>
          <a href="/nabprize.apk" download className="btn-primary">
            Download to Join
          </a>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-white py-section">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-card">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-navy">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-warm-gray transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-warm-gray leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-purple font-semibold hover:text-purple-dark transition-colors"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-peach-100 py-section">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Start Earning Today
          </h2>
          <a href="/nabprize.apk" download className="btn-primary">
            Download for Android
          </a>
        </div>
      </section>
    </>
  );
}
