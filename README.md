# GG Framework

A work in progress CSS3 framework for my personal site [Gioca Giuè](http://giocagiue.it).

---

## Installation

Download `dist/gg-framework.min.css`, import it in your HTML files and you're good to go.

---

## Development

First thing first, make sure you have Grunt installed globally: `npm i -g grunt-cli`.

Clone the project and run `npm i`.

Then, just run `grunt serve` to automatically do compile the .scss files.<br>
It will also open a livereload-enabled server at `http://localhost:3000`.<br>
My suggestion is to create a `dev/test/index.html` file to fiddle around. Also because Grunt comes already configured to livereload any .html files in the `test` folder, so, you know...

Should you need to build the project for production use: `grunt build`.<br>
Currently, it just creates the exact same `dev/css/gg-framework.min.css`, but in `dist/` instead.

---

## Usage

### Grids

**GG Framework** uses `border-box` and `flexbox`, and doesn't give a damn about backward compatibility.

Its grid system is a 12 columns one, fully responsive and mobile first.<br>
Just put your cells in a `.grid` container, and name them with a media query size (optional!) and the number of columns it spans.

Example:

```html
<div class="grid">
  <div class="cell-1">
    Mobile first, 1 colspan.
  </div>
  <div class="cell-xs-2">
    2 colspan, starting from 400px.
  </div>
  <div class="cell-sm-3">
    3 colspan, starting from 600px.
  </div>
  <div class="cell-md-4">
    4 colspan, starting from 720px.
  </div>
  <div class="cell-lg-5">
    5 colspan, starting from 960px.
  </div>
  <div class="cell-xl-6">
    6 colspan, starting from 1080px.
  </div>
</div>
```

Also, the grid comes already `wrap` enabled, so just stuff it with how many cells you please.
