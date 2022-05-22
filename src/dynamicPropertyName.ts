const x = "ali";
const y = "mohammad";
const t = 25;

// dynamic property name
const ob = {
  x,
  y,
  [x + y + 1]: "hi there",
};
