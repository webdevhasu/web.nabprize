export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white pt-28 pb-section md:pt-36">
      <div className="section-container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-warm-gray mb-12">
          Last updated: August 16, 2025
        </p>

        <div className="prose prose-lg max-w-none text-navy/80 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">1. Introduction</h2>
            <p className="leading-relaxed">
              NabPrize (&quot;App&quot;) is operated by the NabPrize team (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              This Privacy Policy explains how we collect, use, and protect your personal
              information when you use our mobile application and related services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">2. Information We Collect</h2>
            <p className="leading-relaxed">
              We collect the following information when you use the App:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 text-navy/80">
              <li><strong>Account Information:</strong> Email address, display name, and username when you create an account via email or Google Sign-In.</li>
              <li><strong>Usage Data:</strong> Game statistics such as matches played, wins, losses, coins earned, and check-in records.</li>
              <li><strong>Device Information:</strong> Device model, operating system version, and unique device identifiers for analytics and ad serving.</li>
              <li><strong>Advertising Data:</strong> Advertising IDs used by Google AdMob to serve and measure advertisements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">3. How We Use Your Information</h2>
            <p className="leading-relaxed">We use your information to:</p>
            <ul className="list-disc list-inside mt-2 space-y-2 text-navy/80">
              <li>Provide and maintain the App&apos;s features, including game play, leaderboards, and rewards.</li>
              <li>Process transactions and redemptions of in-game rewards.</li>
              <li>Send important account-related communications (password resets, security alerts).</li>
              <li>Improve the App through analytics and usage patterns.</li>
              <li>Serve personalized advertisements through Google AdMob.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">4. Data Sharing</h2>
            <p className="leading-relaxed">
              We do not sell your personal information. We share data only with:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 text-navy/80">
              <li><strong>Google Firebase:</strong> For authentication, cloud storage, and analytics services.</li>
              <li><strong>Google AdMob:</strong> For serving advertisements. AdMob may collect device information and advertising IDs per their own privacy policy.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">5. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures including encrypted data transmission
              (HTTPS/TLS), Firebase Authentication for secure account management, and Firestore
              security rules that restrict data access to authorized users only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">6. Data Retention</h2>
            <p className="leading-relaxed">
              Your account data is retained as long as your account is active. If you delete your
              account, we will remove your personal data within 30 days. Game statistics and
              leaderboards may be retained in anonymized form.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">7. Children&apos;s Privacy</h2>
            <p className="leading-relaxed">
              The App is not intended for users under the age of 13. We do not knowingly collect
              personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">8. Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access your personal data, request correction of inaccurate data,
              request deletion of your account and associated data, and opt out of personalized
              advertising through your device settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">9. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material
              changes by posting the new policy in the App and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">10. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 text-navy/80">
              <li>Email: <a href="mailto:nabprize.official@gmail.com" className="text-purple hover:text-purple-dark">nabprize.official@gmail.com</a></li>
              <li>WhatsApp: <a href="https://wa.me/923474054450" className="text-purple hover:text-purple-dark">+92 347 405 4450</a></li>
              <li>Developer: <a href="mailto:webdevhasu@gmail.com" className="text-purple hover:text-purple-dark">webdevhasu@gmail.com</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
