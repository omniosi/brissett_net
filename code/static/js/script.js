const menu = document.querySelector(".menu");
const slideout = document.querySelector(".menu-slideout");

// console.log("menu btn is "+ menu);

menu.addEventListener("click", (event) => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    slideout.classList.remove("open");
  }else {
    menu.classList.add("open");
    slideout.classList.add("open");
  }
})

document.getElementById("contact-form").addEventListener("submit", function(event)  {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Create email subject and body
  var subject = "New Contact Form Submission";
  var body = "- Name: " + name + "\n- Email: " + email + "\n- Message: " + message;

  // Create a new email window
  window.location.href = "mailto:info@brissett.net?subject=" + subject + "&body=" + body;
});
