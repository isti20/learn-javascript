// export sebuah array
export const numbers = [1, 2, 3, 4];
const month = ['januari', 'februari', 'maret']; // Not available directly outside the module

// export sebuah konstanta
export const year = 2023;

// export sebuah function
export function myDate() {
  console.log(numbers, month);
}

// export sebuah class
export class MyMonth {
   constructor(name) {
    this.name = name;
   }
}

// tidak ada titik koma (;) di akhir export class dan export function