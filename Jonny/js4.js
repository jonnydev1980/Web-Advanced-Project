function submitForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let people = document.getElementById("people").value;
  let date = document.getElementById("date").value;

  if(name && email && people && date) {
    alert("Reservation sent successfully! 🍽️");
  } else {
    alert("Please fill all fields!");
  }
}