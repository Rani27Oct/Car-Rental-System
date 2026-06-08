function bookCar(carName){

    document.getElementById("selectedCar").value =
    carName;

    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
    });
}

function confirmBooking(){

    let customer =
    document.getElementById("customerName").value;

    let car =
    document.getElementById("selectedCar").value;

    if(customer === "" || car === ""){

        alert("Please fill booking details!");
        return;
    }

    alert(
        "✅ Booking Confirmed!\n\nCustomer: "
        + customer +
        "\nCar: " +
        car
    );

    document.getElementById("customerName").value="";
    document.getElementById("selectedCar").value="";
}

function searchCar(){

    let search =
    document.getElementById("search")
    .value
    .toLowerCase();

    let cards =
    document.querySelectorAll(".car-card");

    cards.forEach(card => {

        if(
            card.innerText
            .toLowerCase()
            .includes(search)
        ){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });
}
