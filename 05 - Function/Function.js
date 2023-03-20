// Function, method function, dan callback function

// Jenis function berdasarkan cara pendeklarasian
//1. Function declaration
function deklarasi(){
    console.log("Ini adalah function declaration");
}
deklarasi();
//output: Ini adalah function declaration

console.log(deklarasi);
//output: ƒ deklarasi() {} --> <constructor>: "Function" --> name: "Function"

//2. Function expression
const ekspresi = function() {
    console.log("Ini adalah function expression");
};
ekspresi();
//output: Ini adalah function expression

console.log(ekspresi);
//output: ƒ ekspresi() {} --> <constructor>: "Function" --> name: "Function"

//3. Arrow function
//jika hanya 1 parameter tidak wajib dibungkus kurung
//jika parameter lebih dari 1 wajib dibungkus kurung
//jika tidak ada parameter, tetap wajib menggunakan kurung
//konsep this akan berbeda ketika kita menggunakan arrow

const panah = () => {
    console.log("Ini adalah arrow function");
}
panah();
//output: Ini adalah arrow function
console.log(panah);
//output: ƒ panah() {} --> <constructor>: "Function" --> name: "Function"

//4. Function constructor
const konstruktor = new Function('console.log("ini adalah function contructore")');
konstruktor();
//output: ini adalah function contructore

//5. Method function
//Method adalah fungsi di dalam objek.  
//untuk mengakses bagian lain dari objek menggunakan kata kunci this.

const user = {
    name: "isti",
    age: 25,
    generated(){
        return `halo nama saya ${this.name}, usia saya ${this.age} tahun`
    }
}
console.log(user.generated())
//output: halo nama saya isti, usia saya 25 tahun

//6. Callback function
//Callback Function adalah function biasa, yang dikirimkan sebagai parameter ke 
//function lain, kemudian dieksekusi di function tersebut.

function generate(name, callback){
    let result = `Nama saya ${name}`
    callback(result)
}

function show (payload) {
    console.log(payload)
}

generate("Isti", show)
//output: Nama saya Isti 