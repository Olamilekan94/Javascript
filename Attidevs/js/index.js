document.getElementById("SignupForm").addEventListener("submit", function(e){
    e.preventDefault();

    
 const firstname = document.getElementById("firstname").value.trim();
 const lastname = document.getElementById("lastname").value.trim();
 const email = document.getElementById("signupemail").value.trim();
 const password = document.getElementById("password").value;
 const confirmpassword = document.getElementById("confirmpassword").value;
 const errorE1 = document.getElementById("SignupError");


 

 if(!firstname || !lastname || !email || !password || !confirmpassword){
    errorE1.textContent = "All fields are required.";
    return;
 }
 
 if(password.length <  10){
   errorE1.textContent = "Passwords are less than 10.";
   return;
 }

 if(password !== confirmpassword){
    errorE1.textContent = "Passwords do not match.";
    return;
 }

 

 window.location.href ="Login.html";
 

})