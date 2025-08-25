const name = "manoj"
const repo = 10

console.log(name + repo + "value");

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String("Swayam")  //we get str methods

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("m"));

 
const newstr = gameName.substring(0, 4)
console.log(newstr);

const anotherstr = gameName.slice(-5, 2)    //support -ve idx
console.log(anotherstr);

const newone = "    mk    "
console.log(newone);
console.log(newone.trim());

const url = "https:manojkh123"
console.log(url.replace("kh", "-"));

console.log(url.includes("23"));
console.log(url.split(":"));   //return lst
