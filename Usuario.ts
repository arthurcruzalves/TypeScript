class Usuario {
    nome_usuario: string = "";
    senha_usuario: string = "";
    email_usuario: string = "";

    constructor(nome_usuario: string, senha_usuario: string) {
        this.nome_usuario = nome_usuario;
        this.senha_usuario = senha_usuario;
    }

    cadastrar() {
        console.log(`O usuario: ${this.nome_usuario} foi cadastrado`);
    }
}

//instância é um processo de criar um objeto
//baseado em uma classe. O termo new chama
//o construtor padrão da classe para iniciar
let us = new Usuario("Julia", "123");
us.cadastrar();
