//Conditional (percabangan)

//1. Percabangan IF-ELSE
const active = true

if (active)
console.log("Hore")
else
console.log("Oopss")
//output: Hore

const newActive = false

if (newActive)
console.log("Hore")
else
console.log("Oopss")
//output: Oopss

//2. Percabangan SWITCH-CASE
const fruit = 'orange';

switch (fruit) {
 case 'orange':
 console.log('Orange');
 break;
 case 'melon':
 console.log('melon');
 break;
 default:
 console.log('Buah tidak ditemukan!');
}
//output: orange

//3. Percabangan TERNARI OPERATOR
let age = 18;
let message;

message = age >= 16 ? 'You can drive.' : 'You cannot drive.';
console.log(message);
//output: You can drive

let angka = 18;
let pesan;

if (angka >= 16) {
  pesan = 'OK';
} else {
  pesan = 'Not OK';
}

console.log(pesan);
//output: OK

let number = 18;
let say;

number >= 16 ? (say = 'Hello guys!') : (say = 'Hai gengs!');

console.log(say);
//output: Hello guys!

//4. Conditional Variabel
// Assignment variabel dengan pengecekan kondisi tertentu
const hargaBuku = 90000;
const kategori = hargaBuku >= 70000 ? "Mahal" : "Murah";
console.log(kategori); //output: Mahal

const umur = 30;
const kondisiAnd = umur < 50 && "Masih muda"; //jika kondisi true, akan mereturn "Masih muda"
const kondisiOr = umur > 50 || "Hello"; //jika kondisi false, akan mereturn "Hello"
console.log(kondisiAnd); //output: Masih muda
console.log(kondisiOr) //output: Hello

const nilaiku = 80;
const hasilku = (nilaiku >= 40) ? ((nilaiku >= 70) ? 'nilai A' : 'nilai B') : 'nilai C';
console.log(hasilku) //output: nilai A

function disc(member) {
    return (member ? "Rp. 5000" : "Rp. 0");
}
console.log(disc(true)); //output: Rp. 5000
console.log(disc(false)); //output: Rp. 0
console.log(disc(null)); //output: Rp. 0

//5. Manipulasi data array dengan method map() dan filter()
const codes = [101, 212, 667];
let mathCodes = codes.map((code) => {
    return `math${code}`;
})

console.log(mathCodes);
//output: ["math101", "math212", "math667"]

const numbers = [101, 212, 667];
let memberCodes = numbers.map(function(code) {
    return `Member${code}`;
})

console.log(memberCodes);
//output: ["Member101", "Member212", "Member667"]

const namaMember = ["Safira", "Andena", "Sofia"];
let panjangNama = namaMember.map((nama) => nama.length);
console.log(panjangNama);
//output: [6, 6, 5]

const angkaKuadrat = [9, 25, 36, 49];
let akarKuadrat = angkaKuadrat.map((hasil) => {
    return Math.sqrt(hasil);
});

console.log(akarKuadrat);
//output: [3, 5, 6, 7]

const nilaiAkhir = [70, 80, 90, 100];

nilaiAkhir.map((nilai, indexNilai, array) => {
    console.log("Nilai " + nilai);
    console.log("Index " + indexNilai);
    console.log("Array " + array);
    return nilaiAkhir;
})
//output: Nilai 70 Index 0 Array 70,80,90,100, dst

const siswa = [
    {namaDepan : "Safira", namaBelakang: "Salsabilla"},
    {namaDepan : "Andena", namaBelakang: "Digantara"},
    {namaDepan : "Sofia", namaBelakang: "Oktadian"}
];

let namaLengkap = siswa.map(siswa => {
    return `${siswa.namaDepan} ${siswa.namaBelakang}`;
})

console.log(namaLengkap);
//output: ["Safira Salsabilla", "Andena Digantara", "Sofia Oktadian"]

const listNilai = [
  {
    nama: "Safira",
    nilai: 80,
    tahun : 2020,
  },
  {
    nama: "Andena",
    nilai: 70,
    tahun: 2022,
  },
  {
    nama: "Sofia",
    nilai: 90,
    tahun: 2021,
  },
];

const nilaiMath = listNilai.map((value) => value.nama);
console.log(nilaiMath);
//output: ["Safira", "Andena", "Sofia"]

const hasilSiswa = listNilai
.filter((siswa) => siswa.tahun > 2020)
.map((siswa) => {
    if (siswa.nilai > 70){
        return siswa.nama + ': Lulus'
    } else return siswa.nama + ": Tidak lulus"
});

console.log(hasilSiswa);
//output: ["Andena: Tidak lulus", "Sofia: Lulus"]

const nilaiTambahan = listNilai.map((newValue) => newValue.nilai+5);
console.log(nilaiTambahan);
//output: [85, 75, 95]

const nilaiSiswa = listNilai.filter((Value) => Value.nilai);
console.log(nilaiSiswa);
//output: [Object, Object, Object]
// 0: Object => nama: "Safira" nilai: 80 tahun: 2020
// 1: Object => nama: "Andena" nilai: 70 tahun: 2022
// 3: Object => nama: "Sofia" nilai: 90 tahun: 2021

const namaSiswa = listNilai.filter((Value) => Value.nama);
console.log(namaSiswa);
//output: [Object, Object, Object]
// 0: Object => nama: "Safira" nilai: 80 tahun: 2020
// 1: Object => nama: "Andena" nilai: 70 tahun: 2022
// 3: Object => nama: "Sofia" nilai: 90 tahun: 2021