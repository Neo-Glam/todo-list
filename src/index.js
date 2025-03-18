import "./style.css"
import { buttonNav } from "./buttonNav";
import { checkStorage } from "./data";
import { createProjectCard } from "./projectCards";
import { createProjectList } from "./projectList";
import { createNoteList } from "./noteList";
import { RetrieveProjectStorage } from "./data";


checkStorage();
buttonNav();
createProjectCard();
createProjectList();
createNoteList();


const test = RetrieveProjectStorage();


console.table(test);












