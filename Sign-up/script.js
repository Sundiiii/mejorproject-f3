let shop=document.getElementById("shop");
let cart=document.getElementById("cart");
let profile=document.getElementById("profile");
let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let email= document.getElementById("email");
let password= document.getElementById("password");
let cpassword= document.getElementById("cpassword");
let submitbtn= document.getElementById("submit-btn");
let redirectToLogin =document.getElementById("redirectToLogin");
let msg =document.querySelector(".msg");

shop.addEventListener("click" ,()=>{
    msg.innerText = "Error : Please login or signup to start shopping";
    msg.style.color = "red";
    setTimeout(()=>{
        msg.innerText = "";
    },5000);
});

cart.addEventListener("click" ,()=>{
    msg.innerText = "Error : Please login or signup to view your cart";
    msg.style.color = "red";
    setTimeout(()=>{
        msg.innerText = "";
    },5000);
});

profile.addEventListener("click" ,()=>{
    msg.innerText = "Error : Please login or signup to view your profile";
    msg.style.color = "red";
    setTimeout(()=>{
        msg.innerText = "";
    },5000);
});

function saveuser(firstname,lastname,emailval,passwordval){
let userobj={
    firstname:firstname,
    lastname:lastname,
    email:emailval,
    password:passwordval
};
let users = JSON.parse(localStorage.getItem("users")) || [];
users.push(userobj);
localStorage.setItem("users",JSON.stringify(users));
sessionStorage.setItem("loggedInUser",JSON.stringify(userobj));
fname.value ="";
lname.value ="";
email.value ="";
password.value ="";
cpassword.value ="";
msg.innerHTML="Sign-up Successfull"
    msg.style.color = "green";
setTimeout(()=>{
    msg.innerHTML="";
   },3000);
setTimeout(()=>{
    window.location.href="../login/index.html";
   },3000);
// alert("Sign-up Successfull");

}

function checkIfUserExist(email){
    let users = JSON.parse(localStorage.getItem("users"));
    let obj = users.find((userobj)=>{
        return userobj.email === email;
    });
    if(obj) return true;
    else false;
}


submitbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(fname.value.trim() === "" || lname.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" || cpassword.value.trim() === ""){
        msg.innerHTML="All fields are required";
            msg.style.color = "red";
        setTimeout(()=>{
            msg.innerHTML="";
           },3000);
        // alert("All fields are required");
    }
    else{
        if(password.value !== cpassword.value){
            msg.innerHTML="Password and Confirm Password does not match";
                msg.style.color = "red";
            setTimeout(()=>{
                msg.innerHTML="";
               },3000);
            // alert("Password and Confirm Password does not match");
            password.value="";
            cpassword.value="";
        }else{
            if(localStorage.getItem("users")){
                if(checkIfUserExist(email.value)){ 
                    msg.innerHTML="User already exists.";
                        msg.style.color = "red";    
                    setTimeout(()=>{
                        msg.innerHTML="";
                       },3000);
                    // alert("User already exists.");
                }
                else{
                    saveuser(fname.value,lname.value,email.value,password.value);
                }
            }
            else{
                saveuser(fname.value,lname.value,email.value,password.value)
            }
        }
    }
});

redirectToLogin.addEventListener("click", ()=>{
window.location.href ="../login/index.html";
});