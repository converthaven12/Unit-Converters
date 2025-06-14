"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const FooterPage = () => {
  const router = useRouter();
  return (
    <div className="px-4 py-6 max-w-[85%] md:max-w-[70%] md:mx-auto text-[#0d3b23] space-y-10">
      <p
        className="text-blue-700 inline-flex items-center gap-2 cursor-pointer hover:underline"
        onClick={() => {
          router.push("/Converters");
        }}
      >
        <FaArrowLeft />
        Go Back
      </p>
      
      {/* About Us */}
      <section id="about">
        <h2 className="text-3xl font-bold mb-3 text-[#006633]">About Us</h2>
        <p>
          Welcome to <Link href={"/Converters"}><strong>Converthaven.com</strong></Link> – your go-to platform for free, fast, and user-friendly online converters and calculators.
        </p>
        <p className="mt-4">
          Our mission is simple: to make everyday conversions—whether it's units, currency, time, or measurements—easy and accessible to everyone, anywhere in the world. Built with simplicity and accuracy in mind, Converthaven is designed to save your time and streamline your digital experience.
        </p>
        <p className="mt-4">
          We're committed to continuously improving and adding new tools based on what our users need most. If you have feedback or suggestions, feel free to contact us anytime at support@converthaven.com
        </p>
      </section>

      {/* Terms of Use */}
      <section id="terms">
        <h2 className="text-3xl font-bold mb-3 text-[#006633]">Terms of Use</h2>
        <p>
          By accessing and using Converthaven.com, you agree to the following Terms of Use. Please read them carefully.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">1. Use of Site</h3>
        <p>
          Converthaven is provided for informational and educational purposes only. We do not guarantee 100% accuracy and are not liable for any decisions made based on the use of our tools.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">2. Content Restrictions</h3>
        <p>
          You agree not to copy, reproduce, or distribute any content from this site without permission. Any misuse of our website, including attempts to harm or exploit its functionality, is prohibited.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">3. Intellectual Property</h3>
        <p>
          All logos, branding, design elements, and custom tools are the property of Converthaven.com and may not be reused without written consent.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">4. External Links</h3>
        <p>
          Our website may contain links to third-party sites. We are not responsible for the content or privacy policies of these external websites.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">5. Limitation of Liability</h3>
        <p>
          We are not liable for any direct or indirect losses or damages resulting from your use of this website.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">6. Modifications</h3>
        <p>
          These terms may be updated at any time without prior notice. Continued use of the site implies agreement to the most current version.
        </p>
      </section>

      {/* Privacy Policy */}
      <section id="privacy">
        <h2 className="text-3xl font-bold mb-3 text-[#006633]">Privacy Policy</h2>
        <p>
          Converthaven.com operates this website to provide free conversion and calculation tools ("Service"). This Privacy Policy explains how we collect, use, and disclose information.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Information We Collect</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>Log data such as IP address, browser version, time of visit, and pages accessed</li>
          <li>Cookies that help us understand user behavior and improve the service</li>
          <li>Anonymous usage statistics (via Google Analytics or similar tools)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Cookies & Ads</h3>
        <p>
          We may allow third-party ad networks (e.g., Google AdSense) to display ads. These networks may use cookies or tracking technologies to deliver ads more relevant to your interests. You can opt out at{" "}
          <a href="https://optout.networkadvertising.org" target="_blank" className="underline text-blue-700">optout.networkadvertising.org</a>.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Security</h3>
        <p>
          We take reasonable precautions to protect your data but cannot guarantee 100% security.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Children's Privacy</h3>
        <p>
          We do not knowingly collect personal data from children under 13.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Policy Updates</h3>
        <p>
          This privacy policy may be updated periodically. Continued use of the website constitutes acceptance of these changes.
        </p>
      </section>

      {/* Contact Us */}
      <section id="contact">
        <h2 className="text-3xl font-bold mb-3 text-[#006633]">Contact Us</h2>
        <p>
          If you have questions or concerns, contact us at{" "}
          <a href="mailto:support@converthaven.com" className="underline text-blue-700">support@converthaven.com</a>.
        </p>
      </section>
    </div>
  );
};

export default FooterPage;