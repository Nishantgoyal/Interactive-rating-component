
// Add Event Listener on form
document.getElementById("rating_form").addEventListener(
    "submit",
    (event) => {
        event.preventDefault();
        const rating = document.getElementsByClassName("active")[0].value;
        console.log(`Choosen Rating: ${rating}`)
    }
);


// Add Event Listener on Buttons
const rating_input_buttons = document.getElementsByClassName("rating_input");
for (const button of rating_input_buttons) {
    button.addEventListener("click", event => {
        event.preventDefault();
        const value = event.target.value;
        const active = document.getElementsByClassName("active")[0];
        if (active.value !== value) {
            active.classList.toggle("active");
            event.target.classList.toggle("active");
        }
    });
}