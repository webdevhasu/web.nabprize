"use client";

import { useState } from "react";
import Link from "next/link";
import AppScreen from "@/components/AppScreen";

const features = [
  {
    icon: "🎮",
    title: "Play vs AI",
    desc: "Challenge NabBot in strategic 5x5 Dots & Boxes. Outsmart the AI, capture boxes, and earn NP-Coins for every win.",
  },
  {
    icon: "💰",
    title: "Earn NP-Coins",
    desc: "Win matches, check in daily, and watch ads to earn NP-Coins. Build your balance and redeem exciting rewards.",
  },
  {
    icon: "🎁",
    title: "Redeem Rewards",
    desc: "Use your NP-Coins to redeem mobile load, data packages, and other digital rewards directly in the app.",
  },
  {
    icon: "🏆",
    title: "Climb the Leaderboard",
    desc: "Track your wins, losses, and lifetime stats. Prove you're the best Dots & Boxes player among your friends.",
  },
];

const faqItems = [
  {
    q: "Is NabPrize free to play?",
    a: "Yes, completely free. You earn NP-Coins by playing matches, checking in daily, and watching short ads. There are no hidden charges.",
  },
  {
    q: "What are NP-Coins?",
    a: "NP-Coins are the in-game currency. You earn them by winning matches, daily check-ins, and watching rewarded ads. Use them to redeem real rewards like mobile load.",
  },
  {
    q: "How do I redeem rewards?",
    a: "Go to the Rewards tab, choose a reward tier, and tap Redeem. Enter your phone number or email, and your reward will be processed.",
  },
  {
    q: "What is the daily check-in?",
    a: "Open the app every day and tap the check-in button. You earn bonus NP-Coins and your streak grows — the longer your streak, the bigger the rewards.",
  },
  {
    q: "How does the Dots & Boxes game work?",
    a: "Connect dots to form boxes. When you complete a box, you get another turn. The player with the most boxes at the end wins. You play against the NabBot AI.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. We use Firebase for secure authentication and cloud storage. We never sell your personal data to third parties.",
  },
  {
    q: "Can I play offline?",
    a: "Yes! Practice mode works completely offline. You can play against the AI without an internet connection.",
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
                Play Dots &amp; Boxes.{" "}
                <span className="text-coral">Earn Rewards.</span>
              </h1>
              <p className="mt-6 text-lg text-warm-gray max-w-lg leading-relaxed">
                Challenge the AI in the classic Dots &amp; Boxes strategy game. 
                Win matches, earn NP-Coins, and redeem exciting rewards.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/nabprize.apk" download className="btn-primary text-center">
                  Download for Android
                </a>
                <Link
                  href="/how-it-works"
                  className="text-purple font-semibold hover:text-purple-dark transition-colors flex items-center justify-center gap-1"
                >
                  How it works ↓
                </Link>
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

      {/* Stats Bar */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-navy">Free</div>
              <div className="text-sm text-warm-gray mt-1">To Play</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-coral">NP-Coins</div>
              <div className="text-sm text-warm-gray mt-1">Earn & Redeem</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success">5×5</div>
              <div className="text-sm text-warm-gray mt-1">Classic Board</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple">24/7</div>
              <div className="text-sm text-warm-gray mt-1">Play Anytime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-section">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Why NabPrize?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="card flex gap-5 items-start">
                <div className="text-3xl flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{feature.title}</h3>
                  <p className="text-warm-gray leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-peach-100 py-section">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto bg-purple/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📥</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Download & Sign Up</h3>
              <p className="text-warm-gray leading-relaxed">
                Download the app, create your account with email or Google, and pick your unique username.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto bg-coral/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Play & Earn</h3>
              <p className="text-warm-gray leading-relaxed">
                Challenge the AI in Dots &amp; Boxes. Win matches, check in daily, and watch ads to earn NP-Coins.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto bg-success/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Redeem Rewards</h3>
              <p className="text-warm-gray leading-relaxed">
                Use your NP-Coins to redeem mobile load, data packages, and other digital rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features Teaser */}
      <section className="bg-white py-section">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Exciting Features Coming Soon
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto mb-12 leading-relaxed">
            We&apos;re building the ultimate skill gaming platform. Here&apos;s what&apos;s on the way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center border-2 border-purple/10">
              <div className="text-3xl mb-4">⚔️</div>
              <h3 className="text-lg font-semibold text-navy mb-2">1v1 Challenge</h3>
              <p className="text-sm text-warm-gray">Real-time multiplayer. Challenge friends or match with random players worldwide.</p>
            </div>
            <div className="card text-center border-2 border-coral/10">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Tournaments</h3>
              <p className="text-sm text-warm-gray">Compete in weekly &amp; monthly tournaments. Top players win big NP-Coin prizes.</p>
            </div>
            <div className="card text-center border-2 border-success/10">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Watch &amp; Earn</h3>
              <p className="text-sm text-warm-gray">Watch short reels and earn bonus NP-Coins. The easiest way to boost your balance.</p>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/upcoming-features" className="text-purple font-semibold hover:text-purple-dark transition-colors">
              See all upcoming features →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-peach-100 py-section">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-navy">{item.q}</span>
                  <svg className={`w-5 h-5 text-warm-gray transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-warm-gray leading-relaxed">{item.a}</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-purple font-semibold hover:text-purple-dark transition-colors">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-section">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Start Playing Today</h2>
          <p className="text-lg text-warm-gray max-w-xl mx-auto mb-8">
            Download NabPrize and join the ultimate Dots &amp; Boxes experience. It&apos;s free!
          </p>
          <a href="/nabprize.apk" download className="btn-primary">Download for Android</a>
        </div>
      </section>
    </>
  );
}
