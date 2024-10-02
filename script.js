function gerarNotaFiscal() {
    // Obtendo os valores inseridos pelo usuário
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value) / 100;
    const pis = parseFloat(document.getElementById('pis').value) / 100;
    const cofins = parseFloat(document.getElementById('cofins').value) / 100;
    const inss = parseFloat(document.getElementById('inss').value) / 100;
    const issqn = parseFloat(document.getElementById('issqn').value) / 100;

    // Cálculo dos impostos
    const valorIRPF = valorVenda * irpf;
    const valorPIS = valorVenda * pis;
    const valorCOFINS = valorVenda * cofins;
    const valorINSS = valorVenda * inss;
    const valorISSQN = valorVenda * issqn;

    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
    const valorFinal = valorVenda - totalImpostos;

    // Exibindo a Nota Fiscal com os cálculos
    const resultado = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <h3>Impostos Calculados:</h3>
        <p>IRPF: R$ ${valorIRPF.toFixed(2)}</p>
        <p>PIS: R$ ${valorPIS.toFixed(2)}</p>
        <p>COFINS: R$ ${valorCOFINS.toFixed(2)}</p>
        <p>INSS: R$ ${valorINSS.toFixed(2)}</p>
        <p>ISSQN: R$ ${valorISSQN.toFixed(2)}</p>
        <h3>Total de Impostos: R$ ${totalImpostos.toFixed(2)}</h3>
        <p><strong>Valor Final (após impostos):</strong> R$ ${valorFinal.toFixed(2)}</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}

function imprimirNotaFiscal() {
    const resultado = document.getElementById('resultado').innerHTML;
    const janelaImpressao = window.open('', '', 'width=600,height=400');
    janelaImpressao.document.write(`
        <html>
            <head>
                <title>Imprimir Nota Fiscal</title>
                <link rel="stylesheet" href="styles.css"> <!-- Vinculando o CSS para impressão -->
            </head>
            <body>
                <h1>Nota Fiscal de Serviço</h1>
                ${resultado}
            </body>
        </html>
    `);
    janelaImpressao.document.close();
    janelaImpressao.print();
}
