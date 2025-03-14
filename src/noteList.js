import { myNotes } from "./data";

export function createNoteList(){

    const noteList = document.querySelector("#noteList")
    noteList.innerHTML = "";

    myNotes.forEach(note=>{

        const title = document.createElement("li");
        title.innerHTML = note.name;
        noteList.appendChild(title);
    }
)}