import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
    publicKey: "R_tB47E_D8GyiHG9W",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_e4zvf8r', 'template_nf1jfxp', this)
            .then(() => {
                // usage https://apvarun.github.io/toastify-js/#
                Toastify({
                    text: "Mail sent",
                    duration: 3000
                    }).showToast();
                document.getElementById('contact-form').reset()
            }, (error) => {
                Toastify({
                    text: "Sorry something went wrong",
                    duration: 3000
                    }).showToast();
                    console.log(error)
            });
    });
}