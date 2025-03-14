export function newProject(name,desciption,date,importance){
    class projectClass{
        constructor(name,description,date,importance){
            this.name = name;
            this.description = description;
            this.date = date;
            this.importance = importance;
            this.completion = false;
        }
    }
    const project = projectClass(name,desciption,date,importance);
    myProjects.push(project)
}