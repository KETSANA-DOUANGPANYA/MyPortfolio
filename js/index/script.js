// Login page dialog button alert 
// Add an event listener to the "Login" 
const loginLink = document.getElementById('login');
loginLink.addEventListener('click', function () {
    // Show an alert
    Swal.fire({
        title: 'Are you sure?',
        text: "Do You want Login Admin?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            // Navigate to another page (replace 'your_destination_page.html' with the actual page URL)
            window.location.href = 'http://127.0.0.1:5500/login.html';
        }
    })

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

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use Animation that repeats on scroll use this
        else {
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


