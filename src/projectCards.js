import { RetrieveProjectStorage,updateProjectStorage } from "./data";
import { createProjectList } from "./projectList";
import { createTaskCard } from "./taskCards";
import { createProjectMenu } from "./projectMenu";

export function createProjectCard(){

    const myProjects = RetrieveProjectStorage();
    
    const content = document.querySelector("#content");
    const infoPanel = document.querySelector("#infoPanel");

    content.innerHTML = "";

    let i = 0;

    myProjects.forEach(project=>{

        const index = i;
        i++;

        const title = document.createElement("h3");
        const description = document.createElement("p");
        const date = document.createElement("p");
        const importance = document.createElement("p");
        const remove = document.createElement("button");
        const complete = document.createElement("button");   

        title.innerText = project.name;
        description.innerText = project.description;
        date.innerText = project.date;
        importance.innerText = project.importance;
        remove.innerText = "X";
        complete.innerText = "Complete"

        title.classList.add("title");
        description.classList.add("description");
        date.classList.add("date");
        importance.classList.add("importance");
        remove.classList.add("removeButton");
        complete.classList.add("completeButton")

        remove.addEventListener("click",(e)=>{
            e.stopImmediatePropagation();
            myProjects.splice(index,1);
            updateProjectStorage(myProjects);
            console.table(myProjects)
            createProjectCard();
            createProjectList();
        })

        complete.addEventListener("click",(e)=>{
            e.stopImmediatePropagation();
            if(myProjects[index].completion === false){
                myProjects[index].completion = true;
            }
            else{
                myProjects[index].completion = false;
            }
            updateProjectStorage(myProjects);
            createProjectCard();
            console.table(myProjects[index]);
        })

        const card = document.createElement("div");
        card.classList.add("card");

        card.addEventListener("click",(e)=>{
            e.stopImmediatePropagation();
            createProjectMenu(index);
        })

        const completion = myProjects[index].completion;
        function checkCompletion(){
            if (completion === true){
                title.style.textDecoration = "line-through"
                description.style.textDecoration = "line-through"
                date.style.textDecoration = "line-through"
                importance.style.textDecoration = "line-through"
                card.style.border = "solid green"
            }
            else{
                card.style.border = "solid red"
            }
        };

        checkCompletion();

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(date);
        card.appendChild(importance);
        card.appendChild(remove);
        card.appendChild(complete)

        content.appendChild(card);
    }

)}