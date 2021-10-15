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
  {
    id: 8,
    name: 'Ice Age VIII',
    matches: [
      Played (Right (Pair (34) (3))),
      Played (Left (Pair (33) (25))),
      Played (Right (Pair (13) (35))),
      Played (Right (Pair (14) (31))),
      Played (Left (Pair (36) (15))),
      Drop (Left (Pair (37) (38))),
      Played (Left (Pair (18) (39))),
      Played (Right (Pair (28) (11))),
      Played (Left (Pair (3) (33))),
      Played (Left (Pair (35) (31))),
      Played (Right (Pair (36) (38))),
      Played (Left (Pair (18) (11))),
      Played (Left (Pair (3) (35))),
      Played (Left (Pair (38) (18))),
      Played (Left (Pair (3) (38))),
      Played (Left (Pair (34) (25))),
      Played (Right (Pair (13) (14))),
      Drop (Right (Pair (15) (37))),
      Played (Right (Pair (39) (28))),
      Played (Right (Pair (34) (14))),
      Played (Right (Pair (15) (28))),
      Played (Left (Pair (14) (28))),
      Drop (Right (Pair (33) (31))),
      Played (Right (Pair (36) (11))),
      Played (Right (Pair (33) (11))),
      Played (Left (Pair (35) (18))),
      Drop (Right (Pair (14) (38))),
      Played (Right (Pair (11) (35))),
      Played (Right (Pair (14) (35))),
      Played (Left (Pair (3) (35))),
      Unplayed (Pair (Nothing) (Just (3))),
    ],
  },
  {
    id: 9,
    name: 'Ice Age IX',
    matches: [
      Played (Left (Pair (3) (11))),
      Played (Left (Pair (4) (40))),
      Played (Left (Pair (41) (23))),
      Played (Right (Pair (42) (43))),
      Played (Right (Pair (25) (35))),
      Played (Right (Pair (2) (30))),
      Played (Right (Pair (36) (6))),
      Played (Left (Pair (44) (45))),
      Played (Right (Pair (3) (4))),
      Played (Left (Pair (41) (43))),
      Played (Left (Pair (35) (30))),
      Played (Right (Pair (6) (44))),
      Played (Left (Pair (4) (41))),
      Played (Left (Pair (35) (44))),
      Played (Left (Pair (4) (35))),
      Played (Left (Pair (11) (40))),
      Played (Right (Pair (23) (42))),
      Played (Right (Pair (25) (2))),
      Played (Right (Pair (36) (45))),
      Played (Left (Pair (11) (42))),
      Drop (Right (Pair (2) (45))),
      Played (Right (Pair (11) (2))),
      Played (Right (Pair (3) (43))),
      Played (Right (Pair (30) (6))),
      Played (Left (Pair (43) (6))),
      Played (Right (Pair (41) (44))),
      Played (Right (Pair (2) (35))),
      Played (Right (Pair (43) (44))),
      Played (Left (Pair (35) (44))),
      Played (Left (Pair (4) (35))),
      Unplayed (Pair (Nothing) (Just (4))),
    ],
  },
  {
    id: 10,
    name: 'Ice Age X',
    matches: [
      Played (Right (Pair (30) (46))),
      Played (Right (Pair (4) (44))),
      Played (Right (Pair (47) (48))),
      Played (Left (Pair (14) (32))),
      Played (Right (Pair (49) (6))),
      Played (Left (Pair (2) (11))),
      Played (Right (Pair (50) (25))),
      Played (Right (Pair (51) (3))),
      Played (Right (Pair (46) (44))),
      Played (Right (Pair (48) (14))),
      Played (Right (Pair (6) (2))),
      Played (Left (Pair (25) (3))),
      Played (Left (Pair (44) (14))),
      Played (Left (Pair (2) (25))),
      Played (Right (Pair (44) (2))),
      Played (Left (Pair (30) (4))),
      Played (Right (Pair (47) (32))),
      Drop (Right (Pair (49) (11))),
      Played (Left (Pair (50) (51))),
      Played (Right (Pair (30) (32))),
      Played (Right (Pair (49) (50))),
      Played (Right (Pair (32) (50))),
      Played (Right (Pair (46) (48))),
      Played (Right (Pair (6) (3))),
      Played (Right (Pair (48) (3))),
      Played (Right (Pair (14) (25))),
      Played (Right (Pair (50) (44))),
      Played (Left (Pair (3) (25))),
      Played (Right (Pair (44) (3))),
      Played (Left (Pair (2) (3))),
      Unplayed (Pair (Nothing) (Just (2))),
    ],
  },
  {
    id: 11,
    name: 'Ice Age XI',
    matches: [
      Played (Right (Pair (30) (3))),
      Played (Left (Pair (52) (53))),
      Played (Left (Pair (25) (18))),
      Played (Right (Pair (33) (6))),
      Played (Right (Pair (54) (32))),
      Played (Right (Pair (48) (20))),
      Played (Right (Pair (11) (23))),
      Played (Left (Pair (14) (2))),
      Played (Right (Pair (3) (52))),
      Played (Left (Pair (25) (6))),
      Played (Left (Pair (32) (20))),
      Played (Left (Pair (23) (14))),
      Played (Right (Pair (52) (25))),
      Played (Right (Pair (32) (23))),
      Played (Left (Pair (25) (23))),
      Played (Right (Pair (30) (53))),
      Played (Right (Pair (18) (33))),
      Played (Right (Pair (54) (48))),
      Played (Left (Pair (11) (2))),
      Played (Right (Pair (53) (33))),
      Played (Left (Pair (48) (11))),
      Played (Left (Pair (33) (48))),
      Played (Right (Pair (3) (6))),
      Played (Right (Pair (20) (14))),
      Played (Left (Pair (6) (14))),
      Played (Left (Pair (52) (32))),
      Played (Right (Pair (33) (23))),
      Played (Left (Pair (6) (52))),
      Played (Right (Pair (23) (6))),
      Played (Right (Pair (25) (6))),
      Played (Right (Pair (25) (6))),
    ],
  },
  {
    id: 12,
    name: 'Ice Age XII',
    matches: [
      Played (Left (Pair (25) (6))),
      Played (Left (Pair (3) (32))),
      Played (Left (Pair (11) (18))),
      Played (Left (Pair (30) (55))),
      Played (Right (Pair (25) (3))),
      Played (Left (Pair (11) (30))),
      Played (Left (Pair (3) (11))),
      Played (Left (Pair (6) (32))),
      Played (Left (Pair (18) (55))),
      Played (Right (Pair (30) (6))),
      Played (Right (Pair (25) (18))),
      Played (Right (Pair (6) (18))),
      Drop (Right (Pair (11) (18))),
      Played (Left (Pair (3) (11))),
      Unplayed (Pair (Nothing) (Just (3))),
    ],
  },
  {
    id: 13,
    name: 'Ice Age XIII',
    matches: [
      Played (Left (Pair (25) (32))),
      Played (Right (Pair (11) (55))),
      Played (Right (Pair (18) (6))),
      Played (Right (Pair (23) (3))),
      Played (Right (Pair (25) (55))),
      Played (Right (Pair (6) (3))),
      Played (Right (Pair (55) (3))),
      Played (Left (Pair (32) (11))),
      Played (Left (Pair (18) (23))),
      Played (Right (Pair (6) (32))),
      Played (Right (Pair (25) (18))),
      Played (Right (Pair (32) (18))),
      Played (Right (Pair (55) (18))),
      Played (Left (Pair (3) (18))),
      Unplayed (Pair (Nothing) (Nothing)),
    ],
  },
];
