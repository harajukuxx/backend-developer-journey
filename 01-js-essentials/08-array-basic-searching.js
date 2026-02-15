const members = ["Alice", "Bob", "Charlie"];

members[0] = "Tina"

//.push(value) .pop() 
members.push("Yelly")
members.pop()

//.unshift(value) .shift()
members.unshift("Messi")
//console.log("🚀 ~ members:", members)
members.shift()
//console.log("🚀 ~ members:", members)
//console.log("🚀 ~ memberslength:", members.length)

/*
QUIZ 1
ลองเขียน Code ตามโจทย์นี้ดูครับ:
สร้าง Array ชื่อ mySkills โดยใส่ทักษะที่คุณมีลงไป 2 อย่าง
ใช้คำสั่งเพิ่มทักษะ "JavaScript" ลงไป ข้างหน้าสุด
ใช้คำสั่งเพิ่มทักษะ "Git" ลงไป ข้างหลังสุด
สุดท้าย ให้ console.log ทักษะ ลำดับที่ 2 ใน Array ออกมาดูครับ
*/

const mySkills = ["VSCODE", "SQL"]
mySkills.unshift("JavaScript")
mySkills.push("Git")
//console.log(mySkills[1])


//Searching & Checking

//.indexOf(value): หาจากหน้าไปหลัง เจอตัวแรกแล้วหยุดทันที
//.lastIndexOf(value): หาจากหลังมาหน้า

const numbers = [10, 20, 30, 20, 40];

//console.log(numbers.indexOf(20));     // 1
//console.log(numbers.lastIndexOf(20)); // 3
//console.log(numbers.indexOf(99));     // -1 (ถ้าไม่เจอ จะได้ -1 เสมอ)

//.includes() (เช็คว่ามีไหม)
const pets = ["cat", "dog", "bird"];

if (pets.includes("cat")) {
//  console.log("เลี้ยงแมวด้วยเหรอ!");
}

//.find(): คืนค่า "ข้อมูลตัวแรก" ที่ตรงเงื่อนไข
//.findIndex(): คืนค่า "ตำแหน่งแรก" ที่ตรงเงื่อนไข
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 }
];

// หา user ที่มีอายุมากกว่า 28
const result = users.find(user => user.age > 28);
console.log(result); // { id: 2, name: "Bob", age: 30 }

const result2 = users.findIndex(user => user.age > 28);
console.log(result2);

/*
Pro Tip: ความต่างของ indexOf กับ find
ใช้ indexOf เมื่อคุณต้องการหาค่าที่เรียบง่าย (เช่น ตัวเลขหรือ String)
ใช้ find เมื่อคุณต้องการหาข้อมูลที่ซับซ้อน (เช่น Object) หรือต้องใช้เงื่อนไขในการหา
*/

/*
QUIZ 2
สมมติคุณมีรายชื่อสินค้าในคลัง (Inventory):
const inventory = ["Apple", "Samsung", "Oppo", "Vivo"];
โจทย์:
ใช้คำสั่งเช็คว่าใน Array มี "Huawei" หรือไม่ (ให้แสดงผลเป็น true/false)
หาตำแหน่ง (Index) ของ "Samsung" ว่าอยู่ที่ลำดับเท่าไหร่
(โจทย์ท้าทาย) มี Array ของตัวเลข const prices = [150, 450, 200, 800, 120];
ให้ใช้ .find() เพื่อหาตัวเลขตัวแรกที่ มีค่ามากกว่า 500
*/

const inventory = ["Apple", "Samsung", "Oppo", "Vivo"];
const checkHuawei = inventory.includes("Huawei")
console.log(inventory.indexOf("Samsung"))

const prices = [150, 450, 200, 800, 120];
console.log(prices.find(price => price >= 500))


//some every
const fruits = ['apple', 'rotten banana', 'orange'];

const hasRottenFruit = fruits.some((fruit) => {
  return fruit.includes('rotten');
});

console.log(hasRottenFruit); // true

const ages = [20, 25, 17, 30];

const isAllAdults = ages.every((age) => {
  return age >= 18;
});

console.log(isAllAdults); // false (เพราะมีคนอายุ 17)