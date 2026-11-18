# Author an Exoplanets book in NeoPapyrus

Use this guide to write or revise the existing Exoplanets book. The reader opens it at `/book.html?book=Exoplanets#Chapter1`.

## Book files

```text
books/Exoplanets/
├── coverPage/
│   └── frontPage.png
└── chapters/
    ├── Chapter1.md
    ├── Chapter2.md
    ├── ...
    ├── assets/
    └── figures/
```

- Save each chapter as `ChapterN.md`. Start with one H1, such as `# Chapter 8 - Exoplanet Populations`. The reader takes the chapter title from this heading and sorts filenames numerically.
- Add ordinary sections with H2 and H3 headings. Use inline math such as `$R_p$` and display math delimited by `$$`. Define symbols and units when they first appear.
- Put material all readers should see in ordinary Markdown. Wrap optional depth in `<div data-level="201">` for Intermediate or `<div data-level="301">` for Advanced. Leave a blank line inside each end of the wrapper so the Markdown renders.
- Store figures in `chapters/figures/`. Use a path such as `/books/Exoplanets/chapters/figures/orbit.png`, preserve filename capitalization, and supply descriptive alt text, a caption, and a source or credit.
- Store self-contained interactive figures in `chapters/assets/`. Embed them with an iframe with a descriptive title and include the takeaway in the caption. Chapter 2's equal-area orbit and Chapter 3's limb-darkening demo show the pattern.
- Link to another chapter with `[Orbital Dynamics](#Chapter2)`. The fragment uses the filename without `.md`.

## Chapter plan

The repository already has seven chapters. Use this plan to revise them or add new chapters after Chapter 7.

| Chapter | Subject | Suggested figure or exercise |
| --- | --- | --- |
| 1 | A Universe of Worlds | Compare the pulsar timing and Doppler discoveries |
| 2 | Orbital Dynamics | Explore orbital speed and equal-area sweeps |
| 3 | Transits and Occultations | Estimate planet radius from a light curve |
| 4 | Transmission Spectroscopy | Compare transit depth across wavelengths |
| 5 | Radial Velocity | Read period and amplitude from a velocity curve |
| 6 | Biosignatures | Compare possible explanations for a spectral signature |
| 7 | Stars | Explain how stellar properties shape exoplanet measurements |

## Reusable writing prompt

> Write or revise Chapter [number], “[title],” for the Exoplanets book in NeoPapyrus. Aim the main text at curious readers with high-school physics and algebra. Start with an observation or question and connect it to what astronomers measure, what they infer, and what remains uncertain. Use short sections, define new terms on first use, and include one worked example with units. Add optional derivations at reading level 201 and advanced caveats at level 301. Propose one figure that teaches the central concept and provide a descriptive caption and alt text. Label simulated or schematic signals explicitly. Cite primary research or official mission and archive sources for observational claims, and date any catalog counts. Return Markdown using the file and formatting conventions above.

## Preview and publish

1. Run `npm ci` once, then start the reader with `npm start`.
2. Open `http://localhost:8000/book.html?book=Exoplanets#Chapter1`. Change the fragment to the chapter you’re editing.
3. Check the title in Contents, all three reading levels, equations, figure links, and interactive controls. Preview on desktop and a narrow screen.
4. Run `npm run build` and confirm that the chapter and its assets appear under `dist/books/Exoplanets/`.
