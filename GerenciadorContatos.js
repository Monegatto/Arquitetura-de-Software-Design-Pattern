class GerenciadorContatos {
    constructor () {
        this.listaContatos = [];
        this.retornoContatos = [];
    }
    
    //Essa função retorna o contato com base na posição dele
    buscarContato = (nome) => {
        for (let i = 0; i < this.listaContatos.length; i++) {
            if (this.listaContatos[i].nome === nome) {
                this.retornoContatos.push(this.listaContatos[i]);
            }
        }
        if(this.retornoContatos.length > 0) {
            return this.retornoContatos;
        }
        return null;
    }
    //Função usada apenas para verificar se um contato com telefone igual ao informado pelo usuário já existe
    //Visto que nomes podem se repetir numa lista telefonica mas números não, é necessário a utilização de tal
    buscarContatoExistente = (telefone) => {
        for(let i = 0; i < this.listaContatos.length; i++){
            if(this.listaContatos[i].telefone === telefone){
                return true;
            }
        }
        return false;
    }
    //Essa função adiciona o contato à lista independentemente da quantidade de atributos ou valor deles,
    //permitindo que ele sempre seja chamado, qualquer que seja a estrutura da classe contato.
    //Ela também verifica se já existe um contato com o número de telefone informado e no caso de já existir avisa ao usuário
    adicionarContato = (contato) => {
        if (!this.buscarContatoExistente(contato.telefone)) {
            this.listaContatos.push(contato);
            return true;
        }
        console.log(`\nUm contato com o telefone ${contato.telefone} já existe no sistema!\n`);
        return false;
    }
    //Essa função remove o contato da lista
    removerContato = (telefone) => {
        for(let i = 0; i < this.listaContatos.length; i++){
            if(this.listaContatos[i].telefone == telefone){
                let nome = this.listaContatos[i].nome
                this.listaContatos.splice(i, 1);
                return nome;
            }
        }
        return false;
    }
    //Essa função retorna a lista de contatos
    listarContatos = () => {
        return this.listaContatos;
    }
}

export default GerenciadorContatos;