// ==========================================
// B.1 - Definição dos dados (JSON)
// ==========================================

const catalogo = [
    {
        id: 1,
        titulo: "Velozes e Furiosos",
        tipo: "filme",
        ano: 2007,
        generos: ["Ação", "Aventura"],
        nota: 9.9,
        assistido: true
    },
    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.8,
        assistido: true
    },
    {
        id: 3,
        titulo: "Round 6",
        tipo: "serie",
        ano: 2021,
        generos: ["suspense"],
        nota: 8.7,
        assistido: false
    },
    {
        id: 4,
        titulo: "Vingadores: Ultimato",
        tipo: "filme",
        ano: 2019,
        generos: ["ação", "aventura"],
        nota: 8.9,
        assistido: true
    },
    {
        id: 5,
        titulo: "The Batman",
        tipo: "filme",
        ano: 2022,
        generos: ["ação", "mistério"],
        nota: 8.5,
        assistido: false
    },
    {
        id: 6,
        titulo: "Dark",
        tipo: "serie",
        ano: 2017,
        generos: ["ficção científica", "mistério"],
        nota: 9.1,
        assistido: true
    }
];

// ==========================================
// B.2 - Acesso e leitura dos dados
// ==========================================

console.log("Catálogo completo:");
console.log(catalogo);

// Título do primeiro item
console.log("Primeiro título:", catalogo[0].titulo);

// Ano do último item
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

// Segundo gênero do terceiro item
if (catalogo[2].generos[1]) {
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas 1 gênero.");
}

// ==========================================
// B.3 - Iterações com iterators
// ==========================================

// A) forEach
console.log("=== LISTAGEM ===");

catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B) map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());

console.log("=== TÍTULOS EM MAIÚSCULO ===");
console.log(titulosEmCaixaAlta);

// C) filter
const naoAssistidos = catalogo.filter(item => item.assistido === false);

console.log("Quantidade de não assistidos:", naoAssistidos.length);

// D) find
const notaAlta = catalogo.find(item => item.nota >= 9);

if (notaAlta) {
    console.log(`Primeiro item com nota >= 9: ${notaAlta.titulo} - Nota ${notaAlta.nota}`);
} else {
    console.log("Nenhum item com nota maior ou igual a 9.");
}

// E) reduce

// Média geral
const somaNotas = catalogo.reduce((acc, item) => acc + item.nota, 0);

const mediaGeral = somaNotas / catalogo.length;

console.log("Média geral:", mediaGeral.toFixed(2));

// Média dos assistidos
const assistidos = catalogo.filter(item => item.assistido);

const somaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));

// F) some e every

const existeAntigo = catalogo.some(item => item.ano < 2000);

const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Existe item antes de 2000?", existeAntigo);
console.log("Todos possuem pelo menos 1 gênero?", todosTemGenero);

// ==========================================
// B.4 - Saída na tela (DOM)
// ==========================================

// Quantidade de filmes
const quantidadeFilmes = catalogo.filter(item => item.tipo === "filme").length;

// Quantidade de séries
const quantidadeSeries = catalogo.filter(item => item.tipo === "serie").length;

// Ranking das 3 maiores notas
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p><strong>Total de itens:</strong> ${catalogo.length}</p>

    <p><strong>Filmes:</strong> ${quantidadeFilmes}</p>

    <p><strong>Séries:</strong> ${quantidadeSeries}</p>

    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>

    <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 Notas</h3>

    <ol>
        ${ranking.map(item => `
            <li>${item.titulo} - Nota ${item.nota}</li>
        `).join("")}
    </ol>
`;