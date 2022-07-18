import { ITodoData } from './js/typing';
import TodoEvent from './js/TodoEvent';

; ((document) => {

    const oInput: HTMLInputElement = document.querySelector('input');
    const oAddBtn: HTMLButtonElement = document.querySelector('button');
    const oTodoList: HTMLElement = document.querySelector('.todo-list');

    const todoData: ITodoData[] = [
        {
            id: 1,
            content: '123',
            completed: false,
        },
        {
            id: 2,
            content: '234',
            completed: true,
        },
        {
            id: 3,
            content: '456',
            completed: false,
        },
    ];

    const todoEvent = new TodoEvent(todoData, oTodoList);

    const init = (): void => {
        bindEvent();
    }

    const bindEvent = (): void => {
        oAddBtn.addEventListener('click', handleAddBtnClick, false);
        oTodoList.addEventListener('click', handleListClick, false);
    }

    function handleAddBtnClick(): void {
        const val = oInput.value.trim();
        if (val.length) {
            const ret = todoEvent.addTodo(<ITodoData>{
                id: Date.now(),
                content: val,
                completed: false,
            });
            if (ret === 1001) {
                alert('列表项已存在');
                return;
            }
            oInput.value = '';
        }
    }

    function handleListClick(e: MouseEvent): void {
        const tar = e.target as HTMLElement;
        const tagName = tar.tagName.toLowerCase();
        if (['input', 'button'].includes(tagName)) {
            const id = parseInt(tar.dataset.id);
            switch (tagName) {
                case 'input':
                    todoEvent.toggleComplete(tar, id);
                    return;
                case 'button':
                    todoEvent.removeTodo(tar, id);
                    return;
                default:
                    return;
            }
        }
    }

    init();

})(document);