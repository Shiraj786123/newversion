'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, Rocket, Zap, Search, Layout, Smartphone, 
  BarChart3, ShieldCheck, Globe, ArrowRight, CheckCircle2,
  Users, Star, MousePointer2, RefreshCw, Lightbulb, Code, 
  Palette, Microscope, Plus, Minus 
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AIWebsiteDesign.css";

const AIWebsiteDesign = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { number: "150+", label: "Websites Delivered", icon: <Globe color="#38bdf8" /> },
    { number: "120+", label: "Clients Served", icon: <Users color="#a855f7" /> },
    { number: "35%", label: "Conversion Lift", icon: <BarChart3 color="#10b981" /> },
    { number: "4.9★", label: "Client Rating", icon: <Star color="#fbbf24" /> },
  ];

  const whatItNeeds = [
    { title: "Clear Messaging", icon: <Lightbulb color="#3b82f6" />, description: "Visitors decide within 3 seconds. Your site must communicate value immediately." },
    { title: "Fast Load Speed", icon: <Zap color="#eab308" />, description: "Build sites that score 90+ on Google PageSpeed to keep visitors engaged." },
    { title: "Conversion UX", icon: <MousePointer2 color="#f43f5e" />, description: "Strategic layouts that guide visitors naturally toward taking action." },
    { title: "Mobile-First", icon: <Smartphone color="#a855f7" />, description: "60% of traffic is mobile. We design perfectly for every screen size." },
    { title: "SEO Built In", icon: <Search color="#06b6d4" />, description: "Technical SEO, Schema markup and AI search optimisation from the start." },
  ];

  const services = [
    { title: "Business Design", icon: <Monitor color="#3b82f6" />, description: "Clean, professional website design for service businesses across the UK and USA." },
    { title: "Landing Pages", icon: <Rocket color="#f97316" />, description: "High-converting pages designed to remove friction and drive lead generation." },
    { title: "E-commerce", icon: <Zap color="#eab308" />, description: "Online stores built to turn browsers into buyers and increase order value." },
    { title: "AI-Enhanced", icon: <RefreshCw color="#10b981" />, description: "Smart chatbots and personalised content that adapt to visitor behaviour." },
    { title: "Redesign", icon: <ShieldCheck color="#6366f1" />, description: "Modernising existing sites for performance without losing SEO value." },
    { title: "WordPress", icon: <Globe color="#06b6d4" />, description: "Custom WordPress sites with premium security and full optimisation." },
  ];

  const whyChoose = [
    { title: "Conversion-First", description: "Every decision is driven by what converts — not just what looks impressive." },
    { title: "AI-Powered Tools", description: "We use AI to identify the highest-converting structures for our clients." },
    { title: "Affordable UK Scale", description: "Premium UK quality at offshore pricing. No compromise on communication." },
    { title: "Full-Stack Team", description: "One team handles strategy, design, development, copywriting and SEO." },
    { title: "Fast Turnaround", description: "Websites delivered in 4-6 weeks. Landing pages within 1-2 weeks." },
  ];

  const processSteps = [
    { step: "01", icon: <Microscope color="#3b82f6" />, title: "Discovery", description: "Learning your audience and conversion goals." },
    { step: "02", icon: <Layout color="#a855f7" />, title: "Planning", description: "Wireframing the blueprint before design begins." },
    { step: "03", icon: <Palette color="#f43f5e" />, title: "Visual Design", description: "UI aligned with your brand and optimized for leads." },
    { step: "04", icon: <Code color="#10b981" />, title: "Development", description: "Clean code testing across all devices and browsers." },
    { step: "05", icon: <Rocket color="#f97316" />, title: "Launch & SEO", description: "Deployment with analytics and ongoing optimization." },
  ];

  const faqs = [
    { question: "How much does website design cost in the UK?", answer: "Our packages are priced specifically to be affordable for small businesses. As an offshore agency we offer significantly better value than UK studios." },
    { question: "How long does it take to design a website?", answer: "A standard business website takes 4 to 6 weeks. Landing pages can be delivered in 1 to 2 weeks." },
    { question: "Do you design mobile-friendly websites?", answer: "Yes — every website we design is mobile-first, ensuring a perfect experience on all screen sizes." },
    { question: "Is SEO included in your website design?", answer: "Yes. Technical SEO is built-in — including heading structure, speed, and schema markup." },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1200],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } },
    },
  };

  const examples = [
  "Intelligent dashboards & reporting",
  "AI-powered SaaS platforms",
  "GPT-powered customer tools",
  "Automated lead qualification",
  "AI recommendation engines",
  "Internal workflow automation",
  "Predictive analytics platforms",
  "AI chatbots & virtual assistants",
];

  return (
    <div className="aiwd-master-wrapper">
      <Navbar />
      <Breadcrumb />

      {/* --- HERO --- */}
     {/* ================= HERO SECTION (STATIC) ================= */}
<section className="aiwd-hero">
  <div className="aiwd-container">
    <div className="aiwd-hero-content">
      {/* Badge */}
      <span className="aiwd-hero-badge">
        AI Web Design & Development Agency
      </span>

      {/* Heading */}
      <h1 className="aiwd-hero-title">
        AI Website Design That Turns Visitors Into Customers
      </h1>

      {/* Subtext */}
      <p className="aiwd-hero-subtext">
        We build high-converting AI-powered websites for UK & USA businesses —
        combining modern UI, conversion psychology, and performance engineering.
      </p>

      {/* CTA Buttons */}
      <div className="aiwd-hero-actions">
        <a href="/contact" className="aiwd-btn-primary">
          Get Free Consultation
        </a>
        <a href="#work" className="aiwd-btn-secondary">
          View Our Work
          →

        </a>
      </div>

      {/* Trust Text */}
      <p className="aiwd-hero-trust">
        Trusted by 120+ businesses across the UK, USA & Europe
      </p>
    </div>
  </div>
</section>

      {/* --- STATS --- */}
      <section className="aiwd-stats-bar" id="work">
        <div className="aiwd-container aiwd-stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="aiwd-stat-item">
              <div className="aiwd-stat-icon-circle">{stat.icon}</div>
              <div className="aiwd-stat-txt">
                <span className="aiwd-stat-num">{stat.number}</span>
                <span className="aiwd-stat-lab">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY FAIL --- */}
   


