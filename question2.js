function decodeString(s) {
  // the final decoded string
  let decoded = ""
  // loop through each letter in the string
  for(var i=0; i< s.length; i++){
    //checks to make sure the s[i] is a number and the following value is '['
    if(!isNaN(s[i]) && s[i+1] == '['){
      // recursion to append embedded string to 'decoded'by s[i] times
      //i+2 = to leave out number and bracket
      //-1 to leave out ending bracket(']')
      decoded += decodeString(s.slice(i+2,-1)).repeat(parseInt(s[i]))
      //this adjusts the loop's index to make sure it doesn't go through the recursed string
      //again
      i += s.slice(i,-1).length
    }
    else{
      decoded += s[i]
    }
  }
  // return value for both final solution and for recursion to bubble back up
  return decoded
}

decodeString('2[b3[a]]')
//baaabaaa
