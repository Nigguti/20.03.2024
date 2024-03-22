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

    usuarioUpdate(id, novosDados) {
        const index = this.usuarios.findIndex(usuario => usuario.id === id);
        if (index !== -1) {
    
            this.usuarios[index] = { ...this.usuarios[index], ...novosDados };
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