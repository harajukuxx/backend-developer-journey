/* ระดับง่าย (พื้นฐาน Promise)
1.  Simple Promise: สร้าง Promise ที่จะ resolve ข้อความว่า "Hello World" หลังจากผ่านไป 2 วินาที และใช้ .then() เพื่อแสดงผลออกทาง console
2.  Promise Rejection: สร้างฟังก์ชันรับตัวเลข ถ้าตัวเลขมากกว่า 10 ให้ resolve แต่ถ้าน้อยกว่าให้ reject พร้อมแสดงข้อความ Error โดยใช้ .catch()
3.  Delay Function: เขียนฟังก์ชันชื่อ delay(ms) ที่คืนค่าเป็น Promise และใช้ setTimeout เพื่อทำให้โค้ดรอเป็นเวลา ms มิลลิวินาที */

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve("Hello World");
    }, 2000);
})

// myPromise.then((msg)=>{
//     console.log(msg)
// })

function minTen(num) {
    return new Promise((resolve, reject) => {
        num >= 10 ? resolve ("มากกว่าหรือเท่ากับ 10") : reject ("น้อยกว่า 10")
    })
}

// minTen(15).then((msg)=>{
//     console.log(msg)
// }).catch((error)=>{
//     console.log(error)
// })

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(); // เมื่อครบเวลา ให้บอกว่า Promise นี้สำเร็จแล้วนะ
        }, ms);
    });
}

//delay(2000).then(() => console.log("รอครบ 2 วินาทีแล้ว!"));

/* ระดับกลาง (Async/Await)
4.  Async/Await Basic: นำโจทย์ข้อ 1 มาเขียนใหม่โดยใช้ async/await แทนการใช้ .then()
5.  Try...Catch Handling: เขียนฟังก์ชัน async ที่เรียกใช้ Promise ที่มีโอกาสเกิด Error (จากข้อ 2) แล้วใช้ try...catch ในการจัดการ Error นั้น
6.  Sequential Execution: สร้าง 2 ฟังก์ชันที่คืนค่า Promise (เช่น ฟังก์ชันต้มน้ำ และฟังก์ชันชงกาแฟ) 
แล้วใช้ await เพื่อให้ฟังก์ชันที่สองทำงานหลังจากฟังก์ชันแรกเสร็จสิ้นเท่านั้น */


function myPromise2() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve("Hello World");
    }, 2000);
    })
}

async function usemyPromise2() {
    const test = await myPromise2()
    console.log(test)
}

//usemyPromise2()


function minTen2(num) {
    return new Promise((resolve, reject) => {
        num >= 10 ? resolve ("มากกว่าหรือเท่ากับ 10") : reject ("น้อยกว่า 10")
    })
}

async function useminTen2(num) {
    try {
        const ten = await minTen2(num)
        console.log(ten)
    } catch (error) {
        console.log(error)
    }
}

//useminTen2(15)

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("น้ำเดือดแล้ว")
        }, 2000);
    })
}

function brewCoffee() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ได้กาแฟหอมๆ")
        }, 1000);
    })
}

async function makeCoffee() {
    console.log("เริ่มต้มน้ำ")
    const useboilWater = await boilWater()
    console.log(useboilWater)
    console.log("เริ่มชงกาแฟ")
    const usebrewCoffee = await brewCoffee()
    console.log(usebrewCoffee)
}

/* 
ระดับประยุกต์ (Fetch API)
7.  Basic Fetch: ใช้ fetch ดึงข้อมูลจาก URL: https://jsonplaceholder.typicode.com/posts/1 แล้วแสดงชื่อหัวข้อ (title) ออกมา
8.  Fetch with Async/Await: เขียนฟังก์ชัน async เพื่อดึงข้อมูลรายชื่อผู้ใช้จาก https://jsonplaceholder.typicode.com/users และแสดงผลชื่อ (name) ของทุกคนออกมาเป็น List
9.  Post Data: ใช้ fetch ด้วย Method POST เพื่อส่งข้อมูล Object { title: 'foo', body: 'bar', userId: 1 } ไปยัง API และแสดง Response ที่ได้รับกลับมา
*/

const url = "https://jsonplaceholder.typicode.com/posts/1"

async function getData1() {
    try {
        const res = await fetch(url)

        if(!res.ok){
            throw new Error("Server Fail");
        }
        const data = await res.json()
        console.log(data.title)
    } catch (error) {
        console.log(error)
    }
}

//getData1()

const url2 = "https://jsonplaceholder.typicode.com/users"

async function getData2() {
    try {
        const res = await fetch(url2)

        if(!res.ok){
            throw new Error("Server Fail");
        }
        const data = await res.json()
        data.forEach(user => {
            console.log(user.name);
        });
    } catch (error) {
        
    }
    
}

//getData2()

/*
ระดับท้าทาย (Advanced)
10. Multiple Fetch (Promise.all): ดึงข้อมูลจาก API 2 แหล่งพร้อมกัน (เช่น ข้อมูลโพสต์ และ ข้อมูลคอมเมนต์) โดยใช้ Promise.all เพื่อรอให้ข้อมูลทั้งสองอย่างโหลดเสร็จพร้อมกันก่อนจะประมวลผลต่อ */