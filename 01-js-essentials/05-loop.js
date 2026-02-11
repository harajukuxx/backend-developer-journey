for (let index = 0; index < 5; index++) {
    console.log("รอบที่ " + (index+1));
}


for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // ข้ามรอบที่ 3 ไป
    if (i === 5) break;    // เจอ 5 แล้วหยุดทันที
    console.log(i); 
}
// ผลลัพธ์: 1, 2, 4

//forEach

const colors = ["Red", "Green", "Blue"];

colors.forEach((item, index) => {
    console.log(`ลำดับที่ ${index} คือสี ${item}`);
});

//for of
//อ่านง่ายที่สุด: for (const x of list) แปลตรงตัวว่า "สำหรับ x แต่ละชิ้นในรายการ..."
//ทรงพลัง: สามารถใช้คำสั่ง break (หยุดทันที) หรือ continue (ข้ามรอบนี้) ได้ ซึ่ง .forEach() ทำไม่ได้

const numbers = [10, 20, 30, 40, 50];

for (const num of numbers) {
    if (num === 30) continue; // ข้ามเลข 30 ไป
    if (num > 40) break;      // ถ้าเกิน 40 ให้หยุดลูปทันที
    console.log(num); 
}
// ผลลัพธ์: 10, 20, 40


/*
โจทย์ที่ 1: .forEach() (สายจัดการข้อมูลและแสดงผล)
สถานการณ์: คุณได้รับ Array ของราคาสินค้ามา และต้องการแสดงรายการราคาที่ ลดราคาแล้ว 10% ออกมาทีละรายการ พร้อมบอกด้วยว่ามันเป็นรายการที่เท่าไหร่
เงื่อนไข:
ใช้ const prices = [100, 500, 1000, 2500];
ใช้ .forEach() ในการวนลูป
ให้ Print ออกมาในรูปแบบ: รายการที่ 1: ราคาลดแล้วเหลือ 90 บาท (ไล่ไปจนครบทุกตัว)
*/
const prices = [100, 500, 1000, 2500];
array.forEach((price,index) => {
    let discounted = price * 0.9;
    console.log(`รายการที่ ${index + 1}: ราคาลดแล้วเหลือ ${discounted} บาท`);
});

/*
โจทย์ที่ 2: for...of (สายควบคุมและหยุดการทำงาน)
สถานการณ์: คุณเป็นพนักงานรักษาความปลอดภัยหน้าห้าง หน้าที่ของคุณคือให้คนเข้าห้างได้เรื่อยๆ 
แต่ ถ้าเจอคนที่ชื่อว่า "Spy" ให้สั่งปิดประตูห้างทันที (หยุดลูป) และไม่ให้คนหลังจากนั้นเข้าได้อีก
เงื่อนไข:
ใช้ const people = ["Alice", "Bob", "Spy", "Charlie", "David"];
ใช้ for...of ในการวนลูป
ถ้าชื่อไม่ใช่ "Spy" ให้ Print ว่า ให้คุณ [ชื่อ] เข้าห้างได้
ถ้าเจอชื่อ "Spy" ให้ Print ว่า ตรวจพบ Spy! ปิดประตูห้างทันที! และใช้คำสั่ง break เพื่อจบการทำงาน
 */

const people = ["Alice", "Bob", "Spy", "Charlie", "David"];
for(const name of people){
    if(name=="Spy") {
        console.log(`ตรวจพบ Spy! ปิดประตูห้างทันที!`)
        break;
    }
    console.log(`ให้คุณ ${name} เข้าห้างได้`)
}

