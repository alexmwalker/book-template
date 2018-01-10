module.exports = {
  "name": "perf4",
  "booktitle": '<span>Performance</span> Tools',
  "booktitleClean": 'Performance Tools',
  "tagline": 'Because Every Bottleneck Costs You <em>Real</em> Money',
  "backpitch": 'What Happens When You Remove Speed Humps For Your Users?',
  "pagenumbers": '150',
  "author": '',
  "authorPitch": "Each SitePoint Anthology is a carefully curated collection of the best SitePoint writing around a chosen topic. That means you can be sure each chapter industry relevant, up-to-date and written by a world expert in their field. We know you'll enjoy every page.",
  "subject": 'Performance',
  "category": 'Web Development',
  "colorkey": '#3EC7A8',
  "colorsecondary": '#222244',
  "textcolorlight": '#fff',
  "textcolordark": '#222244',
  "illustration": '../images/SVG/hero2.svg',
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