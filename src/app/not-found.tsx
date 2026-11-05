import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found page-shell">
      <p className="eyebrow"><span /> Page not found</p>
      <h1>Looks like<br /><em>this wall’s blank.</em></h1>
      <p>The page you’re looking for may have moved or no longer exists.</p>
      <div className="not-found-actions"><Link className="button button-dark" href="/"><ArrowLeft size={16} /> Back to home</Link><Link className="text-link" href="/contact">Contact Ryan Drywall <ArrowUpRight size={16} /></Link></div>
    </section>
  );
}
