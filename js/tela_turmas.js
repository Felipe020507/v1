document.addEventListener('DOMContentLoaded', function() {

    var usuario = localStorage.getItem('usuario');

    if (usuario) {
 
        var nomeCapitalizado = usuario.charAt(0).toUpperCase() + usuario.slice(1);

        document.getElementById('docente').textContent = nomeCapitalizado;
    }
});
