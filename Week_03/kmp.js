
function kmp(source, pattern) {
  // 计算表格
  let table = new Array(pattern).fill(0);

  {
    // i 从1 开始查找
    let i = 1, j = 0

    while(i < pattern.length){

      if(pattern[i] === pattern[j]) {
        ++j, ++i; 
        table[i] = j;
      } else {
        if(j > 0){
          j = table[j];
        } else {
          // table[i] = j;
          ++i;
        }
      }
    }
    console.log(table)
  }
  

  {
    let i = 0, j = 0;

    while(i < source.length){

      // 查找 j || 被查找 i
      if(pattern[j] === source[i]) {
        console.log(j, i)
        ++j, ++i;
      } else {
        if(j > 0){
          j = table[j];
        } else {
          ++i;
        }
      }

      if(j === pattern.length)
        return true;
    }

    return false
  }

  // 匹配
}


// kmp('', 'abcdabce')

// kmp('', 'abababc')
// a a b a a a c

console.log(kmp('hello', 'll'))
