let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let emailid= document.getElementById("email");
let oldpassword=document.getElementById("old-password");
let newpassword=document.getElementById("new-password");
let newcpassword=document.getElementById("new-cpassword");
let changepwdbtn=document.getElementById("change-pwd-btn");

//display current user details
let currentuser = JSON.parse(sessionStorage.getItem("loggedInUser"));
// console.log(currentuser);
fname.innerText = currentuser.firstname;
lname.innerText = currentuser.lastname;
emailid.innerText = currentuser.email;

//change password
changepwdbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(oldpassword.value.trim()==="" || newpassword.value.trim()==="" || newcpassword.value.trim()===""){
        alert("fill all details");
    }
    else{
        if(currentuser.password === oldpassword.value.trim()){
            if(newpassword.value.trim() === newcpassword.value.trim()){
                console.log(currentuser.password);
                currentuser.password = newpassword.value.trim();
                console.log(currentuser.password);
            }
            // console.log("oldpassmatch");
            else{
                alert("new password and confirm password does not match");
            }
        }
        else{
            alert("wrong old password");
        }
    }
})