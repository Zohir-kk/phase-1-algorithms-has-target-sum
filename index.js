function hasTargetSum(array, target) {
  const pairs= {}
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
      const pairs creates an object to track the numbers
      const complement calculates the complement needed to reach the target
      if the pair containes the complement
        return true if it finds a pair that adds up to our target
      then it adds it to the hash table
        return false if no pair is found



*/
/*
 We started by creating an object"pair" to track our numbers which is called a hash table, then we itterate through the array and for each number
 we calculate its complement to our target number (the number needed to reach the target number), then we check our object we
 created earlier if we have our complement is there it returns true , once we finish itterating through the whole array if no
 pair is found it'll return false 
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
