document.getElementById("signin").addEventListener("submit",function(e){
    e.preventDefault();


    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("loginpassword").value;
    const errorE1 = document.getElementById("loginError");


    if(!email || !password){
        errorE1.textContent = "All fields are required.";
        return;
    }
    if(password.length < 10){
        errorE1.textContent = "Passswords are less than 10";
        return;
    }


    window.location.href ="welcome.html";
})