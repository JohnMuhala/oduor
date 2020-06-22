function Queue() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function peek() {
    return this.dataStore[0]; //[this.top -1]->this gives the last element to be served first
}

function pop() {
    return this.dataStore[--this.top];
}

function length() {
    return this.top;
}
const q = new Queue(1, 24, 4);
q.push(3);
q.push(5);
q.push(8);
q.push(2);
console.log(q.peek());

//const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // return