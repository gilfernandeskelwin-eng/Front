let frutas = ["Maçã", "Banana", "Uva"];
console.log("Original:", frutas);

frutas.push("Laranja");    
frutas.unshift("Morango"); 
console.log("Após adições:", frutas);

frutas.pop();             
frutas.shift();            
console.log("Após remoções:", frutas);

const numeros = [10, 5, 8, 3, 12, 7];

const pares = numeros.filter(num => num % 2 === 0);
console.log("Apenas pares:", pares);

const quadrados = numeros.map(num => num * num);
console.log("Ao quadrado:", quadrados);

const somaTotal = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log("Soma total:", somaTotal);

const ordenados = [...numeros].sort((a, b) => a - b); 
console.log("Ordenado:", ordenados);
console.log("Invertido:", [...ordenados].reverse());