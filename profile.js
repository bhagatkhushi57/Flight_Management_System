const userName =
document.getElementById("userName");

const userEmail =
document.getElementById("userEmail");

const logoutBtn =
document.getElementById("logoutBtn");

const user =
JSON.parse(
localStorage.getItem("fisherFlyUser")
);

/* NO USER */

if(!user){

    window.location.href =
    "index.html";
}

/* DISPLAY DATA */

if(user){
    userName.textContent =user.fullname;
    userEmail.textContent =user.email;
}

/* LOGOUT */

logoutBtn.addEventListener(
"click",
()=>{

    localStorage.removeItem(
        "fisherFlyUser"
    );

    localStorage.removeItem(
        "isLoggedIn"
    );

    window.location.href =
    "index.html";
});

const historyContainer =
document.getElementById(
    "bookingHistory"
);

const history =
JSON.parse(
    localStorage.getItem(
        "bookingHistory"
    )
) || [];

history.forEach(item=>{

    historyContainer.innerHTML += `

    <div class="history-card">

        <h3>
            ${item.airline}
        </h3>

        <p>
            Booked:
            ${item.bookedAt}
        </p>

    </div>

    `;
});