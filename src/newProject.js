import { myProjects } from "./data";
import { createProjectList } from "./projectList";
import { createProjectCard } from "./projectCards";

export function newProject(name,desciption,date,importance){
    class projectClass{
        constructor(name,description,date,importance){
            this.name = name;
            this.description = description;
            this.date = date;
            this.importance = importance;
            this.completion = false;
        }
        todos = [];
    }
    const project = new projectClass(name,desciption,date,importance);
    myProjects.push(project)
    createProjectList();
    createProjectCard();
}