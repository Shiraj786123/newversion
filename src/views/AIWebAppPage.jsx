'use client';
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AIWebAppPage.css";

const AIWebAppDev = () => {
  const stats =[
    { number: "150+", label: "Projects Delivered" },
    { number: "120+", label: "Clients Served" },
    { number: "10+", label: "Years Experience" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const services = [
    { i: "🚀", t: "AI SaaS Platform Development", points:["Scalable multi-tenant builds.", "Subscription billing engines.", "Advanced user management.", "AI feature integration logic."] },
    { i: "🧠", t: "GPT & LLM Web Applications", points:["OpenAI & Claude integration.", "Context-aware smart search.", "Automated content generation.", "Intelligent business workflows."] },
    { i: "⚙️", t: "AI Business Automation Tools", points:["Automated data entry layers.", "Report generation systems.", "Lead qualification automation.", "Customer communication tools."] },
    { i: "📊", t: "AI Dashboards & Analytics", points:["Live data processing feeds.", "Predictive analysis models.", "Actionable business insights.", "Smart data visualizations."] },
    { i: "🤖", t: "AI Chatbots & Assistants", points:["24/7 customer query handling.", "Lead capture & qualification.", "Automated appointment booking.", "Seamless system escalation."] },
    { i: "🔌", t: "API & Third Party Integrations", points:["Integrating existing web apps.", "Custom AI API development.", "Third-party tool connection.", "Minimal rebuild requirements."] }
  ];

  const whyChoosePoints = [
    { i: "✅", t: "AI-First Approach", points:["Design with AI at the core.", "Optimal model selection data.", "Strategic integration points.", "Future-ready scalability."] },
    { i: "✅", t: "Full-Stack Expertise", points:["Frontend and Backend teams.", "Database architecture setup.", "Secure cloud deployment.", "End-to-end code ownership."] },
    { i: "✅", t: "Business-Focused Dev", points:["Real-world business outcomes.", "Measurable ROI features.", "Value-driven user experience.", "Competitive market advantage."] },
    { i: "✅", t: "Affordable UK Agency", points:["Competitive offshore rates.", "Local UK agency quality.", "Transparent cost models.", "Zero hidden fee billing."] },
    { i: "✅", t: "Long-Term Partnership", points:["Launch day optimization.", "Ongoing feature development.", "Continuous tech maintenance.", "Growth-aligned support model."] },
    { i: "✅", t: "Technical Excellence", points:["Clean maintainable code.", "Rigorous testing standards.", "Modern framework usage.", "Scalable system performance."] }
  ];

  const processSteps =[
    { n: "1", t: "Discovery & Strategy", i: "✨", d: <>Defining business goals,<br/>user workflows and<br/>identify the perfect AI<br/>use cases for growth.</> },
    { n: "2", t: "Architecture & Design", i: "📐", d: <>Designing data flows,<br/>AI models, and the UI/UX<br/>technical blueprint for a<br/>robust system build.</> },
    { n: "3", t: "Agile Development", i: "💻", d: <>Building in agile sprints<br/>with regular demos to<br/>ensure total transparency<br/>and iterative releases.</> },
    { n: "4", t: "Testing & Quality", i: "🚀", d: <>Thorough performance and<br/>security audits including<br/>AI accuracy and real<br/>edge case validation.</> },
    { n: "5", t: "Launch & Support", i: "⚙️", d: <>Full deployment followed<br/>by ongoing optimization<br/>and scaling to keep your<br/>system ahead of rivals.</> }
  ];

  const technologies =[
    { c: "Frontend", icon: "https://img.icons8.com/color/96/react-native.png", items:["React & Next.js", "TypeScript", "Tailwind CSS"] },
    { c: "Backend", icon: "https://img.icons8.com/color/96/nodejs.png", items:["Node.js", "Java & Spring Boot", "Python"] },
    { c: "AI & ML", icon: "https://img.icons8.com/color/96/artificial-intelligence.png", items:["OpenAI GPT & API", "LangChain", "TensorFlow"] },
    { c: "Infrastructure", icon: "https://img.icons8.com/color/96/amazon-web-services.png", items:["AWS & Google Cloud", "Docker", "CI/CD pipelines"] },
    { c: "Databases", icon: "https://img.icons8.com/color/96/database.png", items:["PostgreSQL & MongoDB", "Firebase", "Redis"] },
    { c: "Security & QA", icon: "https://img.icons8.com/color/96/security-shield.png", items:["OWASP Standards", "Jest & Cypress", "Performance Testing"] },
  ];

  return (
    <div className="aiwa__wrapper">
      <Navbar />
      <Breadcrumb />

     {/* 1. HERO */}
<section className="aiwa__bar_hero">
  <div className="aiwa__container">
    <h1 className="aiwa__heading">
      AI Web Application Development for{" "}
      <span className="text_light_blue">UK & USA Businesses</span>
    </h1>

    <p className="aiwa__hero_text_white">
      ZonzocTech builds custom AI-powered web applications. From intelligent
      dashboards to GPT-powered tools — we scale your business growth.
    </p>

    {/* CTA BUTTONS */}
    <div className="aiwa__hero_actions">
      <a href="/contact" className="aiwa__btn_primary">
        Get Free Consultation
      </a>
      <a href="/#portfolio" className="aiwa__btn_secondary">
        View Portfolio→
      </a>
    </div>

    {/* TRUST TEXT */}
    <p className="aiwa__hero_trust_text">
      Trusted by 120+ businesses across the UK, USA & Europe
    </p>
  </div>
</section>

{/* 2. STATS BAR */}
<section className="aiwa__stats_section">
  <div className="aiwa__container">
    <div className="aiwa__stats_border_box">
      {stats.map((s, i) => (
        <div key={i} className="stat_item">
          <span className="stat_num">{s.number}</span>
          <span className="stat_lbl">{s.label}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 3. INTRODUCTION */}
      <section className="aiwa__section white_bar">
        <div className="aiwa__container">
          <h2 className="aiwa__title_dark">What Is AI Web Application Development?</h2>
          <div className="aiwa__bar_row">
            <div className="aiwa__bar_num"><h2>AI</h2></div>
            <div className="aiwa__bar_content">
              <p>AI development uses artificial intelligence to automate tasks, analyze data, and personalize experiences without manual intervention. Unlike standard apps, these learn from data and improve over time, providing a major competitive edge for UK and USA businesses.</p>
            </div>
          </div>
          <h3 className="aiwa__grid_title">Examples of AI Web Applications We Build:</h3>
          <div className="aiwa__grid_examples_fixed">
            {[ "Intelligent dashboards & reporting", "AI-powered SaaS platforms", "GPT powered customer tools", "Automated lead qualification", "AI recommendation engines", "Internal workflow automation", "Predictive analytics platforms", "AI chatbots & virtual assistants" ].map((item, index) => (
              <div key={index} className="aiwa__example_bar_card hover_lift_bar">
                <span className="check_icon_purple">✔️</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="aiwa__section grey_bar">
        <div className="aiwa__container">
          <h2 className="aiwa__title_dark">Custom AI Web App Services</h2>
          <div className="aiwa__grid_3">
            {services.map((s, i) => (
              <div key={i} className="aiwa__service_box hover_lift">
                <div className="aiwa__box_icon">{s.i}</div>
                <h4 className="aiwa__box_title_left">{s.t}</h4>
                <ul className="aiwa__card_bullets_left">
                  {s.points.map((p, idx) => <li key={idx}><span>›</span> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
{/* 5. PROCESS SECTION */}
<section className="aiwa__section process-section">
  <div className="aiwa__container">
    {/* Section Label */}
    <div className="process-label">Our Process</div>

    {/* Heading */}
    <h2 className="aiwa__title_dark">
      Our Proven <span className="text_light_blue">5-Step Process</span>
    </h2>

    {/* Subtitle */}
    <p className="process-subtitle">
      We follow a structured methodology to design, build, and launch AI-powered web applications.
    </p>

    {/* Process Steps */}
    <div className="steps-grid">
      {[
        {
          number: "1",
          icon: "🔍",
          title: "Discovery",
          description:
            "We learn your goals. We review workflows. We find AI opportunities. We define a roadmap."
        },
        {
          number: "2",
          icon: "📐",
          title: "Planning",
          description:
            "We design the architecture. We map features. We choose AI tools. We prepare specifications."
        },
        {
          number: "3",
          icon: "💻",
          title: "Development",
          description:
            "We build the application. We integrate AI features. We gather feedback. We refine each sprint."
        },
        {
          number: "4",
          icon: "🧪",
          title: "Validation",
          description:
            "We test all functions. We verify performance. We check AI accuracy. We fix all issues."
        },
        {
          number: "5",
          icon: "🚀",
          title: "Launch",
          description:
            "We deploy securely. We monitor usage. We provide support. We deliver enhancements."
        }
      ].map((step, index) => (
        <div key={index} className="step-card">
          <div className="step-circle">
            <span>{step.icon}</span>
          </div>

          <div className="step-number">{step.number}</div>

          <h3 className="step-title">{step.title}</h3>
          <p className="step-description">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* 6. WHY CHOOSE SECTION */}
      <section className="aiwa__section grey_bar">
        <div className="aiwa__container">
          <h2 className="aiwa__title_dark">Why UK & USA Businesses Choose ZonzocTech</h2>
          <div className="aiwa__grid_3">
            {whyChoosePoints.map((w, i) => (
              <div key={i} className="aiwa__service_box hover_lift">
                <div className="aiwa__box_icon">{w.i}</div>
                <h4 className="aiwa__box_title_left">{w.t}</h4>
                <ul className="aiwa__card_bullets_left">
                  {w.points.map((p, idx) => <li key={idx}><span>›</span> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TECH GRID */}
      <section className="aiwa__section white_bar">
        <div className="aiwa__container">
          <h2 className="aiwa__title_dark">Technologies We Use</h2>
          <div className="aiwa__grid_3">
            {technologies.map((t, i) => (
              <div key={i} className="tech_box_full hover_lift">
                <div className="tech_box_head">
                  <img src={t.icon} alt={t.c} style={{ width: '32px', height: '32px', objectFit: 'contain' }} /> 
                  {t.c}
                </div>
                <div className="tech_pills_wrap">
                    {t.items.map((item, j) => <span key={j} className="tech_pill">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="aiwa__section grey_bar">
        <div className="aiwa__container">
          <h2 className="aiwa__title_dark">Frequently Asked Questions</h2>
          <div className="aiwa__faq_narrow">
            {[
                {q:"How much does it cost?", a:"Cost depends on complexity and features. As an offshore agency, we offer significantly more competitive pricing than UK-based studios without compromising quality."},
                {q:"How long does it take?", a:"Simple tools take 4-8 weeks, while full SaaS platforms typically take 3-6 months. We provide clear timelines before any work begins."},
                {q:"Can you add AI to existing apps?", a:"Yes. We regularly integrate GPT capabilities, automation layers, and chatbots into existing systems without needing full rebuilds."},
                {q:"Do you provide post-launch maintenance?", a:"Absolutely. We offer flexible support packages to ensure your AI models stay updated, secure, and performant as your user base grows."},
                {q:"Is my data secure with AI?", a:"Security is our priority. We implement enterprise-grade encryption and ensure your data privacy complies with GDPR and industry-standard security protocols."}
            ].map((f, i) => (
              <details key={i} className="faq_item">
                <summary><div><span>{i + 1}.</span> {f.q}</div> <span className="faq_plus">+</span></summary>
                <div className="faq_ans">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

     
      {/* --- FINAL CTA --- */}
<section className="aiwd-final-cta">
  <div className="aiwd-container">

    <div className="aiwd-cta-box">
      
      <h2 className="aiwd-cta-title">
        Ready to Build Your AI Website?
      </h2>

      <p className="aiwd-cta-subtext">
        Let’s turn your idea into a high-converting AI-powered website for your business.
        Get a free consultation and project roadmap today.
      </p>

      {/* CTA BUTTONS */}
      <div className="aiwd-hero-actions">
        <a href="/contact" className="aiwd-btn-primary">
          Get Free Consultation →
        </a>

        <a href="#work" className="aiwd-btn-secondary">
          View Portfolio →
        </a>
      </div>

      <p className="aiwd-cta-note">
        No commitment • No spam • Just real strategy
      </p>

    </div>

  </div>
</section>

      <Footer />
    </div>
  );
};

export default AIWebAppDev;