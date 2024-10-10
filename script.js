const form = document.querySelector("form");
const button = document.querySelector("[type='submit']");

function checkEmail(e) {
  e.preventDefault();
  const email = e.target.querySelector('[type="email"]').value;
  if (!isValidEmail(email)) {
    form.classList.add("error");
  } else {
    console.log("valid");
    form.classList.remove("error");
  }

  console.log(email);
}

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

form.addEventListener("submit", checkEmail);
