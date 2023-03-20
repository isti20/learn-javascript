// Rest Parameter
// kombinasi antara spread operator dan destructuring assignment

const users = [
    {id:1, name: "Alfin"},
    {id:2, name: "Bella"},
    {id:3, name: "Carla"},
    {id:4, name: "Dinda"},
    {id:5, name: "Ega"}
];

const [edi, ...lainnya] = users;
console.log(edi); //output: {id: 1, name: "Alfin"}
console.log(lainnya);
// output: [Object, Object, Object, Object]
// 0: Object --> id: 2 name: "Bella"
// 1: Object --> id: 3 name: "Carla"
// 2: Object --> id: 4 name: "Dinda"
// 3: Object --> id: 5 name: "Ega"