'use client';
import React, { useState } from 'react';
import '../styles/contact.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  const steps = [
    { number: '01', text: 'Share Your Requirements', desc: 'Tell us about your project, goals and timeline.' },
    { number: '02', text: 'Free Strategy Call', desc: 'We\'ll schedule a call to discuss your needs in detail.' },
    { number: '03', text: 'Receive a Custom Proposal', desc: 'Get a clear, itemised proposal with no hidden costs.' },
    { number: '04', text: 'We Start Building', desc: 'Once approved, we hit the ground running immediately.' }
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Left Side Content Container - 50% Width */}
        <div className="contact-left">
          <div className="left-inner-wrapper">
            <span className="contact-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginRight: '6px' }}>
                <polygon points="12 2 2 22 12 17 22 22 12 2"/>
              </svg> 
              Free Consultation & Proposal
            </span>

            <h2 className="contact-title">
              Ready to Grow Your Business with <span className="highlight-text">Smart Digital Solutions?</span>
            </h2>

            <p className="contact-subtitle">
              Tell us about your project and our team will prepare a tailored, no-obligation strategy and proposal within 24 hours.
            </p>

            <h3 className="steps-heading">Here’s What Happens Next</h3>

            <div className="contact-steps">
              {steps.map((step, index) => (
                <div key={index} className="step-item">
                  <div className="step-number-wrapper">
                    <div className="step-number-box">{step.number}</div>
                    {index < steps.length - 1 && <div className="step-connector-line"></div>}
                  </div>
                  <div className="step-content">
                    <p className="step-text">{step.text}</p>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Card Container - 50% Width & Auto-Stretched */}
        <div className="contact-right">
          <div className="form-card">
            <h3 className="form-title">Send Us a Message</h3>

            {submitStatus === 'success' && (
              <div className="alert alert-success">✓ Message sent successfully!</div>
            )}
            {submitStatus === 'error' && (
              <div className="alert alert-error">✗ Error. Please try again.</div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                
                {/* Name Input */}
                <div className="form-group">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Input */}
                <div className="form-group">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Phone Input */}
                <div className="form-group">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone No."
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Company Input */}
                <div className="form-group">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="9" y1="22" x2="9" y2="16" />
                    <line x1="15" y1="22" x2="15" y2="16" />
                    <line x1="9" y1="16" x2="15" y2="16" />
                    <path d="M8 6h2v2H8V6zm4 0h2v2h-2V6zm4 0h2v2h-2V6zm-8 4h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
                  </svg>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="form-group textarea-group">
                <svg className="input-icon textarea-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending...' : 'Send My Free Proposal'}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>

            {/* Premium WhatsApp Card Bridge Link */}
            <div className="contact-whatsapp-bridge">
              <div className="whatsapp-divider">
                <span>OR CHAT DIRECTLY</span>
              </div>
              <a 
                href="https://wa.me/94740309534" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-card-link"
              >
                <div className="whatsapp-icon-bubble">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.412 1.451 5.428 0 9.845-4.414 9.848-9.843.002-2.631-1.022-5.102-2.884-6.964a9.774 9.774 0 0 0-6.963-2.88c-5.43 0-9.849 4.415-9.853 9.845-.002 1.983.513 3.919 1.494 5.641l-.988 3.605 3.692-.969zm11.332-6.84c-.313-.156-1.854-.915-2.131-1.016-.277-.1-.478-.156-.68.156-.201.312-.779.982-.955 1.183-.177.201-.353.226-.667.069a8.411 8.411 0 0 1-2.481-1.53 9.273 9.273 0 0 1-1.715-2.137c-.176-.312-.019-.481.137-.636.141-.14.313-.365.47-.547.156-.182.208-.312.313-.52.104-.208.052-.39-.026-.547-.078-.156-.68-1.638-.932-2.247-.247-.592-.497-.512-.68-.522-.176-.009-.377-.01-.578-.011-.201 0-.529.075-.806.377-.277.312-1.058 1.035-1.058 2.524 0 1.49 1.084 2.928 1.235 3.13.151.201 2.134 3.26 5.172 4.57 1.377.594 2.451.95 3.284 1.214.693.22 1.325.19 1.824.115.556-.083 1.854-.758 2.117-1.455.264-.698.264-1.299.186-1.425-.078-.126-.278-.201-.591-.357z"/>
                  </svg>
                </div>
                <div className="whatsapp-card-content">
                  <span className="wa-label">WHATSAPP</span>
                  <span className="wa-number">+94 74 030 9534</span>
                </div>
              </a>
            </div>

            <p className="submit-note">No commitment. No spam. Just results.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;