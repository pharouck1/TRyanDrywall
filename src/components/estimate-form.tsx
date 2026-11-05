"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";

const projectTypes = [
  "Drywall installation",
  "Taping & finishing",
  "Drywall repair",
  "New construction",
  "Rehabilitation repair",
  "Custom ceiling work",
  "Other / not sure yet",
];

type FormStatus = { kind: "idle" | "success" | "error"; message: string };

export function EstimateForm() {
  const [status, setStatus] = useState<FormStatus>({ kind: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "idle", message: "" });
    setIsSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Your inquiry could not be sent.");
      form.reset();
      setStatus({ kind: "success", message: "Your project inquiry has been sent. We’ll be in touch." });
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="estimate-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Full name<input name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Your name" /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30} placeholder="(413) 555-0123" /></label>
        <label>Project type<select name="projectType" defaultValue="" required><option value="" disabled>Select a service</option>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label className="form-full">Project location<input name="location" autoComplete="street-address" required maxLength={160} placeholder="Town or project address" /></label>
        <label className="form-full">Tell us about your project<textarea name="description" required minLength={10} maxLength={3000} rows={4} placeholder="What would you like help with?" /></label>
      </div>
      <div className="form-submit-row">
        <button className="button button-dark" type="submit" disabled={isSubmitting}>
          {isSubmitting ? <><LoaderCircle className="spin" size={17} /> Sending</> : <>Send project inquiry <ArrowUpRight size={17} /> </>}
        </button>
        <span>We’ll only use your details to respond to this inquiry.</span>
      </div>
      {status.message && <p className={`form-message ${status.kind}`} role="status" aria-live="polite">{status.kind === "success" && <Check size={17} />}{status.message}</p>}
    </form>
  );
}
