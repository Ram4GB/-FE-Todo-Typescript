export interface ITodo {
    id: string;
    title: string;
    completed: boolean;
    todoListId: string;
}

export interface ITodoList {
    id: string;
    userId: string;
    title: string;
}
