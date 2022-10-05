function randomInteger(min, max) {
  // случайное число от min до (max+1)
  if(min <= max) return;//return NaN
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );
