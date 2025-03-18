import { RetrieveProjectStorage,updateProjectStorage } from "./data";
import { createProjectMenu } from "./projectMenu";

export function createTaskCard(projectIndex){

    const myProjects = RetrieveProjectStorage();

    const content = document.querySelector("#content");
    content.innerHTML = "";

    let i = 0;
    
    
    myProjects[projectIndex].todos.forEach(element => {

        const index = i;
        i++;

        const description = document.createElement("p");
        const remove = document.createElement("button");
        const complete = document.createElement("button");
        
        description.classList.add("description");
        remove.classList.add("removeButton");
        complete.classList.add("completeButton");

        description.innerText = element.description;
        remove.innerText = "X";
        complete.innerText = "Complete";

        remove.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            console.log(myProjects[projectIndex].todos);
            myProjects[projectIndex].todos.splice(index, 1);
            updateProjectStorage(myProjects);
            createProjectMenu(projectIndex);
        })

        complete.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            if (myProjects[projectIndex].todos[index].completion === true) {
                myProjects[projectIndex].todos[index].completion = false;
            }
            else {
                myProjects[projectIndex].todos[index].completion = true;
            }
            updateProjectStorage(myProjects);
            createProjectMenu(projectIndex);

        })

        const card = document.createElement("div");
        card.classList.add("card");

        card.appendChild(description);
        card.appendChild(remove);
        card.appendChild(complete);

        content.appendChild(card);

        let completion = myProjects[projectIndex].todos[index].completion
        function checkCompletion(){
            if (completion === true){
                description.style.textDecoration = "line-through"
                card.style.border = "solid green"
            }
            else{
                card.style.border = "solid red"
            }
        };
        checkCompletion();
    });

}