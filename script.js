let shop=document.getElementById("shop");
let cart=document.getElementById("cart");
let profile=document.getElementById("profile");
let errordiv=document.getElementById("error")
let login=document.getElementById("Login");
let signup=document.getElementById("SignUp");

shop.addEventListener("click" ,()=>{
    errordiv.innerText = "Error : Please login or signup to start shopping";
    setTimeout(()=>{
        errordiv.innerText = "";
    },5000);
});

cart.addEventListener("click" ,()=>{
    errordiv.innerText = "Error : Please login or signup to view your cart";
    setTimeout(()=>{
        errordiv.innerText = "";
    },5000);
});

profile.addEventListener("click" ,()=>{
    errordiv.innerText = "Error : Please login or signup to view your profile";
    setTimeout(()=>{
        errordiv.innerText = "";
    },5000);
});

login.addEventListener("click",()=>{
    window.location.href="../login/index.html";
});

signup.addEventListener("click",()=>{
    window.location.href="../Sign-up/index.html";
});
