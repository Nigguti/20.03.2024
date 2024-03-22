class Usuarios {
    constructor(id, username, peso, senha, email) {
        this.id = id;
        this.username = username;
        this.peso = peso;
        this.senha = senha;
        this.email = email;
    }
}

class Categoria {
    constructor(id, nome, cor) {
        this.id = id;
        this.nome = nome;
        this.cor = cor;
    }
}

class Tarefa {
    constructor(id, titulo, descricao, dataCriacao, dataConclusao, tipo, status, usuarioAssociado) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
        this.dataConclusao = dataConclusao;
        this.tipo = tipo;
        this.status = status;
        this.usuarioAssociado = usuarioAssociado;
    }
}