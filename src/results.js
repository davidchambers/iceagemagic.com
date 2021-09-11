import S from 'sanctuary';

import {match} from './adt/Match.js';
import {D, L, W} from './adt/Result.js';


const {
  Just,
  K,
  Nothing,
  either,
  mapMaybe,
  pair,
} = S;

//    results :: PlayerId -> Array Match -> Array Result
const results = id => (
  mapMaybe (match (K (Nothing))
                  (either (pair (a => b => a === id ? Just (D) :
                                           /* else */ Nothing))
                          (pair (a => b => b === id ? Just (D) :
                                           /* else */ Nothing)))
                  (either (pair (a => b => a === id ? Just (W) :
                                           b === id ? Just (L) :
                                           /* else */ Nothing))
                          (pair (a => b => a === id ? Just (L) :
                                           b === id ? Just (W) :
                                           /* else */ Nothing))))
);

export default results;
