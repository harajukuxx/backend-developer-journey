//Spread Operator
const snacks = ['Lays', 'Pringles'];
const drinks = ['Coke', 'Pepsi'];

// รวมร่าง!
const partyMenu = [...snacks, 'Pizza', ...drinks];
// ผลลัพธ์: ['Lays', 'Pringles', 'Pizza', 'Coke', 'Pepsi']

//ใช้ Spread กับ Object เช่น const newUser = { ...oldUser, name: 'New Name' };

//Destructuring
const olympics = ['Gold', 'Silver', 'Bronze', '4th Place', '5th Place'];

// ดึงแค่ 3 อันดับแรก ส่วนที่เหลือเก็บไว้ใน Array ใหม่ กลุ่ม 'others'
const [first, second, third, ...others] = olympics;

//console.log(first);  // 'Gold'
//console.log(others); // ['4th Place', '5th Place']

const user = { id: 1, name: 'Gemini', age: 2 };
const { name: name2, age } = user;     //เปลี่ยนชื่อ

//Default Values
function setupDashboard(settings) {
    const { fontSize = 16, color = 'blue' } = settings;
    console.log(`Setting up font size to: ${fontSize} and font color: ${color}`);
}

setupDashboard({ fontSize: 50, color: 'red' }); 
// Output: Setting up font size to: 50 and font color: red
setupDashboard({ color: 'green' }); 
// Output: Setting up font size to: 16 and font color: green


//Destructuring Parameter ของฟังก์ชัน
const product = { name: 'Keyboard', price: 1500, stock: 10 };

// แทนที่จะรับ (product) แล้วไปเรียก product.name
function displayProduct({ name, price }) {
  console.log(`สินค้า: ${name} ราคา: ${price} บาท`);
}
displayProduct(product);

//Nested Destructuring
const user2 = {
  id: 1,
  info: {
    email: 'test@mail.com',
    city: 'Bangkok'
  }
};

const { info: { email, city } } = user2;
console.log("🚀 ~ email:", email)
// คุณจะได้ตัวแปร email และ city ออกมาใช้งานเลย (ตัว info จะไม่ได้ออกมา)


//Set
/*
นี่คือท่ามาตรฐานที่เวลาไปสัมภาษณ์งานเขามักจะถามว่า "ลบค่าซ้ำใน Array ยังไงให้สั้นที่สุด?"
ทำความรู้จัก Set ก่อน:
Set คือโครงสร้างข้อมูลพิเศษที่ "ห้ามมีค่าซ้ำ" ถ้าคุณยัดเลข 2 เข้าไป 10 ครั้ง มันจะเหลือเลข 2 แค่ตัวเดียว
ขั้นตอนการทำงาน:
new Set(duplicates) -> เปลี่ยน Array ให้เป็น Set (ค่าซ้ำจะหายไปทันที)
[...] -> ใช้ Spread Operator กระจายค่าจาก Set กลับมาใส่ใน Array ใหม่
*/
const orders = ['Sushi', 'Pizza', 'Sushi', 'Burger', 'Pizza'];

// ท่าที่นิยมที่สุด (สั้นและไว)
const cleanOrders = [...new Set(orders)];  // ['Sushi', 'Pizza', 'Burger']

//Array.from() ใช้ตอนไหน?
//บางครั้งเราจะได้สิ่งที่ "หน้าตาเหมือน Array" (เรียกว่า Array-like) เช่น NodeList จากการดึงข้อมูลในหน้าเว็บ หรือ Object arguments เราจะใช้ Array.from() เพื่อแปลงมันให้เป็น Array จริงๆ เพื่อให้ใช้ map, filter ได้ครับ

// แปลง String เป็น Array ของตัวอักษรแต่ละตัว
const msg = "HELLO";
const letters = Array.from(msg); // ['H', 'E', 'L', 'L', 'O']

/* 
ข้อที่ 1: ระบบจัดการสต็อกสินค้า (Spread + Filter)
โจทย์: คุณมีรายการสินค้าในคลัง (oldStock) และมีสินค้าใหม่เพิ่งเข้า (newArrivals)
ให้ รวม (Merge) สินค้าทั้งสองชุดเข้าด้วยกันโดยใช้ Spread Operator
จากนั้นให้ Filter เอาเฉพาะสินค้าที่ "พร้อมขาย" (inStock: true) เท่านั้น
*/

const oldStock = [
  { id: 1, name: 'iPhone 13', inStock: true },
  { id: 2, name: 'iPhone 14', inStock: false }
];

const newArrivals = [
  { id: 3, name: 'iPhone 15', inStock: true },
  { id: 4, name: 'iPhone 16', inStock: true }
];

// เขียน Code ของคุณตรงนี้:
const allProducts = [...oldStock,...newArrivals]
const readyToSell = allProducts.filter(product => product.inStock)


