const sentence = "hello there from lighthouse labs";

let delays = 0;

for (const char of sentence) {
  setTimeout(() => {
    (process.stdout.write(char));
  }, delays);
  delays += 50;
}

setTimeout(() => {
  process.stdout.write("\n");
}, delays);