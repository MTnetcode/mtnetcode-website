/**
 * function which checks for error in forms, when no error found sends form to backend
 */
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
    resetErrors(); // clear errors
    let allErrors = getErrors(); //get all errors found in form
    if (allErrors.length > 0) {
      // if any errros then show them
      showErrors(allErrors);
      errorWindow.classList.add("show-popup");
    } else {
      // if no error, send form and show success box with message
      let successMsg = await sendFormActually();
      showSuccesWindow(successMsg);
    }
  });

  // generate error div and set class to better output those errors, function takes error message as parameter
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

  //reset all errors already showed
  function resetErrors() {
    errors = [];
    while (showErrorBox.firstChild) {
      showErrorBox.removeChild(showErrorBox.lastChild);
    }
  }

  // check how many errros in form and return them
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

  //check if email address is in correct format using regexp
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // function which actually sends data from form to express backend
  async function sendFormActually() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let loader = document.querySelector(".mail-sending");
    loader.classList.add("show-sending");
    let res = await fetch(`/sendemail`, {
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
    loader.classList.remove("show-sending");

    return data.msg;
  }

  // if email was send this fucking will show success window
  function showSuccesWindow(msg) {
    successText.innerHTML = msg;
    successWindow.classList.add("show-popup");
    closeButtonSuccess.addEventListener("click", () => {
      successWindow.classList.remove("show-popup");
      location.reload();
    });
  }
}
