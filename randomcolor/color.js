const containerEl = document.querySelector(".container")


//div boxes are created
for (let index = 0; index < 30; index++) {
    const colorcontainerEl = document.createElement("div");
    colorcontainerEl.classList.add("color-container")
    containerEl.appendChild(colorcontainerEl)
    
}

 const colorcontainerEls = document.querySelectorAll(".color-container")
 generateColors()
function generateColors(){
  colorcontainerEls.forEach((colorcontainerEl)=>{
     const newColorCode = randomColor();
     colorcontainerEl.style.backgroundColor ="#" +newColorCode
     colorcontainerEl.innerText ="#"+newColorCode
  })
}


function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLength =6;
    let color = ""
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length)
        color += chars.charAt(randomNum)
    
    }
    return color
}