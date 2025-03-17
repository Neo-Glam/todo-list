import { RetrieveNoteStorage,updateNoteStorage } from "./data";
import { createNoteList } from "./noteList";

export function createNoteCard(){

    const myNotes = RetrieveNoteStorage();

    const content = document.querySelector("#content");
    const infoPanel = document.querySelector("#infoPanel");

    content.innerHTML = "";
    infoPanel.innerHTML = "";

    let i = 0;

    myNotes.forEach(project=>{

        const index = i;
        i++;

        const title = document.createElement("h3");
        const description = document.createElement("p");
        const remove = document.createElement("button");   



        title.innerText = project.name;
        description.innerText = project.description;
        remove.innerText = "X";
        



        title.classList.add("title");
        description.classList.add("description");
        remove.classList.add("removeButton");

            remove.addEventListener("click",(e)=>{
                e.stopImmediatePropagation();
                myNotes.splice(index,1);
                updateNoteStorage(myNotes);
                createNoteCard();
                createNoteList();
            })



        const card = document.createElement("div");
        card.classList.add("card");

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(remove);

        content.appendChild(card);
    }

)}