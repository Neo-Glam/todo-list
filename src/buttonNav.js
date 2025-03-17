import { createProjectCard } from "./projectCards";
import { createNoteCard } from "./noteCards";
import { createElementForm } from "./newElementForm";



export function buttonNav(){

    const showProjectButton = document.querySelector("#showProjectButton");
    const showNoteButton = document.querySelector("#showNoteButton");
    const newElement = document.querySelector("#newElement");

    showProjectButton.addEventListener("click",()=>{
        createProjectCard();
    })

    showNoteButton.addEventListener("click", ()=>{
        createNoteCard();
    })

    newElement.addEventListener("click",()=>{
        createElementForm();
    })
}

buttonNav();