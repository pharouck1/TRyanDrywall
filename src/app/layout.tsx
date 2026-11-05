import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company } from "@/lib/company";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ryan Drywall LLC | Drywall Contractor in Belchertown, MA",
    template: "%s | Ryan Drywall LLC",
  },
  description: "Experienced drywall installation, finishing, sheetrock repair, and custom ceiling work in Belchertown, Massachusetts. Contact Ryan Drywall LLC for a project estimate.",
  openGraph: {
    title: "Ryan Drywall LLC | Drywall Contractor in Belchertown, MA",
    description: "Professional drywall installation, finishing, and repair backed by over 25 years of industry experience.",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85", width: 1200, height: 800, alt: "Construction professional at work" }],
  },
  twitter: { card: "summary_large_image", title: "Ryan Drywall LLC", description: "Drywall installation, finishing, and repair in Belchertown, MA." },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: company.name,
  description: "Drywall and sheetrock contractor in Belchertown, Massachusetts, offering installation, taping and finishing, repair, new construction, rehabilitation repair, and custom ceiling work.",
  telephone: company.phone,
  email: company.email,
  foundingDate: company.established,
  founder: { "@type": "Person", name: company.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: company.city,
    addressRegion: company.region,
    postalCode: company.postalCode,
    addressCountry: company.country,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
