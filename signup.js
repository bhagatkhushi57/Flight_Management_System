const signupBtn = document.getElementById("signupBtn");
const modal = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("signupForm");

/* TOAST */

function showToast(message){

 
const toast =
document.getElementById("toast");

toast.textContent = message;

toast.classList.add("show");

setTimeout(() => {

    toast.classList.remove("show");

},3000);
 

}

/* OPEN MODAL */

if(signupBtn){

 
signupBtn.addEventListener("click",()=>{

    modal.classList.add("active");

});
 

}

/* CLOSE MODAL */

if(closeBtn){

 
closeBtn.addEventListener("click",()=>{

    modal.classList.remove("active");

});
 

}

/* SIGNUP FORM */

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const fullname =
    document.getElementById("fullname")
    .value.trim();

    const email =
    document.getElementById("email")
    .value.trim();

    const password =
    document.getElementById("password")
    .value.trim();

    const confirm =
    document.getElementById("confirmPassword")
    .value.trim();

    if(!fullname){

        showToast(
            "Please enter your name"
        );

        return;
    }

    if(!email){

        showToast(
            "Please enter your email"
        );

        return;
    }

    if(!password){

        showToast(
            "Please enter a password"
        );

        return;
    }

    if(!confirm){

        showToast(
            "Please confirm password"
        );

        return;
    }

    if(password !== confirm){

        showToast(
            "Passwords do not match"
        );

        return;
    }

    const user = {

        fullname,
        email,
        password

    };

    localStorage.setItem(
        "fisherFlyUser",
        JSON.stringify(user)
    );

    localStorage.setItem(
        "isLoggedIn",
        "true"
    );

    showToast(
        "Account Created Successfully"
    );

    form.reset();

    setTimeout(()=>{

        modal.classList.remove(
            "active"
        );

        location.reload();

    },1500);

});


}
