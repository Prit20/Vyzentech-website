'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface JobApplicationModalProps {
  isOpen: boolean;
  job: {
    id: number;
    title: string;
    location: string;
    experience: string;
  } | null;
  onClose: () => void;
  onSubmit: () => void;
}

export default function JobApplicationModal({ isOpen, job, onClose, onSubmit }: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    description: '',
    resume: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.experience.trim()) newErrors.experience = 'Year of experience is required';
    if (!formData.description.trim()) newErrors.description = 'Please describe yourself';
    if (!formData.resume) newErrors.resume = 'Resume/CV is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
      // Clear error for resume field
      if (errors.resume) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.resume;
          return newErrors;
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    onSubmit();

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      description: '',
      resume: null,
    });
    setErrors({});
  };

  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">{job.title}</h2>
            <p className="text-blue-100">{job.location}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-all ${
                errors.name
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 hover:border-primary focus:border-primary'
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-all ${
                errors.email
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 hover:border-primary focus:border-primary'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9999999999"
              className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-all ${
                errors.phone
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 hover:border-primary focus:border-primary'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Years of Experience */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Years of Experience *
            </label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 5 years"
              className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-all ${
                errors.experience
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 hover:border-primary focus:border-primary'
              }`}
            />
            {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
          </div>

          {/* About Yourself */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Tell us about yourself *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your skills, experience, and why you're interested in this position..."
              rows={4}
              className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-all resize-none ${
                errors.description
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 hover:border-primary focus:border-primary'
              }`}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Upload CV/Resume *
            </label>
            <div
              className={`relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all ${
                errors.resume
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 hover:border-primary bg-gray-50 hover:bg-blue-50'
              }`}
            >
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-sm text-gray-500">PDF, DOC or DOCX (Max 5MB)</p>
              </div>
            </div>
            {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg font-semibold text-gray-900 bg-gray-200 hover:bg-gray-300 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Apply Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
