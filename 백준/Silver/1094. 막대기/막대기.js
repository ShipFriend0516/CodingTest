const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(parseInt(line).toString(2).replaceAll("0", "").length);
  rl.close();
});
