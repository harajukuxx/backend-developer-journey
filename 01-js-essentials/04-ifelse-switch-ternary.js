let score = 75;

if (score >= 80) {
    console.log("เกรด A");
} else if (score >= 70) {
    console.log("เกรด B");
} else {
    console.log("ไม่ผ่าน");
}

//Ternary Operator (บรรทัดเดียวจบ!)
let statusShort = age >= 18 ? "Adult" : "Minor";

console.log(statusShort); // "Adult"

//Switch case
let day = 2;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break; // สำคัญมาก! ถ้าไม่มี break มันจะไหลไปทำ case ต่อไปเรื่อยๆ
    case 2:
        dayName = "Tuesday";
        break;
    default:
        dayName = "Unknown"; // ทำงานเมื่อไม่ตรงกับ case ไหนเลย
}
console.log(dayName); // "Tuesday"

/*
ลองทดสอบ: ถ้าผมมีตัวแปร let light = "green"; 
คุณจะเขียน Ternary Operator เพื่อเช็คว่าถ้า light เป็น "red" ให้พิมพ์ว่า "Stop" แต่ถ้าไม่ใช่ให้พิมพ์ว่า "Go" ยังไงดีครับ?
*/

let light = "green"; 
let statusLight = light == "red" ? "Stop" : "Go"

/*
Challenge สุดท้ายเรื่อง Logic:
มาลองใช้ Switch Case แบบประยุกต์ดูครับ
โจทย์: จงเติมโค้ดใน switch เพื่อเช็คตัวแปร grade
ถ้าเป็น "A" ให้แสดง "Excellent"
ถ้าเป็น "B" หรือ "C" ให้แสดง "Good Job" (ใช้ Case ร่วมกัน)
ถ้าเป็นอย่างอื่น ให้แสดง "Keep trying"
*/
let grade = "A"
switch (grade) {
    case "A":
        console.log("Excellent")
        break;
    //case "B" || "C": ผิด        ถูกต้องเขียนแบบนี้
    case "B":
    case "C":
        console.log("Good Job")
        break;
    default:
        console.log("Keep trying")
        break;
}