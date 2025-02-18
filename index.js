class Node {
  value = null;
  nextNode = null;
  constructor(value) {
    this.value = value;
  }
}

export class LinkedList {
  head = null;
  tail = null;
  size = 0;

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
    this.tail = node;
    this.size++;
  }
  prepend(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      node.nextNode = current;
      this.head = node;
    }
    this.size++;
  }
  showSize() {
    return console.log(this.size);
  }
  head() {
    return this.head;
  }
  tail() {
    return this.tail;
  }
  at(index) {
    let current = this.head;
    for (let i = 1; i < index; i++) {
      if (current.nextNode === null) {
        return null;
      }
      current = current.nextNode;
    }
    return current.value;
  }
  pop() {
    let current = this.head;
    let prev = null;
    while (current.nextNode !== null) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
    this.tail = prev;
    this.size--;
  }
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      } else {
        current = current.nextNode;
        index++;
      }
    }
    return null;
  }
  toString() {
    let str = "";
    let current = this.head;
    if (!current) return null;
    while (current) {
      str += `(${current.value}) -> `;
      current = current.nextNode;
    }
    str += "null";
    return str;
  }
  insertAt(value, index) {
    const node = new Node(value);
    let current = this.head;
    let currentIndex = 0;

    if (index === 0) {
      node.nextNode = this.head;
      this.head = node;
      return;
    }
    while (current) {
      if (currentIndex === index - 1) {
        node.nextNode = current.nextNode;
        current.nextNode = node;
        return;
      } else {
        current = current.nextNode;
        currentIndex++;
      }
    }
  }
  removeAt(index) {
    let current = this.head;
    let currentIndex = 0;
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    while (current) {
      if (currentIndex === index - 1) {
        current.nextNode = current.nextNode.nextNode;
        return;
      } else {
        current = current.nextNode;
        currentIndex++;
      }
    }
    this.size--;
  }
}
