# WebMedia Experts - Responsive Static Homepage

A modern, fully responsive static homepage built with Next.js 15 and App Router. This website is 100% static with no backend, no database, and no API requirements.

## 🚀 Features

- ✅ **Next.js 15 with App Router** - Latest Next.js architecture
- ✅ **100% Static Website** - No backend, database, or API calls
- ✅ **Fully Responsive Design** - Desktop, tablet, and mobile optimized
- ✅ **Tailwind CSS** - Modern utility-first CSS framework
- ✅ **Reusable Components** - Clean, modular component architecture
- ✅ **Lucide Icons** - Beautiful, lightweight icon library
- ✅ **Hamburger Menu** - Responsive mobile navigation
- ✅ **Smooth Animations** - Elegant transitions and effects
- ✅ **Semantic HTML** - Accessible and SEO-friendly markup
- ✅ **Google Fonts** - Inter font for clean typography

## 📋 Project Structure

```
/Website
├── app/
│   ├── page.tsx              # Main homepage
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles and Tailwind
├── components/
│   ├── TopBar.tsx            # Header contact bar
│   ├── Navbar.tsx            # Navigation with hamburger menu
│   ├── Hero.tsx              # Hero section
│   ├── Services.tsx          # Services grid
│   ├── About.tsx             # About company section
│   ├── WhyChooseUs.tsx       # Why choose us section
│   ├── WorkingProcess.tsx    # Working process 4 steps
│   ├── Stats.tsx             # Statistics section
│   ├── Products.tsx          # Products/portfolio section
│   ├── Testimonials.tsx      # Customer testimonials
│   ├── CTA.tsx               # Call to action section
│   └── Footer.tsx            # Footer with links
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── .gitignore
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm installed

### Steps to Run

1. **Navigate to the project directory:**
   ```bash
   cd /Users/meet/Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🏗️ Page Sections

### 1. **Top Bar**
   - Contact information (email, phone)
   - Social media icons
   - Sticky header on all pages

### 2. **Navigation Bar**
   - Logo and company branding
   - Menu items (Home, About, Services, Products, Career, Contact)
   - Request Quote button
   - Mobile hamburger menu (collapses on screens < 1024px)

### 3. **Hero Section**
   - Large headline with gradient text
   - Subheading and description
   - Two CTA buttons (Our Services, Let's Talk)
   - Background decorative elements
   - Image placeholder

### 4. **Services Section**
   - 4-column grid layout
   - Service cards with icons (Content Writing, Web Development, SEO, Social Media)
   - Hover effects
   - Read More links

### 5. **About Section**
   - Company mission and story
   - Feature highlights (Quality Product, 24/7 Support)
   - Statistics cards
   - Floating client satisfaction card

### 6. **Why Choose Us Section**
   - Feature list with checkmarks
   - 6 key advantages
   - Contact information card
   - Right-side image placeholder

### 7. **Working Process**
   - 4-step process flow
   - Step numbers and descriptions
   - Connection lines between steps
   - Tech stack tags at the bottom

### 8. **Statistics Section**
   - Dark background with gradient
   - 4 key metrics displayed
   - Animated icons

### 9. **Products Section**
   - 3-column product showcase
   - Product cards with images
   - Category tags
   - Call to action per product

### 10. **Testimonials Section**
   - 3 customer reviews
   - Star ratings
   - Author profiles with initials
   - Hover effects

### 11. **Call to Action (CTA)**
   - Large heading
   - Primary and secondary buttons
   - Direct contact information
   - Gradient background

### 12. **Footer**
   - 4-column layout
   - About company info
   - Quick links
   - Services list
   - Contact information
   - Social media links
   - Bottom copyright and legal links

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.js` to modify the color scheme:
```js
colors: {
  primary: '#1a5f99',      // Main brand color
  secondary: '#0d7aa1',    // Secondary color
  accent: '#2b8abe',       // Accent color
}
```

### Update Content
Edit the respective component files to change text, images, or structure:
- `components/Navbar.tsx` - Navigation items
- `components/Hero.tsx` - Hero section content
- `components/Services.tsx` - Services list
- `components/Footer.tsx` - Footer content

### Add Images
Replace image placeholders with actual images. Update color gradients or add real image paths.

### Modify Typography
Edit `app/globals.css` for font sizes, weights, and spacing.

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel (Recommended for Next.js)
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy with one click

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## ✨ Key Features Explained

### Responsive Navigation
- Desktop: Full horizontal menu
- Mobile: Hamburger menu that expands on click
- Smooth transitions and animations

### Component Structure
Each component is self-contained and can be reused:
- Props-based customization where needed
- Consistent styling patterns
- Tailwind CSS for responsive design

### Performance Optimization
- Static site generation (no API calls)
- Optimized images and fonts
- Minimal JavaScript
- Fast loading times

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 File Descriptions

### Core Files
- `app/layout.tsx` - Root layout with metadata and Google Fonts
- `app/page.tsx` - Main homepage component structure
- `app/globals.css` - Global styles, animations, and utilities

### Configuration Files
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS plugins
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration

### Component Files
All components are in the `components/` directory:
- Prefixed with component name
- Use TypeScript (`.tsx`)
- Client components where needed (`'use client'`)
- Fully responsive with Tailwind CSS

## 📝 Notes

- All content is static - no database needed
- All icons from Lucide React library
- Fonts from Google Fonts (Inter)
- No external API dependencies
- Fully self-contained single-page website

## 🤝 Contributing

Feel free to modify and customize this template for your needs.

## 📞 Support

For questions or issues, check the code comments in each component file.

---

**Built with ❤️ using Next.js and Tailwind CSS**
