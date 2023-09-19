class Comida{
    constructor(descriacao, unidadeDeMedida, precoUnitario, foto) {
        this.descriacao = descriacao;
        this.unidadeDeMedida = unidadeDeMedida;
        this.precoUnitario = precoUnitario;
        this.foto = foto;

}
}

class Cardapio {
    constructor (listaDeComida){
        this.listaDeComida = listaDeComida.adicionarComida(comida);
    
    }
} 

