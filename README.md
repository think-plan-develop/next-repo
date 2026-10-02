This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment And External Access

Copy `.env.example` to `.env.local` before local development:

```powershell
Copy-Item .env.example .env.local
```

`SITE_URL` is the public base URL used by Next.js metadata. Keep the local value for development and set it to the deployed HTTPS origin in your hosting provider's environment settings. `.env.local` is ignored by Git; never commit credentials or secrets.

No API, authentication provider, external image host, or third-party integration is configured yet, so no provider keys or third-party access allowlists are required. Use files in `public/` for local images. If a future feature uses remote images with `next/image`, allow only its exact host and path in `images.remotePatterns` in `next.config.ts`. If development needs to be accessed through a non-local hostname or tunnel, add only that hostname to `allowedDevOrigins`; do not use a broad wildcard.

Next.js uses port 3000 by default. To use another port, run `npm run dev -- --port 3001` (replace `3001` as needed). Do not put `PORT` in `.env.local`; set it in the shell or use the CLI option.

## Shared Header And Footer Layout

Use a route group, such as `(main)`, to share one layout across all routes that need the same header and footer. Keep `login` and `signup` outside that group when they should not show the shared layout.

<!-- `dashboard` is only an example route. This same pattern works for any 3..n routes that need the header and footer: place those routes inside `app/(main)/`, and they will share `app/(main)/layout.tsx` without adding `(main)` to the URL. -->

| File | URL | Header/footer? |
| --- | --- | --- |
| `app/layout.tsx` | Root layout for everything | No |
| `app/(main)/layout.tsx` | Shared layout for grouped pages | Defines them |
| `app/(main)/dashboard/page.tsx` | `/dashboard` | Yes |
| `app/(main)/products/page.tsx` | `/products` | Yes |
| `app/(main)/orders/page.tsx` | `/orders` | Yes |
| `app/(main)/profile/page.tsx` | `/profile` | Yes |
| `app/login/page.tsx` | `/login` | No |
| `app/signup/page.tsx` | `/signup` | No |

Keep the root layout minimal:

```tsx
// app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Add the shared layout:

```tsx
// app/(main)/layout.tsx
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>My Header</header>

      <main>{children}</main>

      <footer>My Footer</footer>
    </>
  );
}
```

Put each route that needs this layout inside `(main)`:

```tsx
// app/(main)/products/page.tsx
export default function ProductsPage() {
  return <h1>Products</h1>;
}
```

All pages inside `(main)` automatically get the header and footer. Login and signup receive only the root layout.

The folder name must include parentheses. This keeps it out of the URL:

- `app/(main)/products/page.tsx` -> `/products`
- `app/main/products/page.tsx` -> `/main/products`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
