//export const myProjects = [];
//export const myNotes = [];

export function checkStorage(){
    if (!localStorage.getItem("myProjects","myNotes")){
        populateStorage();
    }
    else
        return 0;
}


export function populateStorage(){

    const myProjects = [];
    const myNotes = [];

    localStorage.setItem("myProjects",JSON.stringify(myProjects));
    localStorage.setItem("myNotes",JSON.stringify(myNotes));
}

export function RetrieveProjectStorage(){
    return JSON.parse(localStorage.getItem("myProjects")) 
}

export function RetrieveNoteStorage(){
    return JSON.parse(localStorage.getItem("myNotes")) 
}

export function updateProjectStorage(myProjects){
    localStorage.setItem("myProjects",JSON.stringify(myProjects));
}

export function updateNoteStorage(myNotes){
    localStorage.setItem("myNotes",JSON.stringify(myNotes));
}