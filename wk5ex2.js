function changeVocals (str) {
  //code di sini
  vocal ='aiueoAIUEO'
  afterVocal ='bjvfpBJVFP'
  str1=[]
  change = ''
    for(var i=0; i<str.length;i++){
        for(var j=0; j<vocal.length;j++){
            //console.log(str[i]+'<<<str')
            if(str[i]!==vocal[j]){
                change=str[i]
            }
            else {
                change=afterVocal[j]
              // console.log(change+'<<<change')
                break
            }
        }
        str1.push(change)
    }
    return str1
}

function reverseWord (str) {
  //code di sini
  str2=[]
  for(var i=0; i<str.length;i++){
      str2[i]=str[str.length-1-i]
  }
  return str2
}

function setLowerUpperCase (str) {
  //code di sini
  str3=[]
  for (var i=0; i<str.length; i++){
      if(str[i]===str[i].toLowerCase()){
          str3[i]=str[i].toUpperCase()
      }
      else{
          str3[i]=str[i].toLowerCase()
      }
  }
  return str3
}

function removeSpaces (str) {
  //code di sini
  str4=[]
  for(var i=0; i<str.length; i++){
      if(str[i]!==' '){
          str4.push(str[i])
      }
  }
  return str4
}

function passwordGenerator (name) {
  //code di sini

  if(name.length<5){return 'Minimal karakter yang diinputkan adalah 5 karakter'}
  name1 = changeVocals(name)
  name2 = reverseWord(name1)
  name3 = setLowerUpperCase(name2)
  name4 = removeSpaces(name3)
  result = removeSpaces(name4)

  return result.join('')
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'