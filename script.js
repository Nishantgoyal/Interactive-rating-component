
// Add Event Listener on form
document.getElementById("rating_form").addEventListener(
    "submit",
    (event) => {
        event.preventDefault();
        const activeEle = document.getElementsByClassName("active");
        if (activeEle.length != 0) {
            const rating = activeEle[0].value;
            document.getElementById('rating_value').innerText = rating;
            document.getElementById('rating_card').style.display = "none";
            document.getElementById('result').style.display = "initial";
        }
    }
);


// Add Event Listener on Buttons
const rating_input_buttons = document.getElementsByClassName("rating_input");
for (const button of rating_input_buttons) {
    button.addEventListener("click", event => {
        event.preventDefault();
        const value = event.target.value;
        const active = document.getElementsByClassName("active");
        if (active.length == 0) {
            event.target.classList.toggle("active");
        } else {
            const activeEle = active[0];
            if (activeEle.value !== value) {
                activeEle.classList.toggle("active");
                event.target.classList.toggle("active");
            }
        }
    });
}