const a = 10;
const c = 30;
const b = {
  x: 1,
  y: 2,
  z: 3,
};

for (const f in b) {
  console.log(f);
}

console.log((b.x = a));
console.log(true && true && 0 && 1);
console.log((b.x = a) && (b.y = b) && (b.z = c));
