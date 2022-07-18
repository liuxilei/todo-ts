export function findParentNode(target: HTMLElement, className: string): HTMLElement {
    while(target = target.parentNode as HTMLElement) {
        if (target.className === className) {
            return target;
        }
    }
};

export function createElement(tagName: string, className: string, inner: string): HTMLElement {
    const oItem: HTMLElement = document.createElement('div');
    oItem.className = 'todo-item';
    oItem.innerHTML = inner;
    return oItem;
}


