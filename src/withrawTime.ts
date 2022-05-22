import express from "express";

const app = express();
app.use(express.json());

app.post("/check", (req, res, next) => {
  const oneDay = 86400000,
    { deposit, withdraw } = req.body,
    diff = withdraw - deposit;
  console.log("diff", diff);
  const diffAbs = Math.abs(diff);
  console.log("diffAbs", diffAbs);
  const diffDay = diffAbs / oneDay;
  console.log("diffDay", diffDay);

  let reminder;

  if (diffAbs !== 0) {
    reminder = diffAbs % oneDay;
  } else if (diffAbs === 0) {
    reminder = oneDay;
  }
  console.log("reminder", reminder);

  const isReminder = Math.floor(Math.abs(diffDay % 2)) === 1;
  console.log("isReminder", isReminder);
  if (isReminder) {
    res.json({ status: "allow" });
  } else {
    const waitTime = diffAbs === 0 ? oneDay : oneDay - reminder;
    const allowIn = withdraw + waitTime;
    console.log("allowIn", allowIn);
    res.json({ status: "disallow", allowIn, waitTime });
  }
});

app.listen(4001);
