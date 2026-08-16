export default function TermsOfServicePage() {
  return (
    <div className="bg-white pt-28 pb-section md:pt-36">
      <div className="section-container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-warm-gray mb-12">
          Last updated: August 16, 2025
        </p>

        <div className="prose prose-lg max-w-none text-navy/80 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By downloading or using NabPrize, you agree to these Terms of Service.
              If you do not agree, do not use the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">2. User Eligibility</h2>
            <p className="leading-relaxed">
              You must be at least 13 years old to use NabPrize. By using the app, you
              confirm you meet this age requirement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">3. Account Registration</h2>
            <p className="leading-relaxed">
              You are responsible for maintaining the security of your account. One account
              per person — multiple accounts will result in termination. You can register
              via email or Google Sign-In.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">4. In-Game Currency (NP-Coins)</h2>
            <p className="leading-relaxed">
              NP-Coins are earned through gameplay, daily check-ins, and rewarded ads.
              NP-Coins have no real-world monetary value and cannot be exchanged for cash.
              They can only be used to redeem rewards offered within the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">5. Rewards Redemption</h2>
            <p className="leading-relaxed">
              Rewards are subject to availability. NabPrize reserves the right to modify
              reward tiers, costs, and availability at any time. Redemption requests are
              processed within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">6. Prohibited Conduct</h2>
            <p className="leading-relaxed">
              You may not use bots, scripts, or automated tools. You may not manipulate
              the game, create multiple accounts, or engage in any activity designed to
              exploit the app. Violation results in immediate account termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">7. Termination</h2>
            <p className="leading-relaxed">
              We may suspend or terminate your account at any time for violations of
              these terms. You may delete your account at any time through the app settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">8. Limitation of Liability</h2>
            <p className="leading-relaxed">
              NabPrize is provided &quot;as is&quot; without warranties of any kind. We are not
              liable for any damages arising from your use of the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">9. Contact Us</h2>
            <p className="leading-relaxed">
              For questions about these terms, contact us at{" "}
              <a href="mailto:nabprize.official@gmail.com" className="text-purple hover:text-purple-dark">
                nabprize.official@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
