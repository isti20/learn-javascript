//Looping (perulangan)

//Counted loop
//1. For loop
// Perulangan dengan kondisi evaluasi yang terpenuhi menjadi salah/false
for (let count = 0; count <= 10; count++) {
    console.log("Perulangan ke-" + count)
}

//output: Perulangan ke-0 s.d Perulangan ke-10

//2. Perulangan dengan Method Foreach() --> biasanya untuk mencetak item di dalam array.
//Menggunakan for dengan operator in
//contoh tanpa menggunakan operator in
var languages = ["Javascript", "HTML", "CSS", "Typescript"];

for(i = 0; i < languages.length; i++){
    document.write(i+". "+ languages[i] + "<br/>");
}
//output: 0.Javascript, 1.HTML, 2.CSS, 3.Typescript

var languages = ["Javascript", "HTML", "CSS", "Typescript"];

//contoh dengan menggunakan operator in
for(i in languages){
    document.write(i+". "+ languages[i] + "<br/>");
}
//output: 0.Javascript, 1.HTML, 2.CSS, 3.Typescript

//Menggunakan method forEach() --> Method forEach() memiliki parameter berupa fungsi callback
var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];

days.forEach(function(day){
    document.write("<p>" + day + "</p>");
});
//output: Senin, Selasa, Rabu, Kamis, Jum'at, Sabtu, Minggu

//Menggunakan methode forEach() dan arrow function
var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];

days.forEach((day) => {
    document.write("<p>" + day + "</p>");
});
//output: Senin, Selasa, Rabu, Kamis, Jum'at, Sabtu, Minggu

//3. Perulangan dengan Method repeat() --> untuk mengulang sebuah teks (string)
//contoh menggunakan perulangan for
for( let i = 0; i < 10; i++){
    document.write("Ulangi kalimat ini!");
}
//output: 'Ulangi kalimat ini!' s.d 10x

//contoh menggunakan method repeat()
document.write("Ulangi kalimat ini! ".repeat(10));
//output: 'Ulangi kalimat ini!' s.d 10x

//Uncounted loop 
//2. While dan Do While
//While --> pengecekan kondisi dilakukan di awal (sebelum mengulang)
var ulang = 1;
while(ulang<=10){
    console.log('Perulangan ke-' +ulang);
    ulang++;
}
//output: Perulangan ke-1 s.d Perulangan ke-10

var ulang = true;
while(ulang){
    console.log('Program selesai');
    ulang++;
    ulang = confirm('Ulangi lagi?');
}
//output: akan mengulang 'Ulangi lagi?' saat variabel ulang bernilai true
//dan akan mencetak 'Program selesai' saat variabel ulang bernilai false

 var ulangi = confirm("Apakah anda mau mengulang?");
 var counter = 0;
 
 while(ulangi){
     var jawab = confirm("Mau mengulang lagi?") //block kode yang akan diulang
     counter++;
     if(jawab == false){
         ulangi = false;
     }
 }
 
 document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali");
 //output: akan mencetak "Apakah anda mau mengulang?". 
 //Jika memilih Cancel akan keluar dari program. Jika memilih OK akan masuk kedalam aksi looping. 
 //Pada aksi looping akan dilakukan pengecak kondisi dahulu
 //kemudian akan mengulang 'Mau mengulang lagi?' saat variabel ulangi bernilai true (memilih OK pada dialog konfirmasi)
 //dan akan mencetak 'Perulangan sudah dilakukan sebanyak ... kali' saat variabel bernilai salah (memilih Cancel pada dialog konfirmasi)

 //Kode diatas dapat disederhanakan seperti ini
 var ulangi = confirm("Apakah anda mau mengulang?");
 var counter = 0;
 
 while(ulangi){
     counter++;
     ulangi = confirm("Mau mengulang lagi?");
 }
 
 document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali");

//Do while --> pengecekan kondisi dilakukan di belakang (sesudah mengulang)
var ulangi = confirm("Apakah anda mau mengulang?");;
var counter = 0;

do {
    counter++;
    ulangi = confirm("Mau mengulang lagi?");
} while(ulangi)

document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali");
//output: akan mencetak "Apakah anda mau mengulang?".
//Jika memilih Cancel TIDAK akan keluar dari program sama seperti saat memilih OK
//Jadi perulangan do/while akan melakukan perulangan 1x dahulu
//Lalu mengecek kondisi yang ada didalam kurung while
//Jika kondisi variabel ulangi bernilai true (memilih OK pada dialog konfirmasi) akan mencetak 'Mau mengulang lagi?'
//dan akan mencetak 'Perulangan sudah dilakukan sebanyak ... kali' saat variabel bernilai salah (memilih Cancel pada dialog konfirmasi)

//3. Perulangan Bersarang (Nested loop)
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        document.write("<p>Perulangan ke " + i + "," + j + "</p>");
    }
}
//output: Perulangan ke 0,1 Perulangan ke 0,2 s.d Perulangan ke 1,0

var ulangi = confirm("apakah anda ingin mengulang?");
var counter = 0;

while (ulangi) {
    counter++;
    var bintang = "*".repeat(counter) + "<br>";
    document.write(counter + ": " + bintang);
    ulangi = confirm("ingin mengulang lagi?");
}
//output: akan mencetak 'apakah anda ingin mengulang?'
//Jika variabel ulangi bernilai true (memilih OK pada dialog konfirmasi),
//Jika memilih Cancel akan keluar dari program. Jika memilih OK akan masuk kedalam aksi looping.
//Pada aksi looping akan dilakukan pengecak kondisi dahulu
//kemudian akan mengulang 'ingin mengulang lagi?' saat variabel ulangi bernilai true (memilih OK pada dialog konfirmasi)
// dan akan mencetak '1: *, 2: **, 3: ***, dst hingga kondisi' saat variabel bernilai salah (memilih Cancel pada dialog konfirmasi)

