import { myNotes } from "./data";

export function createNoteList(){

    const noteList = document.querySelector("#noteList")
    noteList.innerHTML = "";

    myNotes.forEach(note=>{

        const title = document.createElement("li");
        title.innerText = note.name;
        projectList.appendChild(title);
    }
)}