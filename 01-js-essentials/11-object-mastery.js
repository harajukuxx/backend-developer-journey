const cart = {
    customer: "Tina",
    item:[
        { name: "Mouse", price: 1200 },
        { name: "Keyboard", price: 2500 }
    ],
    discountCode: { code: "SALE10", amount: 500 },
    getTotal(){
        let sumPrice = this.item[0].price + this.item[1].price - this.discountCode.amount
        return sumPrice
    }
}

console.log(cart.getTotal())

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  info: {
    year: 2010,
    genre: "Sci-Fi"
  }
};

const { 
  title, 
  director: filmmaker, 
  info: { year }, 
  rating = 8.0 
} = movie;

//Object.keys(obj) - "เอาแค่หัวข้อ"
const keys = Object.keys(movie); 
// ผลลัพธ์: ["title", "director", "info"]

//Object.values(obj) - "เอาแค่ข้อมูล"
const values = Object.values(movie);
// ผลลัพธ์: ["Inception", "Christopher Nolan", { year: 2010, genre: "Sci-Fi" }]

//Object.entries(obj) - "เอามาทั้งคู่"
const entries = Object.entries(movie);
/* ผลลัพธ์: 
[
  ["title", "Inception"],
  ["director", "Christopher Nolan"],
  ["info", {...}]
]
*/

// console.log(Object.entries(movie.info));
// ผลลัพธ์: [ ["year", 2010], ["genre", "Sci-Fi"] ]

const apiResponse = {
  id: 99,
  user: "Alice",
  status: "active",
  score: 500,
  version: "1.0.2"
};

const {user,...other} = apiResponse
const newResponse = {
  ...others,
  status: "inactive",
  timestamp: "2024-01-01"
};