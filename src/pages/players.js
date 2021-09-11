import url from 'url';

import S from 'sanctuary';

import {W, result} from '../adt/Result.js';
import events from '../data/events.js';
import players from '../data/players.js';
import {elements, text} from '../html/nodes.js';
import renderDocument from '../html/render-document.js';
import eventWins from '../event-wins.js';
import formatPercentage from '../format-percentage.js';
import last from '../last.js';
import longestStreak from '../longest-streak.js';
import ratingHistory from '../rating-history.js';
import results from '../results.js';


const {
  append,
  array,
  chain,
  concat,
  either,
  flip,
  foldMap,
  join,
  map,
  maybe,
  pair,
  pairs,
  pipe,
  reduce,
  reverse,
  show,
  splitOn,
  unlines,
} = S;

const {
  body,
  head,
  html,
  link,
  meta,
  style,
  table,
  tbody,
  td,
  td_,
  th,
  thead,
  tr,
} = elements;

//    styleRules :: Array (Array2 (Array String) (StrMap String))
const styleRules = (px => padding => [

  [['body'],
   {'font-weight': '300',
    'font-family': '"Signika Negative", sans-serif'}],

  [['table'],
   {'border-collapse': 'collapse',
    'text-align': 'right'}],

  [['thead tr'],
   {'background': '#ddd'}],

  [['tbody tr:nth-child(even)'],
   {'background': '#eee'}],

  [['th', 'td'],
   {'width': px (80 - 2 * padding),
    'padding': px (4) + ' ' + px (padding)}],

  [['th'],
   {'font-weight': '400'}],

  [map (flip (concat) (':nth-child(2)')) (['th', 'td']),
   {'width': px (56 - 2 * padding),
    'padding': '0',
    'text-align': 'center'}],

  [map (flip (concat) (':nth-child(3)')) (['th', 'td']),
   {'width': px (144),
    'text-align': 'left'}],

  [['td.unbroken::after'],
   {'position': 'absolute',
    'content': '"*"'}],

  [['td:nth-child(10)'],
   {'width': px (80 - 4 - 20),
    'padding': px (0) + ' ' + px (20) + ' ' + px (0) + ' ' + px (4),
    'letter-spacing': px (-16)}],

]) (n => n === 0 ? show (n) : show (n) + 'px') (8);

//    flag :: String -> String
const flag = pipe ([
  splitOn (''),
  chain (c => [55356, 56806 + c.charCodeAt (0) - 'A'.charCodeAt (0)]),
  foldMap (String) (String.fromCharCode),
]);

//    row :: Array Event
//        -> (PlayerId -> NonEmpty (Array Number))
//        -> Player
//        -> Node
const row = events => history => player => {
  const rs = results (player.id) (chain (event => event.matches) (events));
  const {w, l, d} = (
    reduce (counts => result ({W: {...counts, w: counts.w + 1},
                               L: {...counts, l: counts.l + 1},
                               D: {...counts, d: counts.d + 1}}))
           ({w: 0, l: 0, d: 0})
           (rs)
  );
  return tr ([
    td ([text (show (player.id))]),
    td ([text (maybe ('\uD83C\uDFF3') (flag) (player.country))]),
    td ([text (player.name)]),
    td ([text (show (Math.round (last (history (player.id)))))]),
    td ([text (show (w))]),
    td ([text (show (l))]),
    td ([text (formatPercentage (w) (w + l))]),
    td_ ({title: show (d) + ' ' + (d === 1 ? 'drop' : 'drops')})
        ([text (formatPercentage (w + l) (w + l + d))]),
    either (n => td ([text (show (n))]))
           (n => td_ ({class: 'unbroken'}) ([text (show (n))]))
           (longestStreak (W) (rs)),
    td ([text ('🏆'.repeat (eventWins (events) (player.id)))]),
  ]);
};

//    render :: Array Player -> Array Event -> String
const render = players => events => (
  pipe ([map (row (events) (ratingHistory (players) (events))),
         rows => (
           html ([
             head ([
               meta ({charset: 'utf-8'}),
               link ({rel: 'stylesheet',
                      type: 'text/css',
                      href: 'https://fonts.googleapis.com/css?family=Signika+Negative:wght@300;400'}),
               style ([
                 pipe ([
                   chain (([k, v]) =>
                     join ([array ([])
                                  (h => t => append (h + ' {')
                                                    (map (flip (concat) (','))
                                                         (reverse (t))))
                                  (reverse (k)),
                            map (pair (k => v => '  ' + k + ': ' + v + ';'))
                                (pairs (v)),
                            ['}']])),
                   map (concat ('  '.repeat (3))),
                   unlines,
                   text,
                 ]) (styleRules),
               ]),
             ]),
             body ([
               table ([
                 thead ([
                   tr ([
                     th ([text ('DCI#')]),
                     th ([text ('Flag')]),
                     th ([text ('Name')]),
                     th ([text ('Rating')]),
                     th ([text ('Wins')]),
                     th ([text ('Losses')]),
                     th ([text ('Win %')]),
                     th ([text ('Play %')]),
                     th ([text ('Winning streak')]),
                     th ([text ('Event wins')]),
                   ]),
                 ]),
                 tbody (rows),
               ]),
             ]),
           ])
         ),
         renderDocument])
       (players)
);


if (process.argv[1] === url.fileURLToPath (import.meta.url)) {
  process.stdout.write (render (players) (events));
}
