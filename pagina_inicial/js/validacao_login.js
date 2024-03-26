function validarLogin(usuario, senha) {
    var usuarios = {
        "eliane": "123",
        "rafael": "senha2",
        "wesley": "senha3"
    };

    if (usuarios.hasOwnProperty(usuario) && usuarios[usuario] === senha) {
        localStorage.setItem('usuario', usuario);
        return true;
    } else {
        return false;
    }
}

document.getElementById('formcores').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var usuario = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (validarLogin(usuario, senha)) {
        window.location.href = 'tela_inicial.html';
    } else {
        document.getElementById('error').innerHTML = 'Usuário ou senha incorretos.';
        setTimeout(function() {
            document.getElementById('error').innerHTML = ''; 
        }, 5000); 
    }
});
