'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-subtitle">LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              These Terms of Service outline the rules and guidelines for using Vyzentech
              services and website.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: February 11, 2026
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
                    <li><a className="text-gray-600 hover:text-primary" href="#terms-acceptance">Acceptance of Terms</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#terms-services">Services</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#terms-responsibilities">Client Responsibilities</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#terms-payments">Payments</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#terms-ip">Intellectual Property</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#terms-liability">Limitation of Liability</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#terms-termination">Termination</a></li>
                    <li><a className="text-gray-600 hover:text-primary" href="#terms-contact">Contact</a></li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Questions?</p>
                  <p className="text-sm text-gray-600 mb-4">
                    Contact our legal team for clarifications.
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
                  These Terms define how we work with clients and how our services may be used.
                </p>
              </div>

              <div id="terms-acceptance" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing our website or using our services, you agree to be bound by
                  these Terms of Service and our Privacy Policy.
                </p>
              </div>

              <div id="terms-services" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Vyzentech provides IT consulting, software development, and related services.
                  Project scopes, timelines, and deliverables are defined in written agreements
                  or proposals.
                </p>
              </div>

              <div id="terms-responsibilities" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide timely feedback, approvals, and required materials.</li>
                  <li>Ensure that submitted content and assets are owned or licensed.</li>
                  <li>Maintain secure access credentials for project-related tools.</li>
                </ul>
              </div>

              <div id="terms-payments" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payments</h2>
                <p className="text-gray-600 leading-relaxed">
                  Payment terms are specified in project agreements. Late payments may result in
                  delayed delivery or temporary suspension of services.
                </p>
              </div>

              <div id="terms-ip" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  Upon full payment, clients receive the rights defined in the project agreement.
                  Pre-existing Vyzentech tools, libraries, or templates remain the property of
                  Vyzentech unless otherwise agreed.
                </p>
              </div>

              <div id="terms-liability" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  Vyzentech is not liable for indirect or consequential damages arising from the
                  use of our services. Our total liability is limited to the amount paid for the
                  specific service.
                </p>
              </div>

              <div id="terms-termination" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-600 leading-relaxed">
                  Either party may terminate services with written notice. Obligations incurred
                  prior to termination remain enforceable.
                </p>
              </div>

              <div id="terms-contact" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-600 leading-relaxed">
                  Questions about these Terms can be sent to
                  <Link href="mailto:info@vyzentech.in" className="text-primary hover:underline"> info@vyzentech.in</Link>.
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
