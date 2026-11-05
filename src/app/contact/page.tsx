import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { EstimateForm } from "@/components/estimate-form";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Ryan Drywall LLC | Belchertown, MA",
  description: "Contact Ryan Drywall LLC in Belchertown, MA to discuss drywall installation, finishing, repairs, and project estimates.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(`${company.address}, ${company.city}, ${company.region} ${company.postalCode}`);
  return (
    <>
      <section className="interior-hero contact-hero"><div className="page-shell"><p className="eyebrow"><span /> Start a conversation</p><h1>Let’s talk<br /><em>about the work.</em></h1><p>Questions about a drywall project? Get in touch with Ryan Drywall LLC.</p></div></section>
      <section className="contact-details-section section-pad"><div className="page-shell contact-info-grid">
        <a className="contact-info-item" href={`tel:${company.phoneHref}`}><span className="contact-info-icon"><Phone size={20} /></span><small>Call us</small><strong>{company.phone}</strong><span>Tap to call <ArrowUpRight size={14} /></span></a>
        <a className="contact-info-item" href={`mailto:${company.email}`}><span className="contact-info-icon"><Mail size={20} /></span><small>Email</small><strong>{company.email}</strong><span>Send an email <ArrowUpRight size={14} /></span></a>
        <a className="contact-info-item" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer"><span className="contact-info-icon"><MapPin size={20} /></span><small>Find us</small><strong>{company.address}</strong><span>{company.city}, {company.region} {company.postalCode} <ArrowUpRight size={14} /></span></a>
      </div></section>
      <section className="contact-main-section"><div className="page-shell contact-main-grid">
        <div className="contact-form-column"><p className="eyebrow"><span /> Project inquiry</p><h2>Tell us what<br /><em>you have in mind.</em></h2><p className="contact-form-intro">Share the basics below. We’ll use your information to follow up about this project.</p><EstimateForm /></div>
        <aside className="contact-aside"><div className="map-frame"><iframe title="Map showing Ryan Drywall LLC at 17 North Liberty St, Belchertown" src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="hours-box"><Clock3 size={19} /><div><h3>Business hours</h3><p>Hours have not been confirmed. Please call to discuss availability.</p><a href={`tel:${company.phoneHref}`}>Call {company.phone} <ArrowUpRight size={14} /></a></div></div></aside>
      </div></section>
    </>
  );
}
