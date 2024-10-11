function subscribe() {
    alert("Thank you for subscribing");
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Accordion initialized"); // Debugging line

    let accordion = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function() {
            this.classList.toggle("open");
            let content = this.nextElementSibling;

            // Toggle display property
            if (content.style.display === "block") {
                content.style.display = "none"; // Hide it
            } else {
                content.style.display = "block"; // Show it
            }
        });
    }
});

