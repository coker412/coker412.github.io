# Haoxuan Cheng's academic website

A small, dependency-free academic website with a blue color palette for `https://coker412.github.io/`. It includes a bilingual profile, ten public arXiv preprints (checked 6 October 2026), talks and poster presentations, a downloadable academic CV, and the public Graph Geometry Research Workspace.

## Preview locally

Run a local server from this directory:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

Create a public repository named `coker412.github.io`, put these files in its root, and push to the default branch. In the repository settings, choose **Settings → Pages → Deploy from a branch**, then select the default branch and `/ (root)`.

The site uses no external fonts, scripts, or content delivery networks. Paper and conference links point to their public source pages.

## Update the CV

Edit `cv.html`, then use Chromium's **Print → Save as PDF** to replace `cv.pdf` (A4, no browser headers or footers). Keep its preprint list and presentations in sync with `index.html`.

The Sanya poster entry uses the conference date range, 14–18 September 2026: the current official schedule differs from the session time printed on the original poster. Its title is *Discrete Einstein Metrics on Trees*. Google Scholar currently links to an author search, explicitly labeled as such. Only add ORCID or Google Scholar profile links after confirming that the account belongs to Haoxuan Cheng at Fudan University.
