const searchButtons =
document.querySelectorAll(".search-btn");

const resultContainer =
document.getElementById("flightResults");

const flights = [

    {
        airline:"IndiGo",
        from:"Delhi",
        to:"Dubai",
        departure:"06:20",
        arrival:"09:30",
        duration:"3h 10m",
        price:"₹18,499"
    },

    {
        airline:"Vistara",
        from:"Delhi",
        to:"Dubai",
        departure:"09:45",
        arrival:"13:00",
        duration:"3h 15m",
        price:"₹21,999"
    },

    {
        airline:"Air India",
        from:"Delhi",
        to:"London",
        departure:"10:00",
        arrival:"18:20",
        duration:"8h 20m",
        price:"₹39,999"
    },

    {
        airline:"Emirates",
        from:"Mumbai",
        to:"Paris",
        departure:"07:30",
        arrival:"15:30",
        duration:"8h",
        price:"₹45,999"
    }

];

searchButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        resultContainer.innerHTML = "";

        flights.forEach(flight=>{

            resultContainer.innerHTML += `

            <div class="flight-result-card">

                <div>

                    <h3>${flight.airline}</h3>

                    <p>
                        ${flight.from}
                        →
                        ${flight.to}
                    </p>

                </div>

                <div>

                    <h3>
                        ${flight.departure}
                    </h3>

                    <p>
                        ${flight.duration}
                    </p>

                </div>

                <div>

                    <h3>
                        ${flight.price}
                    </h3>

                    <button
                    class="select-flight"
                    >
                        Select
                    </button>

                </div>

            </div>

            `;
        });

    });

});

document.addEventListener(
"click",
(e)=>{

    if(
        e.target.classList.contains(
            "select-flight"
        )
    ){

        const card =
        e.target.closest(
            ".flight-result-card"
        );

        const booking = {

            airline:
            card.querySelector(
                "h3"
            ).textContent,

            bookedAt:
            new Date()
            .toLocaleDateString()

        };

        let history =
        JSON.parse(
            localStorage.getItem(
                "bookingHistory"
            )
        ) || [];

        history.push(booking);

        localStorage.setItem(
            "bookingHistory",
            JSON.stringify(history)
        );

        showToast(
    "✈ Booking Confirmed Successfully"
);
    }

});


function showToast(message){

    const toast =
    document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);
}