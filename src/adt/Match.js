import S from 'sanctuary';


const {
  Left,
  Right,
  compose,
  either,
} = S;

//    Unplayed :: Pair (Maybe PlayerId) (Maybe PlayerId)
//             -> Match
const Unplayed = Left;

//    Drop :: Either (Pair PlayerId PlayerId) (Pair PlayerId PlayerId)
//         -> Match
const Drop = compose (Right) (Left);

//    Played :: Either (Pair PlayerId PlayerId) (Pair PlayerId PlayerId)
//           -> Match
const Played = compose (Right) (Right);

//    match :: (Pair (Maybe PlayerId) (Maybe PlayerId) -> a)
//          -> (Either (Pair PlayerId PlayerId) (Pair PlayerId PlayerId) -> a)
//          -> (Either (Pair PlayerId PlayerId) (Pair PlayerId PlayerId) -> a)
//          -> Match
//          -> a
const match = unplayed => drop => played => (
  either (unplayed)
         (either (drop)
                 (played))
);

export {Unplayed, Drop, Played, match};
