# phytojs-minimal-node-esm
Minimalistic ES6-Next example of PhytoJS usage that runs in NodeJS and lookup opendata for the taxon of the plant corrensponding to italian vernacular name 'origano'

### development workflow
``` bash 
git clone https://github.com/9llara/phytojs-minimal-node-esm.git
cd phytojs-minimal-node-esm
npm i
npm test
npm start
```
### example
`$ node -r esm index.js | jq`
``` json
[
  {
    "wdEntityId": "Q205265",
    "wdPageId": 201609,
    "wdSnippet": "genus of plants",
    "scientificName": "Origanum",
    "taxonRankId": "http://www.wikidata.org/entity/Q34740",
    "taxonRankLabel": "genus",
    "specieArticle": "https://species.wikimedia.org/wiki/Origanum",
    "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Origanum-vulgare.JPG"
  },
  {
    "wdEntityId": "Q134283",
    "wdPageId": 136029,
    "wdSnippet": "species of plant",
    "scientificName": "Origanum vulgare",
    "taxonRankId": "http://www.wikidata.org/entity/Q7432",
    "taxonRankLabel": "species",
    "specieArticle": "https://species.wikimedia.org/wiki/Origanum_vulgare",
    "image": "http://commons.wikimedia.org/wiki/Special:FilePath/ChristianBauer%20flowering%20oregano.jpg"
  }
]
```
