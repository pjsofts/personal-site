# pouriajahandideh.com

Portfolio of websites I've designed and built. Plain HTML, CSS and JavaScript, hosted on GitHub Pages.

## Run locally

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## How it works

- Each section in `index.html` carries `data-bg`, `data-ink` and `data-accent`. As a section crosses the middle of the screen, `script.js` switches the page to those colours.
- Each project shows full-page screenshots in a browser and a phone frame. They scroll while the project is on screen and pause on hover.

## Files

- `index.html`: all content
- `style.css`: layout and design
- `script.js`: colour switching and screenshot playback
- `assets/work/`: screenshots of each site (`-thumb`, `-desktop`, `-mobile`)
- `assets/`: photos
- `resume.pdf`: resume

## Adding a site

1. Take a full-page screenshot at 1440px wide and another at 390px wide.
2. Save them as WebP in `assets/work/`: 960px wide for desktop, 400px wide for mobile, and a 640×400 crop of the top for the thumbnail.
3. Copy a `<section class="project">` block in `index.html`, change its text and colours, and add a card to the `.fan` in the hero.
