function plus(a, b) {
  return a + b;
}
const sum = plus(5, 10); 

//Arrow
const double = (n) => {
  return n * 2;
}

//Default Parameters
const greet = (name = "Guest") => `Hello ${name}`;
console.log(greet()); // "Hello Guest"

//Callback Function
const runner = (task) => {
  console.log("Starting...");
  task(); // รันฟังก์ชันที่ถูกส่งเข้ามา
  console.log("Done!");
};

runner(() => console.log("🏃 Running fast!"));