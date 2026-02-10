// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// Boolean
let x = true;
let y = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x1;
let y1;

// Null
let x2 = null;
let y2 = null;

/*
QUIZ
สร้างตัวแปร projectName โดยห้ามเปลี่ยนค่าได้
สร้างตัวแปร currentVersion ที่สามารถอัปเดตค่าได้ในอนาคต
สร้างตัวแปร isCompleted เก็บสถานะว่าเป็นจริงหรือเท็จ
สร้างตัวแปรชื่อ description โดยใช้ Template Literals (Backtick) เพื่อรวมเอา projectName และ currentVersion มาอยู่ในประโยคเดียวกัน
*/

const projectName = "TinaProject"
let currentVersion = 1.0
let isCompleted = true
isCompleted = false
const description = `${projectName} ${currentVersion.toFixed(1)}`
console.log(isCompleted)
console.log(description)
