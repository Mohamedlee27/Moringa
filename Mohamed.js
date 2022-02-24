function add(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(add(5));

let name = "Mohammed";
name = "James";

const dob = 1990;

console.log(typeof(name));

console.log(typeof(dob));

function counting() {
    for (let i= 1; i<= 10; i++) {
        console.log(name);
    }
}
counting();

function greet(name) {
    console.log(`Hello ${name}, Welcome back!`);
}

greet("James");