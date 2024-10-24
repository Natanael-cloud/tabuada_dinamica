// Atribuição dos elementos HTML às variáveis para manipulação posterior
const campoValor = document.getElementById("valor");  // Campo de input onde o usuário insere o número
const botaoGerar = document.getElementById("botaoGerar");  // Botão para gerar a tabuada
const tabelaTabuada = document.getElementById("tabuada");  // Tabela onde a tabuada será exibida

// Adiciona um ouvinte de evento ao botão para executar a função quando o botão for clicado
botaoGerar.addEventListener("click", () => {
    // Obtém o valor digitado no campo de input e o converte para um número inteiro
    const numeroEscolhido = parseInt(campoValor.value); 
    
    // Verifica se o valor inserido é um número válido; caso contrário, exibe um alerta
    if (isNaN(numeroEscolhido)) {
        alert("Por favor, insira um número válido.");  // Alerta de erro se o campo estiver vazio ou inválido
        return;  // Encerra a execução caso o número seja inválido
    }
    
    // Limpa a tabela para que não sejam geradas novas tabuadas em cima das antigas
    tabelaTabuada.innerHTML = "";

    // Cria a primeira linha da tabela, que será o cabeçalho (Número, Multiplicador, Resultado)
    const cabecalho = tabelaTabuada.insertRow();  // Insere uma nova linha no topo da tabela
    const celula1 = cabecalho.insertCell();  // Cria a célula da coluna "Número"
    const celula2 = cabecalho.insertCell();  // Cria a célula da coluna "Multiplicador (x)"
    const celula3 = cabecalho.insertCell();  // Cria a célula da coluna "Resultado"
    
    // Define o texto das células do cabeçalho
    celula1.textContent = "Número";  
    celula2.textContent = "x";
    celula3.textContent = "Resultado";
    
    // Adiciona estilo ao cabeçalho para destacar a primeira linha
    cabecalho.style.fontWeight = "bold";

    // Laço de repetição para gerar as 10 linhas da tabuada (de 1 a 10)
    for (let i = 1; i <= 10; i++) {
        const linha = tabelaTabuada.insertRow();  // Cria uma nova linha para cada multiplicação
        
        // Cria três células para cada linha: número, multiplicador, e resultado
        const celulaNumero = linha.insertCell();  // Célula para o número escolhido
        const celulaMultiplicador = linha.insertCell();  // Célula para o multiplicador (valor de 'i')
        const celulaResultado = linha.insertCell();  // Célula para o resultado da multiplicação

        // Preenche as células com os valores correspondentes
        celulaNumero.textContent = numeroEscolhido;  // Exibe o número que foi inserido pelo usuário
        celulaMultiplicador.textContent = i;  // Exibe o multiplicador (1 a 10)
        celulaResultado.textContent = numeroEscolhido * i;  // Exibe o resultado da multiplicação
    }

    // Aplica estilo para a tabela: bordas suaves e espaçamento nas células
    tabelaTabuada.style.borderCollapse = "collapse";
    tabelaTabuada.style.marginTop = "20px";

    // Adiciona uma cor de fundo alternada para as linhas da tabela, facilitando a leitura
    Array.from(tabelaTabuada.rows).forEach((linha, index) => {
        // Define cores diferentes para linhas pares e ímpares
        linha.style.backgroundColor = index % 2 === 0 ? "#f0f0f0" : "#ffffff";
        // Adiciona uma borda sutil entre as células
        linha.style.border = "1px solid #ddd";
    });
});

