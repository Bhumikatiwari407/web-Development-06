// SubmitButton
document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();


    const fullName = document.getElementById("fullName").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    const dob=document.getElementById("dob").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const qualification =document.getElementById("qualification").value;
    const marks=document.getElementById("marks").value;
    const course=document.getElementById("course").value;
    const address=document.getElementById("address").value;
    const city=document.getElementById("city").value;
    const pin=document.getElementById("pin").value;

    const timings = [];

    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });


    // console.log(gndr);

    // console.log(timings);
  console.log("Full Name:", fullname);
  console.log("Email:", email);
  console.log("Phone:",phone);
  console.log("Date of Birth:",dob);
  console.log("Gender:",gender);
  console.log("Qualification:",qualification);
  console.log("Mark:s", marks);
  console.log("Course:", course);
  console.log("Timings:",timings);
  console.log("Address:", address);
  console.log("City:",city);
  console.log("Pin Code:",pin);
  });



// ResetButton
document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });