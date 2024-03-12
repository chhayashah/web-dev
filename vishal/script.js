const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  // prevent the form from submitting
  event.preventDefault();
  
  // get the form data
  const formData = new FormData(event.target);
  

  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  
});