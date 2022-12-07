const arrayNumbers = [1, 2, 4, 5, 6];

const arrayTriplos = arrayNumbers.map(function (numbers) {
  return numbers * 2;
});
console.log(arrayTriplos);

const arrayDiv = arrayNumbers.map(function (numbers) {
  return numbers / 2;
});
console.log(arrayDiv);
