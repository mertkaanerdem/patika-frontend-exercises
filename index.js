import selam, {
  addition,
  division,
  me,
  multiplication,
  users,
  subtract,
} from "./modules.js";

selam("Mertkaan");

console.log(addition(3, 5));
console.log(division(3, 5));
console.log(multiplication(3, 5));
console.log(subtract(3, 5));

console.log(me);

console.log(users);

users.map((e, i) => console.log(i + 1, e.name));
