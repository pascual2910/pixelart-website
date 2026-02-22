import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and Conditions for ${SITE.name}. Read the rules and guidelines for using our service.`,
};

export default function TermsAndConditions() {
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
        Terms and Conditions
      </h1>
      <p className="mt-2 text-sm text-text-muted">
        Last updated: February 22, 2026
      </p>

      <div className="mt-10 space-y-10 text-text-secondary leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        <section>
          <p>
            Welcome to Pixel Art Converter. By accessing or using our web
            application and website (collectively, the &ldquo;Service&rdquo;),
            you agree to be bound by these Terms and Conditions
            (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do
            not use the Service.
          </p>
        </section>

        <section>
          <h2>1. Description of Service</h2>
          <p className="mt-4">
            Pixel Art Converter is a web-based tool that allows you to upload
            images and convert them into grid-based pixel art designs. The
            Service includes features such as customizable grid shapes, color
            modes, palette mapping (including DMC and Perler bead palettes),
            multi-format export, design saving, project organization, and design
            sharing.
          </p>
        </section>

        <section>
          <h2>2. Account Registration</h2>
          <p className="mt-4">
            Some features of the Service require you to create an account. When
            registering, you agree to:
          </p>
          <ul className="mt-2">
            <li>Provide accurate and complete information</li>
            <li>
              Keep your login credentials secure and not share them with others
            </li>
            <li>
              Notify us immediately if you suspect unauthorized access to your
              account
            </li>
            <li>
              Accept responsibility for all activity that occurs under your
              account
            </li>
          </ul>
          <p className="mt-2">
            You can sign up with an email address and password, or authenticate
            through Google or GitHub. You must be at least 13 years old to
            create an account.
          </p>
        </section>

        <section>
          <h2>3. Free Tier &amp; Credits</h2>
          <p className="mt-4">
            The Service offers a free tier that includes 5 export credits per
            month. Credits reset automatically on a monthly basis. Additional
            credits can be earned through the referral program (20 credits per
            successful referral, with no cap). We reserve the right to modify
            the credit system, including the number of free credits and referral
            bonuses, at any time.
          </p>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>

          <div className="mt-4 space-y-4">
            <div>
              <h3>Your Content</h3>
              <p>
                You retain all rights to the images you upload and the pixel art
                designs you create using the Service. We do not claim ownership
                of your content. By saving designs to our servers, you grant us
                a limited license to store, display, and transmit your content
                solely to provide the Service to you.
              </p>
            </div>

            <div>
              <h3>Shared Designs</h3>
              <p>
                When you generate a share link for a design, that design becomes
                viewable by anyone with the link. You are responsible for
                deciding what content to share publicly. You can revoke sharing
                at any time.
              </p>
            </div>

            <div>
              <h3>Our Content</h3>
              <p>
                The Service itself &mdash; including its design, code, logo,
                interface, and documentation &mdash; is owned by Pixel Art
                Converter and protected by intellectual property laws. You may
                not copy, modify, distribute, or reverse-engineer any part of
                the Service without our written permission.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>5. Acceptable Use</h2>
          <p className="mt-4">You agree not to use the Service to:</p>
          <ul className="mt-2">
            <li>
              Upload, process, or share content that is illegal, harmful,
              threatening, abusive, defamatory, or otherwise objectionable
            </li>
            <li>
              Infringe upon the intellectual property rights of others by
              uploading images you do not have the right to use
            </li>
            <li>
              Attempt to gain unauthorized access to other users&apos; accounts
              or data
            </li>
            <li>
              Interfere with or disrupt the Service, servers, or networks
              connected to the Service
            </li>
            <li>
              Use automated tools (bots, scrapers) to access the Service without
              our permission
            </li>
            <li>
              Exploit the credit system, referral program, or any other feature
              through fraudulent means
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Image Processing &amp; Responsibility</h2>
          <p className="mt-4">
            Images are processed in your browser. You are solely responsible for
            ensuring you have the right to use any images you upload. We do not
            monitor or review the content of uploaded images. If we become aware
            of content that violates these Terms, we may remove it and suspend
            or terminate the associated account.
          </p>
        </section>

        <section>
          <h2>7. Service Availability</h2>
          <p className="mt-4">
            We strive to keep the Service available at all times, but we do not
            guarantee uninterrupted access. The Service may be temporarily
            unavailable due to maintenance, updates, or circumstances beyond our
            control. We are not liable for any loss or inconvenience caused by
            downtime.
          </p>
        </section>

        <section>
          <h2>8. Account Termination</h2>
          <p className="mt-4">
            You may delete your account at any time. Upon deletion, all your
            data &mdash; including designs, projects, custom shapes, and
            analytics data &mdash; will be permanently removed.
          </p>
          <p className="mt-2">
            We reserve the right to suspend or terminate accounts that violate
            these Terms, engage in fraudulent activity, or abuse the Service.
            Where possible, we will provide notice before termination.
          </p>
        </section>

        <section>
          <h2>9. Disclaimer of Warranties</h2>
          <p className="mt-4">
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; without warranties of any kind, whether express or
            implied, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the Service will be
            error-free, secure, or available at all times.
          </p>
        </section>

        <section>
          <h2>10. Limitation of Liability</h2>
          <p className="mt-4">
            To the fullest extent permitted by law, Pixel Art Converter and its
            operators shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including but not limited to
            loss of data, profits, or business opportunities, arising out of or
            in connection with your use of the Service.
          </p>
          <p className="mt-2">
            Our total liability for any claim arising from the Service shall not
            exceed the amount you have paid us in the 12 months preceding the
            claim, or $50 USD, whichever is greater.
          </p>
        </section>

        <section>
          <h2>11. Indemnification</h2>
          <p className="mt-4">
            You agree to indemnify and hold harmless Pixel Art Converter, its
            operators, and affiliates from any claims, damages, losses, or
            expenses (including legal fees) arising from your use of the
            Service, your violation of these Terms, or your infringement of any
            third-party rights.
          </p>
        </section>

        <section>
          <h2>12. Changes to These Terms</h2>
          <p className="mt-4">
            We may update these Terms from time to time. When we make material
            changes, we will notify you through an in-app notification or by
            updating the date at the top of this page. Your continued use of the
            Service after changes are posted constitutes acceptance of the
            updated Terms.
          </p>
        </section>

        <section>
          <h2>13. Governing Law</h2>
          <p className="mt-4">
            These Terms are governed by and construed in accordance with the
            laws of the Netherlands, without regard to its conflict of law
            provisions. Any disputes arising from these Terms or the Service
            shall be subject to the exclusive jurisdiction of the courts of the
            Netherlands.
          </p>
        </section>

        <section>
          <h2>14. Severability</h2>
          <p className="mt-4">
            If any provision of these Terms is found to be unenforceable or
            invalid, that provision shall be limited or eliminated to the
            minimum extent necessary, and the remaining provisions shall
            continue in full force and effect.
          </p>
        </section>

        <section>
          <h2>15. Contact Us</h2>
          <p className="mt-4">
            If you have questions about these Terms, please contact us at{" "}
            <a
              href="mailto:legal@pixelartconverter.com"
              className="text-accent hover:underline"
            >
              legal@pixelartconverter.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
