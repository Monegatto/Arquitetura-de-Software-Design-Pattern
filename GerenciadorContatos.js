class GerenciadorContatos {
    constructor () {
        if (GerenciadorContatos.instance) {
            return GerenciadorContatos.instance;
        }
        GerenciadorContatos.instance = this;

        this.listaContatos = [];
    }

    setBuscaStrategy(strategy) {
        this.buscaStrategy = strategy;
    }

    buscarContato(termo) {
        return this.buscaStrategy.buscarContato(this, termo);
    }

    buscarContatoPorTelefone(telefone) {
        for (let i = 0; i < this.listaContatos.length; i++) {
            if (this.listaContatos[i].telefone === telefone) {
                return this.listaContatos[i];
            }
        }
        return null;
    }

    buscarContatoPorNome(nome) {
        let contatosEncontrados = [];
        for (let i = 0; i < this.listaContatos.length; i++) {
            if (this.listaContatos[i].nome === nome) {
                contatosEncontrados.push(this.listaContatos[i]);
            }
        }
        return contatosEncontrados.length > 0 ? contatosEncontrados : null;
    }

    buscarContatoExistente(telefone) {
        for(let i = 0; i < this.listaContatos.length; i++){
            if(this.listaContatos[i].telefone === telefone){
                return true;
            }
        }
        return false;
    }

    adicionarContato(contato) {
        if (!this.buscarContatoExistente(contato.telefone)) {
            this.listaContatos.push(contato);
            return true;
        }
        console.log(`\nUm contato com o telefone ${contato.telefone} já existe no sistema!\n`);
        return false;
    }

    removerContato(telefone) {
        for(let i = 0; i < this.listaContatos.length; i++){
            if(this.listaContatos[i].telefone == telefone){
                let nome = this.listaContatos[i].nome
                this.listaContatos.splice(i, 1);
                return nome;
            }
        }
        return false;
    }

    listarContatos() {
        return this.listaContatos;
    }
}

export default GerenciadorContatos;