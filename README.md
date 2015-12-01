# GG Framework

A work in progress CSS3 framework for my personal site [Gioca Giuè](http://giocagiue.it).




## Install

Download the `dist` folder's content and put it in your project, making sure that the `fonts` folder is at the same level as the `css` one (meaning: `css/gg-framework.min.css` imports the fonts files through the `../fonts` relative path).

Finally, include `css/gg-framework.min.css` in your HTML files and you're good to go.




## Develop

First thing first, make sure you have Grunt installed globally: `npm i -g grunt-cli`.

Clone the project and run `npm i`.

Then, just run `grunt serve` to automatically do compile the .scss files.<br>
It will also open a livereload-enabled server at `http://localhost:3000`.<br>
My suggestion is to create a `dev/test/index.html` file to fiddle around. Also because Grunt comes already configured to livereload any .html files in the `test` folder, so, you know...

Should you need to build the project for production use: `grunt build`.<br>
Currently, it just creates the exact same `dev/css/gg-framework.min.css`, but in `dist/css` instead.




## Use


### Breakpoints

This is the list of the available media query breakpoints:

- `xs`: 400px
- `sm`: 600px
- `md`: 720px
- `lg`: 960px
- `xl`: 1080px


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


### Navbar

TODO


### Buttons

Just add `.btn` to `<a>` or `<button>` (or any other element, but I can't guarantee it'll work) and you're good to go.

`.btn-` classes are modifiers of both sizes and colors. Ie. `.btn-xs`, `.btn-primary`, etc.

In the following example, you can see a bunch of available modifiers:

```html
<a class="btn btn-xl btn-primary">
  An extra large, blue button.
</a>
<a class="btn btn-block btn-danger">
  A block-wide, red button.
</a>
<a class="btn btn-sm btn-success btn-raised">
  A small, green button, with a Material-like raised effect.
</a>
```


### Labels

`.label` will do the work.<br>
Modify it with a `.label-pill` to round its border, and with the usual colors to change its background.

Example:

```html
<span class="label">
  Default gray label.
</span>
<span class="label label-pill label-warning">
  Rounded orange label.
</span>
```


### Tables

Default table are auto-wide, their rows darken on mouse over and only the cells' bottom border is visible.

But they also come in plenty of flavors:

- `.table-fluid` goes all the way to `width: 100%`;
- `.table-bordered` fully borders every cell;
- `.table-striped` darkens even rows;
- `.table-condensed` reduces the cells' padding.

Rows can be modified with the usual colors to change their background.

Example:
```html
<table class="table-fluid table-bordered table-striped table-condensed">
  <caption>Table caption.</caption>
  <thead>
    <tr>
      <th>Head</th>
      <th>Head</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Body</td>
      <td>Body</td>
    </tr>
  </tfoot>
  <tbody>
    <tr class="warning">
      <td>Body</td>
      <td>Body</td>
    </tr>
  </tbody>
</table>
```


### Heroes

Heroes are fullscreen flex thingamabobs, flowing column wrap, already enabled with a full-size cover background.
Just put whatever inside and that's it.

Should you need the hero to only be half the window height, just add `.hero-half`.

Should you like your hero's background image to stay fixed in place, just add `.hero-fixed-bg`.

Example:
```html
<div class="hero hero-fixed-bg">
  <h1>Hero Title</h1>
</div>
```

If you're using a hero with a fixed navbar, don't use the `padding-top` on the body, as it would move down the hero, together with its `100vh`.


### Icons

**GG Framework** uses **Font Awesome 4.4.0** icons, with their default settings.

Example:
```html
<button class="btn btn-primary">
  <span class="fa fa-save"></span>
  Save
</button>
```

Please refer to [their site](https://fortawesome.github.io/Font-Awesome/) for a complete list of supported icons and instructions on how to use them.
