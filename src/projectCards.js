import { RetrieveProjectStorage,updateProjectStorage } from "./data";
import { createProjectList } from "./projectList";

export function createProjectCard(){

    const myProjects = RetrieveProjectStorage();
    
    const content = document.querySelector("#content");
    const infoPanel = document.querySelector("#infoPanel");

    content.innerHTML = "";
    infoPanel.innerHTML = "";

    let i = 0;

    myProjects.forEach(project=>{

        const index = i;
        i++;

        const title = document.createElement("h3");
        const description = document.createElement("p");
        const date = document.createElement("p");
        const importance = document.createElement("p");
        const remove = document.createElement("button");   

        title.innerText = project.name;
        description.innerText = project.description;
        date.innerText = project.date;
        importance.innerText = project.importance;
        remove.innerText = "X";

        title.classList.add("title");
        description.classList.add("description");
        date.classList.add("date");
        importance.classList.add("importance");
        remove.classList.add("removeButton");

        remove.addEventListener("click",(e)=>{
            e.stopImmediatePropagation();
            myProjects.splice(index,1);
            updateProjectStorage(myProjects);
            createProjectCard();
            createProjectList();
        })

        const card = document.createElement("div");
        card.classList.add("card");

        card.addEventListener("click",()=>{

            content.innerHTML = "";
            infoPanel.innerHTML = "";

            const infoContent = document.createElement("div")
            infoContent.id = "infoContent"

            const title = document.createElement("h3");
            const description = document.createElement("p");
            const date = document.createElement("p");
            const importance = document.createElement("p");

            title.innerText = project.name;
            description.innerText = project.description;
            date.innerText = project.date;
            importance.innerText = project.importance;

            title.classList.add("projectTitle");
            description.classList.add("projectDescription");
            date.classList.add("projectDate");
            importance.classList.add("projectImportance");

            infoContent.appendChild(title);
            infoContent.appendChild(description);
            infoContent.appendChild(date);
            infoContent.appendChild(importance);

            infoPanel.appendChild(infoContent)


        })



        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(date);
        card.appendChild(importance);
        card.appendChild(remove);

        content.appendChild(card);
    }

)}