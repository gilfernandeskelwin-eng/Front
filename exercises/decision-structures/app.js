// --- Parte 1: Switch para Meses ---
const mes = 3; // Você pode mudar esse número de 1 a 12

switch (mes) {
    case 1: console.log("Janeiro"); break;
    case 2: console.log("Fevereiro"); break;
    case 3: console.log("Março"); break;
    case 4: console.log("Abril"); break;
    case 5: console.log("Maio"); break;
    case 6: console.log("Junho"); break;
    case 7: console.log("Julho"); break;
    case 8: console.log("Agosto"); break;
    case 9: console.log("Setembro"); break;
    case 10: console.log("Outubro"); break;
    case 11: console.log("Novembro"); break;
    case 12: console.log("Dezembro"); break;
    default: console.log("Mês inválido!");
}

// --- Parte 2: Sistema de Notas ---
const nota = 8.5; // Altere para testar

if (nota >= 9) {
    console.log("Nota " + nota + ": Excelente");
} else if (nota >= 7) {
    console.log("Nota " + nota + ": Bom");
} else if (nota >= 5) {
    console.log("Nota " + nota + ": Regular");
} else {
    console.log("Nota " + nota + ": Reprovado");
}