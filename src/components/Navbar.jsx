'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Imported to detect route changes
import ExpertPopup from "./ExpertPopup";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEarthAmericas, 
  faEnvelope, 
  faPhone, 
  faChevronDown, 
  faBars, 
  faXmark,
  faHome // Imported the solid Home icon
} from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// RESTORED CSS IMPORTS
import "../styles/navbar.css";
import "../styles/topbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname(); // Reads the active route path

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
      if (window.scrollY > 10) nav?.classList.add('scrolled');
      else nav?.classList.remove('scrolled');
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  // Automatically close the mobile menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const closeMobile = () => { 
    // Introducing a 150ms delay allows the browser to complete 
    // the route navigation on mobile viewports before the menu closes.
    setTimeout(() => {
      setMobileOpen(false); 
      setServicesOpen(false); 
      setActiveDropdown(null); 
    }, 150);
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span>
              <FontAwesomeIcon icon={faEarthAmericas} fixedWidth style={{ marginRight: '6px' }} />
              Serving Businesses in <span className="sky-blue">UK & USA</span> | 150+ Projects Delivered
            </span>
          </div>
          <div className="topbar-right">
            
            {/* Email Link with direct JS trigger */}
            <a 
              href="mailto:info@zonzoctech.com" 
              className="topbar-link" 
              title="Email Us"
              onClick={(e) => {
                e.stopPropagation(); 
                window.location.href = "mailto:info@zonzoctech.com";
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>

            {/* WhatsApp Link with direct JS trigger */}
            <a 
              href="https://wa.me/94740309534" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="topbar-link wa-btn"
              onClick={(e) => {
                e.stopPropagation(); 
                window.open("https://wa.me/94740309534", "_blank", "noopener,noreferrer");
              }}
            >
              <FontAwesomeIcon icon={faWhatsapp} className="wa-icon" />
            </a>
            
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-inner">
          {/* STATIC LOGO CONTAINER (Changed from Link to static div) */}
         {/* STATIC LOGO CONTAINER (pointer-events: none allows clicks to pass through to the menu links below) */}
<div className="navbar-logo" style={{ zIndex: 10001, pointerEvents: 'none' }}>
  <Image src="/logo/logo2.png" alt="Zonzoctech" width={100} height={60} priority />
</div>
          {/* NEW: Mobile Navbar Home Button with Text (Hides when mobile menu drawer is open) */}
          {!mobileOpen && (
            <Link href="/" className="mobile-navbar-home" onClick={closeMobile}>
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </Link>
          )}

          <div className={`nav-container ${mobileOpen ? 'active' : ''}`}>
            <ul className="nav-links-list">
              {/* Home Link with FontAwesome Icon */}
              <li className="nav-link desktop-only-home-link">
                <Link href="/" onClick={closeMobile}>
                  <FontAwesomeIcon icon={faHome} style={{ marginRight: '6px' }} />
                  Home
                </Link>
              </li>

              {/* DIRECT SERVICES LINK */}
              <li className="nav-link">
                <Link href="/services" onClick={closeMobile}>
                  Services
                </Link>
              </li>

              {/* Connected to /case-studies to match your architecture blueprint */}
              <li className="nav-link">
                <Link href="/case-studies" onClick={closeMobile}>Our Work</Link>
              </li>
              
              {/* Connected to /about which renders your AboutUs.jsx component */}
              <li className="nav-link">
                <Link href="/about" onClick={closeMobile}>About</Link>
              </li>
              
              <li className="nav-link"><Link href="/blog" onClick={closeMobile}>Blog</Link></li>
              <li className="nav-link"><Link href="/contact" onClick={closeMobile}>Contact</Link></li>
            </ul>

            {/* Replaced Mobile Proposal CTA Button with a clean Direct Email Link bar */}
           {/* Replaced Mobile Proposal CTA Button with a clean Direct Email Link bar */}
                  <a 
                 href="mailto:info@zonzoctech.com" 
                 className="mobile-email-bar" 
                 target="_blank"             /* Tells the browser to handle the mail protocol in a separate thread */
                  rel="noopener noreferrer"   /* Security standard for external links */
                    /* onClick={closeMobile} is removed to prevent React from blocking the mail app launch */
                   >
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
                                info@zonzoctech.com
                   </a>
          </div>

          {/* New Mobile Nav CTA - Visible in the header bar only on mobile/tablet viewports */}
          {!mobileOpen && (
            <button className="get-proposal-button mobile-nav-cta" onClick={() => setIsPopupOpen(true)}>
              Get Free Proposal
            </button>
          )}

          <button className="get-proposal-button desktop-cta" onClick={() => setIsPopupOpen(true)}>
            Get Free Proposal
          </button>

          <button className="hamburger" aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)}>
            <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} />
          </button>
        </div>
      </nav>

      {/* POPUP CONNECTION FIXED */}
      <ExpertPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default Navbar;