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
  {
    id: 2,
    name: 'Ice Age II',
    matches: [
      Played (Right (Pair (7) (4))),
      Played (Right (Pair (6) (3))),
      Played (Right (Pair (2) (8))),
      Played (Right (Pair (9) (10))),
      Played (Right (Pair (4) (3))),
      Played (Left (Pair (8) (10))),
      Played (Left (Pair (3) (8))),
      Played (Left (Pair (7) (6))),
      Played (Left (Pair (2) (9))),
      Played (Left (Pair (10) (7))),
      Played (Right (Pair (4) (9))),
      Drop (Left (Pair (10) (9))),
      Played (Left (Pair (8) (9))),
      Played (Left (Pair (3) (8))),
      Unplayed (Pair (Nothing) (Just (3))),
    ],
  },
  {
    id: 3,
    name: 'Ice Age III',
    matches: [
      Played (Right (Pair (8) (3))),
      Played (Left (Pair (5) (11))),
      Played (Right (Pair (3) (5))),
      Played (Left (Pair (8) (11))),
      Played (Left (Pair (3) (8))),
      Played (Right (Pair (5) (3))),
      Played (Left (Pair (5) (3))),
    ],
  },
];
