function totalDigitRekursif(angka) {
  // you can only write your code here!
  if(angka<10){return angka}
  str = String(angka)
  digit = str.slice(0,1)
  a = Number(digit)*Math.pow(10,(str.length-1))
  //console.log(a+"<<<a")
  angka = angka-a
    digitNumber = Number(digit)
  return digitNumber+totalDigitRekursif(angka)
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5