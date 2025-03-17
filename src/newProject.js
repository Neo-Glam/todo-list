import { RetrieveProjectStorage,updateProjectStorage } from "./data";
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

        newTodo(description){
            class todoClass{
                constructor(description){
                    this.description = description;
                    this.completion = false
                }
            }

            const todo = new todoClass(description);
            this.todos.push(todo);
        }
    }
    const project = new projectClass(name,desciption,date,importance);
    const myProjects = RetrieveProjectStorage();
    myProjects.push(project)
    updateProjectStorage(myProjects);
    createProjectList();
    createProjectCard();
}