const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");
const formContainer = document.getElementById("form-container");
const userEmail = document.getElementById("user-email");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (!validateEmail(email)) {
    errorMsg.style.display = "block";
    emailInput.style.borderColor = "red";
  } else {
    errorMsg.style.display = "none";
    emailInput.style.borderColor = "#ccc";
    formContainer.style.display = "none";
    userEmail.textContent = email;
    successMsg.classList.remove("hidden");
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function dismissMessage() {
  successMsg.classList.add("hidden");
  formContainer.style.display = "flex";
  emailInput.value = "";
}
