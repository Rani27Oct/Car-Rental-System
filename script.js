function bookCar(carName){
    document.getElementById("selectedCar").value = carName;

    document.querySelector(".booking-section")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function confirmBooking(){

    let name =
    document.getElementById("customerName").value;

    let car =
    document.getElementById("selectedCar").value;

    if(name === "" || car === ""){
        alert("Please enter details!");
        return;
    }

    alert(
        "✅ Booking Confirmed!\n\nCustomer: "
        + name +
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

        let text =
        card.innerText.toLowerCase();

        if(text.includes(search)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });
}
