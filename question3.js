function changePossibilites(amount,denominations){
  //this empty array will store the # of possibilities
  //to generate is number of the indices
  let possibilities = []
  for(var i =0; i <=amount; i++){
    //each position starts at 0 because there's currently 0 ways to
    //generate this index w/o looking at the possible denominations
    possibilities[i] = 0
  }
  //always 1 way to generate 0
  possibilities[0] = 1
  //loops through each denomination
  for(var j=0; j < denominations.length; j++){
    let num = denominations[j]
    //loops through the possible outcomes it can produce by finding if the leftover exists(k-num)
    for(var k=num; k<= amount; k++){
      // this will check the 'possibilities' array for the number of ways to generate the leftover
      let leftover = k-num
      possibilities[k] += possibilities[leftover]
    }
  }
  return possibilities[amount]
}

changePossibilites(5,[6,7,8])
//0
changePossibilites(5,[1,2,3])
//5
