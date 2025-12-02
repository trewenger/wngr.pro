# Tailwind CSS Class Reference Guide

A comprehensive guide to understanding and using Tailwind CSS utility classes.

---

## 📏 Spacing System

Tailwind uses a consistent spacing scale based on `0.25rem` (4px) increments.

### Scale Reference:
```
0   = 0px
1   = 0.25rem (4px)
2   = 0.5rem (8px)
3   = 0.75rem (12px)
4   = 1rem (16px)
5   = 1.25rem (20px)
6   = 1.5rem (24px)
8   = 2rem (32px)
10  = 2.5rem (40px)
12  = 3rem (48px)
16  = 4rem (64px)
20  = 5rem (80px)
24  = 6rem (96px)
32  = 8rem (128px)
40  = 10rem (160px)
48  = 12rem (192px)
56  = 14rem (224px)
64  = 16rem (256px)
```

---

## 📐 Padding Classes

Add internal spacing within elements.

### All Sides:
- `p-0` to `p-96` - Padding on all sides
- Example: `p-4` = 1rem (16px) padding all around

### Specific Sides:
- `pt-4` - Padding top
- `pb-4` - Padding bottom
- `pl-4` - Padding left
- `pr-4` - Padding right

### Axes:
- `px-4` - Padding left AND right (x-axis)
- `py-4` - Padding top AND bottom (y-axis)

### Examples:
```html
<div class="p-4">16px padding all sides</div>
<div class="px-6 py-3">24px horizontal, 12px vertical</div>
<div class="pt-8 pb-4">32px top, 16px bottom</div>
```

---

## 📏 Margin Classes

Add external spacing between elements.

### All Sides:
- `m-0` to `m-96` - Margin on all sides
- Example: `m-4` = 1rem (16px) margin

### Specific Sides:
- `mt-4` - Margin top
- `mb-4` - Margin bottom
- `ml-4` - Margin left
- `mr-4` - Margin right

### Axes:
- `mx-4` - Margin left AND right
- `my-4` - Margin top AND bottom

### Auto Centering:
- `mx-auto` - Centers element horizontally
- `ml-auto` - Pushes element to the right
- `mr-auto` - Pushes element to the left

### Negative Margins:
- `-mt-4` - Negative margin top (pulls element up)
- `-ml-8` - Negative margin left (pulls element left)

### Examples:
```html
<div class="mt-8 mb-4">32px top, 16px bottom margin</div>
<div class="mx-auto max-w-4xl">Centered container</div>
<div class="-mt-12">Pulled up by 48px</div>
```

---

## 📦 Width & Height

### Fixed Widths:
- `w-0` to `w-96` - Fixed width using spacing scale
- `w-px` - 1px width
- `w-full` - 100% width
- `w-screen` - 100vw (full viewport width)
- `w-min` - min-content
- `w-max` - max-content
- `w-fit` - fit-content

### Fractional Widths:
- `w-1/2` - 50%
- `w-1/3` - 33.333%
- `w-2/3` - 66.666%
- `w-1/4` - 25%
- `w-3/4` - 75%
- `w-1/5`, `w-2/5`, `w-3/5`, `w-4/5` - 20%, 40%, 60%, 80%

### Heights:
Same pattern as widths:
- `h-4` - Fixed height (1rem / 16px)
- `h-full` - 100% height
- `h-screen` - 100vh (full viewport height)
- `h-1/2`, `h-1/3`, etc. - Fractional heights

### Min/Max Widths:
- `min-w-0`, `min-w-full` - Minimum width
- `max-w-xs` - 20rem (320px)
- `max-w-sm` - 24rem (384px)
- `max-w-md` - 28rem (448px)
- `max-w-lg` - 32rem (512px)
- `max-w-xl` - 36rem (576px)
- `max-w-2xl` - 42rem (672px)
- `max-w-3xl` - 48rem (768px)
- `max-w-4xl` - 56rem (896px)
- `max-w-5xl` - 64rem (1024px)
- `max-w-6xl` - 72rem (1152px)
- `max-w-7xl` - 80rem (1280px)
- `max-w-full` - 100%
- `max-w-screen-sm` - 640px
- `max-w-screen-md` - 768px
- `max-w-screen-lg` - 1024px
- `max-w-screen-xl` - 1280px

