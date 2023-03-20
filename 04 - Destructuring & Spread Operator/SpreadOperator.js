// Spread operator

// Spread operator
// 1. Spread operator pada string
const str = "Javascript";
console.log(...str); //output: J a v a s c r i p t 

// 2. Spread operator pada array
const arr = [1,2,3,4,5];
console.log(...arr); //output: 1 2 3 4 5

// 3. Spread operator pada object
const obj = {
    nama: "Jessica",
    usia: 29
};
console.log({...obj}); //output: {nama: "Jessica", usia: 29}

const dress = {
    brand : "This is April",
    size : "International",
    kategori : {
        casual : "Casual dress",
        party : "Party dress",
    }
}

const {brand, size, ...Lainnya} = dress;
console.log(brand, size, Lainnya);
//Output: This is April International, {kategori: object}
// kategori: object, casual: "Casual dress", party: "Party dress"

// 4. Spread operator pada array
const siswa = [{
    nama: "Bella",
    usia: 29
}];
console.log(...siswa); //output: {nama: "Bella", usia: 29}

// Contoh penggunaan spread operator
// 1. sebagai parameter
const angka = [1,2,3];
function hitung(a, b, c) {
    return a + b + c;
}

// Cara biasa
const hasil = hitung(angka[0], angka[1], angka[2]);
console.log(hasil); //output: 6

// Cara pakai spread operator
const nilai = hitung(...angka);
console.log(nilai); //output: 6

// 2. array / object concatination
// array concatination
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
const arrGabung = [...arr1, ...arr2];
console.log(arrGabung); //output: [1, 2, 3, 4, 5, 6, 7, 8]

const ikan = ["hiu", "lumba-lumba", "bandeng"];
const newIkan = ["indosiar"];
console.log(...ikan, ...newIkan)
//output: hiu lumba-lumba bandeng indosiar

// object concatination
const band = {band1: "Shiela on 7", band2: "Tulus"};
const newBand = {band3: "Noah"};
console.log({...band, ...newBand});
//output: {band1: "Shiela on 7", band2: "Tulus", band3: "Noah"}



