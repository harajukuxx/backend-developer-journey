//.filter()
const products = [
  { name: "เสื้อ", price: 200 },
  { name: "กางเกง", price: 500 },
  { name: "ถุงเท้า", price: 50 }
];

// โจทย์: เอาเฉพาะของที่ราคามากกว่า 100 บาท
const expensiveItems = products.filter(item => item.price > 100);
// [{ name: "เสื้อ", price: 200 }, { name: "กางเกง", price: 500 }]

//.map()
const numbers = [1, 2, 3];
const squared = numbers.map(n => n * n); // [1, 4, 9]

//.reduce()
//array.reduce((accumulator, currentValue) => { ... }, initialValue)
const prices = [100, 200, 300];

const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
// 600

//Chaining
const scores = [35, 80, 45, 90];

const result = scores
  .filter(s => s >= 50)         // 1. กรองคนผ่าน: [80, 90]
  .map(s => s + 5)              // 2. บวกคะแนนช่วย: [85, 95]
  .reduce((acc, curr) => acc + curr, 0); // 3. รวมยอด: 180

/*
QUIZ 1
มาลองทำโจทย์นี้ด้วยตัวเองดูครับ:
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
โจทย์:
ใช้ .filter() เลือกเฉพาะ เลขคู่
ใช้ .map() นำเลขคู่ที่ได้มา คูณ 10
ใช้ .reduce() หา ผลรวม ของตัวเลขทั้งหมดหลังจากคูณ 10 แล้ว
*/

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumDataOod = data
    .filter(d => d % 2 === 0)
    .map(d => d * 10)
    .reduce((acc, curr) => acc + curr ,0)


/*
โจทย์: ระบบสรุปยอดขายร้านค้า (E-commerce Summary)
คุณได้รับข้อมูลรายการสั่งซื้อ (Orders) จาก Database ดังนี้:*/

const orders = [
  { id: 1, product: "Laptop", category: "Electronics", price: 30000, status: "completed" },
  { id: 2, product: "Mouse", category: "Electronics", price: 500, status: "pending" },
  { id: 3, product: "T-Shirt", category: "Fashion", price: 300, status: "completed" },
  { id: 4, product: "Monitor", category: "Electronics", price: 5000, status: "completed" },
  { id: 5, product: "Jeans", category: "Fashion", price: 1200, status: "completed" },
  { id: 6, product: "Keyboard", category: "Electronics", price: 1500, status: "cancelled" }
];

/*
เงื่อนไขที่ต้องทำ (ห้ามใช้ for หรือ forEach ให้ใช้ Chain เท่านั้น):
Filter: เลือกเฉพาะ Order ที่มีสถานะเป็น "completed" เท่านั้น
Filter (เพิ่ม): และต้องเป็นสินค้าในหมวดหมู่ "Electronics" เท่านั้น
Map: เนื่องจากเป็นช่วงโปรโมชั่น ให้ลดราคาสินค้าทุกชิ้นที่ผ่านการกรองลง 10% (เช่น 30000 เหลือ 27000)
Reduce: หาผลรวมของราคาสินค้าทั้งหมดหลังจากลดราคาแล้ว
ลองเขียนต่อกันเป็นสายพาน: .filter(...).filter(...).map(...).reduce(...)
ใน reduce อย่าลืมตั้งค่าเริ่มต้น (initialValue) เป็น 0 ด้วยนะครับ
*/

const sumPrice = orders
    .filter(order => order.status === "completed" && order.category==="Electronics")
    .map(order => order.price*0.9)
    .reduce((acc,curr) => acc + curr ,0)

    /*
    .map(order => {
        const discounted = order.price * 0.9;
        // console.log(`Item: ${order.product}, New Price: ${discounted}`); // เอาไว้เช็คค่า
        return discounted;
    })
    */

