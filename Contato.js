class Contato {
    constructor(nome, telefone, email) {
      this._nome = nome;
      this._telefone = telefone;
      this._email = email;
    }
  
    get nome() {
      return this._nome;
    }
  
    get telefone() {
      return this._telefone;
    }
  
    get email() {
      return this._email;
    }
  }
  
  module.exports = Contato;