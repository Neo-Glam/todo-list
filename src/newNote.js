import { createNoteList } from "./noteList";
import { myNotes } from "./data";

export function newNote(name,desciption){
    class noteClass{
        constructor(name,description){
            this.name = name;
            this.description = description;
        }
    }
    const note = noteClass(name,desciption);
    myNotes.push(note);
    createNoteList();
}