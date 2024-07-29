

// Activity 1: Linked List

// Task 1: Implement a `Node` class



class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// Task 2: Implement a `LinkedList` class


class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeNode() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  displayNodes() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}


// Activity 2: Stack

// Task 3: Implement a `Stack` class


class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) return "Stack is empty";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}


//  Task 4: Use the `Stack` class to reverse a string


function reverseString(input) {
  const stack = new Stack();
  for (let char of input) {
    stack.push(char);
  }
  let reversedString = '';
  while (stack.items.length > 0) {
    reversedString += stack.pop();
  }
  return reversedString;
}

console.log(reverseString("hello")); 

// Activity 3: Queue

// Task 5: Implement a `Queue` class


class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) return "Queue is empty";
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) return "Queue is empty";
    return this.items[0];
  }
}


// Task 6: Use the `Queue` class to simulate a printer queue


function printerQueue() {
  const queue = new Queue();
  queue.enqueue("Print job 1");
  queue.enqueue("Print job 2");
  queue.enqueue("Print job 3");

  while (queue.items.length > 0) {
    console.log(queue.dequeue() + " is being processed");
  }
}

printerQueue();


// Activity 4: Binary Tree


// Task 7: Implement a `TreeNode` class

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// Task 8: Implement a `BinaryTree` class


class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrder(node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }
}


// Activity 5: Graph (Optional)

// Task 9: Implement a `Graph` class

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1)) {
      this.adjacencyList.get(vertex1).push(vertex2);
    }
    if (this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
      const vertex = queue.shift();
      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);
        const neighbors = this.adjacencyList.get(vertex);
        for (const neighbor of neighbors) {
          queue.push(neighbor);
        }
      }
    }
  }
}


// Task 10: Use the `Graph` class to perform BFS



function shortestPath(graph, start, end) {
  const visited = new Set();
  const queue = [[start, [start]]];

  while (queue.length > 0) {
    const [vertex, path] = queue.shift();
    if (vertex === end) {
      return path;
    }
    if (!visited.has(vertex)) {
      visited.add(vertex);
      const neighbors = graph.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        queue.push([neighbor, [...path, neighbor]]);
      }
    }
  }
  return null;
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log(shortestPath(graph, "A", "E")); 

