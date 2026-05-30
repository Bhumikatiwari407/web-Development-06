//hoisting
// Declarations are moved to the top of their scope
// Execution happens later line by line

// Hoisting with var
// Variable declared with var is hoisted
// Initialized with undefined during hoisting
//Declaration moved to top
//Value assignment remains in place
let a;
let b;
let c;
a = 10;
console.log(a);
console.log(b);
console.log(c);
b = 15;
console.log(a);
console.log(b);
console.log(c);
c = 20;
console.log(a);
console.log(b);
console.log(c);

// Hoisting with Function Declarations
// Function declarations are fully hoisted
// Can be called before definition
// Variable is hoisted as undefined
// Function is not available at that point
abc();
function abc() {
  console.log("i am a function");
}
submit();
function submit(){
    console.log("submit button clicked");
}