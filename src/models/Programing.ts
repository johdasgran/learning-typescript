import { ITask, Level } from "./interfaces/ITask";

export class Programming implements ITask {
    title: string;
    description?: string | undefined;
    completed: boolean;
    important?: Level | undefined;

    constructor(title: string, description: string, completed: boolean, important: Level){
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.important = important;
    }

    resume = () => {
        return `La tarea ${this.title} fue ${this.completed}`;
    }



}