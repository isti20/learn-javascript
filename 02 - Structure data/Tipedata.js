//Tipe data

//1. Tipe data string
//Penggunaan tanda kutip pada data string
//Menggunakan tanda kutip satu
var kutipSatu = 'Kami sedang melakukan "Gerakan pungut sampah"';
console.log(kutipSatu) //output: Kami sedang melakukan "Gerakan pungut sampah" 

//Menggunakan tanda kutip dua
var kutipDua = "Hari ini adalah hari jum'at";
console.log(kutipDua) //output: Hari ini adalah hari jum'at

//Menggunakan escape character atau backslash character(\)
var backSlash = "\"Gerakan pungut sampah\" dilaksanakan pada hari jum'at";
console.log(backSlash) //output: "Gerakan pungut sampah" dilaksanakan pada hari jum'at 

//Macam-macam escape character
// 1) escape character \0 menghasilkan karakter NULL
// 2) escape character \' menghasilkan karakter '
var hariJumat = 'ini adalah hari jum\'at';
console.log(hariJumat) //output: ini adalah hari jum'at

// 3) escape character \" menghasilkan karakter "
// 4) escape character \\ menghasilkan karakter \
// 5) escape character \n menghasilkan karakter new line/baris baru
// 6) escape character \t menghasilkan karakter tab
// 7) escape character \b menghasilkan karakter backspace
// 8) escape character \uXXXX menghasilkan karakter unicode
var uniCode = '\u00A9';
console.log(uniCode) //output: ©

//Concatenation (konkatenasi) menggunakan karakter +
let namaDepan = "Khulatul";
let namaBelakang = "Aulia";
let namaLengkap = namaDepan + " " + namaBelakang;
console.log(namaLengkap) //output: Khulatul Aulia
console.log(namaLengkap.length) //output: 14 -> terdiri 14 karakter (termasuk spasi)

//Membandingkan string
let nama1 = "Sandika";
let nama2 = "sandika";
let bandingkan = nama1 == nama2;
console.log(bandingkan) //output: false

let nama3 = "Isti";
let nama4 = "isti";
let bandingkanNama = nama3 === nama4;
console.log(bandingkanNama) //output: true (sama-sama tipe data string)

//2. Tipe data number
//angka tanpa desimal (akurat sampai 15 digit)
let angka = 999999999999999;
console.log(angka) //output: 999999999999999 ((9 sebanyak 15x)

let number = 9999999999999999; // 9 sebanyak 16x
console.log(number) //output: 10000000000000000 (terjadi pembulatan)

//angka dengan desimal (maksimal 17 digit dibelakang koma)
const penjumlahan = 0.3 + 0.7;
console.log(penjumlahan) //output: 1 (terjadi pembulatan)

const jumlah = 0.2 + 0.3;
console.log(jumlah) //output: 0.30000000000000004 (hasilnya tidak akurat)

//Eksponen
const angkaEksponen = 123e5;
console.log(angkaEksponen) //output: 12300000

const eksponen = 123e-5;
console.log(eksponen) //output: 0.00123

//Bilangan negatif
let angkaNegatif = -2 + -5;
console.log(angkaNegatif) //output: -7

//Angka special (infinity, -infinity, NaN)
let angkaInfinity = 2 / 0;
console.log(angkaInfinity) //output: Infinity

let negatifInfinity = -2 / 0;
console.log(negatifInfinity) //output: -Infinity

let angkaNan = 0 /0;
console.log(angkaNan) //output: NaN (Not a Number)

let hasilNan = 100 / "apel";
console.log(hasilNan) //output: NaN

//Hati-hati!
let pembagian = 100 / "10";
console.log(pembagian) //output: 10

let bagi = "10" / 5;
console.log(bagi) //output: 2

//3. Tipe data boolean -> biasanya digunakan pada statement pengkondisian
//Boolean memiliki 2 nilai yaitu true/false
let cekNilai = 5 > 3;
console.log(cekNilai) //output: true

let cekNama = "Sandika" == "sandika";
console.log(cekNama) //output: false -> besar huruf kecil berbeda

let cekNama2 = "Isti" === "isti";
console.log(cekNama) //output: true -> sama-sama tipe data string

//4. Tipe data object --> berisi properti, dimana tiap properti didefinisikan dengan pasangan key dan value
// biasanya digunakan pada kirim dan terima data melalui API backend.
var x = {
	nama: 'Ngoding Channel',
	episode: 'Javascript'
};

console.log(x.episode) //output: Javascript

//5. Tipe data array --> dapat menampung berbagai tipe data didalamnya.
var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"];
   
alert(colors[0]);   // Output: Red
alert(cities[2]);   // Output: New York

//6. Tipe Data Tidak Terdefinisi (Undefined)
// Jika suatu variabel telah dideklarasikan, tetapi belum diberi nilai, nilainya undefined.
var a;
var b = "Hello World!"
   
alert(a) // Output: undefined
alert(b) // Output: Hello World!

//7. Tipe Data Null --> Nilai null berarti tidak ada nilai.
// Nilai null tidak setara dengan string kosong (“”) atau 0, itu tidak berarti apa-apa.
var a = null;
alert(a); // Output: null
   
var b = "Bebek"
alert(b); // Output: Bebek
