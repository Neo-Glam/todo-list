import { RetrieveProjectStorage} from "./data";

export function createProjectList(){

    const myProjects = RetrieveProjectStorage();

    const projectList = document.querySelector("#projectList")
    projectList.innerHTML = "";

    myProjects.forEach(project=>{

        const title = document.createElement("li");
        title.innerText = project.name;
        projectList.appendChild(title);
    }
)}