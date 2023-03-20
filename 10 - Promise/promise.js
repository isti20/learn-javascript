// Promise
// Callback adalah function
// Promise adalah object

// 1. Membuat promise
const janji = new Promise(function(resolve, reject) {

});
console.log(janji); //output: Promise {<pending>}

// 2. Membuat promise menggunakan callback function (resolve dan reject)
let progress = 100;

const download = new Promise((resolve, reject) => {
  if (progress === 100) {
    resolve('Download complete');
  } else {
    reject('Download failed');
  } 
});

download
  .then((result) => {
    console.log(result); // Download complete
  })
  .catch((error) => {
    console.log(error); // Download failed atau tidak ditampilkan jika tidak ada error
  })
  .finally(() => {
    console.log("Selesai"); // Selesai
  })

// promise handler jika kondisi (state) terpenuhi
// menggunakan method .then()

// Promise handler jika kondisi (state) tidak terpenuhi (gagal)
// menggunakan method .catch

// promise handler jika kondisi (state) terpenuhi atau tidak terpenuhi
// menggunakan method .finally

// 3. Promise Chaining
let initProgress = 0;

const download2 = new Promise((resolve, reject) => {
  let progress = initProgress + 25;
  resolve(progress);
});

download2
  .then((result) => {
    console.log(`Download progress is ${result}%`);
    return result + 25;
  })
  .then((result) => {
    console.log(`Download progress is ${result}%`);
    return result + 50;
  })
  .then((result) => {
    if (result === 100) {
      console.log('Download complete');
    }
  });

// 4. Method Promise.all() : mengeksekusi Promise secara paralel
const downloadStart = new Promise((resolve, reject) => {
  resolve('0%');
});
const downloadHalf = new Promise((resolve, reject) => {
  resolve('50%');
});
const downloadFull = new Promise((resolve, reject) => {
  resolve('100%');
});

Promise
.all([downloadStart, downloadHalf, downloadFull])
.then((result) => {
  console.log(result); // [ '0%', '50%', '100%' ]
});

// 5. Callback Vs Promise
// Callback hell
const download3 = (url, callback) => {
  console.log(`Downloading from ${url}....`);
  
  callback();
};
  
const url1 = 'https://brachio.site/download';
const url2 = 'https://trex.site/download';
const url3 = 'https://stego.site/download';
  
download3(url1, function () {
  download3(url2, function () {
    download3(url3, function () {
      console.log('Download complete!');
    });
  });
});

// output:
// Downloading from https://brachio.site/download....
// Downloading from https://trex.site/download.... 
// Downloading from https://stego.site/download.... 
// Download complete!

// Promise 
const download4 = (url) => {
  return new Promise((resolve, reject) => {
    resolve(`Downloading from ${url}....`);
  });
};

const url4 = 'https://brachio.site/download';
const url5 = 'https://trex.site/download';
const url6 = 'https://stego.site/download';

Promise
.all([download4(url4), download4(url5), download4(url6)])
.then((result) => {
  for (let downloadInfo of result) {
    console.log(downloadInfo);
  }
  console.log('Download Complete');
});

// output:
// Downloading from https://brachio.site/download....
// Downloading from https://trex.site/download.... 
// Downloading from https://stego.site/download.... 
// Download complete!

// 6. Async Await
// untuk menghandle operasi asynchronous dengan syntax mirip synchronous.
// Async/Await dibuat di atas Promise

// keyword await membuat function download harus menunggu 
// sampai function getStatus() selesai dieksekusi.
// Keyword await harus berada di dalam function async
const getStatus = (url) => {
  console.log(`Downloading from ${url}...`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Download Complete');
    }, 3000);
  });
};

async function download(url) {
  let status = await getStatus(url); // tunggu sampai promise selesai
  console.log(status);
}

const url = 'https://brachio.site/download';

download(url);

// output:
// Downloading from https://brachio.site/download...
// Download Complete

// 7. Promise vs Async Await
const download5 = (url) => {
  return new Promise((resolve, reject) => {
    resolve(`Downloading from ${url}....`);
  });
};

const url7 = 'https://brachio.site/download';
const url8 = 'https://trex.site/download';
const url9 = 'https://stego.site/download';

Promise
.all([download5(url7), download5(url8), download5(url9)])
.then((result) => {
  for (let downloadInfo of result) {
    console.log(downloadInfo);
  }
  console.log('Download Complete');
});

// output:
// Downloading from https://brachio.site/download....
// Downloading from https://trex.site/download.... 
// Downloading from https://stego.site/download.... 
// Download complete!

// Kita juga bisa menggunakan arrow function
const download7 = (url) => {
  return new Promise((resolve, reject) => {
    resolve(`Downloading from ${url}....`);
  });
};

const url13 = 'https://brachio.site/download';
const url14 = 'https://trex.site/download';
const url15 = 'https://stego.site/download';

const runDownload = async () => {
  let result1 = await download7(url13);
  console.log(result1);

  let result2 = await download7(url14);
  console.log(result2);

  let result3 = await download7(url15);
  console.log(result3);

  console.log('Download Complete');
};

runDownload(); // run async function

// output:
// Downloading from https://brachio.site/download....
// Downloading from https://trex.site/download.... 
// Downloading from https://stego.site/download.... 
// Download complete!



