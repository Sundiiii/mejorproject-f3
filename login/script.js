let emailid = document.getElementById("email");
let password = document.getElementById("password");
let loginbtn = document.getElementById("login-btn");
let msg = document.querySelector(".msg");


loginbtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (password.value.trim() === "" || emailid.value.trim() === "") {
        msg.innerHTML = "please fill all the details"
        msg.style.color = "red";
        setTimeout(() => {
            msg.innerHTML = "";
        }, 3000);
        // alert("Please fill all the details");
    }
    else {
        let users = JSON.parse(localStorage.getItem("users"))
        if (users) {
            let currentuser = users.find((currentuser) => {
                return emailid.value.trim() === currentuser.email;
            });
            if (currentuser) {
                if (password.value.trim() === currentuser.password) {
                    sessionStorage.setItem("loggedInUser", JSON.stringify(currentuser));
                    msg.innerHTML = "Log in successfull"
                    msg.style.color = "green";
                    setTimeout(() => {
                        msg.innerHTML = "";
                    }, 3000);
                    window.location.href = "../shop/index.html";
                    
                    // alert("log in successfull");
                }
                else {
                    msg.innerHTML = "Incorrect password"
                    msg.style.color = "red";
                    setTimeout(() => {
                        msg.innerHTML = "";
                    }, 3000);
                    // alert("incorrect password");
                }
            }
            else {
                msg.innerHTML = "User does not exist"
                msg.style.color = "red";
                setTimeout(() => {
                    msg.innerHTML = "";
                }, 3000);
                window.location.href = "../Sign-up/index.html";
                // alert("user does not exist");
            }
        }
        else {
            msg.innerHTML = "User does not exist"
            msg.style.color = "red";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 3000);
            // alert("user does not exist");
        }
    }
});