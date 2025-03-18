import { createProjectCard } from "./projectCards";
import { createNoteCard } from "./noteCards";
import { createElementForm } from "./newElementForm";



export function buttonNav(){

    const showProjectButton = document.querySelector("#showProjectButton");
    const showNoteButton = document.querySelector("#showNoteButton");
    const newElement = document.querySelector("#newElement");

    const infoPanel = document.querySelector("#infoPanel")

    showProjectButton.addEventListener("click",()=>{
        createProjectCard();
        window.location.reload();
        infoPanel.innerHTML = "";
    })

    showNoteButton.addEventListener("click", ()=>{
        createNoteCard();
        infoPanel.innerHTML = "";

    })

    newElement.addEventListener("click",()=>{
        createElementForm();
    })
}
