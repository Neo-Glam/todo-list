import { myProjects } from "./data";

export function createProjectCard(){
    
    const content = document.querySelector("#content");
    const infoPanel = document.querySelector("#infoPanel");

    content.innerHTML = "";
    infoPanel.innerHTML = "";

    myProjects.forEach(project=>{

        const title = document.createElement("h3");
        const description = document.createElement("p");
        const date = document.createElement("p");
        const importance = document.createElement("p");

        title.innerText = project.name;
        description.innerText = project.description;
        date.innerText = project.date;
        importance.innerText = project.importance;

        title.classList.add("title");
        description.classList.add("description");
        date.classList.add("date");
        importance.classList.add("importance");

        const card = document.createElement("div");
        card.classList.add("card");

        card.addEventListener("click",()=>{

            content.innerHTML = "";
            infoPanel.innerHTML = "";

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

            infoPanel.appendChild(title);
            infoPanel.appendChild(description);
            infoPanel.appendChild(date);
            infoPanel.appendChild(importance);


        })



        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(date);
        card.appendChild(importance);

        content.appendChild(card);
    }

)}