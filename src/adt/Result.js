//    data Result = W | L | D

//    W :: Result
const W = 'W';  // win

//    L :: Result
const L = 'L';  // loss

//    D :: Result
const D = 'D';  // drop

//    result :: { W: a, L: a, D: a } -> Result -> a
const result = cases => r => cases[r];

export {W, L, D, result};
