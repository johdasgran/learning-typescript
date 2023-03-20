export enum Level {
    "Informative",
    "Urgent",
    "Bloking"
}


export interface ITask {
    title: string,
    description?: string,
    completed: boolean,
    important?: Level,
    resume: () => string
}