class GerenciadorContatos {
    listaContatos = [];

    //Essa função adiciona o contato à lista independentemente da quantidade de atributos ou valor deles,
    //permitindo que ele sempre seja chamado, qualquer que seja a estrutura da classe contato
    adicionarContatos = (contato) => {
        this.listaContatos.push(contato);
    }
    //Essa função busca a posição do contato na lista com base no número (nomes podem se repetir, o número de telefone não)
    buscarPosiçãoContato = (telefone) =>{
        for (let i = 0; i<this.listaContatos.length; i++) {
            if (this.listaContatos[i].telefone == telefone) {
                return i;
            }
        }
        return -1;
    }
    //Essa função retorna o contato com base na posição dele
    buscarContato = (telefone) => {
        let pos = this.buscarPosiçãoContato(telefone);
        if(pos > 0) {
            return this.listaContatos[pos]
        }
        return null
    }
    //Essa função remove o contato da lista
    removerContatos = (telefone) => {
        let i = this.buscarPosiçãoContato(telefone)
        if(i > 0) {
            this.listaContatos.splice(i, 1)
            return true
        }
        return false
    }
    //Essa função retorna a lista de contatos
    listarContatos = () => {
        return this.contatos;
    }
}

export default GerenciadorContatos