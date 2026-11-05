import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/company";

export const metadata: Metadata = {
  title: "Drywall Services in Belchertown, MA",
  description: "Explore drywall installation, taping and finishing, sheetrock repair, new construction, rehabilitation repairs, and custom ceiling work by Ryan Drywall LLC.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="interior-hero"><div className="page-shell"><p className="eyebrow"><span /> What we do</p><h1>Drywall work,<br /><em>done with care.</em></h1><p>Experienced sheetrock installation, finishing, and repair for projects in Belchertown, Massachusetts.</p><Link className="text-link" href="/#estimate">Request a project estimate <ArrowRight size={16} /></Link></div></section>
      <section className="service-detail-section section-pad"><div className="page-shell service-detail-list">
        {services.map((service, index) => <article className="service-detail" id={`service-${index + 1}`} key={service.title}>
          <div className="service-detail-image"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 48vw" /><span>0{index + 1} / 06</span></div>
          <div className="service-detail-copy"><p className="eyebrow"><span /> Ryan Drywall service</p><h2>{service.title}</h2><p>{service.description}</p><p>Every project is different. Get in touch to discuss the space, the scope of work, and what you’re looking to accomplish.</p><ul><li><Check size={16} /> Experienced, careful workmanship</li><li><Check size={16} /> Clear conversation about the project</li><li><Check size={16} /> A project estimate based on your scope</li></ul><Link className="text-link" href="/#estimate">Ask about this service <ArrowUpRight size={16} /></Link></div>
        </article>)}
      </div></section>
      <section className="service-cta"><div className="page-shell service-cta-inner"><div><p className="eyebrow eyebrow-light"><span /> Your project starts here</p><h2>Let’s make a plan.</h2></div><Link className="button button-accent" href="/#estimate">Request a free estimate <ArrowUpRight size={17} /></Link></div></section>
    </>
  );
}
