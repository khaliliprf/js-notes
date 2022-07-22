function methodDec1(target, key: string, value: any) {
  console.log("methodDec1");
  value.value = function (...args) {
    console.log("hello there", ...args);
  };
}

function methodDec2(target, key: string, value: any) {
  console.log("methodDec2");
}

class C {
  private attr = "hello";
  //   __decorate([methodDec2, methodDec1], C.prototype, "logger");
  // loop over decorators from last dec to first in the list
  // for (var i = decorators.length - 1; i >= 0; i--)
  @methodDec1
  @methodDec2
  logger(a) {
    console.log(a);
  }
}
const instance = new C();

instance.logger("a");
