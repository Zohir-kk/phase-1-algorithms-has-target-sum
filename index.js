function hasTargetSum(array, target) {
  const pairs= []
for(let number of array){
  const complement = target - number

  if (pairs[complement]){
    return true
  }
  pairs[number] = true
}
return false
}

/*
 O(n)
*/

/*
  const takes and array
  for each number in the array
      const complement will take the target number and subtracts the number

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 15));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([-5,5,10,6], 7));
}

module.exports = hasTargetSum;
