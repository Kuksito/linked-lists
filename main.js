import { LinkedList } from "./index.js";

const list = new LinkedList();

list.append("dog");
list.append("rabbit");
list.append("cat");
list.append("snake");
list.append("dragon");
list.append("alligator");

list.prepend("koala");
list.prepend("fish");

list.insertAt("lion", 2);
list.insertAt("shark", 7);
list.insertAt("parrot", 5);

list.showSize();

list.removeAt(2);

list.pop();

list.insertAt("owl", 4);

list.pop();

console.log(list.at(0));
console.log(list.at(3));
console.log(list.contains("cat"));
console.log(list.contains("bat"));
console.log(list.find("cat"));
console.log(list.find("dog"));
console.log(list.head);
console.log(list.tail);
console.log(list.size);

console.log(list.toString());
