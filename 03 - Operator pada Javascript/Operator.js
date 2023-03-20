//Operator pada Javascript

//Operator binary -> membutuhkan 2 operand (operand1 operator operand2)
//1. Operator aritmatika
//operator penjumlahan (+)
let penjumlahan = 15 + 5;
console.log(penjumlahan) //output: 20

//operator pengurangan (-)
let pengurangan = 15 - 5;
console.log(pengurangan) //output: 10

//operator perkalian (*)
let perkalian = 15 * 2;
console.log(perkalian) //output: 30

//operator pembagian (/)
let pembagian = 15 / 3;
console.log(pembagian) //output: 5

//operator modulo/modulus/sisa bagi (%)
let sisaBagi = 10 % 3;
console.log(sisaBagi) //output: 1

//operator precedence (urutan operasi matematika) -> KuKaBaTaKu (), *, /, +, -
let campuran = 1 + 2 * 3 - 4;
console.log(campuran) //output: 3

let precedence = (1 + 2) * 3 - 4;
console.log(precedence) //output: 5

//2. Operator penugasan (assigment)
//operator =
let number = 5;
number = 10;
console.log(number) //ouput:10 (mengganti nilai variabel number sebelumnya)

number += 2;
console.log(number) //output: 12 (menambah nilai variabel number sebelumnya)

//operator x += y sama dengan x = x + y
let a = 10;
a += 5;
console.log(a) //output: 15

//operator x -= y sama dengan x = x - y
let b = 10;
b -= 5;
console.log(b) //output: 5

//operator x *= y sama dengan x = x * y
let c = 10;
c *= 5;
console.log(c) //output:50

//operator x /= y sama dengan x = x / y
let d = 10;
d /= 5;
console.log(d) //output:2

//operator x %= y sama dengan x = x % y
let e = 10;
e %= 4;
console.log(e) //output:2

//operator x **= y sama dengan x = x ** y
let f = 10;
f **= 4;
console.log(f) //output: 10000

//3. Operator perbandingan (comparison) -> menghasilkan nilai boolean (true/false)
//operator perbandingan sama dengan (==)
const x = 5, y = 2, z = 'hello';
console.log(x == 5); //true
console.log(y == '2'); //true
console.log(z == 'Hello'); //false

//operator perbandingan tidak sama dengan (!=)
const h = 3, i = 'hello';
console.log(h != 2); //true
console.log(i != 'Hello'); //true

//operator perbandingan strict sama dengan (===)
// strict (operator identitas/tipe datanya)
const j = 2;
console.log(j === 2); // true
console.log(j === '2'); // false

//operator perbandingan strict tidak sama dengan (!==)
const k = 2, l = 'hello';
console.log(k !== 2); // false
console.log(k !== '2'); // true
console.log(l !== 'Hello'); // true

//operator perbandingan lebih besar dari (>)
const m = 3;
console.log(m > 2); // true

//operator perbandingan lebih kecil dari (<)
const n = 3, o = 2;
console.log(n < 2); // false
console.log(o < 3); // true

//operator perbandingan lebih besar sama dengan (>=)
const p = 3;
console.log(p >= 3); //true

//operator perbandingan lebih kecil sama dengan (<=)
const q = 2;
console.log(q <= 3) // true
console.log(q <= 2); // true

//4. Operator logika (logical)
//Operator AND (&&) -> akan true jika keduanya true
const r = true, s = false;
const t = 4;
console.log(r && r); // true
console.log(r && s);  // false

console.log((t > 2) && (t < 2)); // false

//Operator OR (||) -> akan true jika salah satunya true
const u = true, v = false, w = 4;
console.log(u || v); // true
console.log(v || v); // false

console.log((w>2) || (w<2)); // true

//Operator NOT (!) -> membalikan nilai
const angka1 = true, angka2 = false;
console.log(!angka1); // false
console.log(!angka2); // true

//5. Operator string
//operator +
kata1 = "apple";
kata2 = "pen";
gabungan1 = kata1 + kata2;
gabungan2 = kata1 + " " + kata2;
console.log(gabungan1) //output: "applepen"
console.log(gabungan2) //output: "aplle pen"

let gabungdata1 = 10 + "10"; //jika salah satu tipe datanya string, hasilnya string
console.log(gabungdata1) //output: "1010"

let gabungdata2 = "10" + 10;
console.log(gabungdata2) //output: "1010"

let gabungdata3 = 10 + 10 + "10";
console.log(gabungdata3) //output: "2010"

let gabungdata4 = "10" + 10 + 10;
console.log(gabungdata4) //output: "101010"

//6. Operator typeof --> operator unary (membutuhkan 1 operand)
let dataNumber = 1000;
console.log(typeof(dataNumber)) //output: "number" -> tipe datanya number

let dataString = "Ini data string";
console.log(typeof(dataString)) //output: "string" -> tipe datanya string

//7. Operator kondisional --> operator ternary (membutuhkan 3 operand (<kodisi> ? "benar" : "salah"))
var pertanyaan = confirm("Apakah kamu berumur diatas 18 tahun?")
var hasil = pertanyaan ? "Selamat datang" : "Kamu tidak boleh di sini";
console.log(hasil);

//output: akan menampilkan dialog "Apakah kamu berumur diatas 18 tahun?"
//akan mencetak "Selamat datang" saat variabel pertanyaan bernilai true (memilih OK pada dialog konfirmasi)
//dan akan mencetak "Kamu tidak boleh di sini" saat variabel pertanyaan bernilai false (memilih Cancel pada dialog konfirmasi)
