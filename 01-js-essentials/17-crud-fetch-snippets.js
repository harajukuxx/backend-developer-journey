// 1. READ (fget) - ดึงข้อมูลมาดู
async function getTransaction(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  console.log('📖 ข้อมูลรายการ:', data);
}

// 2. CREATE (fpost) - สร้างรายการใหม่
async function createTransaction(newData) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData)
  });
  const result = await response.json();
  console.log('🆕 สร้างสำเร็จ ID:', result.id);
}

// 3. UPDATE (fpatch) - แก้ไขบางส่วน (สำคัญมาก!)
async function updateTransaction(id, updatedData) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PATCH', // หรือ 'PUT' ถ้าจะทับทั้งหมด
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData)
  });
  const result = await response.json();
  console.log('✏️ แก้ไขสำเร็จ:', result);
}

// 4. DELETE (fdel) - ลบข้อมูล
async function deleteTransaction(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE'
  });
  if (response.ok) console.log(`🗑️ ลบรายการที่ ${id} เรียบร้อย`);
}

// --- ทดสอบรันชุดคำสั่ง ---
const myData = { title: "โอนเงินเข้าบัญชีออมทรัพย์", amount: 15000 };

createTransaction(myData);        // สร้าง
updateTransaction(1, { amount: 20000 }); // แก้ไขยอดเงินใน ID 1
deleteTransaction(1);             // ลบ ID 1

//QUIZ
/* โจทย์: ระบบจัดการรายจ่าย (Expense Tracker)
ใช้ Base URL นี้ในการทดสอบครับ: https://jsonplaceholder.typicode.com/posts
(สมมติว่า title คือชื่อรายการ และ body คือจำนวนเงินนะครับ)
1. [CREATE] เพิ่มรายการใหม่ (ใช้ fpost)
ภารกิจ: สร้างฟังก์ชัน addExpense(name, amount)
รายละเอียด: ส่งข้อมูลไปที่ API โดยให้ title รับค่าจาก name และ body รับค่าจาก amount
ตัวอย่าง: addExpense('ค่ากาแฟ', 60);
2. [READ] ดึงรายการทั้งหมดมาโชว์ (ใช้ fget หรือ fasync)
ภารกิจ: สร้างฟังก์ชัน showAllExpenses()
รายละเอียด: ดึงข้อมูลมา 5 รายการแรก แล้วใช้ .forEach() วนลูปโชว์ในรูปแบบ:
"รายการ: [title] | ยอด: [body] บาท"
3. [UPDATE] แก้ไขยอดเงิน (ใช้ fpatch)
ภารกิจ: สร้างฟังก์ชัน updateAmount(id, newAmount)
รายละเอียด: แก้ไขรายการที่ id: 1 ให้เปลี่ยนยอดเงิน (body) เป็น newAmount
4. [DELETE] ลบรายการที่จ่ายผิด (ใช้ fdel)
ภารกิจ: สร้างฟังก์ชัน removeExpense(id)
รายละเอียด: ลบรายการตาม ID ที่ระบุ และถ้าสำเร็จให้ console.log บอกว่า "ลบรายการสำเร็จแล้ว" */

const url = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData(url) {
 
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    console.log('✅ Success:', data);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

async function addExpense(name, amount) {
  const myData = {
    title: name,
    body: amount
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(myData)
  });
  const result = await response.json();
  console.log('🆕 Created:', result);
}

//addExpense('ค่ากาแฟ', 60);

async function showAllExpenses(end) {
  const response = await fetch(url);
  const data = await response.json();
  const top5data = data.slice(0, end);
  console.log(top5data)
  top5data.forEach((item)=>{
    console.log(`รายการ: ${item.title} | ยอด: ${item.body} บาท`)
  });
}

//showAllExpenses(5)

async function updateAmount(id, newAmount) {
  const response = await fetch(`${url}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newAmount)
  });
  const result = await response.json();
  console.log('✏️ Updated:', result);
}

//updateAmount(1, { body: 20000 });

async function removeExpense(id) {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE'
  });
  if (response.ok) console.log('🗑️ Deleted ID:', id);
}

//removeExpense(1)