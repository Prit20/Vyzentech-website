'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobApplicationModal from '@/components/JobApplicationModal';
import GetInTouchModal from '@/components/GetInTouchModal';
import { Briefcase, Users, Zap, Trophy } from 'lucide-react';

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGetInTouchOpen, setIsGetInTouchOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      location: 'Surat, Gujarat',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for an experienced Full Stack Developer to join our growing team.',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      location: 'Surat, Gujarat',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and intuitive designs for web and mobile applications.',
    },
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Continuous learning and career advancement opportunities in a growing company.',
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with talented and passionate professionals in a collaborative environment.',
    },
    {
      icon: Zap,
      title: 'Latest Technology',
      description: 'Stay updated with cutting-edge tools and frameworks in the industry.',
    },
    {
      icon: Trophy,
      title: 'Competitive Package',
      description: 'Attractive salary, bonuses, and comprehensive benefits package.',
    },
  ];

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleApplicationSubmit = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setShowSuccess(true);

    // Auto-hide success message after 4 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  const handleGetInTouchSubmit = () => {
    setIsGetInTouchOpen(false);
    setShowSuccess(true);

    // Auto-hide success message after 4 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    <>
      <Navbar />

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-50 animate-fade-in">
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-4 rounded-lg shadow-2xl max-w-md">
            <h3 className="font-bold text-lg mb-1">Thank you for your interest! 🎉</h3>
            <p>We've received your application and will review it shortly. We'll contact you soon!</p>
          </div>
        </div>
      )}

      {/* Job Application Modal */}
      <JobApplicationModal
        isOpen={isModalOpen}
        job={selectedJob}
        onClose={handleModalClose}
        onSubmit={handleApplicationSubmit}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 md:py-28">
        <div className="container-custom text-center">
          <p className="section-subtitle">JOIN OUR TEAM</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career <span className="text-gradient">Opportunities</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Be part of Vyzentech and help us transform businesses with innovative IT solutions.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join <span className="text-gradient">Vyzentech</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-light p-8 rounded-2xl text-center hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Explore exciting opportunities to grow with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border-l-4 border-primary">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.location}</p>
                  </div>
                  <span className="bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                    {job.type}
                  </span>
                </div>

                <div className="flex gap-4 mb-4">
                  <span className="text-sm text-gray-500">📅 {job.experience}</span>
                </div>

                <p className="text-gray-600 mb-6">{job.description}</p>

                <button
                  onClick={() => handleApplyClick(job)}
                  className="btn-primary w-full hover:scale-105 transition-transform"
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Didn't find a position?
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Send us your resume and we'll keep it on file for future opportunities.
          </p>
          <button
            onClick={() => setIsGetInTouchOpen(true)}
            className="bg-white text-primary px-8 py-4 font-bold rounded-lg hover:bg-gray-100 transition-all inline-block cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* Get In Touch Modal */}
      <GetInTouchModal
        isOpen={isGetInTouchOpen}
        onClose={() => setIsGetInTouchOpen(false)}
        onSubmit={handleGetInTouchSubmit}
      />

      <Footer />
    </>
  );
}
