// if the window is larger than 1200
if((window.innerWidth-34) > 1200){
    console.log(window)
    book()
    if(!document.querySelector(".img-form")){
        image()  
    }
}

// if the user resize the screeen
window.addEventListener("resize", ()=>{
    image()
    if(window.innerWidth > 1200){
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

// fucntion to add the image and remove it 
function image(){
    let cont = document.querySelector(".image-form")
    if((window.innerWidth-34) < 1200){
        if(document.querySelector(".img-form")){
            document.querySelector(".img-form").remove() 
        }
    }else{
        if(!document.querySelector(".img-form")){
            let img = document.createElement("img")
            img.classList.add("img-form")
            img.src = "../../src/images/form-image/Image.png"
            cont.append(img)   
        }
    }
}

