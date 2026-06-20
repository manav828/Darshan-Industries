---
name: Industrial Prestige
colors:
  surface: '#f9f9fe'
  surface-dim: '#dad9de'
  surface-bright: '#faf9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f7'
  surface-container: '#eeedf2'
  surface-container-high: '#e9e7ec'
  surface-container-highest: '#e3e2e6'
  on-surface: '#1a1b1f'
  on-surface-variant: '#434750'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f1f0f5'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#435e8e'
  primary: '#00112c'
  on-primary: '#ffffff'
  primary-container: '#002552'
  on-primary-container: '#738dc0'
  inverse-primary: '#acc7fd'
  secondary: '#385e9a'
  on-secondary: '#ffffff'
  secondary-container: '#98bcfe'
  on-secondary-container: '#224b85'
  tertiary: '#250900'
  on-tertiary: '#ffffff'
  tertiary-container: '#461800'
  on-tertiary-container: '#c47c59'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e3ff'
  primary-fixed-dim: '#acc7fd'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#2a4775'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#aac7ff'
  on-secondary-fixed: '#001b3e'
  on-secondary-fixed-variant: '#1c4681'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb693'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#6f371a'
  background: '#faf9fd'
  on-background: '#1a1b1f'
  surface-variant: '#e3e2e6'
  glass-border: rgba(255, 255, 255, 0.6)
  glass-bg: rgba(255, 255, 255, 0.4)
  mesh-blue-tint: rgba(214, 227, 255, 0.4)
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 44px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Manrope
    fontSize: 56px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 32px
  container-max: 1440px
  unit: 8px
  section-padding: 192px
---

## Brand & Style

The brand identity is rooted in **Industrial Prestige**—a synthesis of corporate reliability and luxury editorial aesthetics. It targets enterprise-level procurement and technical partners by evoking feelings of precision, global reach, and uncompromising quality.

The visual style is a refined mix of **Modern Corporate** and **Glassmorphism**. It utilizes expansive whitespace, high-fidelity imagery with cinematic color grading, and semi-transparent layers to create a sense of depth and technical sophistication. The "Editorial" touch—seen in the italicized serif-like accents and tight letter-spacing—elevates the brand from a standard industrial supplier to a premium strategic partner.

## Colors

The palette is anchored in a "Midnight Blue" (`#002552`), signaling authority and depth. This is supported by a lighter "Executive Blue" (`#0b3b75`) used for interactive containers and primary actions. 

The background utilizes a "Cool Pearl" surface (`#f9f9fe`) rather than pure white, providing a softer, more premium canvas for the glassmorphic elements. Accent gradients use subtle mesh variations of soft blues and greys to mimic volumetric lighting. Text follows a hierarchy of deep navy for headers and a medium-contrast charcoal for body copy to maintain readability without feeling harsh.

## Typography

Typography is a critical brand pillar. **Manrope** is used for all display and headline roles to provide a modern, geometric, yet friendly professional look. **Hanken Grotesk** serves as the utilitarian workhorse for body and labels, offering high legibility with a sharp, contemporary finish.

A signature "Editorial" style is applied to display text, utilizing font-feature settings for specific character alternates and occasionally pairing bold weights with light-italic spans (60% opacity) to create a rhythmic, magazine-like hierarchy. Labels are always uppercase with generous tracking (10-25%) to denote categories and overlines.

## Layout & Spacing

The system follows a **Fixed Grid** model for large screens, centered within a 1440px container. Horizontal rhythm is established with 80px margins on desktop, scaling down to 24px on mobile. 

Vertical spacing is intentionally "breathable" and luxurious, with major sections separated by 192px (approx. 12rem) to allow high-impact imagery and complex typography to stand alone. A standard 8px baseline grid governs smaller component-level spacing (padding, gaps), ensuring mathematical harmony throughout the UI.

## Elevation & Depth

Depth is achieved through **Glassmorphism and Tonal Layering** rather than traditional heavy drop shadows. 

1.  **Surfaces:** The base is a flat, cool-toned surface. 
2.  **Glass Layers:** Key cards and navigation bars use a `backdrop-blur` (24px) combined with a semi-transparent white background and a 1px "soft glow" border (`rgba(255, 255, 255, 0.6)`).
3.  **Shadows:** When shadows are used, they are "Ambient Shadows"—extremely diffused, low-opacity, and often tinted with the primary blue (`rgba(0, 37, 82, 0.05)`).
4.  **Volumetric Light:** The use of large, blurred radial gradients behind elements simulates depth and a high-end photographic studio environment.

## Shapes

The shape language is primarily **Pill-shaped (3)** for interactive elements and **Soft-Large** for containers. 

Buttons, tags, and small badges always use a full `rounded-full` radius to feel approachable and modern. Larger structural containers, like product cards and industry tiles, use a 24px to 40px corner radius (`rounded-3xl` or custom), creating a "friendly-tech" aesthetic that softens the industrial subject matter.

## Components

### Buttons
- **Primary:** Pill-shaped, deep navy background, white text. Features a subtle lift on hover and a soft shadow.
- **Secondary/Ghost:** Pill-shaped, transparent or glass background with a fine 1px border. 
- **Icon-Link:** Uppercase label with an arrow icon that expands its gap on hover.

### Cards
- **Product Cards:** Use the "Glass-Card" style with high internal padding (40px). Feature an icon in a tinted square container with a 16px radius.
- **Industry Tiles:** White or glass backgrounds that transition to a solid primary color on hover, with all internal elements (icons/text) inverting to white.

### Form Inputs
- **Search/Input:** Minimalist, using subtle surface-container-low backgrounds or bottom-borders. Focus states should use the primary blue.

### Badges/Chips
- **Status/Category:** Small pill-shaped tags with high letter-spacing and 700 weight. Often paired with a "pulse" animation dot for active status.

### Navigation
- **Top Bar:** Floating glassmorphic bar with a thin bottom border. Blurs the content beneath it to maintain legibility.