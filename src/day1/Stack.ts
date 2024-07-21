type Node<T> = {
    value: T,
    prev?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item, prev: this.head };
        this.head = node;
        this.length++;
    }
    
    pop(): T | undefined {
        this.length = Math.max(0, this.length-1);
        if(this.length==0){
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }
        const data = this.head as Node<T>;
        this.head = data.prev;
        return data.value;
}
    peek(): T | undefined {
        return this.head?.value;
}
}