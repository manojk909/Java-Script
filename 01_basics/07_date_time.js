//DATE

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)   // Object

// let createdDate = new Date(2023, 0, 13)
// let createdDate = new Date(2023, 0, 13, 5, 3)
let createdDate = new Date("2023-01-13")
// console.log(createdDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(createdDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())


newDate.toLocaleString('default', {
    weekday: "long",
})