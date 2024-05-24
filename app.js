const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

// SVGs
const firstnameErrorSvg = document.querySelector(".firstname-error-img");
const lastnameErrorSvg = document.querySelector(".lastName-error-img");
const emailErrorSvg = document.querySelector(".email-error-img");
const passWordErrorSvg = document.querySelector(".password-error-img");

// ERROR MESSAGES
const firstnameErrorMsg = document.querySelector(".firstname-errors");
const lastnameErrorMsg = document.querySelector(".lastName-errors");
const emailErrorMsg = document.querySelector(".email-errors");
const passwordErrorMsg = document.querySelector(".password-errors");

//  EYE ICON
const eyeIcon = document.querySelector(".closed-eye-icon");

// console.log(firstName, lastName, email, password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;

  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === "") {
    firstName.classList.add("error");
    firstnameErrorSvg.removeAttribute("hidden");
    firstnameErrorMsg.removeAttribute("hidden");
    firstName.style.marginBottom = "0.5rem";
  } else {
    firstName.classList.remove("error");
    firstnameErrorSvg.setAttribute("hidden", "");
    firstnameErrorMsg.setAttribute("hidden", "");
    firstName.style.marginBottom = "1.2rem";
  }

  // Check last name

  if (lName === "") {
    lastName.classList.add("error");
    lastnameErrorSvg.removeAttribute("hidden");
    lastnameErrorMsg.removeAttribute("hidden");
    lastName.style.marginBottom = "0.5rem";
  } else {
    lastName.classList.remove("error");
    lastnameErrorSvg.setAttribute("hidden", "");
    lastnameErrorMsg.setAttribute("hidden", "");
    lastName.style.marginBottom = "1.2rem";
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    email.classList.add("error");
    emailErrorSvg.removeAttribute("hidden");
    emailErrorMsg.removeAttribute("hidden");
    email.style.marginBottom = "0.5rem";
    email.style.color = "hsl(0, 100%, 74%)";
  } else {
    email.classList.remove("error");
    emailErrorSvg.setAttribute("hidden", "");
    emailErrorMsg.setAttribute("hidden", "");
    email.style.marginBottom = "1.2rem";
    email.style.color = "";
  }

  // Check password

  if (passwordVal === "") {
    password.classList.add("error");
    passWordErrorSvg.removeAttribute("hidden");
    passwordErrorMsg.removeAttribute("hidden");
    password.style.marginBottom = "0.5rem";
    eyeIcon.style.marginTop = "-50px";
  } else {
    password.classList.remove("error");
    passWordErrorSvg.setAttribute("hidden", "");
    passwordErrorMsg.setAttribute("hidden", "");
    password.style.marginBottom = "1.2rem";
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// PPASSWORD VISIBLE/INVISIBLE TOGGLE
eyeIcon.addEventListener("click", (e) => {
  e.preventDefault();
  let passwordType = password.getAttribute("type");

  if (passwordType === "password") {
    password.setAttribute("type", "text");
    eyeIcon.src = "images/open-eye.svg";
  } else {
    password.setAttribute("type", "password");
    eyeIcon.src = "images/closed-eye.svg";
  }
});
