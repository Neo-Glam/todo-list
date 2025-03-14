import { createNoteList } from "./noteList";
import { createNoteCard } from "./noteCards";
import { myNotes } from "./data";

export function newNote(name,desciption){
    class noteClass{
        constructor(name,description){
            this.name = name;
            this.description = description;
        }
    }
    const note =  new noteClass(name,desciption);
    myNotes.push(note);
    createNoteList();
    createNoteCard();
}