'use client';
import React from "react";
import "../styles/process.css";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We study your business goals, current systems and challenges to identify the best opportunities for automation and digital growth.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
    },
    {
      number: "02",
      title: "Planning",
      description:
        "We create the project roadmap, technical architecture and user flows to ensure clear direction before development begins.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
    },
    {
      number: "03",
      title: "Development",
      description:
        "Our team builds your solution in agile sprints with regular updates, demos and continuous quality assurance.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        </svg>
      ),
    },
    {
      number: "04",
      title: "Launch",
      description:
        "We test performance, security and responsiveness before deploying your project to a reliable production environment.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5"></path>
          <path d="M12 2C7.5 2 4 5 4 11c0 2.5 1.5 5 2.5 6.5h11c1-1.5 2.5-4 2.5-6.5 0-6-3.5-9-8-9z"></path>
        </svg>
      ),
    },
    {
      number: "05",
      title: "Growth",
      description:
        "We provide ongoing support, updates and optimization to help your solution scale as your business grows.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
      ),
    },
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        {/* Section Header */}
        <div className="process-header">
          <span className="process-label">OUR PROCESS</span>

          <h2 className="process-title">
            A Proven <span>5-Step Process</span> to Deliver Results
          </h2>

          <p className="process-subtitle">
            Every project follows a structured roadmap designed to ensure
            clarity, speed and measurable business outcomes.
          </p>
        </div>

        {/* Process Cards */}
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-header">
                <div className="step-icon-wrapper">{step.icon}</div>
                <div className="step-number">{step.number}</div>
              </div>

              <h3 className="step-title">{step.title}</h3>

              <p className="step-description">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;