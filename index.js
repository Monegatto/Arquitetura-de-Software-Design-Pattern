import Contato from './Contato.js';
import GerenciadorContatos from "./GerenciadorContatos.js";

const gerenciador = new GerenciadorContatos();

let contato = new Contato("Joao", "123", "jp.net",)
let contato2 = new Contato("Pedro", "1234", "pedro.net",)
let contato3 = new Contato("Boter", "1235", "boter.net",)


gerenciador.adicionarContatos(contato);
gerenciador.adicionarContatos(contato2);
gerenciador.adicionarContatos(contato3);
let bool = gerenciador.removerContatos('123')


for(let i = 0; i < gerenciador.listaContatos.length; i++){
    console.log(gerenciador.listaContatos[i]);
}
console.log(bool)