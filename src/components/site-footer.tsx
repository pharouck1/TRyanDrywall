import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company, services } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-col">
          <Link className="brand brand-inverse" href="/" aria-label="Ryan Drywall LLC home">
            <span className="brand-mark" aria-hidden="true"><span>R</span></span>
            <span className="brand-name">RYAN <b>DRYWALL</b><small>LLC · EST. 2018</small></span>
          </Link>
          <p>Experienced drywall and sheetrock work, with care in every detail.</p>
          <Link className="footer-cta" href="/#estimate">Start a project <ArrowUpRight size={15} /></Link>
        </div>
        <div className="footer-col">
          <h2>Explore</h2>
          <Link href="/#about">About Ryan Drywall</Link>
          <Link href="/services">Our services</Link>
          <Link href="/#work">Project gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h2>Services</h2>
          {services.slice(0, 4).map((service) => <Link key={service.title} href="/services">{service.title}</Link>)}
        </div>
        <div className="footer-col footer-contact">
          <h2>Get in touch</h2>
          <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>{company.address}<br />{company.city}, {company.region} {company.postalCode}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>Serving Belchertown and nearby Massachusetts communities.</span>
      </div>
    </footer>
  );
}
