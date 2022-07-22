// the UNIX epoch (the number of seconds that have elapsed since midnight on January 1, 1970, UTC
// A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC

// Coordinated Universal Time >> UTC

// console.log(new Date(1603972233000));
// console.log(new Date(milliseconds))

const func = a => {
  return b => {
    console.log(a, b);
  };
};

func(1)(2);
const num = 0.0000001245;

console.log(String(0.0000001245));
// console.log("0.0000001245");
// console.log(Number("0.0000001245") > Number("0.00000012453"));
