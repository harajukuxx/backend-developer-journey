function showResult(sum) {
  console.log("ผลลัพธ์คือ: " + sum);
}

function calculator(num1, num2, callback) {
  let total = num1 + num2;
  callback(total);
}

// calculator(10, 20, showResult);

//Event Listeners
const button = document.querySelector('#myButton');

// เราส่ง Callback (ฟังก์ชันนิรนาม) ไปให้ปุ่ม
button.addEventListener('click', function() {
  console.log("ปุ่มถูกกดแล้ว!");
});

//Function ที่ยืดหยุ่น
function processOrder(item, callback) {
  console.log("📦 กำลังแพ็กสินค้า: " + item);
  // ... โค้ดส่วนกลาง ...
  callback(); // เปิดโอกาสให้คนใช้ฟังก์ชันนี้ ใส่ Logic เองได้ที่นี่
}

// นาย A เอาไปใช้: อยากให้ส่ง SMS
processOrder("ไอโฟน", () => console.log("📱 ส่ง SMS บอกลูกค้าเรียบร้อย"));

// นาย B เอาไปใช้: อยากให้พิมพ์ใบเสร็จ
processOrder("ไอโฟน", () => console.log("🧾 พิมพ์ใบเสร็จออกมาแล้ว"));


//#################################################################################################

// แล้วถ้าไม่อยากใช้ Callback แต่อยากได้ค่ากลับมาเหมือน return ล่ะ
// นี่คือเหตุผลที่ JavaScript พัฒนา Promise และ async/await ขึ้นมาครับ เพื่อให้เราเขียนโค้ดแล้วดูเหมือนการใช้ return ปกติ แต่ไส้ในยังทำงานแบบรอเวลาอยู่

//"การดึงข้อมูล" (Asynchronous Data)
function getUserData(userId, callback) {
  console.log("🔍 กำลังค้นหาข้อมูลผู้ใช้ไอดี: " + userId);

  setTimeout(() => {
    // จำลองข้อมูลที่ได้จาก Database
    const user = { id: userId, name: "Somchai", email: "somchai@email.com" };
    
    // ส่งข้อมูลที่ได้กลับไปผ่าน Callback 
    callback(user);
  }, 2000);
}

// ใช้งานจริง:
// getUserData(101, (data) => {
//   console.log("✅ ได้ข้อมูลแล้ว: ", data.name);
//   console.log("📧 ส่งอีเมลยืนยันไปที่: " + data.email);
//   console.log(data)
// });

//การจัดการ Error (Error-First Callback)
function downloadFile(url, callback) {
  console.log("📥 เริ่มดาวน์โหลดจาก: " + url);

  setTimeout(() => {
    const success = Math.random() > 0.5; // จำลองดวงว่าโหลดสำเร็จไหม (50/50)

    if (success) {
      callback(null, "ไฟล์หนัง.mp4"); // ตัวแรกเป็น null คือไม่มี Error
    } else {
      callback("❌ ดาวน์โหลดล้มเหลว: อินเทอร์เน็ตหลุด!", null);
    }
  }, 1500);
}

// ใช้งานจริงแบบเช็ก Error ด้วย:
downloadFile("https://movie.com/123", (error, result) => {
  if (error) {
    console.error(error); // ถ้ามี Error ให้แสดง Error
    return;
  }
  console.log("🎉 ยินดีด้วย! ดาวน์โหลด " + result + " สำเร็จ");
});


//Callback Hell
login("user", "pass", (user) => {
  getProfile(user.id, (profile) => {
    getFriends(profile.id, (friends) => {
      getChatHistory(friends[0].id, (chats) => {
        console.log("กว่าจะถึงตรงนี้... โค้ดเยื้องไปขวาสุดจอแล้ว!");
      });
    });
  });
});