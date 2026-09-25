function showMessage() {
    alert("Hello Siyam! 👋");
    alert("Thanks for visiting my website 🚀");
    alert("I am learning Web Development.");
}

function changeAbout() {
    document.getElementById("aboutTitle").innerText = "My Journey 🚀";

    document.getElementById("aboutText").innerText =
        "I am learning HTML, CSS and JavaScript to become a professional Web Developer.";
}

function welcomeUser() {
    let name = document.getElementById("nameInput").value;

    if (name === "") {
        alert("Please enter your name 🙂");
        return;
    }

    document.getElementById("welcomeMessage").innerText =
        "Hello " + name + "! 👋 Welcome to my website 🚀";
}


document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("messageInput").value;

    if (name === "" || email === "" || message === "") {

        document.getElementById("formMessage").innerText =
            "⚠️ Please fill in all fields.";

        return;
    }

    document.getElementById("formMessage").innerText =
        "✅ Thank you, " + name + "! Your message is ready to send.";

});
