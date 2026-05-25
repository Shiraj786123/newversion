'use client';
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", company: "", phone: "", email: "", project: "" });
  const [budget, setBudget] = useState(5000);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
    }, 1200);
  };

  const handleResend = () => {
    setIsSuccess(false);
    setFormData({ name: "", company: "", phone: "", email: "", project: "" });
    setSelectedService("");
    setBudget(5000);
  };

  const percentage = ((budget - 5000) / (65000 - 5000)) * 100;

  const faqs = [
    { q: "How quickly do you respond to enquiries?", a: "We respond to all enquiries within 24 hours — usually much faster during UK and USA business hours." },
    { q: "Do you work with businesses in the UK and USA?", a: "Yes — the majority of our clients are based in the UK, USA and Europe. We work fully remotely across time zones." },
    { q: "Is the initial consultation really free?", a: "Yes. Our initial consultation is completely free with no commitment required. We provide honest, practical advice." },
    { q: "What information should I include in my message?", a: "The more context you give us the better. Tell us what you need, your rough timeline, and your business goals." },
    { q: "Do you offer fixed price projects or monthly retainers?", a: "We offer both. Fixed price for one-off projects and monthly retainers for ongoing optimization." },
  ];

  return (
    <div className="cp__wrapper">
      <Navbar />

      {/* 1. HERO SECTION - CENTERED */}
      <section className="cp__bar_hero">
        <div className="cp__container">
          <Breadcrumb />
          <h1 className="cp__heading">
            Let's Build Something <span className="text_light_blue">Great Together</span>
          </h1>
          <p className="cp__hero_text_white">
            Whether you need a new website, an SEO strategy, AI automation or a full digital growth plan.
          </p>
        </div>
      </section>

      {/* 2. CONTACT BUTTONS & FORM SECTION */}
      <section className="cp__contact_section grey_bar">
        <div className="cp__container">
          <div className="cp__contact_wrapper">
            
            {/* Left Column (2/3 Width) - Message Form Card */}
            <div className="cp__form_box">
              {isSuccess ? (
                <div className="success_container">
                  <div className="success_icon">🎉</div>
                  <h2 className="cp__title_dark">Thank You!</h2>
                  <p>We will get back to you within 24 hours.</p>
                  <button onClick={handleResend} className="resend_btn">Send Another Message</button>
                </div>
              ) : (
                <form className="cp__form_actual" onSubmit={handleSubmit}>
                  <h2 className="cp__title_dark">Send Us a Message</h2>
                  
                  <div className="form_row">
                    <input type="text" name="name" placeholder="Your Name*" value={formData.name} onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder="Email Address*" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  
                  <div className="form_row">
                    <input type="text" name="company" placeholder="Company / Organization" value={formData.company} onChange={handleInputChange} />
                    <input type="tel" name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                  
                  <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
                    <option value="">You are interested in...</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Web Dev">Website Development</option>
                  </select>
                  
                  <div className="budget_wrap">
                    <label>Budget: ${budget.toLocaleString()}</label>
                    <input 
                      type="range" 
                      min="5000" 
                      max="65000" 
                      step="500" 
                      value={budget} 
                      onChange={(e) => setBudget(Number(e.target.value))} 
                      style={{ background: `linear-gradient(to right, #1296ec ${percentage}%, #ddd ${percentage}%)` }} 
                    />
                  </div>
                  
                  <textarea name="project" placeholder="Tell us about the project..." value={formData.project} onChange={handleInputChange} required></textarea>
                  
                  {/* ==========================================================================
                      UPDATED SUBMIT BUTTON TEXT: "submit" ONLY
                      ========================================================================== */}
                  <button type="submit" className="submit_btn" disabled={isSubmitting}>
                    {isSubmitting ? "sending..." : "submit"}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column (1/3 Width) - Stretched Vertical Contact Buttons */}
            <div className="cp__button_column">
              <a href="mailto:info@zonzoctech.com" className="cp__btn_card">
                <span className="cp__card_icon">📩</span>
                <div className="cp__card_content">
                  <h3>Email Us</h3>
                  <p>info@zonzoctech.com</p>
                </div>
              </a>
              
              <a href="https://wa.me/94740309534" className="cp__btn_card">
                <span className="cp__card_icon">💬</span>
                <div className="cp__card_content">
                  <h3>WhatsApp</h3>
                  <p>+94 74 030 9534</p>
                </div>
              </a>
              
              <div className="cp__btn_card no_hover">
                <span className="cp__card_icon">🕒</span>
                <div className="cp__card_content">
                  <h3>Working Hours</h3>
                  <p>Mon-Fri (9am-6pm)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="cp__bar_process white_bar">
        <div className="cp__container">
          <h2 className="cp__title_dark">What Happens After You Contact Us</h2>
          <div className="cp__grid_4">
            {[
              { t: "We Review Your Message", d: "We carefully review every enquiry and research your business, website, and market before responding with the right recommendations for you." },
              { t: "Free Strategy Session", d: "We schedule a free consultation call to discuss your goals, challenges, and the best solution tailored to your business and growth plans." },
              { t: "Custom Proposal", d: "We provide a clear itemised proposal with transparent pricing, timelines, and deliverables tailored perfectly to your goals, budget, and needs." },
              { t: "We Start Building", d: "Once approved, our dedicated team gets started immediately with clear milestones, regular updates, and a smooth process from day one." }
            ].map((s, i) => (
              <div key={i} className="cp__aligned_card hover_effect_card">
                <div className="node_ui"><div className="circle">{i + 1}</div>{i < 3 && <div className="line"></div>}</div>
                <h4 className="card_title">{s.t}</h4>
                <div className="center_desc_wrapper"><p className="card_desc_aligned">{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRUST SECTION */}
      <section className="cp__bar_trust grey_bar">
        <div className="cp__container">
          <h2 className="cp__title_dark">Why Businesses Trust ZonzocTech</h2>
          <div className="cp__grid_4">
            {[
              { i: "⚡", t: "24 Hour Response Guarantee", d: "We respond to every enquiry within 24 hours — no chasing or waiting weeks for updates or quotes from our team." },
              { i: "🤝", t: "No Obligation Consultation", d: "Your initial consultation is free with no commitment required — just honest advice tailored to your business goals and needs." },
              { i: "💎", t: "Transparent Pricing", d: "No hidden fees or surprise costs. Every proposal is clearly outlined, fully transparent, and agreed upfront before any work begins." },
              { i: "👥", t: "Dedicated Project Team", d: "You get direct access to your project team throughout the entire process — with clear communication from day one." }
            ].map((p, idx) => (
              <div key={idx} className="cp__aligned_card hover_effect_card">
                <div className="card_icon_real">{p.i}</div>
                <h4 className="card_title">{p.t}</h4>
                <div className="center_desc_wrapper"><p className="card_desc_aligned">{p.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="cp__bar_faq white_bar">
        <div className="cp__container">
          <h2 className="cp__title_dark">Frequently Asked Questions</h2>
          <div className="cp__faq_narrow_container">
            <div className="cp__accordion">
              {faqs.map((f, i) => (
                <details key={i} className="faq_item">
                  <summary>
                    <div className="faq_q_text"><span>{i + 1}.</span> {f.q}</div>
                    <span className="plus_icon">+</span>
                  </summary>
                  <div className="faq_ans">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;