### Min/Max Heights:
- `min-h-0`, `min-h-full`, `min-h-screen`
- `max-h-0` to `max-h-96`, `max-h-full`, `max-h-screen`

### Examples:
```html
<div class="w-64 h-32">256px wide, 128px tall</div>
<div class="w-full h-screen">Full width and viewport height</div>
<div class="w-1/2 max-w-4xl">50% width, max 896px</div>
```

---

## 🎨 Colors

### Text Colors:
- `text-white` - White text
- `text-black` - Black text
- `text-gray-500` - Gray (50-950 shades)
- `text-red-500` - Red (50-950 shades)
- `text-blue-500` - Blue (50-950 shades)

Your custom colors:
- `text-foreground` - Primary text
- `text-foreground-secondary` - Secondary text
- `text-foreground-tertiary` - Tertiary text
- `text-accent` - Accent blue

### Background Colors:
- `bg-white` - White background
- `bg-black` - Black background
- `bg-gray-500` - Gray background
- `bg-red-500` - Red background

Your custom backgrounds:
- `bg-background` - Main background
- `bg-background-secondary` - Secondary background
- `bg-background-tertiary` - Tertiary background
- `bg-accent` - Accent blue background

### Border Colors:
- `border-gray-500` - Gray border
- `border-accent` - Accent colored border
- `border-foreground-tertiary` - Tertiary text color border

### Opacity:
Add opacity to any color:
- `text-blue-500/50` - Blue text at 50% opacity
- `bg-black/20` - Black background at 20% opacity
- `border-accent/75` - Accent border at 75% opacity

### Examples:
```html
<div class="text-white bg-blue-500">White text, blue bg</div>
<div class="text-accent bg-background">Accent text</div>
<div class="bg-black/50">50% transparent black</div>
```

---

## 🔤 Typography

### Font Sizes:
- `text-xs` - 0.75rem (12px)
- `text-sm` - 0.875rem (14px)
- `text-base` - 1rem (16px)
- `text-lg` - 1.125rem (18px)
- `text-xl` - 1.25rem (20px)
- `text-2xl` - 1.5rem (24px)
- `text-3xl` - 1.875rem (30px)
- `text-4xl` - 2.25rem (36px)
- `text-5xl` - 3rem (48px)
- `text-6xl` - 3.75rem (60px)
- `text-7xl` - 4.5rem (72px)
- `text-8xl` - 6rem (96px)
- `text-9xl` - 8rem (128px)

### Font Weights:
- `font-thin` - 100
- `font-extralight` - 200
- `font-light` - 300
- `font-normal` - 400
- `font-medium` - 500
- `font-semibold` - 600
- `font-bold` - 700
- `font-extrabold` - 800
- `font-black` - 900

### Text Alignment:
- `text-left` - Left aligned
- `text-center` - Center aligned
- `text-right` - Right aligned
- `text-justify` - Justified

### Line Height:
- `leading-none` - 1
- `leading-tight` - 1.25
- `leading-snug` - 1.375
- `leading-normal` - 1.5
- `leading-relaxed` - 1.625
- `leading-loose` - 2

### Text Transform:
- `uppercase` - ALL CAPS
- `lowercase` - all lowercase
- `capitalize` - Capitalize First Letter

### Text Decoration:
- `underline` - Underlined text
- `line-through` - Strikethrough text
- `no-underline` - Remove underline

### Examples:
```html
<h1 class="text-5xl font-bold text-center">Large centered heading</h1>
<p class="text-base leading-relaxed">Body text with relaxed line height</p>
<span class="text-sm uppercase font-semibold">Small caps label</span>
```

---

## 📦 Flexbox

### Display Flex:
- `flex` - Enable flexbox
- `inline-flex` - Inline flexbox

