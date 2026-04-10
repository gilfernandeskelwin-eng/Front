const readline = require('readline-sync');

console.log("--- Loop FOR (1 a 10) ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n--- Loop FOR com incremento de 2 (Pares 2 a 20) ---");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log("\n--- Loop WHILE (Senha) ---");
let senha = "";
while (senha !== "1234") {
    senha = readline.question("Digite a senha: ");
}
console.log("Senha correta!");