{/* SECTION 3 - INTRO / AI EXPLANATION */}
<section className="aiwd-intro-section">
  <div className="aiwd-container">

    {/* Title */}
    <div className="aiwd-section-head">
      <h2 className="aiwd-section-title">
        What Is AI Web Application Development?
      </h2>

      <p className="aiwd-section-subtext">
        AI web applications combine modern web systems with machine learning and LLMs to automate tasks, improve decisions, and deliver smarter user experiences.
      </p>
    </div>

    {/* AI EXPLAINER BLOCK */}
    <div className="aiwd-ai-explainer">

      <div className="aiwd-ai-badge">
        <span>AI</span>
      </div>

      <div className="aiwd-ai-text">
        <h3>Smarter Than Traditional Web Apps</h3>
        <p>
          Unlike static applications, AI-powered systems learn from user behavior,
          adapt in real-time, and continuously improve performance without manual updates.
        </p>

        <p>
          This gives UK & USA businesses a major competitive advantage in automation,
          customer experience, and data-driven decision making.
        </p>
      </div>

    </div>

    {/* EXAMPLES GRID */}
    <div className="aiwd-example-grid">
      {examples.map((item, index) => (
        <div key={index} className="aiwd-example-card">
          <span className="aiwd-check">✔</span>
          <span>{item}</span>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* --- MOVING SERVICES --- */}
      <section className="aiwd-section">
        <div className="aiwd-container">
          <h2 className="aiwd-section-title aiwd-moving-gradient-navy">Our Design & Development Services</h2>
        </div>
        <div className="aiwd-marquee-container">
          <motion.div className="aiwd-marquee-track" variants={marqueeVariants} animate="animate">
            {[...services, ...services].map((service, i) => (
              <div key={i} className="aiwd-row-card">
                <div className="aiwd-card-icon-circle">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- MOVING WHY CHOOSE --- */}
      <section className="aiwd-section aiwd-navy-bg">
        <div className="aiwd-container">
          <h2 className="aiwd-section-title aiwd-moving-gradient-white">Why Businesses Choose Us</h2>
        </div>
        <div className="aiwd-marquee-container">
          <motion.div className="aiwd-marquee-track" variants={marqueeVariants} animate="animate">
            {[...whyChoose, ...whyChoose].map((item, i) => (
              <div key={i} className="aiwd-row-card-white">
                <div className="aiwd-card-icon-glass"><CheckCircle2 color="#38bdf8" /></div>
                <h3 className="white-txt">{item.title}</h3>
                <p className="white-txt-muted">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS (HORIZONTAL) --- */}
      <section className="aiwd-section fswd-soft-bg">
        <div className="aiwd-container">
          <h2 className="aiwd-section-title aiwd-moving-gradient-navy">Our Website Design Process</h2>
          <div className="aiwd-process-horizontal">
            {processSteps.map((item, i) => (
              <div key={i} className="aiwd-process-step-col">
                <div className="aiwd-step-circle">
                  {item.icon}
                  <span className="aiwd-step-num-badge">{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {i < processSteps.length - 1 && <div className="aiwd-process-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* --- FAQ --- */}
<section className="aiwd-faq-section">
  <div className="aiwd-container">
    <h2 className="aiwd-section-title">Frequently Asked Questions</h2>
    <div className="aiwd-faq-wrap">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`aiwd-faq-item ${activeFaq === i ? "active" : ""}`}
          onClick={() =>
            setActiveFaq(activeFaq === i ? null : i)
          }
        >
          <div className="aiwd-faq-q">
            <span>{faq.question}</span>
            {activeFaq === i ? (
              <Minus size={20} />
            ) : (
              <Plus size={20} />
            )}
          </div>

          <AnimatePresence>
            {activeFaq === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="aiwd-faq-a"
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </div>
</section>

{/* --- MID CTA --- */}
<section className="aiwd-cta-section">
  <div className="aiwd-container">
    <div className="aiwd-cta-card">
      <h2 className="aiwd-cta-title">
        Ready to Build an AI-Powered Website?
      </h2>

      <p className="aiwd-cta-text">
        Let’s design a high-converting, AI-driven website tailored for your
        business — optimized for performance, UX, and conversions.
      </p>

      <div className="aiwd-hero-actions">
        <a href="/contact" className="aiwd-btn-primary">
          Get Free Consultation
        </a>

        <a href="#work" className="aiwd-btn-secondary">
          View Our Work →
        </a>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default AIWebsiteDesign;