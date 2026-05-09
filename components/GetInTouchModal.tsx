'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export default function GetInTouchModal({ isOpen, onClose, onSubmit }: GetInTouchModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    technology: '',
    description: '',
    resume: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.technology.trim()) {
      newErrors.technology = 'Technology/Skills is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe yourself';
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume/CV is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));

    // Clear error for resume when user uploads
    if (errors.resume) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.resume;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        technology: '',
        description: '',
        resume: null,
      });
      setErrors({});
      onClose();
      onSubmit();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 flex justify-between items-start sticky top-0 z-10">
          <div>
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-white text-opacity-90 mt-2">Send us your resume and we'll keep it on file</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          {/* Full Name */}
          <div className="mb-6">
            <label className="block text-gray-900 font-semibold mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                errors.name
                  ? 'border-red-500 bg-red-50 focus:border-red-500'
                  : 'border-gray-300 focus:border-primary'
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-900 font-semibold mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                errors.email
                  ? 'border-red-500 bg-red-50 focus:border-red-500'
                  : 'border-gray-300 focus:border-primary'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          {/* Technology */}
          <div className="mb-6">
            <label className="block text-gray-900 font-semibold mb-2">
              Technology/Skills You Know <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="technology"
              value={formData.technology}
              onChange={handleInputChange}
              placeholder="e.g., React, Node.js, Python, etc."
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                errors.technology
                  ? 'border-red-500 bg-red-50 focus:border-red-500'
                  : 'border-gray-300 focus:border-primary'
              }`}
            />
            {errors.technology && (
              <p className="text-red-500 text-sm mt-2">{errors.technology}</p>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-900 font-semibold mb-2">
              Tell us about yourself <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your skills, experience, and what you're looking for..."
              rows={4}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                errors.description
                  ? 'border-red-500 bg-red-50 focus:border-red-500'
                  : 'border-gray-300 focus:border-primary'
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-2">{errors.description}</p>
            )}
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-2">
              Upload CV/Resume <span className="text-red-500">*</span>
            </label>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                errors.resume
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 hover:border-primary'
              }`}
            >
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="resume-upload"
              />
              <label htmlFor="resume-upload" className="cursor-pointer block">
                {formData.resume ? (
                  <div>
                    <p className="font-semibold text-gray-900">{formData.resume.name}</p>
                    <p className="text-gray-500 text-sm mt-2">PDF, DOC or DOCX (Max 5MB)</p>
                  </div>
                ) : (
                  <>
                    <p className="font-semibold text-gray-900 mb-2">Click to upload or drag and drop</p>
                    <p className="text-gray-500 text-sm">PDF, DOC or DOCX (Max 5MB)</p>
                  </>
                )}
              </label>
            </div>
            {errors.resume && (
              <p className="text-red-500 text-sm mt-2">{errors.resume}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
