
'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ExpertPopup from "./ExpertPopup";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEarthAmericas, 
  faEnvelope, 
  faPhone, 
  faChevronDown, 
  faBars, 
  faXmark 
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

  const closeMobile = () => { 
    setMobileOpen(false); 
    setServicesOpen(false); 
    setActiveDropdown(null); 
  };

  return (
    <>
   <div className="topbar">
  <div className="topbar-inner">
    <div className="topbar-left">
      <span>
        {/* Added fixedWidth prop */}
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
          e.stopPropagation(); // Prevents menu overlays from blocking the click
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
          e.stopPropagation(); // Prevents menu overlays from blocking the click
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
          {/* LOGO - FIXED HOME LINK */}
          <Link href="/" className="navbar-logo" onClick={closeMobile} style={{ zIndex: 10001 }}>
            <Image src="/logo/logo2.png" alt="Zonzoctech" width={100} height={60} priority />
          </Link>

          <div className={`nav-container ${mobileOpen ? 'active' : ''}`}>
            <ul className="nav-links-list">
              <li
                className="nav-link dropdown-parent"
                onMouseEnter={() => setActiveDropdown(1)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="nav-link-label" onClick={() => setServicesOpen(v => !v)}>
                  Services
                  <FontAwesomeIcon icon={faChevronDown} className={`arrow ${servicesOpen ? 'open' : ''}`} style={{ marginLeft: '6px' }} />
                </span>

                <div className={`mega-menu-rect ${activeDropdown === 1 ? 'active' : ''} ${servicesOpen ? 'mobile-open' : ''}`}>
                  <div className="mega-col">
                    <h4 className="mega-heading">WEB &amp; AI DEVELOPMENT</h4>
                    <Link href="/ai-web-application-development" onClick={closeMobile}>AI Web Development</Link>
                    <Link href="/full-stack-web-development" onClick={closeMobile}>Full-Stack Web Development</Link>
                    <Link href="/ai-website-design-development" onClick={closeMobile}>AI Website Design</Link>
                    <Link href="/ai-software-development" onClick={closeMobile}>AI Software Development</Link>
                  </div>
                  <div className="mega-col">
                    <h4 className="mega-heading">SEO &amp; GROWTH</h4>
                    <Link href="/seo-services" onClick={closeMobile}>SEO Services</Link>
                    <Link href="/ecommerce-development-optimization" onClick={closeMobile}>E-commerce Development</Link>
                  </div>
                  <div className="mega-col">
                    <h4 className="mega-heading">SUPPORT</h4>
                    <Link href="/website-maintenance-performance-security" onClick={closeMobile}>Website Maintenance &amp; Security</Link>
                  </div>
                </div>
              </li>

              <li className="nav-link"><Link href="/#our-work" onClick={closeMobile}>Our Work</Link></li>
              <li className="nav-link"><Link href="/#about" onClick={closeMobile}>About</Link></li>
              <li className="nav-link"><Link href="/blog" onClick={closeMobile}>Blog</Link></li>
              <li className="nav-link"><Link href="/contact" onClick={closeMobile}>Contact</Link></li>
            </ul>

            <button className="get-proposal-button mobile-cta" onClick={() => { setIsPopupOpen(true); closeMobile(); }}>
              Get Free Proposal
            </button>
          </div>

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
