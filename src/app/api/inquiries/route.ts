import { NextResponse } from "next/server";

const allowedProjectTypes = new Set([
  "Drywall installation",
  "Taping & finishing",
  "Drywall repair",
  "New construction",
  "Rehabilitation repair",
  "Custom ceiling work",
  "Other / not sure yet",
]);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid project inquiry." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const projectType = typeof body.projectType === "string" ? body.projectType : "";
  const location = typeof body.location === "string" ? body.location.trim() : "";
  const description = typeof body.description === "string" ? body.description.trim() : "";

  if (
    name.length < 2 || name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 ||
    phone.length < 7 || phone.length > 30 ||
    !allowedProjectTypes.has(projectType) ||
    location.length < 2 || location.length > 160 ||
    description.length < 10 || description.length > 3000
  ) {
    return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.INQUIRY_TO_EMAIL;
  const sender = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) {
    return NextResponse.json(
      { error: "Your details are valid, but this form is not connected to email yet. Please call or email us directly." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `Website project inquiry: ${projectType}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject type: ${projectType}\nProject location: ${location}\n\nProject description:\n${description}`,
      }),
    });
    if (!response.ok) {
      return NextResponse.json({ error: "We couldn't send your inquiry right now. Please call or email us directly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We couldn't send your inquiry right now. Please call or email us directly." }, { status: 502 });
  }
}
