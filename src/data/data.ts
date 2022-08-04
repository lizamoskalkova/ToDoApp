export interface ITodo {
    id: number;
    title: string;
    complete: boolean;
    dueDate: Date | null;
}