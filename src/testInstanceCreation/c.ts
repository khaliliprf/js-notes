import a from "./a";

export default new (class C {
  instanceOfA;
  constructor(instance) {
    this.instanceOfA = instance;
  }
})(a);
