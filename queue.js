// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it


class Queue {
    constructor(items) 

        this.items = [];

    }

    remove(item){
        return this.items.pop();
    }

    peek() {
        return this.items[0]
    }

}

let q = new Queue(1, 24, 4);
q.add(1);
q.add(2);
q.add(3);
q.add('a');
console.log(q);

q.peek([0]);
console.log(q);