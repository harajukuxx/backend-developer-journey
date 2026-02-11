/*
ข้อที่ 1: Object & Logic (ระบบสมาชิก)
โจทย์: มี Object customer ชื่อ "Leo", เป็นสมาชิก (isMember: true), ยอดซื้อรวม (totalSpent: 450)
ให้ใช้ Ternary Operator สร้างตัวแปร discount โดยถ้าเป็นสมาชิกให้มีค่า 10% (0.1) ถ้าไม่เป็นให้เป็น 0
คำนวณหา finalPrice โดยเอา totalSpent ลบด้วยส่วนลด
พิมพ์ออกมาว่า: "Customer: Leo, Final Price: [ยอดที่คำนวณได้] บาท"
*/

const customer = {
    name: "Leo",
    isMember: true,
    totalSpent: 450
};

let discount = customer.isMember ? 0.1 : 0;
let finalPrice = customer.totalSpent - (customer.totalSpent * discount);

console.log(`Customer: ${customer.name}, Final Price: ${finalPrice} บาท`);

/*
ข้อที่ 2: Array & forEach (สรุปเกรด)
โจทย์: มี Array ของคะแนนนักเรียน const scores = [85, 42, 77, 90, 55];
สร้างตัวแปร passedCount ไว้เก็บจำนวนคนที่สอบผ่าน (คะแนน >= 60)
ใช้ .forEach() วนลูปเช็คคะแนนทุกคน ถ้าผ่านให้เพิ่มค่าใน passedCount
พิมพ์สรุปว่า: "มีนักเรียนสอบผ่านทั้งหมด [จำนวน] คน"
*/

const scores = [85, 42, 77, 90, 55];
let passedCount = 0
scores.forEach(score => {
    if(score >= 60){
        passedCount++
    }
});

console.log(`มีนักเรียนสอบผ่านทั้งหมด ${passedCount} คน`)

/*
ข้อที่ 3: Nested Objects & Array (คลังหนังสือ)
โจทย์: มี Object ชื่อ library มี property books ซึ่งเป็น Array ของ Object ดังนี้: 
books: [{title: "JS 101", stock: 3}, {title: "HTML Basic", stock: 0}]
ให้ใช้ for...of วนลูปหนังสือใน library.books
ถ้าหนังสือเล่มไหน stock เป็น 0 ให้พิมพ์ว่า: "[ชื่อหนังสือ] หมดสต็อก"
ถ้ายังมีของ ให้พิมพ์ว่า: "[ชื่อหนังสือ] พร้อมจำหน่าย"
*/

const library = {
    books: [{title: "JS 101", stock: 3}, {title: "HTML Basic", stock: 0}]
}

for(const book of library.books){
    if(book.stock > 0){
        console.log((`${book.title} พร้อมจำหน่าย`))
    }else{
        console.log((`${book.title} หมดสต็อก`))
    }
}


/*
ข้อที่ 4: Advanced Array Manipulation (จัดการคิว)
โจทย์: มีคิวลูกค้า let clinicQueue = ["Ploy", "Aek", "Mew"];
มีคนไข้ฉุกเฉินชื่อ "VIP_User" มา ให้แซงคิวไป หน้าสุด
"Ploy" เบื่อรอ เลยขอ ออกจากคิว (คนแรกสุดตอนนี้)
มีคนไข้ใหม่ชื่อ "Zun" มา ต่อท้ายคิว
สุดท้ายเหลือใครในคิวบ้าง? ให้พิมพ์ Array นั้นออกมา
*/

let clinicQueue = ["Ploy", "Aek", "Mew"];
clinicQueue.unshift("VIP_User")
clinicQueue.splice(1,1)
clinicQueue.push("Zun")

console.log(clinicQueue)

/*
ข้อที่ 5: Logic & Math (คำนวณภาษี)
โจทย์: เขียนระบบเช็คประเภทสินค้าด้วย Switch Case
ตัวแปร productType = "Luxury" และ price = 2000
ถ้าเป็น "Normal" ภาษี 7%
ถ้าเป็น "Luxury" ภาษี 20%
ถ้าเป็นอย่างอื่น ภาษี 0%
พิมพ์ค่าภาษีที่ต้องจ่ายออกมา (เช่น: "สินค้าประเภท Luxury ต้องจ่ายภาษี [จำนวนภาษี] บาท")
*/
let productType = "Luxury"
let price = 2000
let tax = 0

switch (productType) {
    case "Normal":
        tax = 7/100
        break;
    case "Luxury":
        tax = 20/100
        break;
    default:
        tax = 0
        break;
}
let finalTax = price * tax
console.log(`สินค้าประเภท ${productType} ต้องจ่ายภาษี ${finalTax} บาท`)