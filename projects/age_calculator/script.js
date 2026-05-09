document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
    const dob= document.getElementById("DOB").value;
    const currDate  =document.getElementById("CurrentDate").value;

    const Age = Number(currDate.split("-")[0]) -Number(dob.split("-")[0]);
    // console.log(dob);
    // console.log(currDate);
    //console.log(Age);
    document.getElementById("DOB").value="";
    document.getElementById("CurrentDate").value="";
    document.getElementById("MyAge").innerText = Age;
});