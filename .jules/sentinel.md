## 2025-05-15 - Global Security Headers Enhancement
**Vulnerability:** Missing standard security headers (X-Frame-Options, X-Content-Type-Options, etc.) which leaves the site vulnerable to clickjacking and MIME-type sniffing.
**Learning:** In a TanStack Start application deployed to Cloudflare Workers, the server entry point (`src/server.ts`) is the ideal place to globally intercept responses and inject security headers.
**Prevention:** Always implement a global response wrapper to ensure defense-in-depth security headers are present on every response, including error pages.
