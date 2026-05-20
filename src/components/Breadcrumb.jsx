'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/breadcrumb.css";

const breadcrumbMap = {
  "/ai-web-application-development": [
    { name: "Home", link: "/" },
    { name: "Web & AI Development", link: "#" },
    { name: "AI Web Application Development" }
  ],
  "/full-stack-web-development": [
    { name: "Home", link: "/" },
    { name: "Web & AI Development", link: "#" },
    { name: "Full Stack Web Development" }
  ],
  "/ai-website-design-development": [
    { name: "Home", link: "/" },
    { name: "Web & AI Development", link: "#" },
    { name: "AI Website Design" }
  ],
  "/ai-software-development": [
    { name: "Home", link: "/" },
    { name: "Web & AI Development", link: "#" },
    { name: "AI Software Development" }
  ],
  "/seo-services": [
    { name: "Home", link: "/" },
    { name: "SEO & Growth", link: "#" },
    { name: "SEO Services" }
  ],
  "/ecommerce-development-optimization": [
    { name: "Home", link: "/" },
    { name: "SEO & Growth", link: "#" },
    { name: "E-commerce Development" }
  ],
  "/website-maintenance-performance-security": [
    { name: "Home", link: "/" },
    { name: "Support", link: "#" },
    { name: "Website Maintenance & Security" }
  ],
  "/about": [
    { name: "Home", link: "/" },
    { name: "Who We Are", link: "#" },
    { name: "About Us" }
  ],
  "/contact": [
    { name: "Home", link: "/" },
    { name: "Who We Are", link: "#" },
    { name: "Contact Info" }
  ]
};

const Breadcrumb = () => {
  const pathname = usePathname();
  const crumbs = breadcrumbMap[pathname];

  if (!crumbs || pathname === "/") return null;

  return (
    <div className="breadcrumb-wrap">
      <div className="breadcrumb-container">
        {crumbs.map((item, index) => (
          <React.Fragment key={index}>
            {/* Logic: If it has a link and isn't the last item, show clickable link */}
            {item.link && item.link !== "#" && index !== crumbs.length - 1 ? (
              <Link href={item.link}>{item.name}</Link>
            ) : (
              <span className={index === crumbs.length - 1 ? "active" : ""}>
                {item.name}
              </span>
            )}

            {index !== crumbs.length - 1 && <span className="separator"> › </span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;