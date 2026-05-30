const abc = function () {
  //we have written const in place of let because the value of const cannot be change
  console.log("hello world"); //functon expression
};

console.log(abc);

abc();

function welcome() {
  console.log("welcome to java script");
}

let add = function (a, b) {
  return a + b;
};

console.log(add);

console.log(add(4, 6));
console.log(add());

add(4, 6);

const arrowfun = () => {
  console.log("i m arrow function");
};
arrowfun();

// const addarrow=(a,b)=>{
//     return a+b;
// };
const addarrow = (a, b) => a + b;

console.log(addarrow(5, 6));