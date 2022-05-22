const func5 = async value => {
  return value;
};

const tasks = [];
for (let i = 0; i < 1000; i++) {
  tasks.push(i);
}
(async () => {
  //   console.time("forEach");
  //   console.log("before loop");
  //   tasks.forEach(async task => {
  //     console.log("before: ", task);
  //     const func5response = await func5(task);
  //     console.log("func5: ", func5response);
  //   });
  //   console.log("after loop");
  //   console.timeEnd("forEach");
  // forEach      342.824ms - 481.772ms
  // for await of 750.149ms - 950ms
  // console.time("for await");
  // console.log("before loop");
  // for await (const task of tasks) {
  //   console.log("before: ", task);
  //   const func5response = await func5(task);
  //   console.log("func5: ", func5response);
  // }
  // console.log("after loop");
  // console.timeEnd("for await");
})();
