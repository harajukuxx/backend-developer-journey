function downloadFile(url) {
  // สร้าง Promise ครอบ Logic เดิมไว้
  return new Promise((resolve, reject) => {
    console.log("📥 เริ่มดาวน์โหลดจาก: " + url);

    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        // ถ้าสำเร็จ ให้เรียก resolve (ส่งค่ากลับ)
        resolve("ไฟล์หนัง.mp4"); 
      } else {
        // ถ้าพัง ให้เรียก reject (ส่ง Error กลับ)
        reject("❌ ดาวน์โหลดล้มเหลว: อินเทอร์เน็ตหลุด!");
      }
    }, 1500);
  });
}

//เรียกใช้งาน
async function startDownload() {
  try {
    const file = await downloadFile("https://example.com/movie");
    console.log("✅ โหลดสำเร็จ:", file);
  } catch (error) {
    console.log(error);
  }
}

startDownload()

/* function downloadFile(url, callback) {
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
}); */


//แก้ปัญหา Callback Hell
async function userJourney() {
  try {
    const user = await login("user", "pass");
    const profile = await getProfile(user.id);
    const friends = await getFriends(profile.id);
    const chats = await getChatHistory(friends[0].id);
    
    console.log("✅ ดึงข้อมูลแชทสำเร็จ! อ่านง่ายขึ้นเยอะ");
  } catch (err) {
    console.log("❌ เกิดข้อผิดพลาดที่จุดใดจุดหนึ่ง:", err);
  }
}

//########################################################################################

//บทที่ 1: ปูพื้นฐาน Promise (The Foundation)
const myFirstPromise = new Promise((resolve, reject) => {
  // จำลองการทำงานบางอย่าง (เช่น ดึงข้อมูล)
  const isSuccess = true; 

  if (isSuccess) {
    resolve("✅ ข้อมูลส่งมาเรียบร้อยแล้ว!"); // ส่งค่าสำเร็จออกไป
  } else {
    reject("❌ ขอโทษที เซิร์ฟเวอร์ล่ม"); // ส่งข้อความผิดพลาดออกไป
  }
});

function giveMeNumber() {
    return new Promise((resolve, reject) => {
        console.log("กำลังสุ่มตัวเลข... รอสักครู่");

        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10);
            if(randomNumber > 2){
                resolve(randomNumber); // ถ้าเลขมากกว่า 2 ให้สำเร็จ
            }else{
                reject("เลขน้อยเกินไป! ได้แค่: " + randomNumber); // ถ้าเลขน้อยไปให้ล้มเหลว
            }
        }, 2000);
    })
}

//QUIZ 1
function sayHelloPromise() {
    return new Promise((resolve, reject) => {
        const isTrue = true
        if(isTrue){
            resolve("สวัสดีจาก Promise!")
        }
        else{
            reject("555")
        }
    })
}

// ใช้ Promise.resolve() ได้เลยถ้าต้องการส่งค่าสำเร็จทันทีโดยไม่มี Logic ซับซ้อน
// function sayHelloPromise() {
//   return Promise.resolve("สวัสดีจาก Promise!"); 
// }

function waitingGame() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ฉันรอนานมากแล้วนะ")
        }, 3000);
    })
}

function checkExam(score) {
    return new Promise((resolve, reject) => {
        if(score>=50){
            resolve("ยินดีด้วย คุณสอบผ่าน")
        }else{
             reject("เสียใจด้วย คุณสอบตก")
        }
    })
}

// แบบกระชับ (Ternary Operator):
// function checkExam(score) {
//   return new Promise((resolve, reject) => {
//     score >= 50 ? resolve("ผ่าน") : reject("ตก");
//   });
// }


//บทที่ 2: วิธีเปิดกล่อง Promise .then() .catch() .finally

checkExam(80)
  .then((result) => {
    console.log(result); // "ยินดีด้วย คุณสอบผ่าน"
    return "📜 ใบประกาศนียบัตร"; // ส่งค่าต่อไปยัง .then ถัดไป
  })
  .then((certificate) => {
    console.log("ได้รับ: " + certificate); // "ได้รับ: 📜 ใบประกาศนียบัตร"
  })
  .catch((err) => {
    console.error("เกิดข้อผิดพลาด: " + err);
  }).finally(() => {
    // ส่วนนี้จะทำงาน "เสมอ" ไม่ว่าจะเข้า then หรือ catch
    console.log("จบการทำงาน");
  });


//บทที่ 3: Async / Await (The Modern Syntax)

// มันคือ "หน้ากาก" ที่สวมทับ Promise อีกทีครับ:
// async: วางไว้หน้าฟังก์ชัน เพื่อบอกว่า "เฮ้ย! ฟังก์ชันนี้จะมีงานที่ต้องรอนะ"
// await: วางไว้หน้า Promise เพื่อบอกว่า "หยุดรอตรงนี้จนกว่าจะได้คำตอบนะ (ห้ามข้าม!)"

