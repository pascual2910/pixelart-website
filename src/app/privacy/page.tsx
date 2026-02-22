import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}. Learn how we collect, use, and protect your data.`,
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <a
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-foreground"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to home
      </a>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-text-muted">
        Last updated: February 22, 2026
      </p>

      <div className="mt-10 space-y-10 text-text-secondary leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        <section>
          <p>
            Pixel Art Converter (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) respects your privacy and is committed to
            protecting the personal data you share with us. This Privacy Policy
            explains what information we collect when you use our web application
            and marketing website, how we use it, and the choices you have.
          </p>
        </section>

        <section>
          <h2>1. Information We Collect</h2>

          <div className="mt-4 space-y-4">
            <div>
              <h3>Account Data</h3>
              <p>
                When you create an account, we collect your email address, first
                name, and last name. You can also sign in using Google or GitHub
                OAuth, in which case we receive your name and email from those
                providers.
              </p>
            </div>

            <div>
              <h3>Designs &amp; Projects</h3>
              <p>
                When you save a design, we store its configuration (grid
                settings, shape, color mode), color palette, a scaled-down
                version of your source image (max 800px, processed client-side),
                and a thumbnail of the output. Designs can be organized into
                projects.
              </p>
            </div>

            <div>
              <h3>Custom Shapes</h3>
              <p>
                If you upload custom SVG shapes, we store the path data and a
                preview image associated with your account.
              </p>
            </div>

            <div>
              <h3>Technical Data</h3>
              <p>
                We collect your IP address and approximate country at sign-up
                and on subsequent logins. This helps us understand our user base
                geographically and detect suspicious activity.
              </p>
            </div>

            <div>
              <h3>Usage Analytics</h3>
              <p>
                We track events such as page views, design creation, exports
                (including format type), and share actions. These events are
                linked to your user account if you are signed in, or recorded
                anonymously otherwise.
              </p>
            </div>

            <div>
              <h3>Feedback</h3>
              <p>
                If you submit feedback or a bug report, we store the subject,
                description, type of feedback, and optionally your email address
                if you choose to provide it.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p className="mt-4">We use your data to:</p>
          <ul className="mt-2">
            <li>Provide and maintain the Pixel Art Converter service</li>
            <li>Save and sync your designs across devices</li>
            <li>
              Manage your account, credits, and referral program participation
            </li>
            <li>
              Improve the application based on usage patterns and feedback
            </li>
            <li>
              Send in-app notifications (welcome messages, credit resets,
              referral bonuses)
            </li>
            <li>Detect and prevent abuse or unauthorized access</li>
          </ul>
          <p className="mt-2">
            We do not sell your personal data to third parties. We do not use
            your data for advertising purposes.
          </p>
        </section>

        <section>
          <h2>3. Image Processing</h2>
          <p className="mt-4">
            Your images are processed entirely in your browser. The original
            full-resolution image never leaves your device. When you save a
            design, only a scaled-down reference image (max 800px) is stored in
            our database to allow you to reload and re-edit your work.
          </p>
        </section>

        <section>
          <h2>4. Third-Party Services</h2>
          <p className="mt-4">We use the following third-party services:</p>
          <ul className="mt-2">
            <li>
              <strong>Supabase</strong> &mdash; database hosting,
              authentication, and real-time services. Your account data,
              designs, and analytics are stored in Supabase. See{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Supabase&apos;s Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Google Fonts</strong> &mdash; we load the Inter and
              JetBrains Mono typefaces from Google&apos;s servers. Google may
              collect your IP address when these fonts are loaded. See{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>ipapi.co</strong> &mdash; we use this service to determine
              your approximate country based on your IP address at login.
            </li>
            <li>
              <strong>Vercel</strong> &mdash; our application and marketing site
              are hosted on Vercel. Vercel may collect basic access logs. See{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Vercel&apos;s Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Vercel Analytics</strong> &mdash; our marketing site uses
              Vercel Analytics for anonymous, cookie-free page view tracking.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Cookies &amp; Local Storage</h2>
          <p className="mt-4">
            We do not use traditional tracking cookies. We use your
            browser&apos;s local storage to remember:
          </p>
          <ul className="mt-2">
            <li>Your theme preference (light or dark mode)</li>
            <li>Application settings (e.g., auto-save preference)</li>
            <li>Onboarding tour progress</li>
            <li>Saved color palettes for offline use</li>
          </ul>
          <p className="mt-2">
            Supabase stores authentication session tokens in local storage to
            keep you signed in between visits.
          </p>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p className="mt-4">
            We take reasonable measures to protect your data, including:
          </p>
          <ul className="mt-2">
            <li>
              Passwords are hashed and never stored in plaintext (managed by
              Supabase Auth)
            </li>
            <li>
              Row-level security policies ensure users can only access their own
              data
            </li>
            <li>
              Content Security Policy headers restrict which external resources
              can be loaded
            </li>
            <li>
              Sensitive fields (credits, admin status, premium tier) cannot be
              modified by users directly
            </li>
            <li>All connections are encrypted via HTTPS</li>
          </ul>
        </section>

        <section>
          <h2>7. Data Retention &amp; Deletion</h2>
          <p className="mt-4">
            Your data is retained for as long as you maintain an active account.
            If you delete your account, all associated data &mdash; including
            designs, projects, custom shapes, analytics events, notifications,
            and feedback &mdash; is permanently deleted via cascading deletion.
          </p>
          <p className="mt-2">
            You may request account deletion at any time by contacting us.
          </p>
        </section>

        <section>
          <h2>8. Referral Program</h2>
          <p className="mt-4">
            Each user receives a unique referral code. When someone signs up
            using your referral link, we record the referral relationship to
            award bonus credits. Referral data is linked to user accounts and is
            deleted when either account is deleted.
          </p>
        </section>

        <section>
          <h2>9. Children&apos;s Privacy</h2>
          <p className="mt-4">
            Pixel Art Converter is not directed at children under 13. We do not
            knowingly collect personal data from children under 13. If you
            believe a child under 13 has provided us with personal data, please
            contact us and we will delete it promptly.
          </p>
        </section>

        <section>
          <h2>10. Your Rights</h2>
          <p className="mt-4">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="mt-2">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Export your data in a portable format</li>
            <li>Object to or restrict certain processing</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, please contact us using the details
            below.
          </p>
        </section>

        <section>
          <h2>11. Changes to This Policy</h2>
          <p className="mt-4">
            We may update this Privacy Policy from time to time. When we make
            significant changes, we will notify you through an in-app
            notification or by updating the date at the top of this page. Your
            continued use of the service after changes are posted constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p className="mt-4">
            If you have questions about this Privacy Policy or your data, please
            contact us at{" "}
            <a
              href="mailto:privacy@pixelartconverter.com"
              className="text-accent hover:underline"
            >
              privacy@pixelartconverter.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
