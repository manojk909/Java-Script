const user = {
    username:"groot",
    price:900,

    welcmmsg: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
    
}

// user.welcmmsg()
// user.username = "mk"
// user.welcmmsg()

// console.log(this);


// function chai() {
//     let uname = "grt"
//     console.log(this.uname);
    
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()