const steps = [
  {
    icon: (
      <span className="text-2xl">📥</span>
    ),
    color: "bg-purple/10",
    title: "Download & Create Account",
    desc: "Download NabPrize from this page and install it on your Android device. Sign up with your email or Google account, and pick a unique username.",
  },
  {
    icon: (
      <span className="text-2xl">🎯</span>
    ),
    color: "bg-coral/10",
    title: "Play Dots & Boxes vs AI",
    desc: "Enter Play & Earn mode and challenge NabBot on a 5×5 board. Connect dots to form boxes — when you complete a box, you get another turn. The player with the most boxes wins!",
  },
  {
    icon: (
      <span className="text-2xl">💰</span>
    ),
    color: "bg-success/10",
    title: "Earn NP-Coins",
    desc: "Win matches to earn NP-Coins. Check in daily for bonus coins, and watch short ads to boost your balance. Your lifetime stats are tracked in your profile.",
  },
  {
    icon: (
      <span className="text-2xl">🎁</span>
    ),
    color: "bg-purple/10",
    title: "Redeem Rewards",
    desc: "Go to the Rewards tab and browse available reward tiers. Redeem your NP-Coins for mobile load, data packages, and other digital rewards. Just enter your phone number and confirm.",
  },
  {
    icon: (
      <span className="text-2xl">📈</span>
    ),
    color: "bg-coral/10",
    title: "Level Up & Compete",
    desc: "Track your wins, losses, and earnings in your profile. Climb the leaderboard and prove you&apos;re the best Dots &amp; Boxes player. More features like 1v1 challenges and tournaments are coming soon!",
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
            From downloading the app to redeeming your first reward — here&apos;s the full process.
          </p>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="section-container max-w-3xl">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center flex-shrink-0`}>
                  {step.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-navy mb-2">{step.title}</h2>
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
            <h2 className="text-2xl font-bold text-navy mb-4">Is This Safe?</h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              NabPrize uses Firebase for secure authentication and cloud storage. Your game data
              is encrypted and backed up securely. We never sell your personal information to
              third parties.
            </p>
            <p className="text-warm-gray leading-relaxed">
              Practice mode works completely offline — no internet required. You can play anytime,
              anywhere.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="section-container text-center">
          <a href="/nabprize.apk" download className="btn-primary">
            Download NabPrize
          </a>
        </div>
      </section>
    </>
  );
}
