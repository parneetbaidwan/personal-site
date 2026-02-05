# Personal Portfolio Website

A minimal, responsive personal website built to showcase projects, writing, and case studies.  
Designed with clarity, accessibility, and performance in mind.

**Live Website:** https://parneetbaidwan.com

---

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Analytics:** Google Analytics (GA4)
- **Language:** TypeScript

---

## Features
- Responsive, mobile-first layout  
- Light / dark mode toggle  
- Case study pages for selected projects  
- Writing section for academic and personal work  
- Analytics integration for engagement tracking  
- SEO-friendly metadata and social previews  

---

## Project Structure

```text
app/
  ├─ page.tsx                # Homepage
  ├─ work/
  │   ├─ fund-homecare/      # Fund Homecare case study
  │   └─ clean-your-room/    # Clean Your Room case study
  ├─ writing/               # Writing section
components/
  ├─ ThemeToggle.tsx        # Light / dark mode toggle
public/
  ├─ favicon.png
  └─ og-image.png           # Social preview image
styles/
  └─ globals.css
