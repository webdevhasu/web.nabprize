import Link from "next/link";

const steps = [
  {
    icon: (
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    color: "bg-purple/10",
    title: "Complete Offerwall Tasks",
    desc: "Browse our partner offerwalls to find tasks that suit you. Install apps, fill out surveys, sign up for free trials, or complete simple check-ins — each task shows exactly how much you'll earn before you start.",
  },
  {
    icon: (
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
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "bg-coral/10",
    title: "Watch Rewarded Ads",
    desc: "Want bonus entries into the weekly lucky draw? Watch short video ads to earn extra draw tickets — no tasks required. It's the quickest way to boost your odds of winning the big prize.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-purple-light"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    color: "bg-purple/10",
    title: "Track Your Earnings",
    desc: "Your balance is split into two wallets: Direct earnings (available to withdraw immediately) and Pending earnings (in a short verification hold). Once pending clears, that money moves to your available balance automatically.",
  },
  {
    icon: (
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "bg-success/10",
    title: "Join the Weekly Lucky Draw",
    desc: "Complete at least one task each week to qualify. Every task you finish earns you entries — the more entries, the better your odds. Winners are drawn live every Monday and paid out the same day.",
  },
  {
    icon: (
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
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    color: "bg-coral/10",
    title: "Withdraw via PayPal or Prepaid Visa",
    desc: "Once your available balance hits the minimum withdrawal amount, tap Withdraw and choose your payout method. Prepaid Visa: spend anywhere Visa is accepted — no fees, works in 200+ countries, usable online and with digital wallets like Apple Pay and Google Pay. PayPal: cash sent directly to your PayPal balance — small processing fee applies. Most payouts arrive within 1–3 business days.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-peach-100 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            How NabPrize Works
          </h1>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            From completing your first task to cashing out real money — here&apos;s
            the full process explained simply.
          </p>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="section-container max-w-3xl">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div
                  className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center flex-shrink-0`}
                >
                  {step.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-navy mb-2">
                    {step.title}
                  </h2>
                  <p className="text-warm-gray leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-peach-100 py-section">
        <div className="section-container max-w-3xl">
          <div className="card">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Is This Safe?
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              NabPrize uses industry-standard verification to ensure real users
              complete real tasks. Our fraud detection systems protect both our
              users and our offerwall partners — which means the payouts are
              legitimate and sustainable.
            </p>
            <p className="text-warm-gray leading-relaxed">
              We&apos;ve paid out thousands of dollars to users worldwide via PayPal and Prepaid Visa.
              Your personal information is encrypted and never sold to third
              parties.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="section-container text-center">
          <a href="#" className="btn-primary">
            Download NabPrize
          </a>
        </div>
      </section>
    </>
  );
}
