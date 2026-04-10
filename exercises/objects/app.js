const pessoa = {
    nome: "Ricardo",
    idade: 17,
    profissao: "Desenvolvedor",
    apresentar: function() {
        return `Olá, eu sou o ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
    }
};

console.log("--- Desafio Pessoa ---");
console.log(pessoa.apresentar());

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ligar: function() {
        console.log(`O ${this.marca} ${this.modelo} está ligado: VRUMMM!`);
    }
};

console.log("\n--- Desafio Carro ---");
carro.ligar();

const loja = {
    monitor: 1200,
    teclado: 150,
    mouse: 80,
    headset: 250
};

console.log("\n--- Itens da Loja (usando Object.entries) ---");

Object.entries(loja).forEach(([produto, preco]) => {
    console.log(`Produto: ${produto} | Preço: R$ ${preco}`);
});