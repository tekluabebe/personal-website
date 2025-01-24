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

    // Initialize EmailJS with your Public Key
    emailjs.init("pElRjg-L0v46IUgS6"); // Replace with your EmailJS Public Key

    // Contact form submission handler
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            const serviceID = "service_n7yzja5"; // Replace with your EmailJS Service ID
            const templateID = "template_6nwm74ut"; // Replace with your EmailJS Template ID

            const formData = {
                name,
                email,
                message
            };

            emailjs.send(serviceID, templateID, formData)
                .then(() => {
                    alert("Your message has been sent successfully!");
                    contactForm.reset();
                })
                .catch(error => {
                    console.error("Failed to send message:", error);
                    alert("There was an error sending your message. Please try again.");
                });
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });

    // Resume download button functionality
    const resumeButton = document.getElementById("download-resume");

    resumeButton.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "resume.pdf"; // Ensure this file is in the same directory as the HTML file
        link.download = "Teklu_Abebe_Resume.pdf"; // Adjust the file name if needed
        link.click();
    });
});
