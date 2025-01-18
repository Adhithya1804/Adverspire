(function () {
    "use strict";

    //ticketform
    document.getElementById('ticket-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
  
    // Get the form data
    const fullName = document.querySelector('input[name="tic-name"]').value;
    const email = document.querySelector('input[name="tic-email"]').value;
    const message = document.querySelector('textarea[name="tic-message"]').value;
  
    // Initialize an error message array
    let errorMessages = [];
  
    // Check for missing fields
    if (!fullName) {
      errorMessages.push('Full Name is required.');
    }
    if (!email) {
      errorMessages.push('Email is required.');
    }

    if (!message) {
      errorMessages.push('Message is required.');
    }
  
    // If there are errors, show them in an alert box
    if (errorMessages.length > 0) {
      alert('Error: \n' + errorMessages.join('\n'));
    } else {
      // If no errors, send data via EmailJS
      emailjs.send("service_36kx5fx", "template_h4zj8jl", {
        fullName: fullName,
        email: email,
        message: message
      }).then(function(response) {
        // Success message
        alert('Your message has been sent!');   
        document.getElementById('ticket-form').reset(); // Clear the form
      }, function(error) {
        // Error message
        alert('Error sending message: ' + error.text);
      });
    }
  });
  
  //newsletterform
    document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
  
    // Get the form data
    const fullName = document.querySelector('input[name="news-name"]').value;
    const email = document.querySelector('input[name="news-email"]').value;

    // Initialize an error message array
    let errorMessages = [];
  
    // Check for missing fields
    if (!fullName) {
      errorMessages.push('Full Name is required.');
    }
    if (!email) {
      errorMessages.push('Email is required.');
    }


  
    // If there are errors, show them in an alert box
    if (errorMessages.length > 0) {
      alert('Error: \n' + errorMessages.join('\n'));
    } else {
      // If no errors, send data via EmailJS
      emailjs.send("service_7gka7pv", "template_5hldzlm", {
        fullName: fullName,
        email: email
      }).then(function(response) {
        // Success message
        alert('Your message has been sent!');
        document.getElementById('newsletter-form').reset(); // Clear the form
      }, function(error) {
        // Error message
        alert('Error sending message: ' + error.text);
      });
    }
  });




})();



const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (scrollY > 50) {
        header.style.backgroundColor = "rgba(74, 108, 247, .2)"
        header.style.backdropFilter = "blur(15px)"
    }else {
        header.style.backgroundColor = "transparent"
        header.style.backdropFilter = "blur(0px)"
    }
})
const mood = document.getElementById("change-mood");
const root = document.getElementById("root")
mood.addEventListener("click", function (){
   if ( root.classList.contains("dark")){
       root.classList.remove("dark")
   } else {
       root.classList.add("dark")
   }
})

