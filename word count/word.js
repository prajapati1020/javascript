const textareaEl = document.getElementById("textarea");
const remainingCounterEl = document.getElementById("remaining-counter")

const totalCounterEl = document.getElementById("total-counter")


textareaEl.addEventListener("keyup",()=>{
    updateCounter()
})

updateCounter()

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length 
     remainingCounterEl.innerText = 
     textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
