import S from 'sanctuary';

import {match} from './adt/Match.js';
import last from './last.js';


const {
  K,
  Pair,
  chain,
  compose,
  either,
  map,
  reduce,
} = S;

//    ratingHistory :: Array Player
//                  -> Array Event
//                  -> PlayerId
//                  -> NonEmpty (Array Number)
const ratingHistory = players => events => Map.prototype.get.bind (
  reduce (m => match (K (m))
                     (K (m))
                     (compose (([[sa, sb], [a, b]]) => {
                                 const ras = m.get (a);
                                 const rbs = m.get (b);
                                 const ra = last (ras);
                                 const rb = last (rbs);
                                 const ea = 1 / (1 + 10 ** ((rb - ra) / 400));
                                 const eb = 1 - ea;
                                 const k = 16;
                                 ras.push (ra + k * (sa - ea));
                                 rbs.push (rb + k * (sb - eb));
                                 return m;
                               })
                              (either (Pair (Pair (1) (0)))
                                      (Pair (Pair (0) (1))))))
         (new Map (map (player => [player.id, [1600]]) (players)))
         (chain (event => event.matches) (events))
);

export default ratingHistory;
