import { RetrieveProjectStorage,updateProjectStorage } from "./data";
import { createTaskCard } from "./taskCards";
import { newTodo } from "./newProject";

export function createProjectMenu(index){

    const myProjects = RetrieveProjectStorage();

    const content = document.querySelector("#content")
    const infoPanel = document.querySelector("#infoPanel")

    content.innerHTML = "";
    infoPanel.innerHTML = "";   

    const infoContent = document.createElement("div")
    infoContent.id = "infoContent"

    const newTaskModal = document.querySelector("#newTaskModal")

    const closeTaskModal = document.querySelector("#closeTaskModal");


    const title = document.createElement("h3");
    const description = document.createElement("p");
    const date = document.createElement("p");
    const importance = document.createElement("p");
    const newTask = document.createElement("button");

    const addTaskForm = document.querySelector("#newTasktForm")

    title.innerText = myProjects[index].name;
    description.innerText = myProjects[index].description;
    date.innerText = myProjects[index].date;
    importance.innerText = myProjects[index].importance;
    newTask.innerText = "New Task";

    title.classList.add("projectTitle");
    description.classList.add("projectDescription");
    date.classList.add("projectDate");
    importance.classList.add("projectImportance");
    newTask.classList.add("newTaskButton");


    newTask.addEventListener("click", () => {
        newTaskModal.showModal();
    })

    console.log(index);
    addTaskForm.addEventListener("submit", function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        const formData = new FormData(addTaskForm);
        const taskDescription = formData.get("task-description")

        newTodo(index,taskDescription);

        addTaskForm.reset(); 
        newTaskModal.close();

    })

    closeTaskModal.addEventListener("click", () => {
        addTaskForm.reset();
        newTaskModal.close();
    })
    
    infoContent.appendChild(title);
    infoContent.appendChild(description);
    infoContent.appendChild(date);
    infoContent.appendChild(importance);
    infoContent.appendChild(newTask)

    infoPanel.appendChild(infoContent)
    createTaskCard(index);


}