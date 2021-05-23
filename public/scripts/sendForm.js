export default async function sendForm() {
  let button = document.querySelector(".btn");
  let errorWindow = document.querySelector(".popup-window-fail");
  let successWindow = document.querySelector(".popup-window-success");
  let showErrorBox = document.getElementById("errors-show");
  let closeButton = document.querySelector(".popup-close");
  let closeButtonSuccess = document.querySelector(".popup-close-success");
  let successText = document.querySelector(".success-header");
  let errors = [];
  button.addEventListener("click", async () => {
    resetErrors();
    let allErrors = getErrors();
    if (allErrors.length > 0) {
      showErrors(allErrors);
      errorWindow.classList.add("show-popup");
    } else {
      let successMsg = await sendFormActually();
      showSuccesWindow(successMsg);
    }
  });
  function generateErrorDiv(errorMsg) {
    let errorDiv = document.createElement("div");
    errorDiv.classList.add("error-text");
    errorDiv.innerHTML = errorMsg;
    return errorDiv;
  }

  function showErrors(errors) {
    errors.forEach((error) => {
      showErrorBox.appendChild(generateErrorDiv(error));
    });
  }

  closeButton.addEventListener("click", () => {
    errorWindow.classList.remove("show-popup");
  });

  function resetErrors() {
    errors = [];
    while (showErrorBox.firstChild) {
      showErrorBox.removeChild(showErrorBox.lastChild);
    }
  }
  function getErrors() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "") {
      errors.push("You have to fill in your name");
    }
    if (email === "") {
      errors.push("You have to fill in your email");
    } else {
      if (!validateEmail(email)) {
        errors.push("email you have entered is invalid");
      }
    }
    if (message === "") {
      errors.push("You have to fill in message");
    }

    return errors;
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  async function sendFormActually() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let res = await fetch("http://localhost:3333/sendemail", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    let data = await res.json();

    return data.msg;
  }

  function showSuccesWindow(msg) {
    successText.innerHTML = msg;
    successWindow.classList.add("show-popup");
    closeButtonSuccess.addEventListener("click", () => {
      successWindow.classList.remove("show-popup");
      location.reload();
    });
  }
}
