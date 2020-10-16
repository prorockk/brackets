module.exports = function check(str, bracketsConfig) {
  let arr = []
  let config=[]

  for(let i = 0; i < bracketsConfig.length; i++) {
    let x= bracketsConfig[i].join('')
    for (j=0; j<x.length; j++) {
      config.push(x[j])
    }
  }
  if (str.length%2==0){
    for (i=0; i<str.length;i++) {
    if (config[config.indexOf(str[i])]!=config[config.indexOf(str[i])+1]){
      if (config.indexOf(str[i])!=-1) {
        if (config.indexOf(str[i])%2==0){
          arr.push(str[i])
        }
        else {
          if (arr[arr.length-1] == config[config.indexOf(str[i])-1]){
            arr.pop()
          }
        }
      }
      else return false
    }
    else {
      if (arr[arr.length-1]!=str[i]) {
        arr.push(str[i])
      }
      else{
        arr.pop()
      }
    }
      
    }
  return arr.length==0
  }
  return false
}
