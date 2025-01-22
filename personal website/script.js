// JavaScript for Interactivity

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Contact form submission handler
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });

    // Resume download button functionality
    const resumeButton = document.getElementById("download-resume");

    resumeButton.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "resume.pdf"; // Ensure this file is in the same directory
        link.download = "[YourName]_Resume.pdf";
        link.click();
    });
});
