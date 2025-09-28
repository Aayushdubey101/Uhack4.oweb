# UHACK 4.0 Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer tools like Linear and Vercel, combined with gaming aesthetics to reflect the competitive hackathon nature. The design emphasizes technical sophistication while maintaining accessibility.

## Color Palette
**Dark Theme Primary** (maintaining existing structure):
- Background: 0 0% 4% (deep black)
- Primary: 240 100% 65% (electric blue)
- Secondary: 280 100% 70% (vibrant purple)
- Accent: 180 100% 50% (cyan highlights)
- Text: 0 0% 95% (near white)
- Muted: 240 5% 15% (dark gray)

**Gradients**: 
- Hero background: Subtle radial gradient from primary to background
- Section dividers: Linear gradients using primary and secondary colors
- Button highlights: Cyan to purple gradients on CTAs

## Typography
**Primary Font**: Inter (Google Fonts) - clean, technical feel
**Accent Font**: JetBrains Mono (Google Fonts) - for code snippets and technical elements
**Hierarchy**:
- Hero title: 4xl-6xl, bold, gradient text
- Section headers: 2xl-3xl, semibold
- Body text: base-lg, normal weight
- Captions: sm, muted color

## Layout System
**Spacing Primitives**: Tailwind units of 4, 8, 16, 24 (p-4, m-8, h-16, gap-24)
**Container**: Max-width 7xl with responsive padding
**Grid System**: 12-column grid with 4-8 column components on desktop, single column mobile

## Component Library
**Navigation**: Fixed header with glassmorphism effect, blur backdrop
**Cards**: Dark backgrounds with subtle borders, hover glow effects
**Buttons**: Primary (gradient), Secondary (outline with blur), Ghost variants
**Forms**: Dark inputs with focus states, floating labels
**Modals**: Full-screen overlays with backdrop blur

## Key Sections & Features
**Hero**: Full viewport height with particle animation background, centered logo, countdown timer
**About**: Split layout with tech-focused imagery
**Prizes**: Card grid with trophy icons and prize tiers
**Timeline**: Vertical timeline with milestone markers
**Registration**: Multi-step form with progress indicator
**Gallery**: Masonry layout with lightbox functionality

## Interactive Elements
**Animations**: Minimal - subtle hover states, smooth transitions (200ms)
**Micro-interactions**: Button press feedback, form validation states
**Loading States**: Skeleton components, progress indicators

## Technical Considerations
**Icons**: Lucide React (already included)
**Responsive**: Mobile-first approach with breakpoint-specific layouts
**Performance**: Lazy loading for gallery images, optimized animations
**Accessibility**: High contrast ratios, keyboard navigation, screen reader support

## Images
**Hero Image**: Large background image/video of coding/technology (full viewport)
**About Section**: Split layout with hackathon environment photos
**Gallery**: Previous event photos, team coding sessions, award ceremonies
**Team Photos**: Professional headshots with consistent styling
**Sponsor Logos**: High-contrast versions for dark backgrounds

## Brand Integration
**UHACK 4.0**: Prominent logo placement, consistent use of event name
**Quantum Minds**: Secondary branding as presenter, smaller but visible
**Hackathon Identity**: Technical, competitive, innovative visual language