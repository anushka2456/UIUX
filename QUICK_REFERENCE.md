# Quick Reference Guide

## Design Tokens

### Colors
```javascript
import { colors } from './config/design-system'

colors.primary[600]   // #2563eb (Primary blue)
colors.neutral[900]   // #0f172a (Text primary)
colors.neutral[500]   // #64748b (Text secondary)
colors.success[500]   // #22c55e (Green)
colors.warning[500]   // #f59e0b (Yellow)
colors.error[500]     // #ef4444 (Red)
```

### Spacing
```javascript
import { spacing } from './config/design-system'

spacing.xs    // 8px
spacing.sm    // 12px
spacing.md    // 16px (default)
spacing.lg    // 24px (card padding)
spacing.xl    // 32px
spacing['2xl'] // 48px
```

### Transitions
```javascript
import { transitions } from './config/design-system'

transition={transitions.spring}   // Bouncy feel
transition={transitions.normal}   // Standard 200ms
transition={transitions.fast}     // Quick 150ms
```

## Components

### RefinedCard
```jsx
import RefinedCard from './components/RefinedCard'

<RefinedCard
  delay={0.1}           // Entrance animation delay
  hover={true}          // Enable hover lift
  variant="medium"      // light | medium | strong
  className="p-8"
>
  {children}
</RefinedCard>
```

### RefinedStatCard
```jsx
import RefinedStatCard from './components/RefinedStatCard'
import { Users } from 'lucide-react'

<RefinedStatCard
  icon={Users}
  label="Total Cases"
  value={1240500}
  change="+2.3%"
  delay={0}
/>
```

### RefinedHero
```jsx
import RefinedHero from './components/RefinedHero'

<RefinedHero />  // Self-contained hero section
```

### RefinedBackground
```jsx
import RefinedBackground from './components/RefinedBackground'

<RefinedBackground />  // Subtle particle background
```

## Common Patterns

### Button (Primary)
```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20 transition-colors"
>
  Primary Action
</motion.button>
```

### Button (Secondary)
```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="px-8 py-4 rounded-xl bg-white hover:bg-neutral-50 text-neutral-700 font-semibold border border-neutral-200 transition-colors"
>
  Secondary Action
</motion.button>
```

### Input
```jsx
<input
  className="w-full bg-white border border-neutral-200 rounded-xl py-3 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
  placeholder="Search..."
/>
```

### Glass Effect (When Needed)
```jsx
<div className="glass-card-premium rounded-2xl p-6">
  {/* Content */}
</div>
```

### Card Hover Animation
```jsx
<motion.div
  whileHover={{ y: -4, scale: 1.01 }}
  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
  className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all cursor-pointer"
>
  {children}
</motion.div>
```

## Typography Scale

```jsx
// Hero
<h1 className="text-5xl md:text-7xl font-bold tracking-tight">

// Section Header
<h2 className="text-2xl md:text-3xl font-bold">

// Card Title
<h3 className="text-lg md:text-xl font-semibold">

// Body
<p className="text-base md:text-lg font-medium">

// Label
<span className="text-sm font-semibold uppercase tracking-wide">

// Caption
<span className="text-xs font-medium">
```

## Color Classes

```jsx
// Text Colors
text-neutral-900  // Primary text
text-neutral-600  // Secondary text
text-neutral-400  // Tertiary text

// Background Colors
bg-white          // Cards, surfaces
bg-neutral-50     // Subtle backgrounds
bg-blue-600       // Primary actions

// Border Colors
border-neutral-200  // Default
border-neutral-300  // Hover
border-blue-500     // Focus
```

## Shadows

```jsx
shadow-sm    // Subtle hint
shadow-md    // Default cards
shadow-lg    // Hover states
shadow-xl    // Modals
shadow-2xl   // Overlays

// Colored shadows (sparingly)
shadow-blue-500/20  // 20% opacity blue
```

## Border Radius

```jsx
rounded-lg   // 12px (small elements)
rounded-xl   // 16px (buttons)
rounded-2xl  // 24px (cards)
rounded-full // Pills, badges
```

## Spacing (Tailwind)

```jsx
p-4   // 16px padding
p-6   // 24px padding (card default)
p-8   // 32px padding

gap-4  // 16px gap (default)
gap-6  // 24px gap
gap-8  // 32px gap

mb-4   // 16px margin bottom
mb-6   // 24px margin bottom
mb-12  // 48px margin bottom (sections)
```

## Responsive Breakpoints

```jsx
// Mobile first
<div className="text-base md:text-lg lg:text-xl">

// Breakpoints
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

## Animation Timing

```jsx
// Entrance animations
duration: 0.4, delay: 0.1

// Hover interactions
duration: 0.2

// Modal/overlay
duration: 0.3

// Loading states
duration: 1.2 (progress bars)
```

## Icon Sizes

```jsx
size={16}  // xs - Inline with text
size={20}  // sm - Buttons, labels
size={24}  // md - Cards, headers
size={28}  // lg - Featured icons
size={32}  // xl - Hero sections
```

## Common Gradients

```jsx
// Primary (sparingly)
bg-gradient-to-r from-blue-600 to-blue-500

// Success
bg-gradient-to-r from-green-500 to-emerald-500

// Subtle background
bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50
```

## Accessibility Checklist

```jsx
// Focus visible
focus:outline-none focus:ring-2 focus:ring-blue-500

// Touch target (minimum 44x44px)
className="p-3"  // Ensures adequate size

// Contrast check
// Use neutral-700+ on white
// Use white on blue-600+

// ARIA labels
aria-label="Descriptive text"
```

## Performance Best Practices

```jsx
// GPU acceleration
transform: 'translateZ(0)'
willChange: 'transform'

// Avoid animating
width, height, top, left, margin, padding

// Prefer animating
transform, opacity

// Lazy load images
loading="lazy"
```

## Common Mistakes to Avoid

```jsx
// ❌ Don't
<div style={{ marginBottom: 23 }}>           // Magic number
<motion.div animate={{ scale: 1.3 }}>       // Too much
backdrop-filter: blur(40px)                  // Too heavy
<p className="text-neutral-300">Text</p>     // Low contrast

// ✅ Do
<div style={{ marginBottom: spacing.md }}>  // Design token
<motion.div whileHover={{ scale: 1.02 }}>  // Subtle
backdrop-filter: blur(12px)                  // Restrained
<p className="text-neutral-700">Text</p>     // Good contrast
```

## File Structure

```
src/
├── config/
│   ├── design-system.js  ← Import tokens from here
│   └── motion.js         ← Animation presets
├── components/
│   ├── RefinedHero.jsx
│   ├── RefinedCard.jsx
│   ├── RefinedStatCard.jsx
│   └── RefinedBackground.jsx
├── AppRefined.jsx        ← Main app
└── index.css             ← Global styles
```

## Testing Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production
npm run preview

# Type check (if using TypeScript)
npm run type-check
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome Android 90+

## Performance Targets

- Lighthouse Score: 95+
- First Paint: < 1.5s
- Time to Interactive: < 3s
- FPS (scroll): 60fps
- Bundle size: < 500KB (gzipped)

---

**Pro Tip**: When in doubt, make it simpler. Professional UI is about clarity and restraint, not complexity.
