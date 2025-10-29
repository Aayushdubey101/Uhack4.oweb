# Project Structure

This document outlines the complete project structure for the frontend-only React + Tailwind + TypeScript application.

## Project Hierarchy

```
QuantumMinds/
├── .gitignore
├── components.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── client/
    ├── index.html
    └── src/
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── components/
        │   ├── About.tsx
        │   ├── Certificate.tsx
        │   ├── FAQ.tsx
        │   ├── Footer.tsx
        │   ├── Gallery.tsx
        │   ├── Hero.tsx
        │   ├── JudgesSpeakers.tsx
        │   ├── MotionWrapper.tsx
        │   ├── Navigation.tsx
        │   ├── Prizes.tsx
        │   ├── Problems.tsx
        │   ├── Sponsors.tsx
        │   ├── Team.tsx
        │   ├── ThemeProvider.tsx
        │   ├── ThemeToggle.tsx
        │   ├── Timeline.tsx
        │   ├── examples/
        │   │   ├── About.tsx
        │   │   ├── FAQ.tsx
        │   │   ├── Footer.tsx
        │   │   ├── Gallery.tsx
        │   │   ├── Hero.tsx
        │   │   ├── JudgesSpeakers.tsx
        │   │   ├── Navigation.tsx
        │   │   ├── Prizes.tsx
        │   │   ├── Sponsors.tsx
        │   │   ├── Team.tsx
        │   │   └── Timeline.tsx
        │   └── ui/
        │       ├── accordion.tsx
        │       ├── alert-dialog.tsx
        │       ├── alert.tsx
        │       ├── aspect-ratio.tsx
        │       ├── avatar.tsx
        │       ├── badge.tsx
        │       ├── breadcrumb.tsx
        │       ├── button.tsx
        │       ├── calendar.tsx
        │       ├── card.tsx
        │       ├── carousel.tsx
        │       ├── chart.tsx
        │       ├── checkbox.tsx
        │       ├── collapsible.tsx
        │       ├── command.tsx
        │       ├── context-menu.tsx
        │       ├── dialog.tsx
        │       ├── drawer.tsx
        │       ├── dropdown-menu.tsx
        │       ├── form.tsx
        │       ├── hover-card.tsx
        │       ├── input-otp.tsx
        │       ├── input.tsx
        │       ├── label.tsx
        │       ├── menubar.tsx
        │       ├── navigation-menu.tsx
        │       ├── pagination.tsx
        │       ├── popover.tsx
        │       ├── progress.tsx
        │       ├── radio-group.tsx
        │       ├── resizable.tsx
        │       ├── scroll-area.tsx
        │       ├── select.tsx
        │       ├── separator.tsx
        │       ├── sheet.tsx
        │       ├── sidebar.tsx
        │       ├── skeleton.tsx
        │       ├── slider.tsx
        │       ├── switch.tsx
        │       ├── table.tsx
        │       ├── tabs.tsx
        │       ├── textarea.tsx
        │       ├── toast.tsx
        │       ├── toaster.tsx
        │       ├── toggle-group.tsx
        │       ├── toggle.tsx
        │       └── tooltip.tsx
        ├── hooks/
        │   ├── use-mobile.tsx
        │   └── use-toast.ts
        ├── lib/
        │   ├── motion.ts
        │   ├── queryClient.ts
        │   └── utils.ts
        └── pages/
            ├── Home.tsx
            └── not-found.tsx
```

## Package Details

### Project Metadata
- **Name**: rest-express
- **Version**: 1.0.0
- **Type**: module
- **License**: MIT

### Scripts
- `dev`: vite
- `build`: vite build
- `preview`: vite preview
- `lint`: tsc --noEmit

### Dependencies
- @radix-ui/react-accordion: ^1.2.4
- @radix-ui/react-alert-dialog: ^1.1.7
- @radix-ui/react-aspect-ratio: ^1.1.3
- @radix-ui/react-avatar: ^1.1.4
- @radix-ui/react-checkbox: ^1.1.5
- @radix-ui/react-collapsible: ^1.1.4
- @radix-ui/react-context-menu: ^2.2.7
- @radix-ui/react-dialog: ^1.1.7
- @radix-ui/react-dropdown-menu: ^2.1.7
- @radix-ui/react-hover-card: ^1.1.7
- @radix-ui/react-label: ^2.1.3
- @radix-ui/react-menubar: ^1.1.7
- @radix-ui/react-navigation-menu: ^1.2.6
- @radix-ui/react-popover: ^1.1.7
- @radix-ui/react-progress: ^1.1.3
- @radix-ui/react-radio-group: ^1.2.4
- @radix-ui/react-scroll-area: ^1.2.4
- @radix-ui/react-select: ^2.1.7
- @radix-ui/react-separator: ^1.1.3
- @radix-ui/react-slider: ^1.2.4
- @radix-ui/react-slot: ^1.2.0
- @radix-ui/react-switch: ^1.1.4
- @radix-ui/react-tabs: ^1.1.4
- @radix-ui/react-toast: ^1.2.7
- @radix-ui/react-toggle: ^1.1.3
- @radix-ui/react-toggle-group: ^1.1.3
- @radix-ui/react-tooltip: ^1.2.0
- @tanstack/react-query: ^5.60.5
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1
- cmdk: ^1.1.1
- date-fns: ^3.6.0
- embla-carousel-react: ^8.6.0
- framer-motion: ^11.18.2
- input-otp: ^1.4.2
- lucide-react: ^0.453.0
- react: ^18.3.1
- react-day-picker: ^8.10.1
- react-dom: ^18.3.1
- react-hook-form: ^7.55.0
- react-resizable-panels: ^2.1.7
- react-type-animation: ^3.2.0
- recharts: ^2.15.2
- tailwind-merge: ^2.6.0
- tailwindcss-animate: ^1.0.7
- vaul: ^1.1.2
- wouter: ^3.3.5

### DevDependencies
- @types/node: ^24.5.2
- @types/react: ^18.3.11
- @types/react-dom: ^18.3.1
- @vitejs/plugin-react: ^4.7.0
- autoprefixer: ^10.4.20
- postcss: ^8.4.47
- tailwindcss: ^3.4.17
- typescript: 5.6.3
- vite: ^6.1.6
