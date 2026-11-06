# Ryan Drywall LLC website

A responsive Next.js website for Ryan Drywall LLC, built with TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. The inquiry form validates submissions on the client and server. Until email delivery is configured, it will explain that inquiries are not being sent and direct visitors to call or email instead.

## Enable inquiry email

The API route uses Resend. Add the following values to `.env.local` after configuring a verified sender in Resend:

```env
RESEND_API_KEY=your_resend_api_key
INQUIRY_TO_EMAIL=the_business_inbox@example.com
INQUIRY_FROM_EMAIL=Ryan Drywall <inquiries@your-verified-domain.com>
```

Restart the development server after changing environment variables. Never commit `.env.local` or expose the Resend key in client-side code.

## Production checks and deployment

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

Deploy to Vercel or another Node.js host that supports Next.js App Router. Configure the three email environment variables in the hosting dashboard to enable inquiry delivery. Add the production domain to the project’s metadata once it is known.

## Content to confirm before launch

- The brief contained conflicting phone numbers and email addresses. The first Company Information set is currently used throughout: (413) 533-7862 and Timothyryan1602@gmail.com.
- Business hours have not been supplied; the contact page asks visitors to call for availability.
- Gallery photos are illustrative stock images, not Ryan Drywall LLC project photos. Replace the image URLs and alt text in `src/lib/company.ts` with authorized company photography when available.
- Testimonials are omitted until actual customer feedback is provided.
