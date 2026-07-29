export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white pt-28 pb-section md:pt-36">
      <div className="section-container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-warm-gray mb-12">
          Last updated: July 29, 2026
        </p>

        {/* PLACEHOLDER: This is template legal text. It must be reviewed and replaced with actual legal copy before launch. */}

        <div className="prose prose-lg max-w-none text-navy/80 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              1. Information We Collect
            </h2>
            <p className="leading-relaxed">
              We collect information you provide directly, including your name,
              email address, payment account details, and device information. We
              also collect usage data such as tasks completed, earnings history,
              and app interaction patterns to improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              2. How We Use Your Data
            </h2>
            <p className="leading-relaxed">
              Your data is used to process payments, verify task completion,
              prevent fraud, communicate account updates, and improve the
              NabPrize experience. We do not sell your personal information to
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              3. Data Sharing
            </h2>
            <p className="leading-relaxed">
              We share limited data with offerwall partners solely to confirm
              task completion. We may share information with payment processors
              to facilitate withdrawals. We do not share data with advertisers
              or data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              4. Data Retention
            </h2>
            <p className="leading-relaxed">
              We retain your account data for as long as your account is active.
              If you delete your account, we remove personal identifiers within
              30 days, though aggregated, anonymized data may be retained
              indefinitely.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              5. Your Rights
            </h2>
            <p className="leading-relaxed">
              You have the right to access, correct, or delete your personal
              data. You can request a data export or account deletion by
              contacting our support team at support@nabprize.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              6. Security
            </h2>
            <p className="leading-relaxed">
              We use industry-standard encryption and security practices to
              protect your data. While no system is 100% secure, we take
              reasonable measures to prevent unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              7. Contact Us
            </h2>
            <p className="leading-relaxed">
              For privacy-related questions, contact us at
              support@nabprize.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
