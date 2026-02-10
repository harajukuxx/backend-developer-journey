const user = {
    firstName: "Tina",
    age: 25,
    isAdmin: true
};

console.log(user.firstName);    // "Tina"
console.log(user["age"]);       // 25

//Nested Objects
const student = {
    id: 101,
    profile: {
        name: "Somsak",
        hobby: "Coding"
    },
    grades: [4, 3.5, 4]
};
console.log(student.profile.name); // "Somsak"


const car = { brand: "Toyota" };
// เพิ่ม/แก้ไข
car.model = "Yaris"; 
car.brand = "Honda"; // เปลี่ยนจาก Toyota เป็น Honda

// ลบ
delete car.model;

/*
QUIZ 1
สร้าง Object ชื่อ product ที่มีข้อมูลดังนี้:
name: (ชื่อสินค้าอะไรก็ได้)
price: (ราคาตัวเลข)
stock: (จำนวนสินค้าที่มี)
category: เป็น Object ย่อยที่มี main (เช่น "Electronics") และ sub (เช่น "Gadgets")
ลองแก้ไข: เพิ่มราคาขึ้นอีก 10% จากราคาเดิม
ลองเพิ่ม: เพิ่ม Key ชื่อ isAvailable โดยให้ค่าเป็น true ถ้า stock มากกว่า 0
ลองพิมพ์: ใช้ Template Literals พิมพ์ประโยค: "Item: [ชื่อสินค้า], Category: [main category], Price: [ราคาใหม่]"
*/

const product ={
    name: "Keyboard",
    price: 250,
    stock: 12,
    category: "Electronics"
}

product.price *= 1.1
if(product.stock > 0){
    product.isAvailable = true
}

console.log(`Item: ${product.name}, Category: ${product.category}, Price: ${product.price}`)
