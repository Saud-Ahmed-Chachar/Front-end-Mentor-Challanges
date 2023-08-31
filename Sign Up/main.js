


document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Add any desired behavior here, such as showing a thank you message
        const formBox = document.querySelector(".form-box");
        formBox.innerHTML = "<p>Thank you for signing up!</p>";
    });
});

