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
  {
    id: 4,
    name: 'Ice Age IV',
    matches: [
      Played (Left (Pair (2) (7))),
      Played (Right (Pair (6) (5))),
      Played (Right (Pair (8) (4))),
      Played (Right (Pair (11) (3))),
      Played (Right (Pair (2) (5))),
      Played (Right (Pair (4) (3))),
      Played (Right (Pair (5) (3))),
      Played (Left (Pair (7) (6))),
      Played (Left (Pair (8) (11))),
      Played (Left (Pair (4) (7))),
      Played (Right (Pair (2) (8))),
      Played (Right (Pair (4) (8))),
      Played (Right (Pair (5) (8))),
      Played (Left (Pair (3) (8))),
      Unplayed (Pair (Nothing) (Just (3))),
    ],
  },
  {
    id: 5,
    name: 'Ice Age V',
    matches: [
      Played (Left (Pair (4) (10))),
      Played (Left (Pair (8) (12))),
      Played (Right (Pair (13) (14))),
      Played (Right (Pair (15) (5))),
      Played (Right (Pair (16) (2))),
      Played (Left (Pair (17) (3))),
      Played (Left (Pair (18) (11))),
      Played (Left (Pair (19) (6))),
      Played (Left (Pair (4) (8))),
      Played (Left (Pair (14) (5))),
      Played (Right (Pair (2) (17))),
      Played (Left (Pair (18) (19))),
      Played (Left (Pair (4) (14))),
      Played (Right (Pair (17) (18))),
      Played (Left (Pair (4) (18))),
      Played (Left (Pair (10) (12))),
      Played (Right (Pair (13) (15))),
      Played (Right (Pair (16) (3))),
      Played (Right (Pair (11) (6))),
      Played (Left (Pair (2) (10))),
      Played (Left (Pair (19) (15))),
      Played (Left (Pair (8) (3))),
      Played (Right (Pair (5) (6))),
      Played (Right (Pair (2) (19))),
      Played (Left (Pair (8) (6))),
      Played (Left (Pair (14) (19))),
      Played (Right (Pair (17) (8))),
      Played (Right (Pair (14) (8))),
      Played (Right (Pair (18) (8))),
      Played (Right (Pair (4) (8))),
      Played (Left (Pair (4) (8))),
    ],
  },
  {
    id: 6,
    name: 'Ice Age VI',
    matches: [
      Played (Right (Pair (6) (2))),
      Played (Left (Pair (20) (21))),
      Played (Right (Pair (5) (4))),
      Drop (Left (Pair (22) (23))),
      Drop (Left (Pair (13) (24))),
      Played (Right (Pair (25) (3))),
      Played (Right (Pair (15) (11))),
      Played (Right (Pair (26) (16))),
      Played (Left (Pair (2) (20))),
      Played (Left (Pair (4) (23))),
      Played (Right (Pair (24) (3))),
      Played (Left (Pair (11) (16))),
      Drop (Left (Pair (2) (4))),
      Played (Left (Pair (3) (11))),
      Played (Left (Pair (4) (3))),
      Played (Left (Pair (6) (21))),
      Drop (Right (Pair (5) (22))),
      Played (Right (Pair (13) (25))),
      Played (Right (Pair (15) (26))),
      Played (Right (Pair (6) (5))),
      Played (Left (Pair (25) (26))),
      Played (Right (Pair (5) (25))),
      Played (Left (Pair (20) (23))),
      Played (Left (Pair (24) (16))),
      Played (Left (Pair (20) (24))),
      Drop (Left (Pair (2) (11))),
      Played (Right (Pair (25) (3))),
      Played (Right (Pair (20) (11))),
      Played (Right (Pair (3) (11))),
      Played (Left (Pair (4) (11))),
      Unplayed (Pair (Nothing) (Just (4))),
    ],
  },
  {
    id: 7,
    name: 'Ice Age VII',
    matches: [
      Played (Right (Pair (21) (25))),
      Played (Left (Pair (27) (4))),
      Played (Right (Pair (14) (6))),
      Played (Left (Pair (13) (28))),
      Played (Left (Pair (11) (29))),
      Played (Right (Pair (30) (3))),
      Played (Left (Pair (31) (15))),
      Played (Left (Pair (32) (33))),
      Played (Left (Pair (25) (27))),
      Played (Left (Pair (6) (13))),
      Played (Left (Pair (11) (3))),
      Played (Left (Pair (31) (32))),
      Played (Left (Pair (25) (6))),
      Played (Left (Pair (11) (31))),
      Played (Right (Pair (25) (11))),
      Played (Right (Pair (21) (4))),
      Played (Left (Pair (14) (28))),
      Played (Right (Pair (29) (30))),
      Played (Right (Pair (15) (33))),
      Played (Left (Pair (4) (14))),
      Played (Right (Pair (30) (33))),
      Played (Right (Pair (4) (33))),
      Played (Right (Pair (27) (13))),
      Played (Left (Pair (3) (32))),
      Played (Left (Pair (13) (3))),
      Played (Left (Pair (6) (31))),
      Played (Left (Pair (33) (25))),
      Played (Left (Pair (13) (6))),
      Played (Left (Pair (33) (13))),
      Played (Right (Pair (11) (33))),
      Played (Right (Pair (11) (33))),
    ],
  },
];
