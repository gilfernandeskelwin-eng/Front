// 1. Declarando variáveis com diferentes tipos
const nome = "Ricardo";           // String
const idade = 17;                 // Number
const estaEstudando = true;       // Boolean
const nota = null;                // Null (objeto vazio)
const hobby = undefined;          // Undefined

// 2. Mostrando os tipos no console
console.log("--- Tipos de Variáveis ---");
console.log("Tipo de nome:", typeof nome);
console.log("Tipo de idade:", typeof idade);
console.log("Tipo de estaEstudando:", typeof estaEstudando);
console.log("Tipo de nota:", typeof nota);
console.log("Tipo de hobby:", typeof hobby);

// 3. Conversões de tipo
console.log("\n--- Conversões ---");

// String para Número
let textoNumero = "123";
let convertidoParaNumero = Number(textoNumero);
console.log("String para Number:", convertidoParaNumero, "(Tipo:", typeof convertidoParaNumero, ")");

// Número para String
let numeroOriginal = 456;
let convertidoParaString = String(numeroOriginal);
console.log("Number para String:", convertidoParaString, "(Tipo:", typeof convertidoParaString, ")");

// Número para Boolean
let numeroParaBool = 1;
let convertidoParaBool = Boolean(numeroParaBool);
console.log("Number para Boolean:", convertidoParaBool, "(Tipo:", typeof convertidoParaBool, ")");

/*
  --- EXPLICAÇÃO: Diferença entre var, let e const ---
  
  - const: Usado para variáveis que NÃO mudam seu valor após serem criadas. 
    É a escolha preferida hoje em dia para evitar erros de sobrescrita.
    
  - let: Usado para variáveis que VÃO mudar de valor (como contadores ou 
    resultados de cálculos).
    
  - var: É o jeito antigo de declarar variáveis. Hoje em dia é pouco usado 
    porque ele não respeita o "escopo de bloco" (chaves {}) da mesma forma, 
    o que pode causar bugs difíceis de encontrar.
    
  Resumo: Priorize sempre usar 'const'. Se precisar alterar o valor, use 'let'.
  Esqueça o 'var'.
*/