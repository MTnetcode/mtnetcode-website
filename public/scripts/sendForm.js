export default function sendForm() {
  let name = document.getElementById("name").innerHTML;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let errors = [];

  console.log(name, email, message);

  if (name === "") {
    errors.push("You have to fill in your name");
  }
  if (email === "") {
    errors.push("YEmail you entered is not correct");
  }
  if (message === "") {
    errors.push("You have to fill in message");
  }

  if (errors.length > 0) {
    showErrors(errors);
  }
}

// function isEmailAddress(emailAddress) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(emailAddress.toLowerCase());
// }

function generateErrorDiv(errorMsg) {
  let errorDiv = document.createElement("div");
  errorDiv.innerHTML = errorMsg;
  return errorDiv;
}

function showErrors(errors) {
  let errorWindow = document.querySelector(".popup-window-fail");
  let showErrorBox = document.getElementById("errors-show");
  let button = document.getElementById("btn");
  let closeButton = document.querySelector(".popup-close");

  errors.forEach((error) => {
    showErrorBox.appendChild(generateErrorDiv(error));
  });

  closeButton.addEventListener("click", () => {
    errorWindow.classList.remove("show-popup");
  });
  button.addEventListener("click", () => {
    errorWindow.classList.add("show-popup");
  });
}
