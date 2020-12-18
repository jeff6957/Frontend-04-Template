function match(str, code) {
  for(let i of str){
      if(i === code) return true
  }
  return false
}

console.log(match('111a'))