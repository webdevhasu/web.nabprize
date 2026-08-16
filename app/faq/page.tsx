"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

const faqData: FaqItem[] = [
  {
    q: "Is NabPrize free to play?",
    a: "Yes, completely free. There are no subscription fees, no hidden charges, and no paywalls. You earn NP-Coins by playing matches, checking in daily, and watching ads.",
  },
  {
    q: "What are NP-Coins?",
    a: "NP-Coins are the in-game currency. You earn them by winning matches against the AI, checking in daily, and watching rewarded ads. Use them to redeem rewards like mobile load.",
  },
  {
    q: "How does the Dots & Boxes game work?",
    a: "It's the classic pencil-and-paper game brought to life. You and the AI take turns connecting dots on a 5×5 grid. When you complete a box, you get another turn. The player with the most boxes at the end wins.",
  },
  {
    q: "How do I earn NP-Coins?",
    a: "There are multiple ways: Win practice matches (5 coins for a win), check in daily (streak bonuses increase), and watch rewarded ads. Your lifetime earnings are tracked in your profile.",
  },
  {
    q: "How do I redeem rewards?",
    a: "Go to the Rewards tab, browse the available reward tiers, and tap Redeem on the one you want. Enter your phone number for mobile load or email for other rewards. Your reward will be processed.",
  },
  {
    q: "What is the daily check-in?",
    a: "Open the app every day and tap the check-in button on the home screen. You earn bonus NP-Coins and your streak grows. The longer your streak, the bigger the rewards.",
  },
  {
    q: "Can I play offline?",
    a: "Yes! The practice mode works completely offline. You can play against the NabBot AI without an internet connection. You'll need internet for account creation, rewards, and ads.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. We use Firebase for secure authentication and Firestore with strict security rules for data storage. We never sell your personal data to third parties.",
  },
  {
    q: "Can I play against real players?",
    a: "1v1 multiplayer is coming soon! We're building real-time challenge mode so you can play against friends or random opponents. Stay tuned for updates.",
  },
  {
    q: "How do I change my password?",
    a: "Go to Profile → Change Password. We'll send a password reset link to your registered email. Click the link to set a new password.",
  },
  {
    q: "Which countries can use NabPrize?",
    a: "NabPrize is available worldwide on Android. Rewards may vary by region. The game itself works in any country.",
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
              <div key={i} className="border border-gray-200 rounded-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-peach-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-semibold text-navy pr-4">{item.q}</span>
                  <svg className={`w-5 h-5 text-warm-gray flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
