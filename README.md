# Artist Profiles 🎨

> Dynamic slideshow websites for artist profile reports - scalable presentation platform built with Next.js

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/patrickaha/artist-profiles)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

## 🌟 Overview

A professional slideshow presentation platform that transforms artist intelligence reports into beautiful, interactive web experiences. Each artist gets a stunning 6-slide presentation showcasing their business metrics, portfolio highlights, and strategic insights.

**🚀 Live Demo**: [View David Arteaga's Profile](https://artist-profiles-patrickaha.vercel.app)

## ✨ Features

### 📊 6-Slide Presentation Format
- **Hero Introduction**: Artist name, business, and positioning
- **Business Overview**: Key strengths and revenue streams  
- **Portfolio Highlights**: Categorized work with visual previews
- **Digital Presence**: Performance metrics and online reach
- **Success Metrics**: Pricing strategy and achievements
- **Strategic Insights**: Success factors and positioning analysis

### 🎯 Professional Design
- **Smooth Animations**: Seamless slide transitions with navigation controls
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **Modern UI**: Glassmorphism effects and gradient backgrounds
- **Stock Photography**: High-quality images representing artistic themes
- **Interactive Elements**: Hover effects and visual feedback

### 🔧 Technical Excellence
- **Type-Safe**: Full TypeScript implementation
- **Performance Optimized**: Next.js 14 with App Router
- **Scalable Architecture**: Easy to add new artists
- **SEO Ready**: Proper meta tags and semantic HTML
- **Deployment Ready**: Vercel configuration included

## 🏗️ Technical Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework with App Router | 15.3.4 |
| **TypeScript** | Type safety and developer experience | 5.0+ |
| **Tailwind CSS** | Utility-first styling | 3.4+ |
| **Lucide React** | Beautiful, customizable icons | Latest |
| **Vercel** | Deployment and hosting | - |

## 📁 Project Structure

```
artist-profiles/
├── app/                          # Next.js App Router
│   ├── artists/
│   │   └── david-arteaga/
│   │       └── page.tsx         # David's profile page
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Redirects to featured artist
├── components/                   # React components
│   ├── Slideshow.tsx            # Main slideshow container
│   └── slides/                  # Individual slide components
│       ├── HeroSlide.tsx
│       ├── BusinessOverviewSlide.tsx
│       ├── PortfolioSlide.tsx
│       ├── DigitalPresenceSlide.tsx
│       ├── SuccessMetricsSlide.tsx
│       └── StrategicInsightsSlide.tsx
├── data/                        # Artist data
│   └── artists/
│       └── david-arteaga.json   # Artist profile data
├── public/                      # Static assets
│   └── images/
│       └── stock/               # Stock photography
└── vercel.json                  # Deployment configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0 or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/patrickaha/artist-profiles.git
   cd artist-profiles
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 👤 Featured Artists

### David Arteaga (Teaga Photo)
**Long Island's Premier Landscape Photographer**

- **Specialization**: Rural Americana, seascapes, Long Island landscapes
- **Business Model**: Multi-channel revenue (online sales, art shows, commercial installations)
- **Key Strength**: Authentic local authority with deep community connections
- **Price Range**: $78-124+ (accessible professional pricing)
- **Digital Presence**: 9/10 overall score with full Art Storefronts implementation

**Notable Achievements:**
- Multiple healthcare facility installations (Stony Brook Medicine, Mirza Orthopedics)
- Regular art festival circuit participation
- Strong social media engagement (15-50+ likes per post)
- Full utilization of Art Storefronts platform features

## 📊 Artist Data Schema

Each artist profile follows this JSON structure:

```json
{
  "id": "artist-slug",
  "name": "Artist Name",
  "businessName": "Business Name",
  "tagline": "Professional tagline",
  "location": "Location",
  "businessMaturity": "Level (Emerging/Established/Advanced)",
  "website": "website.com",
  "social": {
    "instagram": "@handle",
    "facebook": "/handle"
  },
  "keyStrengths": ["Strength 1", "Strength 2"],
  "categories": ["Category 1", "Category 2"],
  "digitalPresence": {
    "websiteProfessionalism": 9,
    "socialConsistency": 8,
    "contentQuality": 9,
    "localAuthority": 10,
    "customerExperience": 9,
    "overall": 9
  },
  "pricing": {
    "entryPoint": 78,
    "premiumRange": "124+",
    "positioning": "Description"
  },
  "revenueStreams": ["Stream 1", "Stream 2"],
  "uniquePositioning": ["Factor 1", "Factor 2"],
  "successFactors": ["Factor 1", "Factor 2"]
}
```

## 🎨 Adding New Artists

### 1. Create Artist Data File
```bash
# Create new JSON file
touch data/artists/new-artist-name.json
```

### 2. Add Artist Data
Copy the schema above and customize with the artist's information.

### 3. Create Artist Page
```bash
# Create artist directory and page
mkdir -p app/artists/new-artist-name
touch app/artists/new-artist-name/page.tsx
```

### 4. Implement Artist Page
```tsx
import Slideshow from '@/components/Slideshow';
import artistData from '@/data/artists/new-artist-name.json';
// Import slide components...

export default function NewArtistProfile() {
  const slides = [
    <HeroSlide key="hero" {...artistData} />,
    // Add other slides...
  ];

  return <Slideshow slides={slides} />;
}
```

### 5. Update Navigation
Modify `app/page.tsx` if you want to change the default artist.

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add new artist profile"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js and deploys

3. **Custom Domain (Optional)**
   - Go to project settings in Vercel
   - Add your custom domain
   - Configure DNS as instructed

### Alternative Deployment Options
- **Netlify**: Connect GitHub repo, build command: `npm run build`
- **Railway**: One-click deploy from GitHub
- **DigitalOcean App Platform**: Import from GitHub

## 🎯 Component Architecture

### Slideshow Component
The main container managing slide navigation, transitions, and state.

**Features:**
- Left/right arrow navigation
- Dot indicator navigation
- Slide counter
- Smooth transitions
- Responsive design

### Slide Components
Each slide is a modular component accepting artist data as props:

- **HeroSlide**: Hero introduction with background image
- **BusinessOverviewSlide**: Two-column layout with strengths and revenue
- **PortfolioSlide**: Grid layout with category previews
- **DigitalPresenceSlide**: Metrics dashboard with platform details
- **SuccessMetricsSlide**: Pricing and achievements visualization
- **StrategicInsightsSlide**: Success factors and positioning analysis

## 🎨 Styling Guide

### Design System
- **Primary Colors**: Blue gradients (`from-blue-500 to-purple-600`)
- **Background**: Dark gradients (`from-slate-900 via-slate-800`)
- **Typography**: System fonts with clear hierarchy
- **Spacing**: Consistent 8px grid system
- **Effects**: Glassmorphism with `backdrop-blur-sm`

### Responsive Breakpoints
- **Mobile**: Default styles
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)
- **Large**: `xl:` prefix (1280px+)

### Custom Utilities
```css
/* Glassmorphism effect */
.glass {
  @apply bg-white/5 backdrop-blur-sm border border-white/10;
}

/* Gradient text */
.gradient-text {
  @apply bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent;
}
```

## 📈 Performance Optimization

### Current Optimizations
- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic component-level splitting
- **Prefetching**: Link prefetching for smooth navigation

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🛠️ Development

### Code Quality
```bash
# Linting
npm run lint

# Type checking
npx tsc --noEmit

# Build verification
npm run build
```

### Environment Setup
- **Editor**: VS Code with TypeScript/React extensions
- **Prettier**: Automatic code formatting
- **ESLint**: Code quality enforcement
- **Git Hooks**: Pre-commit validation (optional)

## 🔮 Future Enhancements

### Planned Features
- **Admin Dashboard**: CMS for managing artist data
- **Analytics Integration**: Visitor tracking and engagement metrics
- **PDF Export**: Generate PDF versions of profiles
- **Social Sharing**: Enhanced sharing capabilities
- **Search & Filter**: Browse multiple artists
- **Animation Library**: Enhanced slide transitions

### Scalability Considerations
- **Database Integration**: Move from JSON to database
- **CDN Integration**: Optimize image delivery
- **Caching Strategy**: Redis for frequently accessed data
- **API Development**: RESTful API for artist data

## 🤝 Contributing

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Test thoroughly: `npm run build`
5. Commit: `git commit -m "Add new feature"`
6. Push: `git push origin feature/new-feature`
7. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind utility classes
- Maintain responsive design
- Add proper accessibility attributes
- Test on multiple devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Built For

This project was created to showcase the power of the **5-Part Artist Intelligence System** in generating actionable business insights for artists and Art Storefronts customers.

**Key Benefits:**
- Transform complex artist data into visual presentations
- Demonstrate success factors and best practices
- Provide actionable insights for business growth
- Create professional marketing materials

---

**Made with ❤️ by the Artist Intelligence System team**

*Transforming artist data into actionable insights, one profile at a time.*