/*
ข้อที่ 2: พิกัดร้านค้าและส่วนลด (Destructuring + Map)
โจทย์: คุณมีข้อมูลพิกัดร้านค้าในรูปแบบ Array [lat, lng, storeName]
ให้ใช้ Destructuring ดึงค่าออกมา (เอาแค่ lat กับ lng ก็พอ ชื่อร้านไม่ต้อง)
นำพิกัดเหล่านั้นไปใส่ในประโยค Location: Latitude __, Longitude __ โดยใช้ Map
*/

const storeLocations = [
  [13.75, 100.50, "Bangkok Store"],
  [18.78, 98.98, "Chiang Mai Store"],
  [7.88, 98.39, "Phuket Store"]
];

// เขียน Code ของคุณตรงนี้:
/*const [lat, lng, ...storeName] = storeLocations
const formattedCoords = storeLocations.map(lo => {
    console.log(`Location: Latitude ${lat}, Longitude ${lng},`)
    return
})*/

const formattedCoords = storeLocations.map(([lat, lng]) => {
    return `Location: Latitude ${lat}, Longitude ${lng}`;
});
// ได้ Array ของ String พิกัดทั้ง 3 ร้าน

/*
ข้อที่ 3: ระบบคัดกรองแขก VIP (Set + Some)
โจทย์: มีคนลงทะเบียนเข้างานซ้ำซ้อนกันเยอะมาก (guests) และเรามีรายชื่อ Blacklist อยู่ (blacklisted)
ใช้ Set เพื่อลบรายชื่อแขกที่ซ้ำกันออกให้เหลือแต่ชื่อที่ Unique
ใช้ some ตรวจสอบว่าในรายชื่อแขกที่ Clean แล้วนั้น "มีคนที่มีชื่ออยู่ใน Blacklist หลุดเข้ามาบ้างไหม?"
*/

const guests = ['Jack', 'Rose', 'Jack', 'Ethan', 'Rose', 'John'];
const blacklisted = ['Ethan', 'Voldemort'];

// 1. ลบชื่อซ้ำ
const uniqueGuests = [...new Set(guests)]

// 2. เช็คว่ามีคนใน Blacklist ไหม
//const hasWarning = uniqueGuests.some(blacklisted)
const hasWarning = uniqueGuests.some(guest => {
    return blacklisted.includes(guest); 
});
// console.log(hasWarning); // ควรจะได้ค่า true เพราะมี Ethan หลุดมา

const caughtGuests = uniqueGuests.filter(guest => {
    return blacklisted.includes(guest);
});
console.log(caughtGuests); // ผลลัพธ์: ['Ethan'] (ได้เป็น Array)


const hasWarning2 = uniqueGuests.some(guest => {
    const isBlacklisted = blacklisted.includes(guest);
    if (isBlacklisted) {
        console.log(`เจอแล้ว! คนที่ติด Blacklist คือ: ${guest}`);
    }
    return isBlacklisted;
});

//Final Quiz

const company = {
  name: "Tech Solutions",
  details: {
    location: "Bangkok",
    employees: [
      { 
        id: 101, 
        profile: { firstName: "Somsak", lastName: "Dev" },
        skills: ["JS", "React"] 
      }
    ]
  }
};

// โจทย์:
// 1. ให้ใช้ Destructuring เพียงบรรทัดเดียว เพื่อดึงค่าต่อไปนี้ออกมา:
//    - ชื่อบริษัท (name) ให้เปลี่ยนชื่อตัวแปรเป็น 'companyName'
//    - firstName ของพนักงานคนแรก ให้เปลี่ยนชื่อตัวแปรเป็น 'empName'
//    - Skill ตัวแรกของพนักงานคนแรก ให้เปลี่ยนชื่อตัวแปรเป็น 'primarySkill'

// เขียน Code ของคุณตรงนี้:
//const { name :"companyName",employees:{firstName:"empName",Skill:"primarySkill"} } = company;

const { 
  name: companyName, 
  details: { 
    employees: [
      { 
        profile: { firstName: empName }, 
        skills: [primarySkill] 
      }
    ] 
  } 
} = company;

console.log(companyName);  // "Tech Solutions"
console.log(empName);      // "Somsak"
console.log(primarySkill); // "JS"

//-------------------------------

const userConfig = {
  theme: "dark",
  permissions: {
    admin: true,
    editor: false
  },
  preferences: {
    layout: "grid",
    notifications: { email2: true, sms: false }
  }
};

// โจทย์:
// เขียนฟังก์ชันชื่อ 'handleConfig' ที่รับพารามิเตอร์ตัวเดียว (Object) 
// โดยใช้ Destructuring ในวงเล็บของฟังก์ชัน (Parameter level) เพื่อดึงค่าดังนี้:
// 1. ดึง theme ออกมา (ถ้าไม่มีให้ Default เป็น "light")
// 2. ดึงค่า admin จากใน permissions ออกมาเป็นชื่อตัวแปร 'isAdmin'
// 3. ดึงค่า email จากใน notifications ออกมา (ถ้าไม่มีให้ Default เป็น false)
// 4. ส่วน preferences ที่เหลือทั้งหมด ให้เก็บไว้ในตัวแปรชื่อ 'otherPrefs' (ใช้ Rest Parameter)

