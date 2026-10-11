const loginBtn = document.getElementById("loginBtn");
const loginOverlay = document.getElementById("loginOverlay");
const closeLoginModal = document.getElementById("closeLoginModal");
const loginForm = document.getElementById("loginForm");

const openSignup = document.getElementById("openSignup");
const openLogin = document.getElementById("openLogin");
const signupOverlay = document.getElementById("modalOverlay");

/* TOAST */

function showToast(message){

 
const toast = document.getElementById("toast");

toast.textContent = message;

toast.classList.add("show");

setTimeout(() => {

    toast.classList.remove("show");

},3000);
 

}

/* OPEN LOGIN MODAL */

if(loginBtn){

 
loginBtn.addEventListener("click",()=>{

    loginOverlay.classList.add("active");

});
 

}

/* CLOSE LOGIN MODAL */

if(closeLoginModal){

 
closeLoginModal.addEventListener("click",()=>{

    loginOverlay.classList.remove("active");

});
 

}

/* LOGIN */

if(loginForm){

 
loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email =
    document.getElementById("loginEmail")
    .value.trim();

    const password =
    document.getElementById("loginPassword")
    .value.trim();

    if(email === ""){

        showToast("Please enter email");
        return;
    }

    if(password === ""){

        showToast("Please enter password");
        return;
    }

    const savedUser =
    JSON.parse(
        localStorage.getItem("fisherFlyUser")
    );

    if(!savedUser){

        showToast("No account found");
        return;
    }

    if(savedUser.email !== email){

        showToast("Email not found");
        return;
    }

    if(savedUser.password !== password){

        showToast("Incorrect password");
        return;
    }

    localStorage.setItem(
        "isLoggedIn",
        "true"
    );

    showToast("Login Successful");

    loginForm.reset();

    setTimeout(()=>{

        loginOverlay.classList.remove("active");

        location.reload();

    },1500);

});
 

}

/* LOGIN → SIGNUP */

if(openSignup){

 
openSignup.addEventListener("click",()=>{

    loginOverlay.classList.remove("active");

    signupOverlay.classList.add("active");

});
 

}

/* SIGNUP → LOGIN */

if(openLogin){

 
openLogin.addEventListener("click",()=>{

    signupOverlay.classList.remove("active");

    loginOverlay.classList.add("active");

});
 

}
