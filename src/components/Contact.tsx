import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Send, CheckCircle2, AlertCircle, Building2, ExternalLink, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactProps {
  prefillSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefillSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: prefillSubject || 'General Inquiry',
    message: '',
  });

  useEffect(() => {
    if (prefillSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: `Product Inquiry: ${prefillSubject}`,
      }));
    }
  }, [prefillSubject]);

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      errors.phone = 'Please provide a valid phone number';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please provide a message or inquiry details';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate realistic submission latency
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 700);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: '',
    });
    setFormErrors({});
    setIsSubmitted(false);
  };

  // Google Maps / OpenStreetMap external directions link for Korangi Industrial Area, Karachi
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Plot No. 209, Shah Muhammad Rd, Sector 23, Korangi Industrial Area, Karachi, 74900, Pakistan'
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 text-balance">
            Contact Bosch Pharmaceuticals
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            For product information, institutional inquiries, or distributor correspondence, please reach our administrative and corporate team in Karachi, Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Company Contact Information & Embedded Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 pb-3 border-b border-slate-200">
                Corporate Office
              </h3>

              {/* Company Name */}
              <div className="flex items-start gap-4">
                <Building2 className="w-5 h-5 text-blue-900 shrink-0 mt-1" />
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                    Company Name
                  </span>
                  <span className="text-base font-bold text-slate-900">
                    {COMPANY_INFO.name}
                  </span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-blue-900 shrink-0 mt-1" />
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                    Facility & Office Address
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {COMPANY_INFO.address.plot},<br />
                    {COMPANY_INFO.address.sector},<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postalCode},<br />
                    {COMPANY_INFO.address.country}
                  </p>
                  <a
                    href={mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-800 mt-2"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone with Click-to-Call */}
              <div className="flex items-start gap-4 pt-2 border-t border-slate-200">
                <Phone className="w-5 h-5 text-blue-900 shrink-0 mt-1" />
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                    Contact Number
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-lg font-bold text-blue-900 hover:text-blue-700 transition-colors inline-block"
                    title="Click to call Bosch Pharmaceuticals"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    Click to initiate phone call directly
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded Map Container */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100">
              <div className="px-4 py-2.5 bg-slate-900 text-white flex items-center justify-between text-xs font-medium">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sector 23, Korangi Industrial Area, Karachi</span>
                </span>
                <span className="text-slate-400">Karachi, PK</span>
              </div>
              <div className="h-64 sm:h-72 w-full relative">
                {/* Clean OpenStreetMap iframe embed centered around Korangi Industrial Area Karachi (24.8358, 67.1352) */}
                <iframe
                  title="Bosch Pharmaceuticals Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=67.1152%2C24.8200%2C67.1552%2C24.8500&amp;layer=mapnik&amp;marker=24.8358%2C67.1352"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-white text-center border-t border-slate-200">
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-800"
                >
                  <span>Open Full Directions in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Please complete the form below. Our corporate relations team will review your message promptly.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-white rounded-xl border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Inquiry Received Successfully
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                      Thank you for reaching out to Bosch Pharmaceuticals. We have registered your message and our team will contact you at <span className="font-semibold text-slate-900">{formData.email}</span> or <span className="font-semibold text-slate-900">{formData.phone}</span>.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Dr. Tariq Mahmood / Sarah Khan"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                      }}
                      className={`w-full px-4 py-2.5 text-sm bg-white rounded-lg border focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-colors ${
                        formErrors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                        }}
                        className={`w-full px-4 py-2.5 text-sm bg-white rounded-lg border focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-colors ${
                          formErrors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="e.g. 0300-1234567"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                        }}
                        className={`w-full px-4 py-2.5 text-sm bg-white rounded-lg border focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-colors ${
                          formErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject / Category Selection */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Department / Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="General Inquiry">General Corporate Inquiry</option>
                      <option value="Product Information">Product Portfolio Information</option>
                      <option value="Distribution & Supply">Distribution & Pharmacy Supply</option>
                      <option value="Quality & Compliance">Quality Assurance & Compliance</option>
                      <option value="Institutional Procurement">Hospital & Institutional Procurement</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Please specify your organization name, requirements, or inquiry details..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                      }}
                      className={`w-full px-4 py-2.5 text-sm bg-white rounded-lg border focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-colors ${
                        formErrors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 disabled:bg-blue-400 rounded-lg transition-colors shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
