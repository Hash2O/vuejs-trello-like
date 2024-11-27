export interface Column {
    id: number,
    title: string,
    tasks: Array<Task>,
}

export interface Task {
    id: number,
    title: string,
    content: string,
}