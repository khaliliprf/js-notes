const a = 10;
const c = 30;
const b = 2;
const obj1 = {
  x: 1,
  y: 2,
  z: 3,
};

for (const f in obj1) {
  console.log(f);
}

console.log((obj1.x = a));
console.log(true && true && 0 && 1);
console.log((obj1.x = a) && (obj1.y = b) && (obj1.z = c));

const txId = "";
console.log(`hello ${txId && "there"}`);
