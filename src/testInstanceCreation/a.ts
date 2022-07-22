export default new (class A {
  counter = 0;
  constructor() {
    this.counter += 1;
  }
})();

export const globalInA = "hi";
// console.log(module);
