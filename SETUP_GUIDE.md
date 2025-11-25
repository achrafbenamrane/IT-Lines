# Quick Setup Guide - Nexus Solutions Website

## 🚀 Quick Start

Your Nexus Solutions website is ready! The development server is already running at:
- **Local**: http://localhost:3000

## 📋 What's Been Built

### ✅ Complete Website Structure
- ✅ Responsive Header with navigation and mobile menu
- ✅ Hero section with animations
- ✅ Services grid (6 services)
- ✅ Why Choose Us section with features
- ✅ About/Team section with animated counters
- ✅ Testimonials carousel
- ✅ Call-to-action section
- ✅ Contact form and info
- ✅ Professional footer

### ✅ Styling & Animations
- ✅ Custom Tailwind configuration with your color palette
- ✅ Framer Motion animations throughout
- ✅ Smooth scroll behavior
- ✅ Hover effects on all interactive elements
- ✅ Mobile-responsive design

### ✅ Technologies Integrated
- ✅ Next.js 16 with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ Lucide React for icons
- ✅ Google Fonts (Poppins & Inter)

## 🎨 Customization Guide

### 1. Update Content

**Services** (`components/sections/Services.tsx`):
```typescript
// Change service titles, descriptions, and icons
const services = [
  {
    icon: Globe,
    title: 'Your Service Name',
    description: 'Your service description',
  },
  // ... add more
];
```

**Testimonials** (`components/sections/Testimonials.tsx`):
```typescript
// Add real client testimonials
const testimonials = [
  {
    name: 'Client Name',
    title: 'Position, Company',
    quote: 'Testimonial text...',
    rating: 5,
  },
];
```

**Contact Info** (`components/sections/Contact.tsx` & `components/Footer.tsx`):
- Update phone numbers, email addresses, and physical address

### 2. Add Images

Replace placeholder backgrounds with real images:
```typescript
// In Hero.tsx and AboutTeam.tsx, replace:
<div className="aspect-square bg-gradient-to-br ...">
  // Add your image here
  <img src="/your-image.jpg" alt="..." />
</div>
```

### 3. Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#0A1A35', // Change this
  },
  secondary: {
    DEFAULT: '#00D4D0', // Change this
  },
}
```

### 4. Update Company Info

- **Logo**: Replace in `components/Header.tsx` and `components/Footer.tsx`
- **Company Name**: Search and replace "Nexus Solutions"
- **Taglines**: Update in Hero and other sections

## 📱 Test Your Website

### Desktop
1. Open http://localhost:3000 in your browser
2. Test all navigation links
3. Check hover effects on buttons and cards
4. Test the contact form
5. Verify smooth scrolling

### Mobile
1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on various screen sizes
4. Check hamburger menu functionality
5. Verify touch interactions

## 🚀 Next Steps

### Essential Changes
1. ⚠️ **Add Real Images**: Replace gradient placeholders with actual photos
2. ⚠️ **Update Contact Info**: Add your real phone, email, and address
3. ⚠️ **Customize Content**: Update all text to match your business
4. ⚠️ **Add Logo**: Design and add your company logo

### Backend Integration
```bash
# For contact form, install EmailJS or similar
npm install @emailjs/browser

# Or use API routes in Next.js
# Create: app/api/contact/route.ts
```

### Deployment

**Deploy to Vercel (Easiest)**:
```bash
npm install -g vercel
vercel
```

**Or push to GitHub and connect to Vercel**:
1. Create GitHub repository
2. Push code: `git push origin main`
3. Visit vercel.com and import project

## 📦 Useful Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Install new package
npm install package-name
```

## 🔧 Common Customizations

### Add a New Section
1. Create file: `components/sections/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add between other sections

### Change Fonts
Edit `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
```

### Add Dark Mode
Install and configure:
```bash
npm install next-themes
```

### SEO Optimization
Update `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // Add more metadata
};
```

## 📞 Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev/

## ⚡ Performance Tips

1. **Optimize Images**: Use Next.js Image component
2. **Lazy Load**: Components load as needed
3. **Minify**: Production build is automatically optimized
4. **CDN**: Deploy to Vercel/Netlify for global CDN

## 🎉 You're All Set!

Your professional IT consultancy website is ready. Start customizing the content and deploy when ready!

**Happy Coding! 🚀**
