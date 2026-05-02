// var a=10;
// console.log(a);
// console.log(b);

// var b=20;
// console.log(a);
// console.log(b);
var test = "this is global class variable"; //global variable
function classA() {
  console.log("classA", test);
}
function classB() {
  console.log("classB", test);
}
function classC() {
  let test2 = "this is local variable";   //local variable
  console.log("classC", test);
  console.log("classC", test2);
  {
    let i="this is block variable";
    console.log(i);
  }
}
function classD() {
  var x = 20;
  console.log("classD", test);
  console.log(x);
  {
    let v = 10;
    console.log(v);
    console.log(x);
  }
  //console.log(v);
  console.log(x);
}
function classE() {
  console.log("classE", test);
}
function classF() {
  console.log("classF", test);
}
function classG() {
  console.log("classG", test);
}

classA();
classB();
classC();
classD();
classE();
classF();
classG();
