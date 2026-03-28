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