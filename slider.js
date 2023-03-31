//DOM elementer

const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")

//En slags tæller der holder styr på hvilket billede vi er nået til
let slideIndex = 1

//Timer der kalder showSlides for hvert 3000ende milisekund
window.setInterval(function(){
    showSlides(slideIndex += 1)
}, 3000)


//Main function
function showSlides(num){
    //nummeret må ikke  være størrere end antallet af billeder (slides)
    if(num > slides.length){
        slideIndex = 1;
    }

    //num må heller ikke være mindre end 1
    if(num < 1){
        slideIndex = slides.length
    }

    //alle slides skjules
    slides.forEach(function(element, index){
        element.style.display= "none"
        dots[index].classList.remove("slide-active")
    })
    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].classList.add("slide-active")
}



//funktionskald med klik events

function plusSlides (number){
    showSlides(slideIndex += 1)
}

function currentSlide(number){
    showSlides( slideIndex = number)
}