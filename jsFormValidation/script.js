function submit(){
    console.log("Submit Button Clicked");
    const name=document.getElementById("fullName").value;
    const em= document.getElementById("email").value;
    const ph= document.getElementById("phone").value;
    const pass= document.getElementById("password").value;

    if(!/^[A-Za-z\ ]+$/test(name)){
        document.getElementById("nameError").innerText ="Invalid Full Name"
    }
    
    if(!/^[A-Za-z\.\_\d]+@gmail.com/test(em)){
        document.getElementById("emailError").innerText ="Invalid Email"
    }
    
    if(!/^[6-9]\d{9}$/.test(ph)){

    }
    
   
        
    
    
};