async function GetNewJokes(){

    const API_URL="https://official-joke-api.appspot.com/jokes/random"
    
    const response = await fetch(API_URL);
   
    const data = await response.json();


    // if(type ==="single"){
    //     document.getElementById("setup").innerText= data.joke
    //     document.getElementById("delivery").innerText="";
    // }
    // else{
    //     document.getElementById("setup").innerText= data.setup;
    //     document.getElementById("delivery").innerText= data.delivery;
    // }
    document.getElementById("setup").innerText= data.general || data.setup;
    document.getElementById("punchline").innerText=data.punchline ||"";
    
}