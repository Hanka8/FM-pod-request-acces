const request = document.getElementById("request");
const error = document.querySelector(".error");
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

request.addEventListener("click", function(){
  const email = document.getElementById("email").value;
  if (email.match(regex)) {
    error.classList.remove("errorShown");
    error.classList.add("errorHidden");
  } else {
    error.classList.add("errorShown");
    error.classList.remove("errorHidden");
  }
});
