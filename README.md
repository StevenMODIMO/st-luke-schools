# Flame Academy — School Platform

A full Next.js 14 school platform built from the user stories document.

## Project Structure

```
school-platform/
├── app/
│   ├── page.tsx                    # Landing page (hero, vision/mission, academics, results CTA)
│   ├── about/page.tsx              # About page (history, leadership, stats)
│   ├── academics/page.tsx          # Academic programs (Primary, O-Level, A-Level)
│   ├── contact/page.tsx            # Contact page with enquiry form
│   ├── login/page.tsx              # Staff login (teacher / admin roles)
│   ├── results/page.tsx            # Parent portal — results lookup by reg number
│   └── dashboard/
│       ├── teacher/page.tsx        # Teacher dashboard — mark entry sheets
│       └── admin/page.tsx          # Academic admin — combine, grade, publish
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Responsive navbar with dropdowns
│   │   └── Footer.tsx              # Footer with links and contact info
│   └── sections/
│       ├── HeroSection.tsx         # Dark hero with stats and CTAs
│       ├── VisionMission.tsx       # Vision, mission, and core values
│       ├── AcademicsPreview.tsx    # Academic levels preview cards
│       └── ResultsBanner.tsx       # Parent portal CTA banner
├── public/images/
│   └── school-logo.png             # School logo (flame icon)
├── tailwind.config.ts              # Custom colours: flame, charcoal, cream, parchment
└── app/globals.css                 # Google Fonts (Playfair Display + DM Sans), CSS vars
```

## Pages & Features Implemented

### Public Website
- **Home** (`/`) — Hero with school tagline, vision & mission section, academics preview, results portal banner
- **About** (`/about`) — School history timeline, leadership team, key stats
- **Academics** (`/academics`) — Primary, O-Level and A-Level programs with subjects and streams
- **Contact** (`/contact`) — Contact info + enquiry form with subject selection

### Parent Portal
- **Results** (`/results`) — Registration number lookup, term/year selection, full results table with grades, class position, and print/download buttons
  - Demo reg numbers: `FA-2024-001` and `FA-2024-042`

### Staff Dashboards
- **Login** (`/login`) — Tabbed teacher/admin login with role-based redirect
- **Teacher Dashboard** (`/dashboard/teacher`) — Assignment list, interactive mark entry sheet (CAT + Exam), draft save, submit, progress bar
- **Admin Dashboard** (`/dashboard/admin`) — 4-tab interface:
  - Mark Status — submission status for all classes
  - Combine Marks — ranked combined results table for a class
  - Grading Scheme — grading scale and assessment component weights
  - Publish Results — publish flow with confirmation and publication log

## Design System

- **Colour palette**: Flame red (`#e83010`), deep charcoal (`#1a1917`), warm cream (`#faf8f5`)
- **Typography**: Playfair Display (headings) + DM Sans (body) via Google Fonts
- **Theme**: Dark hero sections, warm cream content areas, subtle textures
- **Tailwind** with custom colour tokens: `flame-*`, `charcoal-*`, `cream`, `parchment`

## Getting Started

```bash
cd school-platform
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Next Steps (from user stories)

- [ ] Connect real database (PostgreSQL + Prisma recommended)
- [ ] Implement authentication with NextAuth.js
- [ ] Build student enrolment management (US-027)
- [ ] Add academic year/term management (US-026)
- [ ] PDF generation for result slips (US-010, US-025)
- [ ] Email notifications for teachers (US-028)
- [ ] News and announcements module (US-004)
- [ ] School gallery (US-006)
