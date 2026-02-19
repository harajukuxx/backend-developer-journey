const cart = {
    customer: "Tina",
    item:[
        { name: "Mouse", price: 1200 },
        { name: "Keyboard", price: 2500 }
    ],
    discountCode: { code: "SALE10", amount: 500 },
    getTotal(){
        let sumPrice = this.item[0].price + this.item[1].price - this.discountCode.amount
        return sumPrice
    }
}

console.log(cart.getTotal())

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  info: {
    year: 2010,
    genre: "Sci-Fi"
  }
};

const { 
  title, 
  director: filmmaker, 
  info: { year }, 
  rating = 8.0 
} = movie;

//Object.keys(obj) - "เอาแค่หัวข้อ"
const keys = Object.keys(movie); 
// ผลลัพธ์: ["title", "director", "info"]

//Object.values(obj) - "เอาแค่ข้อมูล"
const values = Object.values(movie);
// ผลลัพธ์: ["Inception", "Christopher Nolan", { year: 2010, genre: "Sci-Fi" }]

//Object.entries(obj) - "เอามาทั้งคู่"
const entries = Object.entries(movie);
/* ผลลัพธ์: 
[
  ["title", "Inception"],
  ["director", "Christopher Nolan"],
  ["info", {...}]
]
*/

// console.log(Object.entries(movie.info));
// ผลลัพธ์: [ ["year", 2010], ["genre", "Sci-Fi"] ]

const apiResponse = {
  id: 99,
  user: "Alice",
  status: "active",
  score: 500,
  version: "1.0.2"
};

const {user,...other} = apiResponse
const newResponse = {
  ...others,
  status: "inactive",
  timestamp: "2024-01-01"
};

//Object.groupBy(ตัวแปรArray, (ข้อมูลแต่ละตัว) => เงื่อนไขที่จะใช้เป็นชื่อกลุ่ม)
const inventory = [
  { name: "Asparagus", type: "vegetables" },
  { name: "Bananas", type: "fruit" },
  { name: "Goat", type: "meat" },
  { name: "Cherries", type: "fruit" },
  { name: "Fish", type: "meat" },
];

// จัดกลุ่มตาม 'type'
const result = Object.groupBy(inventory, ({ type }) => type);
/*
{
  vegetables: [ { name: "Asparagus", type: "vegetables" } ],
  fruit: [
    { name: "Bananas", type: "fruit" },
    { name: "Cherries", type: "fruit" }
  ],
  meat: [
    { name: "Goat", type: "meat" },
    { name: "Fish", type: "meat" }
  ]
}
*/

//Dynamic Grouping
const employees = [
  { name: "Tina", salary: 30000 },
  { name: "John", salary: 55000 },
  { name: "Jane", salary: 42000 },
  { name: "Bob", salary: 20000 }
];

const salaryGrades = Object.groupBy(employees, ({ salary }) => {
  if (salary >= 40000) return "High_Salary";
  return "Low_Salary";
});

console.log(salaryGrades);
// ผลลัพธ์: { High_Salary: [John, Jane], Low_Salary: [Tina, Bob] }

//แบบฝึกหัดท้าทาย
const students = [
  { name: "A", score: 85 },
  { name: "B", score: 45 },
  { name: "C", score: 72 },
  { name: "D", score: 30 }
];
//ใช้ Object.groupBy จัดกลุ่มนักเรียนออกเป็น 2 กลุ่มคือ "Pass" (คะแนน >= 50) และ "Fail" (คะแนน < 50)
//เงื่อนไขเพิ่มเติม: ในฟังก์ชัน Callback ให้ใช้ Destructuring แกะเอา score ออกมาใช้โดยตรง

const groupStudents = Object.groupBy(students,({score})=>{
  if(score >= 50) return "Pass"
  return "Fail"
})

//Quiz 2
const students2 = [
  { name: "A", score: 85, status: "active" },
  { name: "B", score: 45, status: "active" },
  { name: "C", score: 72, status: "inactive" }, // คนนี้ลาออกไปแล้ว
  { name: "D", score: 30, status: "active" }
];

// 1. Filter เอาเฉพาะคนที่ยัง active
// 2. แล้วค่อย Group คนที่ผ่าน/ไม่ผ่าน
const activeStudents =  students2
  .filter(student => student.status ==="active")

const passStudent = Object.groupBy(activeStudents,({score})=>{
    if(score >= 50) return "Pass"
  return "Fail"
})

/* 
ทริคเล็กๆ (Refactoring):
ถ้าในอนาคตคุณอยากเขียนให้สั้นลงไปอีก 
โดยไม่สร้างตัวแปรพักไว้เยอะๆ (ในกรณีที่ขั้นตอนไม่ซับซ้อน) คุณสามารถใช้ท่า Method Chaining ได้เลยครับ:
*/
const passStudent2 = Object.groupBy(
  students2.filter(s => s.status === "active"), // ร่อนเสร็จ ส่งต่อให้ groupBy ทันที
  ({ score }) => (score >= 50 ? "Pass" : "Fail") // ใช้ Ternary Operator (เงื่อนไข ? จริง : เท็จ)
);