"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

const faqData: FaqItem[] = [
  {
    q: "Is NabPrize free to use?",
    a: "Yes, completely free. There are no subscription fees, no hidden charges, and no paywalls. You earn money by completing tasks — NabPrize never asks you to pay anything.",
  },
  {
    q: "How do I get paid — PayPal or something else?",
    a: "You can choose between PayPal and a Prepaid Visa card when you withdraw. Prepaid Visa has no fees and works almost anywhere Visa is accepted. PayPal sends cash directly to your account with a small processing fee.",
  },
  {
    q: "What is the minimum withdrawal amount?",
    a: "The minimum withdrawal is $5.00. Once your available balance hits this threshold, the Withdraw button unlocks and you can cash out anytime.",
  },
  {
    q: "How does the weekly lucky draw work?",
    a: "Every task you complete during the week earns you draw entries. On Monday, we randomly select winners from all qualified entries and pay out prizes via PayPal or Prepaid Visa. The more tasks you finish, the higher your chances of winning.",
  },
  {
    q: "Which countries can use NabPrize?",
    a: "NabPrize is available worldwide. Some offerwall tasks may be limited to specific regions, but the lucky draw and PayPal and Prepaid Visa withdrawals work in any country that supports PayPal or Visa.",
  },
  {
    q: "Is my personal information safe?",
    a: "Yes. We use encryption to protect your data and never sell personal information to third parties. Your data is only used for account verification and payment processing.",
  },
  {
    q: "Why do my earnings show as 'Pending' first?",
    a: "Some tasks require a short verification period before funds become available. This is standard practice to confirm the task was completed correctly. Once verified, your pending balance moves to your available balance automatically.",
  },
  {
    q: "How do referrals work?",
    a: "Share your unique referral link with friends. When someone signs up using your link and completes their first task, you both earn a bonus. There's no limit to how many people you can refer.",
  },
  {
    q: "Is this a lottery or gambling app?",
    a: "No. NabPrize is a rewards platform. You earn entries by completing real tasks — you never pay money to enter the draw. The lucky draw is a bonus feature, not the core product.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="bg-peach-100 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Everything you need to know about NabPrize, answered simply.
          </p>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="section-container max-w-2xl">
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-card overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-peach-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-semibold text-navy pr-4">
                    {item.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-warm-gray flex-shrink-0 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
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
                {openIndex === i && (
                  <div className="px-6 pb-6 text-warm-gray leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
