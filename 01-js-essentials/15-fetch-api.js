/* กระบวนการ 2 ขั้นตอนของ Fetch
เวลาเราใช้ fetch() เราไม่ได้ข้อมูลมาทันที แต่ต้องผ่าน 2 ด่านหลัก:

1.ด่าน HTTP Response: ดูว่าเชื่อมต่อสำเร็จไหม (ได้หัวจดหมายมาดูหน้าซอง)
2.ด่าน Data Parsing: แปลงเนื้อหาในจดหมายให้เป็นรูปแบบที่ JS อ่านออก (เช่น JSON) */

//การดึงข้อมูล (GET Method) - ท่ามาตรฐาน

const url1 = "https://pokeapi.co/api/v2/pokemon/ditto"

async function getPokeData() {
  try {
    // ขั้นตอนที่ 1: ส่งคำขอไปที่ URL
    const response = await fetch(url1);

    // ขั้นตอนที่ 2: เช็กว่า Server ตอบกลับมา OK ไหม (status 200-299)
    if (!response.ok) {
      throw new Error(`เชื่อมต่อไม่สำเร็จ: ${response.status}`);
    }

    // ขั้นตอนที่ 3: แปลงข้อมูลดิบให้เป็น JSON (Object ของ JS)
    const data = await response.json();

    // ขั้นตอนที่ 4: นำข้อมูลไปใช้งาน
    console.log("ชื่อโปเกมอน:", data.name);
    console.log("น้ำหนัก:", data.weight);

  } catch (error) {
    // ดักจับกรณีเน็ตหลุด หรือ URL ผิด
    console.error("เกิดข้อผิดพลาด:", error.message);
  }
}

//getPokeData();

//การส่งข้อมูล (POST Method)

const url2 = "https://jsonplaceholder.typicode.com/posts";

async function createPost() {

  const myData = {
    title: "เรียน Fetch API",
    body: "สนุกและง่ายมาก!",
    userId: 1
  };

  try {
    const response = await fetch(url2, {
      method: "POST", // ระบุว่าเป็นการส่งข้อมูล
      headers: {
        "Content-Type": "application/json" // บอก Server ว่าเราส่งไฟล์ JSON ไปนะ
      },
      body: JSON.stringify(myData) // แปลง Object เป็น String ก่อนส่งออกไป
    });

    const result = await response.json();
    console.log("บันทึกสำเร็จ! ข้อมูลที่ได้กลับมา:", result);
  } catch (error) {
    console.log("ส่งข้อมูลพลาด:", error);
  }
}

//createPost();

//QUIZ
const url3 = "https://jsonplaceholder.typicode.com/todos/1"

async function getData() {
    try {
        const res = await fetch(url3)

        if (!res.ok){
            throw new Error("Error", res.status);
        }

        const data = await res.json()

        console.log(data.title)


    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
    }
}

//getData()


//Fetch + Promise.all
async function getAllData() {
  try {
    // ส่ง Request ไป 2 ที่พร้อมกันตั้งแต่วินาทีแรก!
    const [resUser, resPosts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    ]);

    // เช็กความเรียบร้อยทั้งคู่
    if (!resUser.ok || !resPosts.ok) throw new Error("ดึงข้อมูลไม่สำเร็จ");

    // แปลง JSON พร้อมกัน
    const [user, posts] = await Promise.all([
      resUser.json(),
      resPosts.json()
    ]);

    console.log("ชื่อผู้ใช้:", user.name);
    console.log("จำนวนโพสต์:", posts.length);

  } catch (error) {
    console.error(error.message);
  }
}

getAllData();