function sayHi(user){
    console.log(`Hello ${user}`);
}

function sayBye(user){
    console.log(`Good bye ${user}`);
}

export { sayHi as hi, sayBye as bye};