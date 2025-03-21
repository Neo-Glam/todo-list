//export const myProjects = [];
//export const myNotes = [];
import { projectClass } from "./newProject";

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
    const storedProject = JSON.parse(localStorage.getItem("myProjects"));
    
    return storedProject.map(project=>{
        let restoredProject = new projectClass(project.name, project.description, project.date, project.importance);
        restoredProject.todos = project.todos || [];
        restoredProject.completion = project.completion;
        return restoredProject;
    })
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