import S from 'sanctuary';

import {match} from './adt/Match.js';


const {
  K,
  array,
  boolean,
  either,
  pair,
  reduce,
  reverse,
} = S;

//    won :: PlayerId -> Boolean -> Match -> Boolean
const won = id => fallback => (
  match (K (fallback))
        (either (pair (a => b => b === id))
                (pair (a => b => a === id)))
        (either (pair (a => b => a === id))
                (pair (a => b => b === id)))
);

//    eventWins :: Array Event -> PlayerId -> Integer
const eventWins = events => id => (
  reduce (k => e =>
            boolean (k)
                    (k + 1)
                    (array (false)
                           (h => t =>
                              won (id)
                                  (array (false)
                                         (h => t => won (id) (false) (h))
                                         (t))
                                  (h))
                           (reverse (e.matches))))
         (0)
         (events)
);

export default eventWins;
