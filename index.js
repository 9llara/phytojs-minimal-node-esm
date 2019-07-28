import 'isomorphic-fetch';
import { Phyto } from '@rondinif/phytojs';
const api = new Phyto(fetch);
api.resolvedPlantsByName('origano').then(async res => {
  console.log(JSON.stringify(res.plants));
});
// usage:
//     $ node -r esm index.js | jq