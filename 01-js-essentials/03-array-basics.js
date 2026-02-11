const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits.length)

fruits.push("Kiwi","Mango")
fruits.pop()
console.log(fruits)

fruits[3] = "Orange"

//splice(เริ่มที่ตำแหน่งไหน, จะลบกี่ตัว, ของใหม่ที่จะใส่เข้าไป...)
fruits.splice(2,1,"Papaya")
console.log(fruits)

//shift ตัวหน้าสุดออก    unshift เข้าตัวหน้าสุด
let queue = ['Alice', 'Bob', 'Charlie'];

let firstPerson = queue.shift(); 

console.log(firstPerson); // 'Alice' (คนแรกโดนเรียกเข้าไปในร้านแล้ว)
console.log(queue);       // ['Bob', 'Charlie'] (Bob กลายเป็น Index 0 แทน)

queue.unshift('Emergency_VIP');

console.log(queue); // ['Emergency_VIP', 'Bob', 'Charlie']

/* 
Quiz 1
ถ้าตอนนี้ผมมี Array ว่างๆ: let myList = [];  
แล้วผมทำตามลำดับนี้:
myList.push("A");
myList.push("B");
myList.unshift("C");
myList.shift();
สุดท้ายแล้ว myList จะเหลือค่าอะไรบ้างครับ? (ลองไล่ลำดับในใจดูนะ)
*/
let myList = []; 
myList = ["A","B"]

/*
Quiz 2
เราจะสร้างฟังก์ชันง่ายๆ เพื่อจัดการ Array ที่ชื่อว่า cart โดยมีเงื่อนไขดังนี้:
เพิ่มสินค้า: ถ้าเลือกอันใหม่ ให้ไปต่อท้าย
สินค้าด่วน: ถ้ากด "ซื้อเลย" ให้เอามาไว้หน้าสุด
ลบสินค้า: ลบตัวที่ไม่อยากได้ออกโดยใช้ชื่อหรือตำแหน่ง
สรุปยอด: เช็คว่ามีของกี่ชิ้น
*/

const cart = [];
cart.push("Water")
cart.unshift("Coke")
cart.splice(1,1)
console.log(cart.length)

//For Each
const cartPrices = [50, 120, 200, 45];
let totalPrice = 0;

// ใช้ Arrow Function วนลูปเพื่อบวกเลข
cartPrices.forEach(price => {
  totalPrice += price; 
});

console.log(`ราคาสินค้าทั้งหมดในตะกร้าคือ: ${totalPrice} บาท`);
// ผลลัพธ์: 415 บาท

/*
Challenge เล็กๆ สำหรับคุณ:
ถ้าผมมี Array ชื่อ friends = ["Alice", "Bob", "Charlie"] 
แล้วผมอยากใช้ .forEach แบบ Arrow Function เพื่อสั่งให้มัน Print คำว่า "Hello, Alice", "Hello, Bob"... ออกมา
*/

const friends = ["Alice", "Bob", "Charlie"] 
friends.forEach(name=>{
    console.log(`"Hello, ${name}"`)
})