// เขียน Code ของคุณตรงนี้:

/*
const {
    theme = "light",
    permissions:{
        admin: "isAdmin"
    },
    preferences:{
        notifications:{
            email2 = "Default"
        }
    },...otherPrefs
} = userConfig
*/
const {
    theme = "light",
    permissions: {
        admin: isAdmin // แก้จาก "isAdmin" เป็น isAdmin
    },
    preferences: {
        notifications: {
            email2 = "Default" // อันนี้ถูกต้องแล้ว (ใช้ค่า Default เป็น String)
        },
        ...otherPrefs // ย้ายเข้ามาข้างใน preferences เพื่อเก็บ layout
    }
} = userConfig;

console.log(isAdmin);    // true
console.log(email);      // true (เพราะใน userConfig มีค่าเป็น true เลยไม่ใช้ "Default")
console.log(otherPrefs); // { layout: "grid" }

//Day 2 ทบทวน

/*
โจทย์ข้อที่ 1: ฟังก์ชันตั้งค่ากราฟ (Default Values)
สถานการณ์: ให้คุณสร้างฟังก์ชันชื่อ createChart ที่รับ Parameter เป็น Object เพียงตัวเดียว
เงื่อนไข: 1. ให้ใช้ Destructuring ที่ Parameter เพื่อรับค่า type และ width
2. กำหนด Default Value ให้ type เป็น 'bar'
3. กำหนด Default Value ให้ width เป็น 500
4. ภายในฟังก์ชันให้ console.log ว่า: "Creating [type] chart with width [width]px"
JavaScript
*/
// --- เขียนฟังก์ชัน createChart ของคุณด้านล่างนี้ ---

function createChart({type = "bar",width = 500}) {
    console.log(`Creating ${type} chart with width ${width}px`)
}

createChart({type:"OK"})


/*
โจทย์ข้อที่ 2: ระบบแจ้งเตือน (Nested & Error Proof)
สถานการณ์: คุณต้องเขียนฟังก์ชัน sendNotification ที่รับ Object ข้อมูลการแจ้งเตือน
เงื่อนไข:
ทำ Destructuring เพื่อดึงค่า message และ status
กำหนดค่าเริ่มต้นให้ status เป็น 'info'
สำคัญ: ต้องทำให้ฟังก์ชันนี้ ไม่ Error แม้ว่าคนเรียกจะลืมส่ง Object มาเลย (เช่น เรียก sendNotification()) โดยการใช้ = {} ต่อท้าย Parameter
ภายในฟังก์ชันให้ console.log ว่า: "[STATUS]: message"
JavaScript
// --- เขียนฟังก์ชัน sendNotification ของคุณด้านล่างนี้ ---
*/

/*
function sendNotification({status="info"}) {
    if(status==="success"){
        console.log(`[${status}]: ${message}`)
    }else if(status==="info" && message != {}){
        console.log(`[${status}]: ${message}`)
    }else{
        console.log(`[${status}]: undefined`)
    }
}
*/

// 1. ดึงทั้ง message และ status ออกมา
// 2. ใส่ = {} ไว้ข้างหลัง เพื่อกัน Error กรณีเรียก sendNotification() เฉยๆ
function sendNotification({ message, status = "info" } = {}) {
    
    // ถ้า message ไม่มีค่า (เป็น undefined) ให้แสดงคำว่า undefined ตามโจทย์
    if (message) {
        console.log(`[${status}]: ${message}`);
    } else {
        console.log(`[${status}]: undefined`);
    }
}

// --- ทดสอบ ---
sendNotification({ message: "Hello", status: "success" }); // [success]: Hello
sendNotification({ message: "System update" });            // [info]: System update
sendNotification();                                        // [info]: undefined (ไม่ Error แล้ว!)

/*
ลองโจทย์ข้อนี้ครับ (ผสมทุกอย่าง):
โจทย์: มี Object ข้อมูลนักเรียน ให้ดึง province ออกมา แต่ให้ตั้งชื่อตัวแปรใหม่ว่า location และถ้าไม่มีข้อมูล ให้ Default เป็น "Unknown"

JavaScript
*/
const student = {
    name: "A",
    contact: {
        address: {
            // province: "Chiang Mai" // สมมติว่าบรรทัดนี้หายไป
        }
    }
};

// ลองเขียน Destructuring เพื่อดึง province ออกมาเป็นตัวแปร location และใส่ Default ครับ

// เจาะลึกลงไปที่ province : เปลี่ยนชื่อเป็น location = ใส่ค่า Default
const { contact: { address: { province: location = "Unknown" } } } = student;

console.log(location); // Output: Unknown

