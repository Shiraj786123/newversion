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
    { number: '01', text: '01 — Share Your Requirements', desc: 'Tell us about your project, goals and timeline.' },
    { number: '02', text: '02 — Free Strategy Call', desc: 'We\'ll schedule a call to discuss your needs in detail.' },
    { number: '03', text: '03 — Receive a Custom Proposal', desc: 'Get a clear, itemised proposal with no hidden costs.' },
    { number: '04', text: '04 — We Start Building', desc: 'Once approved, we hit the ground running immediately.' }
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Left Side Content Container */}
        <div className="contact-left">
          <div className="left-inner-wrapper">
            <span className="contact-badge">
              <i className="fa-regular fa-comment-alt"></i> Free Consultation & Proposal
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

        {/* Right Side Card Container */}
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
                <div className="form-group">
                  <i className="fa-regular fa-user input-icon"></i>
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

                <div className="form-group">
                  <i className="fa-regular fa-envelope input-icon"></i>
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

                <div className="form-group">
                  <i className="fa-solid fa-phone input-icon"></i>
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

                <div className="form-group">
                  <i className="fa-regular fa-building input-icon"></i>
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

              <div className="form-group textarea-group">
                <i className="fa-regular fa-comment input-icon textarea-icon"></i>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  rows="7"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending...' : 'Send My Free Proposal'}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              
              <p className="submit-note">No commitment. No spam. Just results.</p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;