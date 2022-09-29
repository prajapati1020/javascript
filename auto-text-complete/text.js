const containerEl = document.querySelector(".container")
const careers = ["Arjit Prajapati","Software Developer" ,"Full-Stack Developer","Coder" , "Single" , "Pure-Virgin" ,"Horny","Wanna Fuck"]
let careerIndex =0;

let characterIndexx =0;

updateText();


function updateText()
{
    characterIndexx++
    containerEl.innerHTML=
    `<h1>I am ${careers[careerIndex].slice(0,1)!="A"? "a":""} ${careers[careerIndex].slice(0,characterIndexx)}</h1>`

    
    if(characterIndexx===careers[careerIndex].length){
    careerIndex++
    characterIndexx=0
    }
    if(careerIndex===careers.length){
        careerIndex=0;
    }
    setTimeout(updateText ,400)
}



