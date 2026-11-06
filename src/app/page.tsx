import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ClipboardList, Hammer, MapPin, Phone, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import { EstimateForm } from "@/components/estimate-form";
import { ProjectGallery } from "@/components/project-gallery";
import { company, processSteps, services } from "@/lib/company";

const serviceIcons = [Hammer, Ruler, ShieldCheck, ClipboardList, Sparkles, Check];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=88"
          alt="Construction professional working carefully on an interior project"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-inner page-shell">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light"><span /> Belchertown, Massachusetts · Est. 2018</p>
            <h1 id="hero-title">Walls made right.<br /><em>Work that lasts.</em></h1>
            <p className="hero-lede">Professional drywall and sheetrock work, shaped by over 25 years of hands-on experience.</p>
            <div className="hero-actions">
              <Link className="button button-accent" href="#estimate">Request a free estimate <ArrowUpRight size={17} /></Link>
              <Link className="button button-ghost" href="#services">Explore our services <ArrowDown size={16} /></Link>
            </div>
          </div>
          <div className="hero-note"><span className="hero-note-line" /><p>Care in the craft.<br /><b>Respect for your space.</b></p></div>
        </div>
        <div className="hero-bottom page-shell"><span>DRYWALL · FINISHING · REPAIR</span><span>01 — 06</span></div>
      </section>

      <section className="trust-strip" aria-label="Company highlights">
        <div className="page-shell trust-grid">
          <div><strong>25<span>+</span></strong><p>years of industry experience</p></div>
          <div><strong>2018</strong><p>established in Belchertown</p></div>
          <div><strong>Owner</strong><p>operated by Tim Ryan</p></div>
          <div><strong>Built</strong><p>on quality workmanship</p></div>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="page-shell about-grid">
          <div className="about-visual">
            <div className="about-image-frame">
              <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" alt="Completed interior with bright, smooth walls" fill sizes="(max-width: 760px) 100vw, 45vw" />
            </div>
            <div className="experience-stamp"><span>OVER</span><strong>25</strong><span>YEARS<br />EXPERIENCE</span></div>
            <span className="image-index">01 / THE FINISH</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span /> A local contractor</p>
            <h2>Good work is in<br />the <em>details.</em></h2>
            <p className="lead">Ryan Drywall LLC brings experienced, attentive drywall work to projects in Belchertown, Massachusetts.</p>
            <p>Owner/operator Tim Francis Ryan has over 25 years of industry experience. Since the company was established in 2018, the focus has been straightforward: understand the work, take care with the details, and deliver quality workmanship.</p>
            <div className="signature-row"><span className="signature-mark">TR</span><span><b>Tim Francis Ryan</b><small>Owner / Operator</small></span><Link href="/contact" aria-label="Contact Tim Ryan"><ArrowUpRight size={20} /></Link></div>
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="page-shell">
          <div className="section-heading heading-split">
            <div><p className="eyebrow"><span /> What we do</p><h2>Solid work.<br /><em>Smooth finish.</em></h2></div>
            <div className="heading-aside"><p>From new drywall to careful repairs, we bring practical experience to every stage of the job.</p><Link className="text-link" href="/services">View all services <ArrowRight size={16} /></Link></div>
          </div>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return <article className="service-card" key={service.title}>
                <Link className="service-card-link" href={`/services#service-${index + 1}`} aria-label={`Learn about ${service.title}`}>
                  <div className="service-image"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" /><span className="service-number">0{index + 1}</span></div>
                  <div className="service-card-copy"><span className="service-icon"><Icon size={20} strokeWidth={1.6} /></span><h3>{service.title}</h3><p>{service.description}</p><span className="service-arrow">Learn more <ArrowUpRight size={15} /></span></div>
                </Link>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="approach-section section-pad">
        <div className="page-shell approach-grid">
          <div className="approach-intro"><p className="eyebrow eyebrow-light"><span /> The Ryan Drywall approach</p><h2>Careful work.<br /><em>Clear communication.</em></h2><p>Good results begin with knowing what matters to you. We bring experience, attention to detail, and a professional approach to the work.</p><Link className="button button-outline" href="/contact">Talk about your project <ArrowUpRight size={16} /></Link></div>
          <div className="approach-points">
            <article><span>01</span><div><h3>Experience you can draw on</h3><p>Over 25 years in the industry informs a practical, considered approach to drywall work.</p></div><Check size={19} /></article>
            <article><span>02</span><div><h3>Attention to the details</h3><p>From hanging to the final finish, care at each stage matters to the overall result.</p></div><Check size={19} /></article>
            <article><span>03</span><div><h3>Professional service</h3><p>A respectful, straightforward working relationship from the first conversation.</p></div><Check size={19} /></article>
            <article><span>04</span><div><h3>Workmanship that matters</h3><p>A commitment to quality work and customer satisfaction, without cutting corners.</p></div><Check size={19} /></article>
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="page-shell">
          <div className="section-heading heading-split">
            <div><p className="eyebrow"><span /> A closer look</p><h2>Made for the<br /><em>spaces we live in.</em></h2></div>
            <div className="heading-aside"><p>Explore the work and craft behind a well-finished room. These images are placeholders until company project photos are supplied.</p></div>
          </div>
          <ProjectGallery />
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="page-shell">
          <div className="section-heading"><p className="eyebrow"><span /> A simple process</p><h2>From first hello<br />to <em>finished work.</em></h2></div>
          <div className="process-grid">
            {processSteps.map((step) => <article className="process-step" key={step.number}><span className="process-number">{step.number}</span><span className="process-line" /><h3>{step.title}</h3><p>{step.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="estimate-section section-pad" id="estimate">
        <div className="page-shell estimate-layout">
          <div className="estimate-intro"><p className="eyebrow"><span /> Tell us what you’re planning</p><h2>Let’s talk about<br /><em>your project.</em></h2><p>Share a few details and we’ll follow up to discuss the work and next steps.</p><div className="estimate-contact"><a href={`tel:${company.phoneHref}`}><Phone size={17} />{company.phone}</a><span><MapPin size={17} />Belchertown, MA</span></div></div>
          <div className="estimate-form-wrap"><EstimateForm /></div>
        </div>
      </section>

      <section className="home-contact-band"><div className="page-shell contact-band-inner"><div><p className="eyebrow eyebrow-light"><span /> Based in Belchertown, MA</p><h2>Have a question<br />before you start?</h2></div><Link className="button button-accent" href="/contact">Get in touch <ArrowUpRight size={17} /></Link></div></section>
    </>
  );
}
