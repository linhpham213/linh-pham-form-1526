// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
let btn = document.getElementById('submit-btn');
// <input type="text" id="fullname">,
let fullName = document.getElementById('full-name')
// <input type="text" id="email">
let email = document.getElementById('email')
// <textarea id="message"></textarea>
let message = document.getElementById('msg')
// Declare variable that will 
// store regular expression for email
let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function form(){       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    let data = {};
    // Declare array that will store the errors
    let errors = {};

    /*Full Name*/

    // Check if fullname is not empty.
    if (fullName.value !== ""){
    // If so:
       // Pass the collected value
       // to your object "data".
        data.fullName = fullName.value;
    } else {
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
       errors.fn = "Full name is missing!"; 
    
    // End your conditional here.
    }

    /*Email*/
    
    // Check if email is not empty.
    if (email.value !== "") {
       // Check if email is valid.
        if(emailPattern.test(email.value)) {
       // If so:
          // Pass the collected value
          // to your object "data".
          data.email = email.value;
        }else {
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
          errors.em = "Your email is invalid!";
       // End your nested conditional here.
        }else {
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
          errors.em = "Email is missing!";
    // End your outer conditional here.
    }

    /*Message*/

    // Check if message is not empty.
    if (message.value !== ""){
    // If so:
       // Pass the collected value
       // to your object "data".
        data.message = message.value;
    }else {
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
        errors.msg = "Message is missing!"
    // End your conditional here.
    }

    /*Feedback / Errors*/

    // Check if there is anything in array errors
    if (Object.keys(errors).length !== 0){
       // If so: 
       // Print it in JavaScript console.
        console.log(errors);
    }else {
    // Otherwise:
       // Print the data in JavaScript console.
        console.log(data);
       // Clear text-fields
        document.querySelector("form").reset();
    // End your conditional here.
    }
// Close your function here
}
// Register your form to "click" event.
btn.addEventListener("click", form);