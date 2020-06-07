class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(values = []) {
    this.head = null;

    for (let value of values) {
      this.insertLast(value);
    }
  }
  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
      return last.next;
    } else {
      this.head = new Node(data);
      return this.head;
    }
  }
}

// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

//function midpoint(list) {
  //let midpoint = math.floor(list.length/2)
  //if (list.leghth % 2 ===0){
//return list(middle - 1) + word(middle);
 // }else{
  //  return word[middle]
  //}
//}//

//var node = new Node('a', 'b');
 //console.log(node.data);
 //console.log(node.next);

//var list = new LinkedList();
//list.insertLast(5);
//list.insertLast(4);
//list.insertLast(7);
//midpoint(l); return{data: 'b'}//

//console.log(list.getAt(List));
  
