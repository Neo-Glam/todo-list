import { newProject } from "./newProject";
import { newNote } from "./newNote";

export function createElementForm(){

    const content = document.querySelector("#content");
    const infoPanel = document.querySelector("#infoPanel");

    content.innerHTML = "";
    infoPanel.innerHTML = "";

    const projectButton = document.createElement("button");
    const noteButton = document.createElement("button");

    projectButton.innerText = "Project";
    noteButton.innerText = "Note";

    const newProjectModal = document.querySelector("#newProjectModal");
    const newProjectForm = document.querySelector("#newProjectForm");
    const closeProjectModal = document.querySelector("#closeProjectModal");

    const newNoteModal = document.querySelector("#newNoteModal");
    const newNoteForm = document.querySelector("#newNotetForm");
    const closeNoteModal = document.querySelector("#closeNoteModal");

    noteButton.addEventListener("click",()=>{
       newNoteModal.showModal();
    })

    newNoteForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        e.stopImmediatePropagation();

        const formData = new FormData(newNoteForm);
        const noteTitle = formData.get("note-title");
        const noteDescription = formData.get("note-description");

        newNoteForm.reset();
        newNoteModal.close();

        newNote(noteTitle,noteDescription);

    })

    closeNoteModal.addEventListener("click",()=>{
        newNoteForm.reset();
        newNoteModal.close();
        })

    projectButton.addEventListener("click",()=>{
        newProjectModal.showModal();
    })

    newProjectForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        e.stopImmediatePropagation();
        
        const formData = new FormData(newProjectForm);
        const projectTitle = formData.get("project-title");
        const projectDescription = formData.get("project-description");
        const projectDate = formData.get("project-date");
        const projectImportance = formData.get("project-importance")

        newProjectForm.reset();
        newProjectModal.close();

        newProject(projectTitle,projectDescription,projectDate,projectImportance);

    })

    closeProjectModal.addEventListener("click",()=>{
        newProjectForm.reset();
        newProjectModal.close();
        })

    infoPanel.appendChild(projectButton);
    infoPanel.appendChild(noteButton);

}