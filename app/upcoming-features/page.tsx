const comingSoon = [
  {
    icon: "⚔️",
    title: "1v1 Challenge Mode",
    desc: "Challenge real players in real-time Dots & Boxes matches. Match with opponents of similar skill, play live, and earn bonus NP-Coins for every win.",
    status: "In Development",
    color: "border-purple",
  },
  {
    icon: "🏆",
    title: "Weekly Tournaments",
    desc: "Compete in structured tournaments with brackets and leaderboards. Top players win massive NP-Coin prizes and exclusive rewards.",
    status: "Coming Soon",
    color: "border-coral",
  },
  {
    icon: "📱",
    title: "Watch Reels to Earn",
    desc: "Watch short video reels and earn bonus NP-Coins instantly. The easiest way to boost your balance without playing a match.",
    status: "Coming Soon",
    color: "border-success",
  },
  {
    icon: "🌍",
    title: "Global Leaderboards",
    desc: "See how you stack up against players worldwide. Monthly rankings with special rewards for top performers.",
    status: "Coming Soon",
    color: "border-purple",
  },
  {
    icon: "🎨",
    title: "Custom Board Themes",
    desc: "Personalize your game board with different themes, colors, and dot styles. Express yourself while you play.",
    status: "Planned",
    color: "border-coral",
  },
  {
    icon: "👥",
    title: "Friends & Clubs",
    desc: "Add friends, create clubs, and challenge your circle. See who&apos;s online and invite them to a match.",
    status: "Planned",
    color: "border-success",
  },
  {
    icon: "🎯",
    title: "Daily Challenges",
    desc: "Complete special daily challenges for extra NP-Coins. New challenges every day to keep things exciting.",
    status: "Planned",
    color: "border-purple",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    desc: "Get notified when friends challenge you, when daily rewards are available, and when new features launch.",
    status: "Planned",
    color: "border-coral",
  },
  {
    icon: "📊",
    title: "Advanced Stats",
    desc: "Detailed game analytics — win rate, average boxes per game, streaks, and more. Track your improvement over time.",
    status: "Planned",
    color: "border-success",
  },
];

export default function UpcomingFeaturesPage() {
  return (
    <>
      <section className="bg-peach-100 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Upcoming Features
          </h1>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            We&apos;re constantly improving NabPrize. Here&apos;s what&apos;s coming next.
          </p>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comingSoon.map((feature, i) => (
              <div key={i} className={`card border-l-4 ${feature.color}`}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-navy">{feature.title}</h3>
                      <span className="text-[11px] font-medium bg-peach-100 text-coral px-2.5 py-0.5 rounded-full">
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-sm text-warm-gray leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-peach-100 py-section">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Want to Shape the Future?
          </h2>
          <p className="text-lg text-warm-gray max-w-xl mx-auto mb-8">
            We build features based on player feedback. Have an idea? Tell us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:nabprize.official@gmail.com" className="btn-primary">
              Email Us Your Ideas
            </a>
            <a href="https://wa.me/923474054450" className="btn-secondary">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
