document.addEventListener("DOMContentLoaded", () => {
    image();
});

// if the user resize the screeen
window.addEventListener("resize", () => {
    // function to changue the text content
    const book = () => {
        let book = document.querySelector(".quote");
        book.textContent = "Book an Appointment";
    };

    // function to changue the text content
    const quote = () => {
        let book = document.querySelector(".quote");
        book.textContent = "Request a quote";
    };

    // if the window is larger than 1024
    if (window.innerWidth > 1024) {
        book();
        if (!document.querySelector(".img-form")) {
            image();
        }
    }

    image();
    if (window.innerWidth > BREAKPOINT_LARGE) {
        book();
    } else {
        quote();
    }
});

// fucntion to add the image and remove it
function image() {
    let cont = document.querySelector(".image-form");
    if (window.innerWidth < BREAKPOINT_LARGE) {
        if (document.querySelector(".img-form")) {
            document.querySelector(".img-form").remove();
        }
    } else {
        if (!document.querySelector(".img-form")) {
            let img = document.createElement("img");
            img.classList.add("img-form");
            img.src = "../../src/images/form-image/Image.png";
            cont.append(img);
        }
    }
}
