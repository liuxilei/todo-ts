import { ITodoData } from "./typing";
import TodoDom from "./TodoDom";

class TodoEvent extends TodoDom {
    private todoData: ITodoData[];

    constructor(todoData: ITodoData[], todoWrapper: HTMLElement) {
        super(todoWrapper);
        this.todoData = todoData;
        this.init();
    }

    private init() {
        this.initList(this.todoData);
    }

    public addTodo(todo: ITodoData): undefined | number {
        const _todo: null | ITodoData = this.todoData.find((item: ITodoData) => item.content === todo.content);
        if (!_todo) {
            this.todoData.push(todo);
            this.addItem(todo);
            return;
        }
        return 1001;
    }

    public removeTodo(target: HTMLElement, id: number) {
        this.todoData = this.todoData.filter((todo: ITodoData) => todo.id !== id);
        this.removeItem(target);
    }

    public toggleComplete(target: HTMLElement, id: number) {
        this.todoData = this.todoData.map((todo: ITodoData) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                this.changeCompleted(target, todo.completed);
            }
            return todo;
        });
    }
}

export default TodoEvent;