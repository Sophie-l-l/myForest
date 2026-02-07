# myForest — Interactive 3D Parallax Web Experience

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Live](https://img.shields.io/badge/Live-GitHub%20Pages-00C853?style=for-the-badge)](https://sophie-l-l.github.io/myForest/)

**myForest** is a visually rich, parallax-scrolling web experience that simulates a **3D forest journey through three seasons** (Spring, Summer, Autumn). Built entirely with vanilla HTML/CSS/JavaScript — no frameworks — it serves as a creative gateway to four multimedia projects.

**Live Demo:** [https://sophie-l-l.github.io/myForest/](https://sophie-l-l.github.io/myForest/)

---

## Key Achievements

- **Situation**: Needed a creative portfolio piece to showcase four Communication Lab multimedia projects in an engaging, unified experience
- **Task**: Design and build an immersive parallax web experience from scratch without any frameworks
- **Action**:
  - Engineered **multi-layered parallax scrolling** using CSS custom properties and `requestAnimationFrame` — 3 depth layers per season with calculated divisors for realistic depth perception
  - Built a **dynamic firefly animation system** — 14 procedurally generated fireflies with randomized positioning, flickering opacity, and CSS keyframe animations
  - Implemented **interactive SVG path drawing** using mouse wheel input with `stroke-dasharray` / `stroke-dashoffset` technique
  - Created smooth **season transitions** (Spring → Summer → Autumn) with viewport-based CSS variable calculations
  - Used **Parallax.js library** for device-orientation-aware movement effects
- **Result**: A polished, framework-free creative portfolio that demonstrates advanced CSS/JS techniques and serves as an engaging gateway to 4 sub-projects

---

## Features

### Visual Effects
- **Multi-layered parallax** — 3 depth layers per season (front, middle, base) with calculated scroll ratios (/5.7, /2.5, /1.6)
- **Firefly animation** — 14 dynamically generated fireflies with random positioning and flickering effects
- **SVG path drawing** — Interactive line drawing triggered by mouse wheel scroll
- **Season transitions** — Smooth viewport-based transitions between Spring, Summer, and Autumn scenes

### Sub-Projects (Gateway Links)
- **30MFF** — Visual-narrative dive into NYUAD student life
- **Comix Strip** — Interactive space odyssey with user-controlled progression
- **Sounds Like** — Audio-driven mystery experience with detective logic
- **VID-E-OH!!!** — Mental health storytelling platform using expressive design and video

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Structure** | HTML5 (semantic elements, SVG) |
| **Styling** | CSS3 (custom properties, transforms, keyframes, Grid) |
| **Interactivity** | Vanilla JavaScript (DOM manipulation, event handling) |
| **Parallax** | Parallax.js library (device-orientation support) |
| **Deployment** | GitHub Pages |

---

## How It Works

The parallax effect is driven by CSS custom properties updated on scroll:

```javascript
// Scroll position drives CSS variables
const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    document.documentElement.style.setProperty('--scrollTop', `${scrollTop}px`);
    document.documentElement.style.setProperty('--scrollTop-one', `${scrollTop - window.innerHeight}px`);
    document.documentElement.style.setProperty('--scrollTop-two', `${scrollTop - 2 * window.innerHeight}px`);
}
```

```css
/* Each layer scrolls at different rates for depth */
#spring-front  { transform: translateY(calc(var(--scrollTop) / 5.7)); }    /* Slow - far */
#spring-middle { transform: translateY(calc(var(--scrollTop) / 2.5)); }    /* Medium */
#spring-base   { transform: translateY(calc(var(--scrollTop) / 1.6)); }    /* Fast - near */
```

---

## Project Structure

```
myForest/
├── index.html          # Main HTML with parallax layers + SVG
├── style.css           # All styling (351 lines)
│                       #   - CSS custom properties for scroll
│                       #   - Parallax layer positioning
│                       #   - Firefly animations (@keyframes)
│                       #   - Season section layouts
├── script.js           # JavaScript (178 lines)
│                       #   - Scroll event → CSS variable updates
│                       #   - SVG path drawing (stroke-dashoffset)
│                       #   - Firefly generation (14 elements)
│                       #   - Parallax.js initialization
├── img/                # Season background images
│   ├── spring-front.png, spring-middle.png, spring-base.png
│   ├── summer-front.png, summer-base.png
│   └── autumn-front.png, autumn-base.png
├── parallax.min.js.map # Parallax library source map
└── README.md
```

---

## Getting Started

### Run Locally

```bash
# Clone the repository
git clone https://github.com/Sophie-l-l/myForest.git
cd myForest

# Open in browser (no build step required)
open index.html
# Or use a local server:
python3 -m http.server 8000
# Then visit http://localhost:8000
```

No dependencies to install — it's pure HTML/CSS/JavaScript.

---

## Resources & Credits

- [Halo Lab: How to Create Scroll Animations](https://www.halo-lab.com/blog/how-to-create-scroll-animations)
- [CSS-Tricks: Scroll Animation](https://css-tricks.com/books/greatest-css-tricks/scroll-animation/)
- [AOS Library: Animate On Scroll](https://michalsnik.github.io/aos/)
- [p5.js: A JavaScript Library for Creative Coding](https://p5js.org/)
- [Parallax by Matthew Wagerfield](https://github.com/wagerfield/parallax)

---

## Skills Demonstrated

Creative coding, CSS animation (custom properties, keyframes, transforms), vanilla JavaScript (no frameworks), SVG manipulation (path drawing, stroke-dasharray), parallax scrolling, procedural generation (fireflies), UI/UX design, interactive storytelling, performance optimization

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
