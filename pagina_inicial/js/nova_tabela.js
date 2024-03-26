document.addEventListener('DOMContentLoaded', function() {

    var capacidades = [];
    document.querySelectorAll('.capacidade').forEach(function(elemento) {
        if (!elemento.closest('.dropdown-content')) {
            capacidades.push(elemento.textContent.trim());
        }
    });

    var capacidadePrincipal = document.querySelector('.dropdown-text').textContent.trim();
    if (!capacidades.includes(capacidadePrincipal)) {
        capacidades.push(capacidadePrincipal);
    }

    localStorage.setItem('capacidades', JSON.stringify(capacidades));
    console.log("Capacidades armazenadas no LocalStorage:", capacidades);

    var dropdownText = document.querySelector('.dropdown-text');
    var dropdownContent = document.getElementById('dropdown-content');

    dropdownText.addEventListener('click', function(event) {
        dropdownContent.classList.toggle('show');
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!dropdownText.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    var criterios = JSON.parse(localStorage.getItem('criterios')) || {};
    console.log("Critérios recuperados do LocalStorage:", criterios);
    
    if (Array.isArray(criterios['Trabalho em equipe'])) {
        console.log("Adicionando critérios ao dropdown...");
        criterios['Trabalho em equipe'].forEach(function(criterio) {
            var div = document.createElement('div');
            div.textContent = criterio;
            dropdownContent.appendChild(div);
            console.log("Critério adicionado:", criterio);
        });
    } else {
        console.log("Nenhum critério encontrado para 'Trabalho em Equipe'.");
    }
});
