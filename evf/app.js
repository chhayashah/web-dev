const navbar = document.querySelector('#NavBar');
let top = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY >= top) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);




// retreiving geoLocation 
const successCallback = (position) => {
    console.log(position);
}
const errorCallback = (error) => {
    console.log(error);
}
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)



//------------ MODAL LOGIN FORM ONCLICK EVENT
var modal = document.getElementById('id01');
          
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

//---------------- Modal register --------------
var modal_reg = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_reg) {
        modal_reg.style.display = "none";
    }
}

//---------------- payment --------------------

