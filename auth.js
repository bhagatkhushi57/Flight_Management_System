const authButtons =
document.getElementById(
    "authButtons"
);

const loggedIn =
localStorage.getItem(
    "isLoggedIn"
);

if(loggedIn === "true"){

    authButtons.innerHTML = `
        <button
        class="submission"
        onclick="
        window.location.href=
        'profile.html'
        ">
            Profile
        </button>
    `;
}