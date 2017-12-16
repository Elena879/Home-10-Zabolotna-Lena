//addition
function addition(x, y) {
  return x + y
}
console.log(addition(354, 87)) //enter your x and y

//subtraction
function subtraction (x, y) {
  var z
  z = x - y
  return z
}
console.log(subtraction(2, 9))

//multiplication
function product (x, y) {
  var c = x * y
  return c
}
console.log(product(1, 10))

//division
function division (x, y) {
  if (y !== 0)
    return x / y
  else
    return 'you can not divide by zero'
}
console.log(division(1, 5))

//degree
function exponentiation(x, n) {
  return Math.pow(x,n)
}
console.log(exponentiation(2, 4))

//root
function rootNumber(x) {
  if  (x >= 0)
    return Math.sqrt(x)
  else
    return 'a root of a negative number does not exist'
}
console.log(rootNumber(-2))

//factorial
function fac(x){
  if (x === 0 || x === 1)
    return 1
  else if (x < 0)
    return 'it is impossible to find a factorial'
  else
  return x * fac(x-1)
}
console.log(fac(4))

//count sin of angle in radians
function countSinus(x) {
  return  Math.sin(x)
}
console.log(countSinus(45))

//count cos of angle in radians
function countCosinus(x) {
  return  Math.cos(x)
}
console.log(countCosinus(30))