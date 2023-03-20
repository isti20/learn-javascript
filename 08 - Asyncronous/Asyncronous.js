// Synchronous
console.log('Hi Brachio');
console.log('the time has come');
console.log('to learn how to code');

//output:
// Hi Brachio 
// the time has come 
// to learn how to code 

// Asynchronous
console.log('Hi Brachio');
setTimeout(function () {
  console.log('the time has come');
}, 3000);
console.log('to learn how to code');

// output:
// Hi Brachio 
// to learn how to code 
// the time has come 

// Teknik untuk menghandle proses async
// 1. Callback
// callback function
const notify = () => {
    console.log('Download complete!');
  };
  
const download = (url, callback) => {
    console.log(`Downloading from ${url}....`);

    callback();
  };
  
const url = 'https://brachio.site/download';
  
download(url, notify);

// output:
// Downloading from https://brachio.site/download.... 
// Download complete! 