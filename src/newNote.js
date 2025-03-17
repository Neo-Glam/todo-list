import { createNoteList } from "./noteList";
import { createNoteCard } from "./noteCards";
import { RetrieveNoteStorage,updateNoteStorage } from "./data";

export function newNote(name,desciption){
    class noteClass{
        constructor(name,description){
            this.name = name;
            this.description = description;
        }
    }
    const note =  new noteClass(name,desciption);
    const myNotes = RetrieveNoteStorage();
    myNotes.push(note);
    updateNoteStorage(myNotes);
    createNoteList();
    createNoteCard();
}