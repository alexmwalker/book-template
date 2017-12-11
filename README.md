# The SP Book Template

This repo contains the core SitePoint book template files. Each book prokect should begin with these files. 

![press](https://c1.staticflickr.com/3/2923/14596503957_7b320e87ae_c.jpg)

The process used is documented here: [https://www.gitbook.com/book/alexmwalker/the-md-to-pdf-book-generator/details](https://www.gitbook.com/book/alexmwalker/the-md-to-pdf-book-generator/details)

Every new book should begin as a fork of this template repo:
https://github.com/alexmwalker/book-template

This fork should become the master for the new book, and should NEVER overwrite the original template.
After making a fork and naming it there are a few edits you should make immediately.

# Template Updates

## 1). Sass and CSS

All book styling is controlled from a single CSS file -- docs/assets/css/book.css.
This file is generated from a collection of SCSS files in the docs/assets/scss directory.
/* import other stylesheets */

```css
@import 'prism';
@import 'config';
@import 'fonts';  //currently the old fonts
@import 'lib';
@import 'page-setup';
@import 'typography'; 
@import 'components';
@import 'overrides'; // Prism overrides
//@import 'page-fake'; // this is temporary PDF live-reload emulation code.
```

On the majority of book projects, you shouldn't need to make any major changes to the styling – there is one minor change required.

Before you start adding content to your blank template, please update `docs/assets/scss/_config.scss`:

```scss
/* defining things that might change from book to book */
$book-title: "Performance Tools";
$cover-color: #A8CE35;
```

This _$book-title_ variable gets used in page headers with page numbering. The _$book-color_ gets referenced in the cover rendering. You can update these variables at anytime during the process, but it's a good idea to set it up early.
There are lots of ways to turn SCSS into CSS. Grunt, Gulp, Codekit, etc. Personally, I use and recommend Scout. It's free and easy to work out, but knock yourself out if you prefer something else.


## 2). The Cover

The book cover – at least in the PDF/ePUB – is a fairly simple construction. HTML with some inline CSS. It's not pretty, but it works and it puts control of all design elements at your code editor fingertips. You'll be starting with something like:

```html
<!--begin Cover =-->

<section id="cover" class="set-cover" style="background: #A8CE35;background-size: 100% auto;color: #fff;font-family: Raleway, sans-serif;width: 8in;height: 10in;position: relative;">
    <div id="cover-logo" style="background: url(../images/svg/sitepoint-white.svg) no-repeat; position: absolute;top:0.75in;right: 4em;width: 2in;height: 0.5in;"></div>
    <h1 class="title" style="font-size: 75pt;font-weight: 600;line-height: 60pt;color: #fff;letter-spacing: -2px;text-align: right;text-transform: uppercase;margin: 2.2in .2em 0 0;position: absolute;">
        <span class="sizeup" style="font-size: 80%">Performance</span>
        <span class="sizedown" style="font-size: 110%;">Tools</span>
    </h1>
    <h3 class="tagline" style="font-size: 15pt;font-weight: 600;line-height: 1.5;color: #fff;position: absolute;text-transform: uppercase;top: 8.75in;width: 7.9in;text-align: center;">Because Every Second – Every Kilobyte – Matters</h3>
    <div id="hero" style="position: absolute;background: url(../images/svg/hero4.svg) no-repeat;top: 4.5in;right: 0;width: 6in;height: 4in;margin-right: 3rem;"></div>
</section>

<!--end Cover =-->
```

We need a new 'hero' graphic placed in the docs/assets/images folder and linked here. The logo should already be linked. You may need to live preview the cover as you tune it.

The title and tagline can be added here.

### Why are we using Inline CSS here?

As almost all of the cover elements change for every new book – i.e. illustration, colors, text, sizing, position – I resolved to keep them all insulated from the more standardized book CSS which should alter very little between books. Each cover will likely need positional and sizing tweaks to all elements, so there are no benefits to consolidating them.

## 3). The Front Matter

The front matter is always a blend of new material and repeating elements. The repeating elements – book conventions, publisher details, etc – are built into the _'front-matter.pug'_ template.

The new material – including _'Who is this book for?'_ and author bios – may be edited in the _'0front-matter.md'_ doc.
