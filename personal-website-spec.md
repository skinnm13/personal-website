# Personal Website — Build Specification
**Michael Skinner · Developer Portfolio**

---

## Overview

Build a personal developer portfolio website for Michael Skinner, a Computer Engineering Co-Op student at McMaster University graduating April 2026. The site should feel like a polished, modern engineering portfolio — clean but technical, dark-mode friendly, and focused on demonstrating depth in embedded systems, cloud automation, and systems-level software.

**Stack:** React (Vite recommended), plain CSS or TailwindCSS, no backend required. Deploy to GitHub Pages or Vercel.

---

## Site Structure

Single-page application with smooth scroll navigation. Sections in order:

1. Hero
2. About
3. Experience
4. Projects
5. Skills
6. Contact

Use a sticky navbar that highlights the active section on scroll.

---

## Section Specifications

### 1. Hero

- Full-viewport-height opening section.
- Name: **Michael Skinner**
- Tagline (typewriter animation or static): `Computer Engineering · Embedded Systems · Cloud Automation`
- Subtitle: `B.Eng Co-Op · McMaster University · Class of 2026`
- Two CTA buttons:
  - **View Projects** → scrolls to Projects section
  - **Download Resume** → links to hosted PDF of resume
- Subtle background: dark with a low-opacity grid or circuit-board SVG pattern (fits the engineering theme).
- Avatar: pull from GitHub avatar URL `https://avatars.githubusercontent.com/u/97812241?v=4`

---

### 2. About

Short paragraph introducing Michael. Suggested copy (edit as needed):

> I'm a Computer Engineering student at McMaster University with hands-on co-op experience building cloud automation pipelines, embedded real-time systems, and security compliance frameworks. I'm drawn to work that sits at the boundary of hardware and software — from writing firmware for ADC acquisition pipelines to deploying event-driven AWS Lambda workflows at scale.

Include:
- Links row: GitHub (`https://github.com/skinnm13`), LinkedIn, Email (`skinnm13@mcmaster.ca`)
- Location: Hamilton / Toronto, ON

---

### 3. Experience

Render as a vertical timeline. Each entry has: company, role, date range, location, and bullet points.

#### Bell Canada
**Cloud Automation Developer (Co-op)** · Toronto, ON · May 2024 – Aug 2024
- Developed event-driven AWS Lambda pipelines using Python supporting large-scale device synchronization and backend workflows.
- Designed CI/CD validation gates preventing defective deployments and improving system reliability.
- Implemented structured logging and monitoring on Linux/Unix ensuring deterministic event processing.
- Investigated and resolved provisioning latency, configuration drift, and API inconsistencies across distributed systems.

**Automation Intern (Co-op)** · Toronto, ON · May 2023 – Aug 2023
- Developed evaluation frameworks measuring extraction accuracy and error rates for a Google Cloud–based OCR automation system.
- Investigated failure modes in OCR outputs and designed regression test suites across diverse formats and edge cases.
- Implemented defensive validation checks preventing inconsistent downstream data ingestion.
- Built automated provisioning workflows using Python, SQL stored procedures, and REST APIs.

#### Superior Computer Solutions
**Security Compliance Specialist (Co-op)** · Toronto, ON · May 2025 – Aug 2025
- Conducted ISO/IEC 27001:2022 gap assessments and managed PCI-DSS SAQ-D audit evidence.
- Reviewed SOC 2 / ISO 27001 vendor reports and supported internal risk assessments.
- Strengthened expertise in secure system design, auditability, and integrity controls for sensitive data environments.

---

### 4. Projects

Render as a card grid (2 columns on desktop, 1 on mobile). Each card shows: title, date range, tag chips (tech used), and bullet-point description. Include a GitHub link button where the repo is public.

#### Autonomous Vehicle System
**Jan 2026 – Present** · Tags: `PX4` `C++` `Embedded` `NuttX RTOS` `MAVLink` `Raspberry Pi`
- Autonomous vehicle on FMUK66 with NuttX RTOS for real-time embedded control.
- Modular apps using uORB publish–subscribe messaging and MAVLink for distributed integration.
- Raspberry Pi integration for high-level sensor processing, camera and ultrasonic obstacle avoidance.
- Real-time motor control (ESC + servo) with feedback loops focused on timing constraints.

#### Portable Ultrasound Device (Capstone)
**Sep 2025 – Present** · Tags: `Embedded` `C` `Signal Processing` `Machine Learning` `MCU`
GitHub: `https://github.com/sartajo/Sonolite`
- Embedded firmware for high-speed ADC data acquisition under real-time constraints.
- Real-time signal processing pipelines: filtering, envelope detection, scan conversion.
- ML inference for automated detection of clinically relevant patterns in ultrasound data.
- End-to-end pipeline optimized for low-latency real-time imaging.

