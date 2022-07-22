import a from "./a";
import c from "./c";

console.log(a.counter);
console.log(c.instanceOfA.counter);
console.log(a === c.instanceOfA); // true
// references are equal > so instances are equal
// so each time we import `a` we just import previously created instance and reference to it not a new instance of class `A`
console.log(require);
