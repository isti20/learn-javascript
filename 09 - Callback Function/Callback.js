// Callback: function yang dieksekusi dalam function lain melalui parameter

// 1. Asynchronous callback
// contoh 1
function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
function processUserInput(callback) {
    const name = prompt("Please enter your name: ");
    callback(name); // output: Hello (nama yang diinput)
  }
  
processUserInput(greeting);

// contoh 2
function main(param1, param2, callback) {
    console.log(param1, param2); //output: 1 2
    callback() //output: Hello callback
}

function myCallback() { 
    console.log('Hello callback!'); 
}

main(1,2,myCallback); 

// contoh 3
function sum(angka1, angka2, cb) {
    let sumResult = angka1 + angka2;
    cb(sumResult) //output: Hasil penjumlahan 120
}

function result(total) {
    console.log('Hasil penjumlahan', total);
}

sum(50,70,result)

// contoh 4
const notify = () => {
    console.log('Download complete!');
  };
  
const download = (url, callback) => {
    console.log(`Downloading from ${url}....`);
    callback();
  };
  
const url = 'https://brachio.site/download';

download(url, notify);

// contoh 5
const download2 = (url, callback) => {
    console.log(`Downloading from ${url}....`);
    callback();
  };
const url1 = 'https://brachio.site/download';
const url2 = 'https://trex.site/download';
const url3 = 'https://stego.site/download';

download2(url1, function () {
    download2(url2, function () {
        download2(url3, function () {
            console.log('Download complete!');
        });
    });
});

// 2. Callback pada Asyncronous
function getData(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            return callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.open("GET",url);
    xhr.send();
}

const data = getData("https://jsonplaceholder.typicode.com/users/1", function(data) {
    console.log(data);
});

//output: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: Object…}


// 3. Function injection atau modifikasi function menggunakan callback
function calculate(angka1, angka2, iniCallback) {
    let result = angka1 + angka2;
    if (typeof iniCallback === "function") {
        result = iniCallback(angka1, angka2);
    }
    return result;
}

let a = calculate(7000, 1000, function(x,y) {return x + y;});
console.log(a); //output: 8000

let b = calculate(7000,2000,(x,y) => x + y);
console.log(b) //output: 9000

let c = calculate(7000, 3000);
console.log(c); //output: 10000

// 4. Callback pada Event listener
document.getElementById("btn").addEventListener("click", function(){
    alert('Halo dunia!');
});

// 5. Ajax
let target_url = "https://jsonplaceholder.typicode.com/users/1";

function getData(url, iniCallback) {
    let req = new XMLHttpRequest();
    req.onload = function(){
        if (req.status === 200){
            let result = req.responseText;
            return iniCallback(JSON.parse(result));
        }
    };
    req.open("GET", url);
    req.send();
}

getData(target_url, (data) => {
    console.log(data);
});
//output: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: Object…}