#### Optimization Research
**Sep 2025 – Dec 2025** · Tags: `C++` `AVX2/AVX512` `OpenCL` `GPU` `HPC`
- AVX2/AVX512-vectorized sparse matrix kernels with cache-aware tiling and sparsity-driven optimizations.
- OpenCL GPU kernels leveraging thread-level parallelism and memory coalescing.
- Tuned work-group sizing and kernel occupancy with async command queues to maximize throughput.
- Profiled CPU/GPU memory hierarchies to eliminate bottlenecks and propose heterogeneous scaling strategies.

#### Software Defined Radio System
**Jan 2024 – May 2024** · Tags: `C++` `Python` `GNU Radio` `DSP` `RF`
- Real-time IQ sampling pipelines for RF signal acquisition using GNU Radio.
- FFT-based spectral analysis for frequency-domain signal reconstruction.
- Custom protocol decoding logic with structured packet parsing and validation.
- C++/Python processing modules for low-latency streaming and real-time debugging.

#### Intro to Computer Vision
**Archived** · Tags: `Python` `Computer Vision`
GitHub: `https://github.com/skinnm13/Intro-to-Computer-Vision`
- First exploration into computer vision concepts and implementations.

#### Embedded Systems Visualization Project
**2nd Year** · Tags: `C` `Embedded`
GitHub: `https://github.com/skinnm13/Embedded-Systems-Visualization-Project`
- Embedded system project focused on data visualization from hardware sensors.

---

### 5. Skills

Render as grouped chips or a clean grid. No progress bars — just clean tag-style groupings.

| Group | Skills |
|---|---|
| **Languages** | Python, C, C++, Java, SQL, JavaScript |
| **Systems & Embedded** | Distributed systems, Real-time systems, Linux/Unix, Firmware, SPI/I2C/UART, FreeRTOS |
| **Cloud & Automation** | AWS Lambda, Google Cloud, CI/CD, REST APIs |
| **Security & Compliance** | ISO 27001, PCI-DSS, SOC 2 |
| **Tools & Frameworks** | Git, Jira, GNU Radio, PX4, NuttX |

---

### 6. Contact

Simple section with:
- Email: `skinnm13@mcmaster.ca`
- GitHub: `https://github.com/skinnm13`
- LinkedIn: link to Michael's LinkedIn profile
- A short line: `Open to new grad roles and co-op opportunities.`

No contact form needed — just styled link buttons.

---

## Design Guidelines

**Color palette (dark mode default):**
- Background: `#0f1117` or `#111827`
- Surface/card: `#1a1f2e` or `#1e2337`
- Primary accent: `#3b82f6` (blue) or `#60a5fa`
- Text primary: `#f1f5f9`
- Text secondary: `#94a3b8`
- Border/divider: `#1e293b`

**Typography:**
- Headings: `Inter` or `Space Grotesk` (Google Fonts)
- Body: `Inter`
- Code/tags: `JetBrains Mono` or `Fira Code`

**Other:**
- Smooth scroll behavior (`scroll-behavior: smooth`)
- Fade-in-on-scroll animations using `IntersectionObserver` (no heavy animation libraries)
- Mobile responsive — hamburger menu on mobile
- Hover effects on project cards (subtle lift + border highlight)

---

## File Structure (Suggested)

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Experience.jsx
    Projects.jsx
    Skills.jsx
    Contact.jsx
    Footer.jsx
  data/
    experience.js     ← structured data for experience entries
    projects.js       ← structured data for project cards
    skills.js         ← grouped skills data
  App.jsx
  main.jsx
  index.css
public/
  resume.pdf          ← Michael's resume PDF
```

---

## Data Files

Structure experience, projects, and skills as JS objects/arrays in `src/data/` so the site is easy to update without touching component code. Example pattern:

```js
// src/data/projects.js
export const projects = [
  {
    title: "Autonomous Vehicle System",
    dates: "Jan 2026 – Present",
    tags: ["PX4", "C++", "Embedded", "NuttX RTOS", "MAVLink"],
    bullets: [...],
    github: null,
  },
  ...
];
```

---

## Links & Assets

| Resource | Value |
|---|---|
| GitHub profile | `https://github.com/skinnm13` |
| GitHub avatar | `https://avatars.githubusercontent.com/u/97812241?v=4` |
| Email | `skinnm13@mcmaster.ca` |
| Phone | 905-921-5022 |
| University | McMaster University, Hamilton ON |
| Degree | B.Eng, Computer Engineering, Class of 2026 |

---

## Nice-to-Haves (Optional)

- GitHub contribution graph or pinned-repo cards fetched from GitHub's public API
- Dark/light mode toggle
- "Copy email" button in contact section
- Animated section entrance using `framer-motion`
- Custom 404 page
