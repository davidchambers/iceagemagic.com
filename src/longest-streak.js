import S from 'sanctuary';


const {
  K,
  Left,
  Right,
  add,
  boolean,
  chain,
  compose,
  duplicate,
  either,
  equals,
  gt,
  gte,
  ifElse,
  lte,
  map,
  pipe,
  reduce,
  reduce_,
  tagBy,
} = S;

//    longerStreak :: Either Integer Integer
//                 -> Either Integer Integer
//                 -> Either Integer Integer
const longerStreak = (
  either (l => either (ifElse (gte (l))
                              (Left)
                              (K (Left (l))))
                      (ifElse (gte (l))
                              (Right)
                              (K (Left (l)))))
         (r => either (ifElse (lte (r))
                              (K (Right (r)))
                              (Left))
                      (ifElse (lte (r))
                              (K (Right (r)))
                              (Right)))
);

//    longestStreak :: a -> Array a -> Either Integer Integer
const longestStreak = p => (
  pipe ([duplicate,
         map (reduce_ (compose (boolean (chain (Left))
                                        (chain (compose (Right) (add (1)))))
                               (equals (p)))
                      (Right (0))),
         reduce (longerStreak)
                (Right (0)),
         chain (tagBy (gt (0)))])
);

export default longestStreak;
