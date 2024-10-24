// Atribuição dos elementos HTML às variáveis
const campoValor = document.getElementById("valor");
const botaoGerar = document.getElementById("botaoGerar");
const tabelaTabuada = document.getElementById("tabuada");

// Função principal que será chamada ao clicar no botão
botaoGerar.addEventListener("click", () => {
    const numeroEscolhido = parseInt(campoValor.value); // Pegando o valor do input
    
    // Validação do campo
    if (isNaN(numeroEscolhido)) {
        alert("Por favor, insira um número válido.");
        return;
    }
    
    // Limpar a tabela anterior
    tabelaTabuada.innerHTML = "";

    // Cabeçalho da tabela
    const cabecalho = tabelaTabuada.insertRow();
    const celula1 = cabecalho.insertCell();
    const celula2 = cabecalho.insertCell();
    const celula3 = cabecalho.insertCell();
    celula1.textContent = "Número";
    celula2.textContent = "x";
    celula3.textContent = "Resultado";
    cabecalho.style.fontWeight = "bold";

    // Gerar a tabuada usando uma abordagem diferente: criando uma tabela
    for (let i = 1; i <= 10; i++) {
        const linha = tabelaTabuada.insertRow(); // Criar linha para cada multiplicação

        const celulaNumero = linha.insertCell();
        const celulaMultiplicador = linha.insertCell();
        const celulaResultado = linha.insertCell();

        celulaNumero.textContent = numeroEscolhido; // Número escolhido
        celulaMultiplicador.textContent = i; // Multiplicador (1 a 10)
        celulaResultado.textContent = numeroEscolhido * i; // Resultado da multiplicação
    }

    // Efeito visual para a tabela
    tabelaTabuada.style.borderCollapse = "collapse";
    tabelaTabuada.style.marginTop = "20px";

    Array.from(tabelaTabuada.rows).forEach((linha, index) => {
        linha.style.backgroundColor = index % 2 === 0 ? "#f0f0f0" : "#ffffff";
        linha.style.border = "1px solid #ddd";
    });
});
