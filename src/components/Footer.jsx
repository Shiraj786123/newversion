'use client';
import React from "react";
import Link from "next/link";
import "../styles/footer.css";

const Footer = () => {

  const coreServices = [
    { label: "AI Web Application Development", path: "/ai-web-application-development" },
    { label: "AI Software Development", path: "/ai-software-development" },
    { label: "Full-Stack Web Development", path: "/full-stack-web-development" },
    { label: "AI-Powered Website Design", path: "/ai-website-design-development" },
    { label: "SEO & AI Search Optimization", path: "/seo-ai-search-optimization" },
    { label: "E-commerce Development", path: "/ecommerce-development-optimization" },
  ];

  const solutionsLinks = [
    { label: "Websites That Generate Leads", path: "/ai-web-application-development" },
    { label: "AI Chatbots & Virtual Assistants", path: "/ai-software-development" },
    { label: "Business Process Automation", path: "/ai-software-development" },
    { label: "E-commerce Growth Optimization", path: "/ecommerce-development-optimization" },
    { label: "Search Visibility & Traffic Growth", path: "/seo-services" },
    
  ];

  const resourceLinks = [
    { label: "Website Growth Guides", path: "/seo-services" },
    { label: "AI for Business", path: "/seo-ai-search-optimization" },
    { label: "Technical SEO Knowledgebase", path: "/seo-services" },
    { label: "Case Studies & Results", path: "/case-studies" },
    { label: "AI SEO Strategy", path: "/seo-ai-search-optimization" },
    { label: "Answer Engine Optimization", path: "/seo-ai-search-optimization" },
  ];

  const companyLinks = [
    { label: "About ZonzocTech", path: "/about" },
    { label: "How We Work", path: "/about" },
    { label: "Careers", path: "/contact" },
    { label: "Contact Us", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms of Service", path: "/terms-conditions" },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* Branding Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/logo.png" alt="Zonzoctech" className="logo-text-img" />
            </div>

            <p className="footer-tagline">AI WEB DEVELOPMENT AGENCY</p>
            <p className="footer-description">
              We build high-converting websites, drive organic traffic and automate businesses with AI — serving clients across the UK, USA & Europe.
            </p>

            <div className="footer-contact-box">
              <h5 className="contact-heading">
                Ready to speak with a marketing expert? Give us a ring
              </h5>

              <a
                href="https://wa.me/94740309534"
                className="phone-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="wa-svg-icon" viewBox="0 0 448 512" width="20" height="20">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.6-30.6-38.1-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                <span>+94 74 030 9534</span>
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="footer-column">
            <h6 className="footer-column-title">Core Services</h6>
            <ul className="footer-links">
              {coreServices.map((link, index) => (
                <li key={index}><Link href={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h6 className="footer-column-title">Solutions by Need</h6>
            <ul className="footer-links">
              {solutionsLinks.map((link, index) => (
                <li key={index}><Link href={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h6 className="footer-column-title">Resources & Insights</h6>
            <ul className="footer-links">
              {resourceLinks.map((link, index) => (
                <li key={index}><Link href={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h6 className="footer-column-title">Company</h6>
            <ul className="footer-links">
              {companyLinks.map((link, index) => (
                <li key={index}><Link href={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM SECTION - REPLACED WITH SVGS */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">© 2026 ZonzocTech. All rights reserved. ✦</p>
          <div className="social-icons">
            {/* Twitter / X SVG Icon */}
            <a href="#" className="social-icon" aria-label="X (formerly Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            {/* LinkedIn SVG Icon */}
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.778-.773 1.778-1.729V1.729C24 .774 23.206 0 22.225 0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;