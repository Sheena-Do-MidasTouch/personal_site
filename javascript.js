function sayHello() {
    console.log("Hello, world!");
}



document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-button");
    const contactDropdown = document.getElementById("contact-dropdown");

    // Toggle the dropdown when the button is clicked
    contactButton.addEventListener("click", function () {
        if (contactDropdown.style.display === "block") {
            contactDropdown.style.display = "none";
        } else {
            contactDropdown.style.display = "block";
        }
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches("#contact-button")) {
            if (contactDropdown.style.display === "block") {
                contactDropdown.style.display = "none";
            }
        }
    });
});
