let a = 5;
let b = 7;

// Operador igual (==)
if (a == b) {
    console.log("a es igual a b");
} else {
    console.log("a no es igual a b");
}

// Operador estrictamente igual (===)
if (a === b) {
    console.log("a es estrictamente igual a b");
} else {
    console.log("a no es estrictamente igual a b");
}

// Operador distinto (!=)
if (a != b) {
    console.log("a no es igual a b");
} else {
    console.log("a es igual a b");
}

// Operador estrictamente distinto (!==)
if (a !== b) {
    console.log("a no es estrictamente igual a b");
} else {
    console.log("a es estrictamente igual a b");
}

// Operadores de comparación (<, <=, >, >=)
if (a < b) {
    console.log("a es menor que b");
}

if (a <= b) {
    console.log("a es menor o igual que b");
}

if (a > b) {
    console.log("a es mayor que b");
}

if (a >= b) {
    console.log("a es mayor o igual que b");
}

// Operador AND (&&)
if (a < 10 && b > 5) {
    console.log("a es menor que 10 y b es mayor que 5");
}

// Operador OR (||)
if (a < 10 || b < 10) {
    console.log("a es menor que 10 o b es menor que 10");
}

// Operador NOT (!)
if (!(a == b)) {
    console.log("a no es igual a b");
}