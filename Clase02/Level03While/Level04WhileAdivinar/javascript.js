let entrada = prompt("Ingresar el número a adivinar");
let numeroAleatorio = Math.floor(Math.random() * 10);
let vidas = 3;
while (entrada != numeroAleatorio) {
    if (vidas == 0) {
        break;
    }
    entrada = prompt("Ingresar el número a adivinar")
    console.log(` ${entrada} -  ${numeroAleatorio}`)
    vidas--
}