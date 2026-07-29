export default function TermsOfServicePage() {
  return (
    <div className="bg-white pt-28 pb-section md:pt-36">
      <div className="section-container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-warm-gray mb-12">
          Last updated: July 29, 2026
        </p>

        {/* PLACEHOLDER: This is template legal text. It must be reviewed and replaced with actual legal copy before launch. */}

        <div className="prose prose-lg max-w-none text-navy/80 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By downloading or using NabPrize, you agree to these Terms of
              Service. If you do not agree, do not use the app. We may update
              these terms periodically; continued use constitutes acceptance of
              any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              2. User Eligibility
            </h2>
            <p className="leading-relaxed">
              You must be at least 18 years old to use NabPrize. By using the
              app, you confirm you meet this age requirement and have the legal
              capacity to enter into these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              3. Account Registration
            </h2>
            <p className="leading-relaxed">
              You are responsible for maintaining the security of your account.
              You must provide accurate information and notify us immediately of
              any unauthorized use. One account per person — multiple accounts
              will result in termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              4. Prohibited Conduct
            </h2>
            <p className="leading-relaxed">
              You may not use bots, scripts, or automated tools to complete
              tasks. You may not manipulate referral systems, create fake
              accounts, or engage in any activity designed to defraud NabPrize
              or its partners. Violation results in immediate account
              termination and forfeiture of earnings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              5. Payment Terms
            </h2>
            <p className="leading-relaxed">
              Earnings are credited to your in-app balance upon task
              verification. Withdrawals are processed via PayPal or Prepaid Visa
              within 1–3 business days. NabPrize reserves the right to withhold payments
              pending fraud investigation. Minimum withdrawal applies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              6. Termination
            </h2>
            <p className="leading-relaxed">
              We may suspend or terminate your account at any time for
              violations of these terms. Upon termination, unused earnings from
              fraudulent activity will be forfeited. You may delete your account
              at any time through the app settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              7. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              NabPrize is provided &quot;as is&quot; without warranties of any kind. We
              are not liable for indirect, incidental, or consequential damages
              arising from your use of the app. Our total liability shall not
              exceed the amount you earned in the 30 days preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              8. Contact Us
            </h2>
            <p className="leading-relaxed">
              For questions about these terms, contact us at
              support@nabprize.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
