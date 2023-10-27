/* global bootstrap: false */
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()


// sidebar navication item 
var navItems = document.querySelectorAll('.nav-link');

        // Add a click event listener to each navigation item
        navItems.forEach(function(navItem) {
            navItem.addEventListener('click', function() {
                // Remove the 'active' class from all navigation items
                navItems.forEach(function(item) {
                    item.classList.remove('active');
                });

                // Add the 'active' class to the clicked navigation item
                this.classList.add('active');
            });
        });



// Logout and remove token 
const logout = document.getElementById('logout');

logout.addEventListener('click', function(){
  //show alert logout
      Swal.fire({
        title: 'Are you sure?',
        text: "Do You want Logout Admin?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('jwt');
          window.location.href = 'http://127.0.0.1:5500/index.html';
        }
    })
});