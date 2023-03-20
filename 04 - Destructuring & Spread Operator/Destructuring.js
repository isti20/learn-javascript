// Destructuring assignment: memecah item dari array/object ke dalam variabel yang berbeda

// 1. Destructuring array
// Mengambil nilai elemen array menggunakan index
const listBuah = ["mangga", "apel", "jeruk", "anggur", "durian"];
const buah1 = listBuah[0];
const buah2 = listBuah[1];

console.log(buah1, buah2); // Output: mangga, apel

// Mengambil nilai elemen array menggunakan destructuring
const listWarna = ["merah", "kuning", "hijau", "biru", "jingga"];

const [warna1, warna2, warna3, warna4, warna5] = listWarna;
console.log(warna1, warna2, warna3, warna4, warna5); //output: merah, kucing, hijau, biru, jingga

let [iniwarna0] = listWarna;
console.log(iniwarna0); // output: merah

let [,iniwarna1] = listWarna;
console.log(iniwarna1); // output: kuning

let [,,iniwarna2] = listWarna;
console.log(iniwarna2); // output: hijau

const colors = ["red", "green", "blue"]
const [r,g,b] = colors
console.log(r,g,b) //output: red green blue

// 2. Destructuring object 
// Mengambil nilai properti pada object tanpa menggunakan destructuring
const mobil = {
    merek : "Toyota",
    warna : "Hitam",
    roda : 4,
    negara : "Jepang",
    tipe : {
        rush : "Toyota rush",
        fortuner : "Toyota fortuner",
    }
}

const merek = mobil.merek;
const warna = mobil.warna;
const tipeRush = mobil.tipe.rush;
console.log(merek, warna, tipeRush); //Output: Toyota, Hitam, Toyota rush

// Mengambil nilai properti pada object menggunakan destructuring
const buku = {
    judul : "Harry potter",
    harga : 250000,
    halaman : 100,
    bab : 200,
    pengarang : {
        namaPengarang : "J.K Rowling",
        negara : "Inggris"
    },
    penerbit : {
        namaPenerbit : "Gramedia",
        kota : "Jakarta",
        tahun : 2023
    }
  };
  
const {judul, harga, halaman, bab, pengarang} = buku;
console.log(judul, harga, halaman, bab, pengarang); 
//Output: Harry potter, 250000, 100, 200, {nama: "J.K Rowling", negara: "Inggris"}

// mengambil nilai object pengarang di dalam object buku
const {pengarang: {namaPengarang}} = buku;
console.log(judul, namaPengarang);
//Output: Harry potter, J.K Rowling

const {penerbit: {namaPenerbit, kota, tahun}} = buku;
console.log(judul, namaPenerbit, kota, tahun);
//Output: Harry potter Gramedia Jakarta 2023

// mengambil nilai object di function parameter
function infoBuku({judul, harga, pengarang: {nama}}){
    const pesan = `buku ${judul} karya ${nama} dijual dengan harga ${harga}`;
    console.log(pesan);
}

infoBuku(buku);
//output: buku Harry potter karya undefined dijual dengan harga 250000

// 3. Mengambil nilai properti pada object di function parameter 
// 1) menggunakan destructuring
const mie = {
    varian : "Goreng",
    harga : 3500,
    jumlah : 200,
    rasa : {
        rendang : "Rendang",
        soto : "Soto"
    }
  }
  
// mengambil nilai object di function parameter tanpa destructuring
function infoMie(varian, harga, rasaRendang){
console.log(varian, harga, rasaRendang);
}
infoMie(mie.varian, mie.harga, mie.rasa.rendang);
//Output: Goreng, 3500, Rendang

// mengambil nilai object di function parameter menggunakan destructuring
function infoMie2({varian, jumlah, harga, rasa}){
console.log(varian, harga, jumlah, rasa)
}
infoMie2(mie)
//Output: Goreng 3500 200, {rendang: "Rendang", soto: "Soto"} --> rendang: "Rendang", soto: "Soto"


function penjumlahan([angka1, angka2]){
const penjumlahan = angka1 + angka2;
const pesan = `Hasil penjumlahan kedua bilangan adalah ${penjumlahan}`;
console.log(pesan);
}
penjumlahan([10,5]);
//output: Hasil penjumlahan kedua bilangan adalah 15

// 2) menggunakan alias dan default value
const minuman = {
    varian : "Kopi",
    harga : 10000,
    jumlah : 100,
    rasa : {
        mangga : "Rendang",
        jeruk : "Soto"
    }
}

// destructuring di function menggunakan alias
function infoMinuman({varian, harga, jumlah: jml}) {
    console.log(varian, harga, jml);
}
infoMinuman(minuman) //Output: Kopi 10000 100

// destructuring di object menggunakan default value
const car = {id:1, color:"White", merk:"Toyota"};
const {id, color, merk:brand2, type="Avanza"} = car
console.log(id, color, brand2, type)
//output: 1 "White" "Toyota" "Avanza"

// destructuring di function menggunakan default value
function infoMinuman2({varian, harga, packaging = "Botol"}){
    console.log(varian, harga, packaging)
}
infoMinuman2(minuman)
//Output: Kopi 10000 Botol
// jika tidak ada properti packaging di object minuman, maka
// akan mengambil default value properti packaging yaitu botol

