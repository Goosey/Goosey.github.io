# Lucy Barlow — Portfolio site

A static, responsive HTML/CSS portfolio. No build step. Just open `index.html` in a browser, or drag the whole folder into Netlify / Vercel / GitHub Pages.

## File structure

```
portfolio/
├── index.html          ← Home
├── about.html          ← About
├── portfolio.html      ← Portfolio grid
├── cv.html             ← Inline PDF viewer for your CV
├── blog/
│   └── echo.html       ← Sample case-study template (copy this for new posts)
├── css/
│   └── styles.css      ← All styles. Design tokens at the top.
├── js/
│   └── main.js         ← Mobile nav + active-link highlighting
└── images/             ← Put your photos and CV here (see below)
```

## Image sizes for Figma

Design everything **@2x** (so a 760px-wide slot gets a 1520px PNG). All images are responsive — they fill the container width and scale.

### Blog post images
The content column is **760px** wide.

| Slot | CSS class | Export size (@2x) | Use for |
|---|---|---|---|
| **Single banner** (full content width) | `.post-image` / `.post-image--banner` | **1520 × 760** (2:1) or **1520 × 950** (1.6:1) | Hero shots, full mockups |
| **Wide bleed** (extends past column) | `.post-image--wide` | **1920 × 1080** | Big "wow" shots that break the column |
| **Two side-by-side** | `.post-image-row` (auto) | **740 × 540** each | Before/after, comparisons |
| **Three side-by-side** | `.post-image-row--three` | **480 × 600** each | Persona cards, screen triptychs |

Save as JPG (photos, mockups) or PNG (UI screens, transparent logos). Aim for under 500 KB each.

### Portfolio cards
- Card image area is **4:3** ratio.
- Export at **800 × 600** for crisp display.

### About page header
- Aspect ratio is **wide banner** (about 4:1).
- Export at **1600 × 600**.
- Drop it at `images/about-hero.jpg`.

### CV
- Drop your CV as `images/cv.pdf`.
- The CV page embeds it in an `<iframe>` with download + open-in-new-tab buttons as fallback.

## Adding a new case study

1. Copy `blog/echo.html` to `blog/your-project.html`.
2. Update the title, meta (date, read time), and content.
3. Use the image-row classes above to lay out images.
4. Add a matching `<a class="card">` block in `portfolio.html`.

## Colour tokens (CSS variables in `:root`)

```
--navy:      #343854   /* background */
--green:     #C1D37F   /* links, headings on home */
--turquoise: #D3FAD6   /* accent */
--orange:    #F4D06F   /* accent */
--pink:      #FFBDBD   /* hover / active state */
--white:     #FFFBFC   /* body text */
```

## Type tokens

Display font: **ADLaM Display** (Google Fonts) — H1–H4
Body font: **Gabarito** (Google Fonts) — body and labels

Sizes scale down on tablet (≤1024 px) and mobile (≤720 px) — see the media queries at the bottom of `styles.css`.

## Header illustration

The little SVG sprout next to "Lucy" in the header is inline in each HTML file (search for `<!-- Small illustration` in any page). Replace it with your own SVG or an `<img>` tag — recommended size is **64 × 64**.

## Social links

The footer's Notion / Instagram / LinkedIn / email icons currently point to placeholder URLs. Edit the `<footer>` in each HTML file (or do a project-wide find-and-replace) to point them at your real profiles.

## Deploying

- **Netlify / Vercel:** drag the whole folder into the dashboard.
- **GitHub Pages:** push the folder to a repo, enable Pages on the `main` branch.
- **Anywhere else:** it's just static files — upload via FTP or whatever you use.
