# Specification

## Summary
**Goal:** Build a single-page, dark-theme frontend developer portfolio with neon/glassmorphism styling and Framer Motion-driven animations across all sections.

**Planned changes:**
- Set up Tailwind theme tokens/utilities for dark surfaces, neon accents, glow shadows, glassmorphism styling, custom scrollbar, and a subtle global noise/grain overlay.
- Implement a centralized Framer Motion animation system (reusable variants), scroll-triggered reveal animations, smooth section/page-like transitions, and an initial loader animation.
- Build a responsive navbar with smooth scrolling to sections and hide-on-scroll-down / show-on-scroll-up behavior (including a mobile-friendly navigation pattern).
- Create portfolio sections: Hero (animated name + typing role + “Hire Me”/“View Projects” CTAs), About (animated profile image + tech icons), Skills (animated progress indicators), Projects (animated/tilt cards with overlay links + animated category filter), Experience/Education (animated timeline), Contact (animated form with validation + success state + social icons), Footer (minimal with subtle animation).
- Add interactive effects: magnetic button behavior for key CTAs, a neon-themed cursor follower (desktop only), subtle animated gradient background, and selective parallax effects with touch/accessibility-friendly fallbacks.
- Ensure responsive layout, smooth scrolling, basic SEO metadata/semantic structure, and a clean reusable component structure (without modifying `frontend/src/components/ui` or immutable hook/bootstrap paths).
- Add and reference required static image assets under `frontend/public/assets/generated` (no backend image serving).

**User-visible outcome:** A responsive, fully animated dark neon portfolio page with smooth in-page navigation, interactive hover/motion effects, animated sections (Hero/About/Skills/Projects/Timeline/Contact/Footer), and locally handled contact form submission feedback.
