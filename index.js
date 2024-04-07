import readline from 'readline';
import GerenciadorContatos from './GerenciadorContatos.js';
import Contato from './Contato.js';

class CLI {
    constructor() {
        this.gerenciadorContatos = new GerenciadorContatos();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    exibirMenu() {
        console.log('=== Menu ===');
        console.log('1. Adicionar Contato');
        console.log('2. Remover Contato');
        console.log('3. Listar Contatos');
        console.log('4. Buscar Contato');
        console.log('5. Sair');
    }

    adicionarContato() {
        this.rl.question('Nome: ', nome => {
            this.rl.question('Telefone: ', telefone => {
                this.rl.question('Email: ', email => {
                    const contato = new Contato(nome, telefone, email);
                    this.gerenciadorContatos.adicionarContato(contato);
                    console.log('Contato adicionado com sucesso!');
                    this.menu();
                });
            });
        });
    }

    removerContato() {
        this.rl.question('Telefone do Contato a ser removido: ', telefone => {
            if (this.gerenciadorContatos.removerContato(telefone)) {
                console.log('Contato removido com sucesso!');
            } else {
                console.log('Contato não encontrado.');
            }
            this.menu();
        });
    }

    listarContatos() {
        const contatos = this.gerenciadorContatos.listarContatos();
        console.log('=== Contatos ===');
        contatos.forEach(contato => {
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
        });
        this.menu();
    }

    buscarContato() {
        this.rl.question('Telefone do Contato a ser buscado: ', telefone => {
            const contato = this.gerenciadorContatos.buscarContato(telefone);
            if (contato) {
                console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
            } else {
                console.log('Contato não encontrado.');
            }
            this.menu();
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
                    console.log('Saindo...');
                    this.rl.close();
                    break;
                default:
                    console.log('Opção inválida.');
                    this.menu();
            }
        });
    }

    iniciar() {
        console.log('Bem-vindo ao sistema de gerenciamento de contatos!');
        this.menu();
    }
}

const cli = new CLI();
cli.iniciar();