### Direction:
- `flex-row` - Horizontal (default)
- `flex-row-reverse` - Horizontal reversed
- `flex-col` - Vertical
- `flex-col-reverse` - Vertical reversed

### Justify Content (main axis):
- `justify-start` - Align to start (default)
- `justify-center` - Center items
- `justify-end` - Align to end
- `justify-between` - Space between items
- `justify-around` - Space around items
- `justify-evenly` - Even space around items

### Align Items (cross axis):
- `items-start` - Align to start
- `items-center` - Center items
- `items-end` - Align to end
- `items-stretch` - Stretch items (default)
- `items-baseline` - Align to baseline

### Gap:
- `gap-0` to `gap-96` - Gap between flex items
- `gap-x-4` - Horizontal gap only
- `gap-y-4` - Vertical gap only

### Flex Grow/Shrink:
- `flex-1` - Grow and shrink equally
- `flex-auto` - Grow and shrink based on initial size
- `flex-initial` - Don't grow, can shrink
- `flex-none` - Don't grow or shrink

### Examples:
```html
<div class="flex justify-center items-center gap-4">
  Centered items with 16px gap
</div>

<div class="flex flex-col sm:flex-row gap-8">
  Vertical on mobile, horizontal on desktop
</div>

<div class="flex justify-between items-start">
  Spread apart, aligned to top
</div>
```

---

## 📐 Grid

### Display Grid:
- `grid` - Enable CSS grid
- `inline-grid` - Inline grid

### Grid Columns:
- `grid-cols-1` - 1 column
- `grid-cols-2` - 2 columns
- `grid-cols-3` - 3 columns
- `grid-cols-4` - 4 columns
- `grid-cols-6` - 6 columns
- `grid-cols-12` - 12 columns

### Grid Rows:
- `grid-rows-1` - 1 row
- `grid-rows-2` - 2 rows
- `grid-rows-3` - 3 rows

### Gap:
- `gap-4` - Gap between grid items
- `gap-x-4` - Horizontal gap
- `gap-y-4` - Vertical gap

### Column/Row Span:
- `col-span-1` - Span 1 column
- `col-span-2` - Span 2 columns
- `col-span-full` - Span all columns
- `row-span-2` - Span 2 rows

### Examples:
```html
<div class="grid grid-cols-3 gap-6">
  3 column grid with 24px gap
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  Responsive grid: 1 col mobile, 2 tablet, 4 desktop
</div>

<div class="col-span-2">Spans 2 columns</div>
```

---

## 🎭 Borders

### Border Width:
- `border` - 1px border all sides
- `border-0` - No border
- `border-2` - 2px border
- `border-4` - 4px border
- `border-8` - 8px border
- `border-t-2` - Top border only
- `border-b-2` - Bottom border only
- `border-l-2` - Left border only
- `border-r-2` - Right border only

### Border Radius:
- `rounded-none` - 0px
- `rounded-sm` - 0.125rem (2px)
- `rounded` - 0.25rem (4px)
- `rounded-md` - 0.375rem (6px)
- `rounded-lg` - 0.5rem (8px)
- `rounded-xl` - 0.75rem (12px)
- `rounded-2xl` - 1rem (16px)
- `rounded-3xl` - 1.5rem (24px)
- `rounded-full` - 9999px (perfect circle/pill)

### Specific Corners:
- `rounded-t-lg` - Top corners
- `rounded-b-lg` - Bottom corners
- `rounded-l-lg` - Left corners
- `rounded-r-lg` - Right corners
- `rounded-tl-lg` - Top-left corner
- `rounded-tr-lg` - Top-right corner
- `rounded-bl-lg` - Bottom-left corner
- `rounded-br-lg` - Bottom-right corner

### Examples:
```html
<div class="border-2 border-gray-300 rounded-lg">
  2px gray border with 8px rounded corners
</div>

<div class="border-t border-b border-accent">
  Top and bottom accent border only
</div>

<button class="border-2 border-accent rounded-full">
  Pill-shaped button
</button>
```

---

## 🌈 Shadows

