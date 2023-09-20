// HTTP 
//Post contact message
const form = document.getElementById("contact-form");

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Collect form data and convert it to JSON
            const formData = {
                name: form.querySelector('input[name="name"]').value,
                email: form.querySelector('input[name="email"]').value,
                phone: form.querySelector('input[name="phone"]').value,
                subject: form.querySelector('input[name="subject"]').value,
                message: form.querySelector('textarea[name="message"]').value,
            };

            // Define the API URL where you want to send the data
            const apiUrl = "http://127.0.0.1:3000/user"; // Replace with your actual API URL

            // Send a POST request to the API with the JSON data
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then((response) => {
                // Handle the API response here (e.g., show a success message)
                if (response.ok) {
                    alert("Form submitted successfully!");
                    form.reset();
                } else {
                    alert("Form submission failed.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        });


// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use Animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    // remove toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation for footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}


