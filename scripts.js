const obj1 = { id: 1, name: "ryan" }
const obj2 = { address: "123 fake st", phone: "555-555-5555" }
const obj3 = { ...obj1, ...obj2 }
console.log(obj1)
console.log(obj2)
console.log(obj3)

function largestNum(a, b) {
  if (a > b) console.log(a)
  else console.log(b)
  console.log(a > b ? a : b)
}
largestNum(9, 12)

function titleCase(str) {
  let r = str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
  console.log(r)
}
titleCase("i am a sentence")

function sortLetters(str) {
  let s = str.replace(/ /g, "").toLowerCase().split("").sort().join("")
  console.log(s)
  console.log(s.toUpperCase())
}
sortLetters("Hi there")
