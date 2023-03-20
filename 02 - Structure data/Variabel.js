// Variabel data
//Variabel adalah tempat/wadah yang memiliki nama, yang digunakan untuk menyimpan nilai

// Keterangan:
//Pada Javascript kita dianjurkan menggunakan camelCase dalam penamaan.
//Scope adalah dimana variabel itu akan digunakan.
//Scope global: pendeklarian variabel diluar function (dapat digunakan di seluruh tempat)
//Scope function: pendeklarian variabel didalam function (hanya dapat digunakan di dalam blok function)
//Hoisting: pendeklarasian variabel dan function naik ke atas Scopenya sebelum kode di eksekusi. 
//Blok: bagian dari kode yang dikelilingi oleh {}.
//Inisialisasi: tugas pemberian nilai awal yang dilakukan saat deklarasi variabel atau obyek

//1. Membuat variabel data
// 1) Menggunakan var
//Variabel var memiliki scope global dan scope function
var red = "merah"; //scope global
function pelangi(){
    var colors = "mejikuhibiniu"; //scope function
    console.log(colors);
}
pelangi(); //output: mejikubiniu
console.log(red); //output: merah
console.log(colors) //eror: colors is not defined --> var colors tidak dapat digunakan diluar scope function

//Variabel var bukan scope blok
{
    var x = 2;
}
console.log(x) //output: 2

//Variabel var dapat dideklarasikan ulang
var greeter = "hey hi";
var greeter = "say Hello instead";
console.log(greeter) //output: say Hello instead

var sapa = "hi";
sapa = "hello";
console.log(sapa) //output: hello

var aa = 4; //dapat diletakan diluar atau didalam blok (bebas penempatan)
{
    var aa = 7;
}
console.log(aa) //output: 7

//Hoisting pada var akan terinisialisasi undefined
console.log (mangga); //output: undefined
var mangga = "harum manis"

//masalah dengan var
var person = "hi";
var times = 4;
if (times > 3){
    var person = "Hello";
}
console.log(person) //output: Hello

// 2) Menggunakan let
//let adalah scope blok
let buah = "apel";
let jumlah = 4;
if (jumlah>3){
    let buahMahal = "Kelengkeng";
    console.log(buahMahal); //output: kelengkeng
}
console.log(buahMahal); //error: buahMahal is not defined

//let dapat diperbaharui tapi tidak dapat di deklarasikan ulang didalam scopenya
let laptop = "acer";
laptop = "asus";
console.log(laptop) //output: asus

// let hari = "senin";
// let hari = "selasa";
console.log(hari) //SyntaxError: Identifier 'hari' has already been declared (karena berada di scope yang sama)

// Variabel tidak dapat di deklarasikan lebih dari sekali di scope nya
let bulan = "januari";
if (true) {
    let bulan = "bulan kelahiranku";
    console.log(bulan); //output: bulan kelahiranku (tidak eror karena berada di scope yang berbeda)
}
console.log(bulan); //output: januari

//Hoisting pada let tidak akan terinisialisasi
console.log (jeruk); //ReferenceError: Cannot access 'greeter' before initialization
let jeruk = "jeruk bali"

// 3) Menggunakan const 
//Variabel yang di deklarasikan dengan const akan mempertahankan nilai nya. 
//Const adalah scope blok sama seperti let
//Const digunakan saat mendeklarasikan array baru, function baru, object baru, RegExp baru

//Const tidak dapat diperbaharui atau di deklarasikan ulang
const kopi = "kopi hitam";
kopi = "kopi tubruk";
console.log(kopi); //TypeError: Assignment to constant variable

// const pisang = "pisang ambon";
// const pisang = "pisang raja";
consosle.log(pisang); //SyntaxError: Identifier 'pisang' has already been declared

//Saat const dideklarasikan sebagai object, properti nya dapat di perbaharui
const siswa = {
    siswa1: "andena",
    siswa2: "safina"
}
siswa.siswa1 = "sofiyah";
console.log(siswa.siswa1) //output: sofiyah

//Hoisting pada const --> sama seperti let
console.log(nanas); //ReferenceError: Cannot access 'nanas' before initialization
const nanas = "warnanya orange"

//2. Menampilkan isi variabel
//Mengunakan fungsi console.log() --> menampilkan output ke console javascript
var tahun = 2021;
console.log(tahun) //output: 2021

//Menggunakan fungsi document.write() --> menampilkan output ke dokumen HTML
document.write("Ulangi kalimat ini! ".repeat(10));
//output: 'Ulangi kalimat ini!' s.d 10x

//Menggunakan fungsi alert() menampilkan output ke jendela dialog
var makanan = "Brownis";
alert(makanan); //output: Brownis


