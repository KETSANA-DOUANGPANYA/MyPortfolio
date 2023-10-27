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
            const apiUrl = "http://127.0.0.1:3000/contact"; // Replace with your actual API URL

            // Send a POST request to the API with the JSON data
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then((response) => {
                const object = JSON.stringify(formData);
                // Handle the API response here (e.g., show a success message)
                if (response.ok) {
                    alert("Form submitted successfully!");
                    console.log(object);
                    form.reset();
                } else {
                    alert("Form submission failed.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        });