# Personal Portfolio

A modern, production-ready portfolio website built with Next.js 14, TypeScript, React, and TailwindCSS, optimized for deployment on Netlify.

## Features

- **Modern Stack**: Next.js 14 (App Router), TypeScript, TailwindCSS
- **Dark Mode**: VS Code-inspired dark theme with smooth transitions
- **Animations**: Smooth page transitions and scroll animations using Framer Motion
- **Fully Responsive**: Mobile-first design that works on all devices
- **Contact Form**: Working contact form with Nodemailer + Gmail integration
- **SEO Optimized**: Meta tags, OpenGraph, and sitemap ready
- **Type Safe**: Full TypeScript coverage for better DX
- **Code Quality**: ESLint + Prettier pre-configured
- **Production Ready**: Optimized for Netlify deployment

## Project Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── about/               # About page
│   ├── projects/            # Projects pages
│   │   ├── page.tsx        # Projects grid
│   │   └── [slug]/         # Dynamic project pages
│   ├── contact/             # Contact page
│   └── api/contact/         # API route
├── components/              # React components
│   ├── animations/         # Animation wrappers
│   ├── layout/             # Layout components
│   ├── sections/           # Page sections
│   └── ui/                 # UI components
├── contexts/               # React contexts
├── lib/                    # Utilities and data
├── types/                  # TypeScript types
├── netlify/               # Netlify Functions
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Gmail account (for contact form)
- Git installed

### Installation

1. **Clone or download this repository**

```bash
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in your values:

```env
# Gmail Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password-here
CONTACT_EMAIL=your-email@gmail.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Your Portfolio
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing Netlify Functions Locally

To test the contact form locally with Netlify Functions:

1. Install Netlify CLI globally:

```bash
npm install -g netlify-cli
```

2. Run the dev server with Netlify CLI:

```bash
netlify dev
```

This will start both Next.js and the Netlify Functions at `http://localhost:8888`.

## Building for Production

Build the project:

```bash
npm run build
```

Test the production build locally:

```bash
npm start
```

### Common Issues

**Contact form not working locally?**
- Make sure you're using `netlify dev` instead of `npm run dev`
- Check that environment variables are set in `.env.local`
- Verify Gmail App Password is correct

**Build fails on Netlify?**
- Check environment variables are set in Netlify dashboard
- Review build logs for specific errors
- Ensure Node.js version is 18+ in `netlify.toml`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Tech Stack Details

### Core
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS

### UI & Animation
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library

### Email
- **Nodemailer** - Email sending
- **Gmail** - Email service (free tier)

### Deployment
- **Netlify** - Hosting & Functions
- **Netlify Functions** - Serverless API endpoints

## Features to Add Later

- [ ] Blog section with MDX
- [ ] Project filtering by technology
- [ ] Search functionality
- [ ] Analytics (Google Analytics / Plausible)
- [ ] Newsletter signup
- [ ] RSS feed
- [ ] Testimonials section
- [ ] Case studies for projects
- [ ] Multi-language support

## Troubleshooting

### TypeScript Errors

If you see TypeScript errors after installation:

```bash
npm run build
```

This will generate the Next.js types.

### Port Already in Use

If port 3000 is in use:

```bash
PORT=3001 npm run dev
```

### Image Optimization Issues

If using custom image domains, add them to `next.config.js`:

```javascript
images: {
  domains: ['example.com'],
}
```

## License

This project is open source and available under the MIT License.

The app is customized for my use case, but you are welcome to use it
as long as you remove any and all mentions of my personal name and brand. 

## Support

If you have questions or need help:

1. Check the troubleshooting section above
2. Review the Netlify documentation: https://docs.netlify.com
3. Check Next.js documentation: https://nextjs.org/docs

---

**Built using Next.js, TypeScript, react, and TailwindCSS**
