function multiplicador(a) {
    return function(b){
        return a * b;
    }
}

let vezes5 = multiplicador(5);
let vezes6 = multiplicador(6);

console.log(vezes5(2));
console.log(vezes6(3));