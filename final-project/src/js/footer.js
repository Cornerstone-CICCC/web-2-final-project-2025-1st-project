import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("footer-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      Toastify({
        text: "Thank you for subscribing to our newsletter!",
        duration: 3000,
        position: "center",
        style: {
          background: "#3cb371",
        },
      }).showToast();
      document.getElementById("footer-form").reset();
    });
});
