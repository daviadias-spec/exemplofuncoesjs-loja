let saldoInicial = 500;
let total = 0;

// Atualiza a tela com o valor inicial ao carregar a página
atualizarValores();

function alterarSaldo() {
    let novoSaldo = prompt("Digite o novo Saldo Inicial (R$):", saldoInicial);
    
    if (novoSaldo !== null && novoSaldo.trim() !== "") {
        let valorConvertido = Number(novoSaldo.replace(",", "."));
        
        if (!isNaN(valorConvertido) && valorConvertido >= 0) {
            saldoInicial = valorConvertido;
            atualizarValores();
        } else {
            alert("Por favor, digite um número válido!");
        }
    }
}

function adicionarGasto() {
    let campoDescricao = document.getElementById("descricao");
    let campoValor = document.getElementById("valor");

    let descricao = campoDescricao.value.trim();
    let valor = Number(campoValor.value);

    // Validação: interrompe o fluxo caso os dados estejam incorretos
    if (descricao === "" || valor <= 0 || isNaN(valor)) {
        alert("Preencha a descrição e um valor válido!");
        return; 
    }

    total += valor;

    document.getElementById("listaGastos").innerHTML += `
        <div class="gasto">
            <span>${descricao}</span>
            <span>R$${valor.toFixed(2)}</span>
        </div>
    `;

    atualizarValores();

    // Limpa os campos
    campoDescricao.value = "";
    campoValor.value = "";
}

function atualizarValores() {
    let saldoAtual = saldoInicial - total;
    document.getElementById('total').textContent = `R$${total.toFixed(2)}`;
    document.getElementById('saldo').textContent = `R$${saldoAtual.toFixed(2)}`;
}