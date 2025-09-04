//arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Nagraj", "Shaktiman"]

const myArr2 = new Array(22, 55, 88)

// console.log(myArr2);


//Array methods
// myArr.push(666)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(99)
// myArr.shift()

// console.log(myArr.includes(595));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()

// console.log(newArr);


//slice ----->(only cpy to new varible), 
// splice=====>(original arr ko kaat deta h...)

console.log("a", myArr);

const m1 = myArr.slice(1, 3)
console.log(m1);
console.log("b", myArr);

const m2 = myArr.splice(1, 3)
console.log(m2);
console.log("CC", myArr);



