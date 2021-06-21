const myTypedText = () => {
  let typed = new Typed("#show-text", {
    typeSpeed: 40,
    backSpeed: 40,
    stringsElement: "#get-text",
    loop: true,
    showCursor: false,
    smartBackspace: false,
    startDelay: 1000,
  });
};

export default myTypedText;
