"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { company } from "@/lib/company";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Our work" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topline">
        <span>Belchertown, Massachusetts</span>
        <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
      </div>
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="Ryan Drywall LLC home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><span>R</span></span>
          <span className="brand-name">RYAN <b>DRYWALL</b><small>LLC · EST. 2018</small></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
          <Link className="nav-cta" href="/#estimate" onClick={() => setMenuOpen(false)}>
            Get an estimate <ArrowUpRight size={15} strokeWidth={2} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
