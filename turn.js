const range = document.querySelector("#range")
const turnImg = document.querySelector("#turn-img")

range.addEventListener("input", function(){
    console.log(this.value)
    let extraDigit = "000"
    if (this.value > 9){
    extraDigit = "00"
    if (this.value > 99){
        extraDigit = "0"
    }
    }
    else{
        extraDigit = "000"
    }
    turnImg.setAttribute("src", "police_turn/Turntable/" + extraDigit + this.value + ".png")
    
})