### Box Shadows:
- `shadow-sm` - Small shadow
- `shadow` - Default shadow
- `shadow-md` - Medium shadow
- `shadow-lg` - Large shadow
- `shadow-xl` - Extra large shadow
- `shadow-2xl` - 2XL shadow
- `shadow-inner` - Inner shadow
- `shadow-none` - No shadow

### Examples:
```html
<div class="shadow-lg">Card with large shadow</div>
<div class="shadow-xl hover:shadow-2xl">Growing shadow on hover</div>
```

---

## 🎬 Transitions & Animations

### Transition Property:
- `transition-none` - No transitions
- `transition-all` - All properties
- `transition` - Common properties (color, bg, border, shadow, opacity)
- `transition-colors` - Color properties only
- `transition-opacity` - Opacity only
- `transition-shadow` - Shadow only
- `transition-transform` - Transform only

### Duration:
- `duration-75` - 75ms
- `duration-100` - 100ms
- `duration-150` - 150ms
- `duration-200` - 200ms
- `duration-300` - 300ms (common default)
- `duration-500` - 500ms
- `duration-700` - 700ms
- `duration-1000` - 1000ms (1s)

### Timing Function (Easing):
- `ease-linear` - Linear (constant speed)
- `ease-in` - Slow start
- `ease-out` - Slow end
- `ease-in-out` - Slow start and end

### Delay:
- `delay-75` to `delay-1000` - Delay before transition starts

### Transform:
- `scale-0` to `scale-150` - Scale transform
- `rotate-45` - Rotate 45 degrees
- `translate-x-4` - Move horizontally
- `translate-y-4` - Move vertically

### Examples:
```html
<button class="transition-all duration-300 hover:scale-110">
  Smooth scale on hover
</button>

<div class="transition-colors duration-200 hover:bg-blue-500">
  Color change on hover
</div>

<div class="transform rotate-45 scale-150">
  Rotated and scaled
</div>
```

---

## 👁️ Opacity

- `opacity-0` - Fully transparent (0%)
- `opacity-5` - 5% opacity
- `opacity-10` - 10% opacity
- `opacity-25` - 25% opacity
- `opacity-50` - 50% opacity
- `opacity-75` - 75% opacity
- `opacity-90` - 90% opacity
- `opacity-100` - Fully opaque (100%)

### Examples:
```html
<div class="opacity-50">50% transparent</div>
<div class="hover:opacity-100 transition-opacity">Fade in on hover</div>
```

---

## 📍 Position

### Position Types:
- `static` - Default positioning
- `relative` - Relative to normal position
- `absolute` - Absolute positioning
- `fixed` - Fixed to viewport
- `sticky` - Sticky positioning

### Positioning:
- `top-0` to `top-96` - Distance from top
- `bottom-0` to `bottom-96` - Distance from bottom
- `left-0` to `left-96` - Distance from left
- `right-0` to `right-96` - Distance from right
- `inset-0` - All sides set to 0 (full coverage)

### Z-Index:
- `z-0` - z-index: 0
- `z-10` - z-index: 10
- `z-20` - z-index: 20
- `z-30` - z-index: 30
- `z-40` - z-index: 40
- `z-50` - z-index: 50
- `z-auto` - z-index: auto

### Examples:
```html
<div class="relative">
  <div class="absolute top-0 right-0">Top-right corner</div>
</div>

<div class="fixed bottom-4 right-4 z-50">
  Fixed bottom-right, above other elements
</div>

<div class="sticky top-0">Sticky header</div>
```

---

## 🙈 Display & Visibility

### Display:
- `block` - Block element
- `inline-block` - Inline block
- `inline` - Inline element
- `flex` - Flexbox
- `inline-flex` - Inline flexbox
- `grid` - Grid
- `inline-grid` - Inline grid
- `hidden` - display: none (removes from layout)

### Visibility:
- `visible` - Visible (default)
- `invisible` - Hidden but takes up space
- `collapse` - Collapse (for table elements)

