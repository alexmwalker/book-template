module.exports = {
  "name": "perf4",
  "booktitle": 'UX Analytics <span> An Introduction</span>',
  "booktitleClean": 'UX Analytics: An Introduction ',
  "tagline": 'Great UX Begins With Deep Understanding ',
  "backpitch": 'You’ll learn why analytics is important and what to watch out for',
  "pagenumbers": '150',
  "author": '',
  "authorPitch": "Each SitePoint Anthology is a carefully curated collection of the best SitePoint writing around a chosen topic. That means you can be sure each chapter industry relevant, up-to-date and written by a world expert in their field. We know you'll enjoy every page.",
  "subject": 'Performance',
  "category": 'Web Development',
  "colorkey": '#3EC9CB',
  "colorsecondary": '#24243B',
  "textcolorlight": '#fff',
  "textcolordark": '#222244',
  "illustration": '../images/SVG/star-1.svg',
  "directories": {
    "output": "html",
    "template": "templates",
    "data": "md"
  },
  "templates": {
    "index.pug": [
      "index.md"
    ],
    "front-matter.pug": [
      "front-matter.md"
    ]
  }
}

// NOTE: 'booktitle' contains formatting markup for the cover
// 'booktitleClean' is a clean, text-only version