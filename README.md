# SAS(S) Remedial 2027

This repository contains a private-style verification page for remedial student access. The student details remain hidden until the correct name and register number are entered.

## Included files

- `index.html` – verification form with stacked name and register fields
- `styles.css` – styling for the access page
- `script.js` – CSV parsing, validation, and display logic
- `data/Testing_Remedial.csv` – source data extracted from the provided remedial sheet

## How to use

1. Open the site in a browser.
2. Enter the correct student name and register number.
3. If both match, the remedial schedule and class details are revealed.

## Notes

The remedial schedule now displays the corresponding day label next to each assigned subject, such as `Mon(Odd): Maths(G3)`.
