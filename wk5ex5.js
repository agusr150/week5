function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if(angka<10){return angka}
  str = String(angka)
  digit = str[0]
  digitNumber = Number(digit)
  angka = angka - digitNumber*Math.pow(10,(str.length-1))
  kali = digitNumber*kaliTerusRekursif(angka)
  if(kali<10){return kali}
  return kaliTerusRekursif(kali)
  
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6