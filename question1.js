function sortString(s,t) {
  let hash = new Object()
  //sorted is the final string value
  let sorted = ''
  // this if statement stops returns empty string if either string is empty
  if (s === '' || t === '') {
    return ''
  }
  // loops through first string(s) and stores the amount of appearances in a hash
  for(var i = 0; i < s.length; i++){
    let letter = s[i]
    if(hash.hasOwnProperty(letter)){
       hash[letter] +=1
    } else{
      hash[letter] = 1
    }
    if(i == s.length-1){
      // loops through second string(t) and appends the proper amount of the given letter
      // to the sorted string
      for(var j=0; j< t.length; j++){
        if(hash.hasOwnProperty(t[j])){
          sorted += t[j].repeat(hash[(t[j])])
        }
      }
    }
  }
  return sorted
}

sortString('striiiing', 'ingsrt')
///'iiiingsrt'
sortString('goodboy', 'og')
///'oog'
