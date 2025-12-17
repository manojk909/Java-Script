
// Immediately Invoked Function Expressions (IIFE)
// func which execute immediately
// global scopeke polution ko hatane ke liye 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   //yha func end karo (;) 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