### Overflow:
- `overflow-auto` - Auto scrollbars
- `overflow-hidden` - Hide overflow
- `overflow-visible` - Show overflow
- `overflow-scroll` - Always show scrollbars
- `overflow-x-auto` - Horizontal scroll only
- `overflow-y-auto` - Vertical scroll only

### Examples:
```html
<div class="hidden md:block">Hidden on mobile, visible on desktop</div>
<div class="invisible">Takes up space but not visible</div>
<div class="overflow-hidden rounded-lg">Clips content at border radius</div>
```

---

## 📱 Responsive Design (Breakpoints)

Tailwind uses mobile-first breakpoints. Add prefixes to apply styles at specific screen sizes.

### Breakpoints:
- `sm:` - ≥640px (small tablets)
- `md:` - ≥768px (tablets)
- `lg:` - ≥1024px (laptops)
- `xl:` - ≥1280px (desktops)
- `2xl:` - ≥1536px (large desktops)

### How It Works:
Classes without a prefix apply to ALL screen sizes (mobile-first).
Classes with a prefix apply at that breakpoint and above.

### Examples:
```html
<!-- Stack vertically on mobile, horizontal on tablets and up -->
<div class="flex flex-col md:flex-row">

<!-- Small text on mobile, large on desktop -->
<h1 class="text-2xl lg:text-5xl">

<!-- Hidden on mobile, visible on tablets and up -->
<div class="hidden md:block">

<!-- Full width on mobile, half width on desktop -->
<div class="w-full lg:w-1/2">

<!-- 1 column mobile, 2 tablet, 3 desktop, 4 large desktop -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
```

### Responsive Pattern:
```html
<div class="
  text-base          (mobile: 16px text)
  md:text-lg         (tablet+: 18px text)
  lg:text-xl         (laptop+: 20px text)
  p-4                (mobile: 16px padding)
  md:p-6             (tablet+: 24px padding)
  lg:p-8             (laptop+: 32px padding)
">
  Responsive sizing
</div>
```

---

## 🎯 Hover, Focus, and Other States

Add state prefixes to apply styles conditionally.

### Common States:
- `hover:` - On mouse hover
- `focus:` - When focused (keyboard/click)
- `active:` - While being clicked
- `disabled:` - When disabled
- `focus-within:` - When child is focused
- `visited:` - For visited links

### Group Hover:
- `group` - Add to parent
- `group-hover:` - Apply to child when parent is hovered

### Examples:
```html
<!-- Color changes on hover -->
<button class="bg-blue-500 hover:bg-blue-700">

<!-- Scale on hover, darker when active -->
<button class="hover:scale-110 active:scale-95">

<!-- Focus ring for accessibility -->
<input class="focus:ring-2 focus:ring-blue-500 focus:outline-none">

<!-- Disabled state -->
<button class="disabled:opacity-50 disabled:cursor-not-allowed">

<!-- Group hover -->
<div class="group">
  <p class="group-hover:text-blue-500">Hovers when parent is hovered</p>
</div>
```

---

## 🎨 Custom Classes in Your Project

Your `globals.css` and `tailwind.config.js` define custom utilities:

### Custom Colors:
- `text-foreground` - Main text color
- `text-foreground-secondary` - Secondary text
- `text-foreground-tertiary` - Tertiary text
- `text-accent` - Bright blue accent
- `bg-background` - Main background
- `bg-background-secondary` - Secondary background
- `bg-background-tertiary` - Tertiary background

### Custom Utilities:
- `container-custom` - Custom container with padding
- `text-gradient` - Gradient text effect
- `btn-base` - Base button styles

---

## 🔧 Combining Classes

The power of Tailwind comes from combining utilities:

### Card Example:
```html
<div class="
  p-6                    (padding)
  bg-white               (background)
  rounded-lg             (border radius)
  shadow-lg              (shadow)
  hover:shadow-xl        (hover shadow)
  transition-shadow      (smooth transition)
  duration-300           (300ms duration)
">
  Card content
</div>
```

