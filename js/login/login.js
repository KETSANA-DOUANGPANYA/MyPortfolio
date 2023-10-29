var jwt = localStorage.getItem('jwt');
if (jwt != null) {
    window.location.href = config.WEB_URL+'admin.html';
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;
    if (email && password) {
        // Define the API endpoint (replace with your actual API URL)
        const apiUrl = config.API_URL+'login'; // Replace with your API URL

        // Prepare the data to send to the API
        const data = {
            email: email,
            password: password
        };

        // Create a new XMLHttpRequest object
        const xhttp = new XMLHttpRequest();

        // Open a POST request to the API endpoint
        xhttp.open('POST', apiUrl);

        // Set the "Content-Type" header to JSON
        xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

        // Define the callback function for when the request is complete
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    const responseObject = JSON.parse(this.responseText);
                    console.log(responseObject);
                    localStorage.setItem('jwt', responseObject['token']);
                    alert("Success");
                    // window.location.href = 'http://127.0.0.1:3000/welcome';
                    // Handle the response, e.g., store the token and redirect
                } else if(this.status === 0){
                    console.error('Request failed with status:', this.status);
                    Swal.fire(
                        'Warning!',
                        'ຂໍອະໄພລະບົບມີບັນຫາ',
                        'question');
                } else {
                    // Handle other HTTP status codes or errors
                    console.error('Request failed with status:', this.status);
                    Swal.fire(
                        'Warning!',
                        'ລະຫັດຜ່ານ ຫຼື ອີເມວບໍ່ຖຶກຕ້ອງ',
                        'question'
                    );
                }
            }
        };

        // Send the data as a JSON string
        xhttp.send(JSON.stringify(data));
        return false;
    }

    else {
        Swal.fire(
            'Warning!',
            'ກະລຸນາປ້ອນລະຫັດ ເເລະ ອີເມວຂອງທ່ານ',
            'question'
        )
    }

}
// Add a form submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

