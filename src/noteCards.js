import { myNotes } from "./data";

export function createNoteCard(){

    const content = document.querySelector("#content");
    content.innerHTML = "";

    myNotes.forEach(project=>{

        const title = document.createElement("h3");
        const description = document.createElement("p");


        title.innerText = project.name;
        description.innerText = project.description;


        title.classList.add("title");
        description.classList.add("description");


        const card = document.createElement("div");
        card.classList.add("card");

        card.appendChild(title);
        card.appendChild(description);

        content.appendChild(card);
    }

)}