function showUser() {
  getUser(1)
    .then(user => getPosts(user.id))
    .then(posts => console.log(posts))
    .catch(err => console.log(err));
}

//แบบใหม่
async function showUser() {
    try {
        const user = await getUser(1);     // รอจนกว่าจะได้ user
        const posts = await getPosts(user.id); // รอจนกว่าจะได้ posts
        console.log(posts);
    } catch (err) {
        console.log(err);
    } finally {
            // ทำเสมอ ไม่ว่าจะสำเร็จหรือพัง
    }
}

//Test checkExam(80)
async function runResult(){
    try {
        const result = await checkExam(80)
        console.log(result)
    } catch (error) {
        console.log("Fail")
    }
}

runResult()

async function messageGame() {
    try {
        const message = await waitingGame()
        console.log(message)
    } catch (error) {
        console.log("Error")
    } 
}

//บทที่ 4: การจัดการ Error ระดับเซียน (Try...Catch)

// ทำไมต้อง Try...Catch?
// เพราะใน try block คุณสามารถใส่ await กี่ตัวก็ได้! ถ้าตัวไหนตัวหนึ่งพัง มันจะกระโดดมาที่ catch ทันทีที่จุดเดียว ไม่ต้องเขียนแยกทีละตัว

async function checkOut() {
  try {
    console.log("🛒 กำลังตรวจสอบตะกร้า...");
    const cart = await checkStock(); // รอเช็กสต็อก
    
    console.log("💳 กำลังตัดเงิน...");
    const payment = await payMoney(false); // รอจ่ายเงิน
    
    console.log("📦 สำเร็จ! หมายเลขพัสดุคือ: " + payment.trackId);
  } catch (error) {
    // ไม่ว่าเช็กสต็อกจะพัง หรือจ่ายเงินจะล้มเหลว มันจะเด้งมาที่นี่!
    console.error("❌ การสั่งซื้อล้มเหลวเพราะ: " + error);

//     if (error === "Money not enough") {
//       console.log("ไปเติมเงินก่อนนะจ๊ะ");
//     } else {
//       console.log("ระบบขัดข้อง: " + error);
//     }

  } finally {
    console.log("🔄 ปิดการเชื่อมต่อระบบตะกร้า");
  }
}

function checkStock() {
    return new Promise((resolve, reject) => {
        const isStock = true
        isStock ? resolve("มีของ") : reject("ชองหมด");
    })
}

function payMoney(payment) {
    return new Promise((resolve, reject) => {
        const isPayment = payment
        isPayment ? resolve("จ่ายแล้ว") : reject("ยังไม่จ่าย");
    })
}

checkOut()

//บทที่ 5 (Performance & Patterns)

//1.Promise.all: รันงานพร้อมกัน (Parallel)

// แบบช้า
// const user = await getUser();    // รอ 1 วิ
// const friends = await getFriends(); // รออีก 1 วิ
// const settings = await getSettings(); // รออีก 1 วิ
// รวมเสียเวลา 3 วินาที ❌

// ทุกงานเริ่มพร้อมกันตั้งแต่วินาทีที่ 0
const [user, friends, settings] = await Promise.all([
  getUser(),
  getFriends(),
  getSettings()
]);
// รวมเสียเวลาแค่ 1 วินาที (เท่ากับตัวที่นานที่สุด) ✅

//2.Promisification: เปลี่ยนของเก่าให้เป็นของใหม่

// สมมติฟังก์ชันเก่า
function oldStyleCode(callback) {
  setTimeout(() => {
    const success = Math.random() > 0.5;

    if (success) {
      callback(null, "ข้อมูลเก่า"); // ✅ สำเร็จ
    } else {
      callback(new Error("โหลดไม่สำเร็จ")); // ❌ error
    }
  }, 1000);
}

// วิธีแปลงเป็น Promise (เพื่อเอาไปใช้ await ได้)
const newDataPromise = () => {
  return new Promise((resolve, reject) => {
    oldStyleCode((err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

async function run() {
  try {
    const data = await newDataPromise();
    console.log("ได้ข้อมูล:", data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

run();

//QUIZ Final
async function cooking() {
  try {
    const [mama, coffee] = await Promise.all([
      getmama(),
      getcoffee()
    ]);

    console.log(mama);
    console.log(coffee);

  } catch (err) {
    console.log("Error:", err.message);
  }
}

function getmama() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("MAMA OK"), 1000);
  });
}

function getcoffee() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("COFFEE OK"), 1000);
  });
}

cooking();



























