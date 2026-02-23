class ContaBancaria {
    #tempo = 0;
    #troco = 0;

    definirResultado(tempo, troco) {
        this.#tempo = tempo;
        this.#troco = troco;
    }

    get tempo() {
        return this.#tempo;
    }

    get troco() {
        return this.#troco;
    }
}

class CaixaEletronico {
    constructor(conta) {
        this.conta = conta;
    }

    calcularTempoETroco(valor) {
        if (valor < 1.0) {
            return { erro: "Valor insuficiente" };
        }

        if (valor >= 3.0) {
            return {
                tempo: 120,
                troco: valor - 3.0
            };
        }

        if (valor >= 1.75) {
            return {
                tempo: 60,
                troco: valor - 1.75
            };
        }

        // entre 1.00 e 1.74
        return {
            tempo: 30,
            troco: valor - 1.0
        };
    }

    depositar() {
        const valor = parseFloat(
            document.getElementById("valorDeposito").value
        );

        const resultado = this.calcularTempoETroco(valor);

        if (resultado.erro) {
            this.mostrarMensagem(resultado.erro);
            return;
        }

        this.conta.definirResultado(resultado.tempo, resultado.troco);
        this.mostrarResultado();
    }

    mostrarMensagem(msg) {
        document.getElementById("resultado").textContent = msg;
    }

    mostrarResultado() {
        document.getElementById("resultado").textContent =
            `Tempo: ${this.conta.tempo} min | Troco: R$ ${this.conta.troco.toFixed(2)}`;
    }
}

const conta = new ContaBancaria();
const caixa = new CaixaEletronico(conta);