// if the window is larger than 1200
if(window.innerWidth >= 1200){
    book()
}

// if the user resize the screeen
window.addEventListener("resize", ()=>{
    if(window.innerWidth >= 1200){
        book()
    }
    else{
        quote()
    }
})

// function to changue the text content
function book(){
    let book = document.querySelector(".quote")
        book.textContent = "Book an Appointment"
}

// function to changue the text content
function quote(){
    let book = document.querySelector(".quote")
        book.textContent = "Request a quote"
}