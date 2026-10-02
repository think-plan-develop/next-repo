// Import the type for autocomplete and configuration validation.
import type { NextConfig } from "next";

// Define the Next.js configuration.
const nextConfig: NextConfig = {
  // Configure image optimization for next/image.
  images: {
    // Allow images only from matching external URLs.
    remotePatterns: [
      {
        protocol: "https", // Image URL must use HTTPS.
        hostname: "images.example.com", // Replace with your image host.
        pathname: "/products/**", // Allow any image path under /products/.
      },
    ],
  },

  // Define redirects: the browser URL changes.
  async redirects() {
    // Return the list of redirect rules.
    return [
      {
        source: "/old-products", // URL the visitor opens.
        destination: "/products", // URL the visitor is redirected to.
        permanent: true, // Permanent redirect (308); false means temporary (307).
      },
    ];
  },

  // Define rewrites: serve another route without changing the browser URL.
  async rewrites() {
    // Return the list of rewrite rules.
    return [
      {
        source: "/shop", // URL shown in the browser.
        destination: "/products", // Actual route that provides the content.
      },
    ];
  },
};

// Export the configuration so Next.js can load it.
export default nextConfig;