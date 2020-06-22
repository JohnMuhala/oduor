class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

// --- Directions
// 1) Complete the upper task first
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'
function weave(sourceOne, sourceTwo) {
    const q = new Queue();
    while (sourceOne.peek() || sourceTwo.peek()) {
        // if (sourceOne.peek()) q.add(sourceOne.remove());
        // q.add(sourceOne.remove())
        // if (sourceTwo.peek()) q.add(sourceTwo.remove());
        if (sourceOne.peek()) {
            q.add(sourceOne.remove())
        }
        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove())
        }

    }
    return q;
}
var one = new Queue();
one.add(1);
one.add(2);
one.add(3);
one.add(4);
var two = new Queue();
two.add('one');
two.add('two');
two.add('three');
two.add('four');

var dataWeave = weave(one, two);
console.log(dataWeave);

// test('queues have a peek function', () => {
//     const q = new Queue();
//     expect(typeof q.peek).toEqual('function');
// });

// test('peek returns, but does not remove, the first value', () => {
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     expect(q.peek()).toEqual(1);
//     expect(q.peek()).toEqual(1);
//     expect(q.remove()).toEqual(1);
//     expect(q.remove()).toEqual(2);
// });

// test('weave can combine two queues', () => {
// const one = new Queue();
// one.add(1);
// one.add(2);
// one.add(3);
// one.add(4);
// const two = new Queue();
// two.add('one');
// two.add('two');
// two.add('three');
// two.add('four');

// const result = weave(one, two);
// expect(result.remove()).toEqual(1);
// expect(result.remove()).toEqual('one');
// expect(result.remove()).toEqual(2);
// expect(result.remove()).toEqual('two');
// expect(result.remove()).toEqual(3);
// expect(result.remove()).toEqual('three');
// expect(result.remove()).toEqual(4);
// expect(result.remove()).toEqual('four');
// expect(result.remove()).toBeUndefined();
// console.log(one.add(23));