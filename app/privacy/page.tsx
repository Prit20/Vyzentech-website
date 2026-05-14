'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-subtitle">LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              This Privacy Policy explains how Vyzentech collects, uses, and protects your
              information when you use our website and services.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: May 11, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <p className="text-sm font-semibold text-gray-900 mb-4">On this page</p>
                  <ul className="space-y-3 text-sm">
                    <li><a className="text-gray-600 hover:text-primary" href="#privacy-collect">Information We Collect</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#privacy-use">How We Use Information</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#privacy-cookies">Cookies and Analytics</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#privacy-sharing">Data Sharing</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#privacy-security">Data Security</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#privacy-rights">Your Rights</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#privacy-contact">Contact Us</a></li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Need help?</p>
                  <p className="text-sm text-gray-600 mb-4">
                    Email our compliance team for privacy questions.
                  </p>
                  <Link href="mailto:info@vyzentech.in" className="text-primary hover:underline text-sm">
                    info@vyzentech.in
                  </Link>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to protecting your information and being transparent about
                  how we handle data across our website and services.
                </p>
              </div>

              <div id="privacy-collect" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed">
                  We collect information you provide directly, such as name, email address,
                  phone number, and project details submitted through our contact forms. We also
                  collect basic usage data (e.g., pages visited, time on site) to improve the
                  website experience.
                </p>
              </div>

              <div id="privacy-use" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Respond to inquiries and provide requested services.</li>
                  <li>Improve our website performance, content, and user experience.</li>
                  <li>Communicate updates related to your project or support requests.</li>
                  <li>Maintain website security and prevent misuse.</li>
                </ul>
              </div>

              <div id="privacy-cookies" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Analytics</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may use cookies and analytics tools to understand how visitors interact with
                  our site. You can control cookies through your browser settings.
                </p>
              </div>

              <div id="privacy-sharing" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell your personal data. We only share information with trusted
                  service providers when necessary to operate our services, comply with legal
                  requirements, or protect our rights.
                </p>
              </div>

              <div id="privacy-security" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use reasonable administrative and technical safeguards to protect your
                  information. However, no method of transmission over the internet is
                  completely secure.
                </p>
              </div>

              <div id="privacy-rights" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  You may request access, correction, or deletion of your personal data by
                  contacting us at
                  <Link href="mailto:info@vyzentech.in" className="text-primary hover:underline"> info@vyzentech.in</Link>.
                </p>
              </div>

              <div id="privacy-contact" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  Vyzentech, A-Wing 202-203, Union Heights, Rahulraj Mall Lane, Maharana Pratap Rd,
                  Vesu, Surat, Gujarat 395007.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
