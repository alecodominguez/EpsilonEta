# Epsilon Eta — Tau Chapter Website

Official website for **Epsilon Eta, Tau Chapter** at the University of Arizona — an environmental and sustainability-focused academic fraternity.

A static site, no build step or dependencies required. Open `index.html` in a browser to preview it locally, or serve the folder with GitHub Pages.

## Pages

| File | Section |
|---|---|
| `index.html` | About Us — homepage, mission, land acknowledgment, foundational pillars, partners |
| `recruitment.html` | Recruitment — who can join, how to join the interest list, photo gallery (evergreen; no dated schedule) |
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
│   └── script.js         # mobile nav toggle, footer year
├── Headshots/             # board member headshots
├── Images/                 # event, group, and gallery photos (incl. RainwaterGardenFlyer.webp)
├── Documents/              # downloadable PDFs (Rainwater Garden grant overview)
└── Logos/                  # chapter and partner organization logos
```

## Updating recruitment

Recruitment is shown as an evergreen page. When the next round is scheduled, add the dates/flyers to `recruitment.html` (and remove them again afterwards).

## Social embeds

The homepage "Follow Along" section embeds the Instagram profile via `https://www.instagram.com/epsilonetauofa/embed`. LinkedIn does not allow company pages to be embedded, so it is shown as a link card. To feature a specific LinkedIn post, use that post's *Embed this post* code.

## Deploying with GitHub Pages

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, set the source branch to `main` and the folder to `/ (root)`.
3. The site will be live at `https://<username>.github.io/<repo-name>/`.

## Contact

- Email: [arizonaepsiloneta@gmail.com](mailto:arizonaepsiloneta@gmail.com)
- Instagram: [@epsilonetauofa](https://www.instagram.com/epsilonetauofa/?hl=en)
- LinkedIn: [Epsilon Eta, Tau Chapter](https://www.linkedin.com/company/epsilon-eta-tau-chapter/home/)
