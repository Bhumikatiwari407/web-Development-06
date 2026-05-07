// let fd=[
//     ["rajVerdhan","18-11-1997","945673764","bhopal","teacher"],
//     ["rajVerdhan","18-11-1997","945673764","bhopal","teacher"],
//     ["rajVerdhan","18-11-1997","945673764","bhopal","teacher"],
//     ["rajVerdhan","18-11-1997","945673764","bhopal","teacher"]
// ];

// fd.forEach((element)=>{
//     console.log(element);
// });

// let fData=[
//     {
//         name:"RajVerdhan",
//         dob:"05-03-1995",
//         phone:"98764553674",
//         city:"Bhopal",
//         profession:"teacher"
//     },
// {
//         name:"RajVerdhan",
//         dob:"05-03-1995",
//         phone:"98764553674",
//         city:"Bhopal",
//         profession:"teacher"
//     },
// {
//         name:"RajVerdhan",
//         dob:"05-03-1995",
//         phone:"98764553674",
//         city:"Bhopal",
//         profession:"teacher"
//     },
// {
//         name:"RajVerdhan",
//         dob:"05-03-1995",
//         phone:"98764553674",
//         city:"Bhopal",
//         profession:"teacher"
//     },
// ];
// fData.forEach((item)=>{
//     console.log(item["name"]);
// });


// fData.map((element,idx)=>{
//     console.log(idx);
//     console.log(element,"phone");
// });
// console.log(fData);
// console.log(fData[1]["name"]);      //bracket notation(work for both array and json)
// console.log(fData[1].phone);       //dot notation(work only in json)

// let vishal={
//         name:"RajVerdhan",
//         dob:"05-03-1995",
//         phone:"98764553674",
//         city:"Bhopal",
//         profession:"teacher"
//     };
//     console.log (Object.keys(vishal));
//     console.log(Object.values(vishal));
//     console.log(Object.enteries(vishal));

let ar=[22,33,44,5,7,93,68,25,78,68,23,97,54,2,42,68,34];
ar.sort((a,b)=>a-b);
console.log(ar);

console.log(ar.find((val)=>val>20));    //find element
console.log(ar.find((val)=>val==44));
console.log(ar.findIndex((val)=>val===68));
console.log(ar.findLastIndex((val)=>val===68));

let ar2=[22,33,44,5,7,93,68,25,78,68,23,97,54,2,42,68,34];
ar2.sort((a,b)=>a-b);
console.log(ar2);
console.log(ar2.find((val)=>val>20));    //find element

console.log(ar2.filter((val)=>val>60));    //filter 
console.log(ar2.slice(7));         //slice

let ab="this is webdevelopment class"
console.log(ab);
console.log(ab.split(" "));
console.log(ab.split("-"));

let srt="this is a string"
console.log(srt.charAt(5));
console.log(srt.toUpperCase());
console.log(srt.toLowerCase());

let a=3.14;
console.log(a);
console.log(typeof a);
let b= a.toString();
console.log(b);

let c=3.1456789876434567887766;
console.log(c);
console.log(c.toFixed(3));





