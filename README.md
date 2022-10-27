## Architecture

- **CSS**: [Tailwind CSS](https://tailwindcss.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Library**: [React.js](https://reactjs.org)
- **Framework**: [Astro](https://astro.build)
- **Headless CMS**: [Sanity.io](https://www.sanity.io)
- **Deployment**: [Netlify](https://netlify.com)
- **Analytics**: [Plausible Analytics](https://plausible.io) - self-hosted

### Website hosting

This website is using Next.js SSG (static site generation) deployed to [Vercel](https://vercel.com).  
You can check it on https://adison.me/analytics

### DNS - Cloudflare

DNS records are managed with [Cloudflare](https://www.cloudflare.com).  
It provides DDoS protection, CDN, caching, proxing with load balancing and much more...

### Analytics - self-hosting

[Plausible Analytics](https://plausible.io) is self-hosted on [Google Cloud Provider](https://cloud.google.com) - [Compute Engine](https://cloud.google.com/compute) e2-micro instance.

It has assigned subdomain - [analytics.adison.me](https://analytics.adison.me).  
[Cerbot](https://certbot.eff.org) is used for SSL certificate management.

## Development

Project files are located in `src` directory:

```bash
cd src
```

### Running locally

First, install dependencies:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run production locally

Start production build:

```bash
pnpm build
```

Start production server:

```bash
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prettier

Run [Prettier](https://prettier.io) - code formatter:

```bash
pnpm prettier
```
