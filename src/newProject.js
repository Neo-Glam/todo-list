import { RetrieveProjectStorage,updateProjectStorage } from "./data";
import { createProjectList } from "./projectList";
import { createProjectCard } from "./projectCards";
import { createProjectMenu } from "./projectMenu";



export class projectClass{
    constructor(name,description,date,importance){
        this.name = name;
        this.description = description;
        this.date = date;
        this.importance = importance;
        this.completion = false;
        this.todos = [];
    }
}

export class todoClass {
    constructor(description) {
        this.description = description;
        this.completion = false
    }
}


export function newProject(name,desciption,date,importance){

    const project = new projectClass(name,desciption,date,importance);
    const myProjects = RetrieveProjectStorage();
    myProjects.push(project)
    updateProjectStorage(myProjects);
    createProjectList();
    createProjectCard();
}

export function newTodo(index,description){

    console.log(index);

    const todo = new todoClass(description)
    const myProjects = RetrieveProjectStorage();
    myProjects[index].todos.push(todo);
    updateProjectStorage(myProjects);
    createProjectMenu(index);
}