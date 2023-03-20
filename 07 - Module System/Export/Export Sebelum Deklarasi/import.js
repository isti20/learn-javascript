import { numbers, year, myDate, MyMonth } from './export.js';

console.log(numbers); //output: (4) [1, 2, 3, 4]
console.log(year); //output: 2023
myDate(); //output: (4) [1, 2, 3, 4] (3) ['januari', 'februari', 'maret']

const januari = new MyMonth("Januari");
console.log(januari); //output: MyMonth {name: 'Januari'}