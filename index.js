import readline from 'readline';
import GerenciadorContatos from './GerenciadorContatos.js';
import Contato from './Contato.js';

class BuscaStrategy {
    buscarContato(gerenciador, termo) {}
}

class BuscaPorNome extends BuscaStrategy {
    buscarContato(gerenciador, nome) {
        return gerenciador.buscarContatoPorNome(nome);
    }
}

class BuscaPorTelefone extends BuscaStrategy {
    buscarContato(gerenciador, telefone) {
        return gerenciador.buscarContatoPorTelefone(telefone);
    }
}

class CLI {
    constructor() {
        this.gerenciadorContatos = new GerenciadorContatos();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.buscaPorNomeStrategy = new BuscaPorNome();
        this.buscaPorTelefoneStrategy = new BuscaPorTelefone();
        this.gerenciadorContatos.setBuscaStrategy(this.buscaPorNomeStrategy);
    }

    exibirMenu() {
        console.log('=== Menu ===\n');
        console.log('1. Adicionar Contato');
        console.log('2. Remover Contato');
        console.log('3. Listar Contatos');
        console.log('4. Buscar Contato');
        console.log('5. Sair\n');
    }

    adicionarContato() {
        this.rl.question('Nome: ', nome => {
            this.rl.question('Telefone: ', telefone => {
                this.rl.question('Email: ', email => {
                    const contato = new Contato(nome, telefone, email);
                    if(this.gerenciadorContatos.adicionarContato(contato)){
                        console.log(`\n ${nome} adicionado com sucesso!\n`)
                    };
                    this.menu();
                });
            });
        });
    }

    removerContato() {
        this.rl.question('Telefone do Contato a ser removido: ', telefone => {
            const contatoRemovido = this.gerenciadorContatos.removerContato(telefone);
            if (contatoRemovido) {
                console.log(`\n ${contatoRemovido} removido com sucesso!\n`);
            } else {
                console.log('\nContato não encontrado.\n');
            }
            this.menu();
        });
    }

    listarContatos() {
        const contatos = this.gerenciadorContatos.listarContatos();
        console.log('\n=== Contatos ===\n');
        contatos.forEach(contato => {
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
        });
        console.log('');
        this.menu();
    }

    buscarContato() {
        this.rl.question('Digite 1 para buscar por nome ou 2 para buscar por telefone: ', opcao => {
            switch (opcao) {
                case '1':
                    this.gerenciadorContatos.setBuscaStrategy(this.buscaPorNomeStrategy);
                    this.rl.question('Nome do Contato a ser buscado: ', nome => {
                        const contato = this.gerenciadorContatos.buscarContato(nome);
                        if (contato) {
                            console.log(`Contato encontrado: ${contato.nome}, ${contato.telefone}, ${contato.email}`);
                        } else {
                            console.log('Contato não encontrado.');
                        }
                        this.menu();
                    });
                    break;
                case '2':
                    this.gerenciadorContatos.setBuscaStrategy(this.buscaPorTelefoneStrategy);
                    this.rl.question('Telefone do Contato a ser buscado: ', telefone => {
                        const contato = this.gerenciadorContatos.buscarContato(telefone);
                        if (contato) {
                            console.log(`Contato encontrado: ${contato.nome}, ${contato.telefone}, ${contato.email}`);
                        } else {
                            console.log('Contato não encontrado.');
                        }
                        this.menu();
                    });
                    break;
                default:
                    console.log('Opção inválida.');
                    this.menu();
            }
        });
    }

    menu() {
        this.exibirMenu();
        this.rl.question('Escolha uma opção: ', opcao => {
            switch (opcao) {
                case '1':
                    this.adicionarContato();
                    break;
                case '2':
                    this.removerContato();
                    break;
                case '3':
                    this.listarContatos();
                    break;
                case '4':
                    this.buscarContato();
                    break;
                case '5':
                    console.log('\nSaindo...\n');
                    this.rl.close();
                    break;
                default:
                    console.log('\nOpção inválida.\n');
                    this.menu();
            }
        });
    }

    iniciar() {
        console.log('Bem-vindo ao sistema de gerenciamento de contatos!\n');
        this.menu();
    }
}

const cli = new CLI();
cli.iniciar();

export default CLI;