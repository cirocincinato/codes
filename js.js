//onjeto literal
const pessoa ={nome:"ciro", idade:20}

class Veiculo{
    constructor(marca,modelo,ano){
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;

        //atributo priavado para indicar com _
        this._ligado=false;
    }
    ligar(){
        this._ligado=true;
        console.log("veiculo ligado")
    }
    desligado(){
        this._ligado=false;
        console.log("veiculo desligado")
    }
    get liagado(){
        return this._ligado;
    }
}

const veiculoNovo=new Veiculo("onda","civ",123);
console.log(veiculoNovo);
veiculoNovo.ligar();
veiculoNovo.desligado();
console.log("carro esta ligado?",veiculoNovo.liagado)

//heranca
class Moto extends Veiculo{
    constructor(marca,modelo,ano){
        super(marca,modelo,ano);
    }
}

const novaMoto=new Moto("yamata","mt-45",2032);
console.log(novaMoto);
novaMoto.ligar();