class UsuarioService {
    constructor() {
        this.usuarios = [];
    }

    criarUsuario(id, username, email, senha) {
        const novoUsuario = {
            id,
            username,
            email,
            senha,
        };
        this.usuarios.push(novoUsuario);
        return novoUsuario;
    }

    obterUsuarioPorId(id) {
        return this.usuarios.find(usuario => usuario.id === id);
    }

    usuarioUpdate(id, novosDadosUsers) {
        const index = this.usuarios.findIndex(usuario => usuario.id === id);
        if (index !== -1) {

            this.usuarios[index] = { ...this.usuarios[index], ...novosDadosUsers };
            return this.usuarios[index];
        }
        return null;
    }


    usuarioDelete(id) {
        const index = this.usuarios.findIndex(usuario => usuario.id === id);
        if (index !== -1) {

            this.usuarios.splice(index, 1);
            return true;
        }
        return false;
    }

    obterUsuarios() {
        return this.usuarios;
    }
}

class CategoriaService {
    constructor() {
        this.categorias = [];
    }
}

criarCategoria(id, nome, cor); {
    const novaCategoria = {
        id,
        nome,
        cor
    }
    this.categoria.push(novaCategoria);
    return novaCategoria;
}

categoriaAll(id); {
    return categorias;
}

atualizarCategoria(id, novosDadosCategoria); {
    const index = this.categorias.findIndex(categoria => categoria.id === id);
    if (index !== -1) {
        this.categorias[index] = { ...this.categorias[index], ...novosDadosCategoria };
        return this.categorias[index];
    }
    return null;
}

excluirCategoria(id); {
    const index = this.categorias.findIndex(categoria => categoria.id === id);
    if (index !== -1) {
        this.categorias.splice(index, 1);
        return true;
    }
    return false;
}

class TarefaService {
    constructor() {
        this.tarefas = [];
    }

    criarTarefa(id, titulo, descricao, dataCriacao, dataConclusao, tipo, categoria, status, usuarioAssociado) {
        const novaTarefa = {
            id,
            titulo,
            descricao,
            dataCriacao,
            dataConclusao,
            tipo,
            categoria,
            status,
            usuarioAssociado
        };
        this.tarefas.push(novaTarefa);
        return novaTarefa;
    }

    obterTodasTarefas() {
        return this.tarefas;
    }

    obterTarefaPorId(id) {
        return this.tarefas.find(tarefa => tarefa.id === id);
    }

    atualizarTarefa(id, novosDadosTarefa) {
        const index = this.tarefas.findIndex(tarefa => tarefa.id === id);
        if (index !== -1) {
            this.tarefas[index] = { ...this.tarefas[index], ...novosDadosTarefa };
            return this.tarefas[index];
        }
        return null;
    }

    excluirTarefa(id) {
        const index = this.tarefas.findIndex(tarefa => tarefa.id === id);
        if (index !== -1) {
            this.tarefas.splice(index, 1);
            return true;
        }
        return false;
    }
}