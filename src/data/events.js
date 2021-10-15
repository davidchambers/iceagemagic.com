import S from 'sanctuary';

import {Unplayed, Drop, Played} from '../adt/Match.js';


const {Nothing, Just, Left, Right, Pair} = S;

export default [
  {
    id: 1,
    name: 'Ice Age I',
    matches: [
      Played (Right (Pair (1) (2))),
      Played (Left (Pair (3) (4))),
      Played (Left (Pair (5) (6))),
      Played (Right (Pair (3) (5))),
      Played (Left (Pair (2) (5))),
      Played (Right (Pair (1) (3))),
      Played (Left (Pair (4) (6))),
      Played (Left (Pair (3) (4))),
      Played (Left (Pair (5) (3))),
      Played (Left (Pair (2) (5))),
      Unplayed (Pair (Nothing) (Just (2))),
    ],
  },
];
