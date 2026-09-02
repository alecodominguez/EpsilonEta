# Epsilon Eta — Tau Chapter Website

Official website for **Epsilon Eta, Tau Chapter** at the University of Arizona — an environmental and sustainability-focused academic fraternity.

A static site, no build step or dependencies required. Open `index.html` in a browser to preview it locally, or serve the folder with GitHub Pages.

## Pages

| File | Section |
|---|---|
| `index.html` | About Us — homepage, mission, land acknowledgment, foundational pillars, partners |
| `recruitment.html` | Recruitment — eligibility, rush week schedule, application details, photo gallery |
| `projects-events.html` | Projects & Events — programming, service projects, partnerships |
| `leadership.html` | Leadership — executive board & committee chairs |

## Structure

```
├── index.html
├── recruitment.html
├── projects-events.html
├── leadership.html
├── css/
│   └── styles.css        # global styles (palette, layout, components)
├── js/
│   └── script.js         # mobile nav toggle, recruitment countdown, footer year
├── Headshots/             # board member headshots
├── Images/                 # event, group, and gallery photos
└── Logos/                  # chapter and partner organization logos
```

## Updating recruitment dates

The homepage banner and Recruitment page both show a live countdown to Rush Week. To update it for a future semester, edit the target date near the top of `js/script.js`:

```js
var rushDate = new Date("2026-09-14T00:00:00-07:00");
```

## Deploying with GitHub Pages

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, set the source branch to `main` and the folder to `/ (root)`.
3. The site will be live at `https://<username>.github.io/<repo-name>/`.

## Contact

- Email: [arizonaepsiloneta@gmail.com](mailto:arizonaepsiloneta@gmail.com)
- Instagram: [@epsilonetauofa](https://www.instagram.com/epsilonetauofa/)
- LinkedIn: [Epsilon Eta, Tau Chapter](https://www.linkedin.com/company/epsilon-eta-tau-chapter/)
