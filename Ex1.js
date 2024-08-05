// Two Oldest Ages
function twoOldestAges(ages) {
  sortArr = ages.sort(function (a, b) {
    return a - b;
  }).reverse();
  return [sortArr[1], sortArr[0]];
}

console.log(twoOldestAges([1,5,87,45,8,8]));
