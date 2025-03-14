import { myProjects } from "./data";

export function createProjectList(){

    const projectList = document.querySelector("#projectList")
    projectList.innerHTML = "";

    myProjects.forEach(project=>{

        const title = document.createElement("li");
        title.innerText = project.name;
        projectList.appendChild(title);
    }
)}