### Button Example:
```html
<button class="
  px-6 py-3              (padding)
  bg-blue-500            (background)
  text-white             (text color)
  font-semibold          (font weight)
  rounded-lg             (border radius)
  shadow-md              (shadow)
  hover:bg-blue-600      (hover background)
  hover:shadow-lg        (hover shadow)
  active:scale-95        (click animation)
  transition-all         (smooth transitions)
  duration-200           (200ms duration)
  focus:outline-none     (remove outline)
  focus:ring-2           (focus ring)
  focus:ring-blue-500    (ring color)
  focus:ring-offset-2    (ring offset)
">
  Click Me
</button>
```

### Responsive Card Grid:
```html
<div class="
  grid                           (enable grid)
  grid-cols-1                    (1 column on mobile)
  md:grid-cols-2                 (2 columns on tablet)
  lg:grid-cols-3                 (3 columns on desktop)
  gap-6                          (24px gap)
  p-4                            (16px padding)
  md:p-8                         (32px padding on tablet+)
">
  <!-- Cards go here -->
</div>
```

---

## 📚 Quick Reference Cheat Sheet

### Most Common Classes:

**Layout:**
- `container`, `mx-auto`, `flex`, `grid`, `block`, `hidden`

**Spacing:**
- `p-4`, `px-6`, `py-3`, `m-4`, `mt-8`, `mb-4`, `mx-auto`, `gap-4`

**Sizing:**
- `w-full`, `w-1/2`, `h-screen`, `max-w-4xl`, `min-h-screen`

**Typography:**
- `text-base`, `text-lg`, `text-2xl`, `font-bold`, `text-center`, `leading-relaxed`

**Colors:**
- `text-white`, `bg-blue-500`, `border-gray-300`

**Borders:**
- `border`, `border-2`, `rounded-lg`, `rounded-full`

**Shadows:**
- `shadow`, `shadow-lg`, `shadow-xl`

**Transitions:**
- `transition-all`, `duration-300`, `hover:scale-110`

**Flexbox:**
- `flex`, `justify-center`, `items-center`, `gap-4`, `flex-col`

**Grid:**
- `grid`, `grid-cols-3`, `gap-6`, `col-span-2`

**Responsive:**
- `md:flex-row`, `lg:grid-cols-4`, `hidden md:block`

**States:**
- `hover:bg-blue-700`, `focus:ring-2`, `disabled:opacity-50`

---

## 🔍 Where to Look Things Up

### Official Documentation:
- **Main Docs**: https://tailwindcss.com/docs
- **Searchable**: Use the search bar for any class name
- **Interactive**: Try classes in the playground

### VS Code Extension:
- Install "Tailwind CSS IntelliSense"
- Get autocomplete for all class names
- See color previews and CSS values on hover

### Quick Lookup:
- Google: "tailwind [what you want]" (e.g., "tailwind padding")
- Docs search is very fast and comprehensive

### In Your Project:
- Check `tailwind.config.js` for custom colors/spacing
- Check `globals.css` for custom utilities
- Your custom classes extend the standard Tailwind classes

---

## 💡 Pro Tips

1. **Mobile-First**: Start with mobile styles, add `md:`, `lg:` for larger screens
2. **Combine Classes**: Build complex designs by combining simple utilities
3. **Use Responsive**: Almost every class can have a responsive prefix
4. **Use Hover/Focus**: Don't forget interactive states for better UX
5. **Consistent Spacing**: Stick to the spacing scale (4, 8, 16, 24, 32, etc.)
6. **Custom Classes**: Create custom classes in `globals.css` for repeated patterns
7. **Arbitrary Values**: Use `w-[247px]` for one-off custom values
8. **Group Modifiers**: Use `group` and `group-hover` for parent-child interactions

---

## 🎓 Learning Path

1. **Start Simple**: Master spacing (p, m), sizing (w, h), colors
2. **Learn Layout**: Flexbox (flex, justify, items) and Grid
3. **Add Interactivity**: Hover, focus, transitions
4. **Go Responsive**: Use breakpoints (sm, md, lg)
5. **Advanced**: Animations, transforms, custom utilities

---

This reference covers 90% of what you'll use in daily development. Bookmark the official docs for the full reference!
