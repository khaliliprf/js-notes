class Test {
  method1() {
    console.log("method1");
  }
  method2(value) {
    console.log(`method2 : ${value}`);
  }
}
const t = new Test();

t["method1"]();
t["method2"]("hello there");
