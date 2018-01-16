module.exports = {
  "name": "perf4",
  "booktitle": '<span> Awesome Paper</span> Planes',
  "booktitleClean": 'Awesome Paper Planes',
  "tagline": 'How to Make the World’s Best Paper Airplanes',
  "backpitch": 'Pay attention with this one, folks, and the payoff is well worth it.',
  "pagenumbers": '150',
  "author": '',
  "authorPitch": "Each SitePoint Anthology is a carefully curated collection of the best SitePoint writing around a chosen topic. That means you can be sure each chapter industry relevant, up-to-date and written by a world expert in their field. We know you'll enjoy every page.",
  "subject": 'Performance',
  "category": 'Web Development',
  "colorkey": '#51b5f7',
  "colorsecondary": '#f450ec',
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