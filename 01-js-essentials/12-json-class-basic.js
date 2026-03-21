//JSON.stringify(obj) : แปลง Object ➔ String
const user = { id: 1, name: "Nut" };
const jsonString = JSON.stringify(user);

console.log(jsonString); // '{"id":1,"name":"Nut"}' (กลายเป็น String แล้ว)

//JSON.parse(string) : แปลง String ➔ Object
const dataFromApi = '{"status":"ok", "code":200}';
const result = JSON.parse(dataFromApi);

console.log(result.status); // "ok"

//การใช้ JSON เพื่อ "Copy" ข้อมูลแบบ 100% (Deep Copy)
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

//QUIZ1
const rawData = '{"cardNo":"4545-1111", "amount":1500, "currency":"THB"}';

const payment = JSON.parse(rawData)
payment.timestamp = new Date()
const testpayment = JSON.stringify(payment, null, 2)
console.log(payment , testpayment)

//Class
class BankAccount {
    // 1. รับค่าเริ่มต้นมาเก็บไว้ในตัวเรา (this)
    constructor(owner, initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    // 2. สร้างความสามารถ (Method)
    checkBalance() {
        console.log(`บัญชีของ ${this.owner} มีเงินคงเหลือ: ${this.balance} บาท`);
    }
}

// 3. การนำไปใช้: ต้องใช้คำสั่ง "new" นำหน้าเสมอ
const myAcc = new BankAccount("Nutthapong", 10000);
const friendAcc = new BankAccount("Somsri", 500);

myAcc.checkBalance(); // "บัญชีของ Nutthapong มีเงินคงเหลือ: 10000 บาท"
friendAcc.checkBalance();

//QUIZ 1
class Product{
    constructor(name,price){
        this.name = name
        this.price = price
    }
    display(){
        console.log(`สินค้า: ${this.name} ราคา: ${this.price} บาท`)
    }
    applyDiscount(amount){
        this.price -= amount
    }
}

const newKeyboard = new Product("Keyboard",1200)
newKeyboard.display()
newKeyboard.applyDiscount(200)
newKeyboard.display()