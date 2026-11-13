# Haoxuan Cheng's academic website

A small, dependency-free academic website with a blue color palette for `https://coker412.github.io/`. It includes a bilingual profile, twelve public arXiv preprints (list updated 13 November 2026), talks and poster presentations, a downloadable academic CV, and AI and machine learning projects. The project descriptions and CV were supplemented from the current internship resumes on 9 November 2026, including the public Graph Geometry Research Workspace, OCT imaging, dividend forecasting, and ECG transfer learning.

## Preview locally

Run a local server from this directory:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

The public repository is `coker412/coker412.github.io`. GitHub Pages publishes the root of `main` automatically after a push. Check the **pages build and deployment** workflow before verifying the live page at `https://coker412.github.io/`.

The site uses no external fonts, scripts, or content delivery networks. Paper and conference links point to their public source pages.

## Update the CV

Edit `cv.html`, then use Chromium's **Print → Save as PDF** to replace `cv.pdf` (A4, no browser headers or footers). Keep its preprint list and presentations in sync with `index.html`.

The Sanya poster entry uses the conference date range, 14–18 September 2026: the current official schedule differs from the session time printed on the original poster. Its title is *Discrete Einstein Metrics on Trees*. Google Scholar currently links to an author search, explicitly labeled as such. Only add ORCID or Google Scholar profile links after confirming that the account belongs to Haoxuan Cheng at Fudan University.
