document.addEventListener('DOMContentLoaded', function() {
    // Adicionar a capacidade principal ao LocalStorage
    var capacidades = [];
    document.querySelectorAll('.capacidade').forEach(function(elemento) {
        // Verifica se o elemento é a capacidade principal (não está dentro do dropdown)
        if (!elemento.closest('.dropdown-content')) {
            capacidades.push(elemento.textContent.trim());
        }
    });

    // Adiciona apenas a capacidade principal (no caso, "Trabalho em Equipe")
    var capacidadePrincipal = document.querySelector('.dropdown-text').textContent.trim();
    if (!capacidades.includes(capacidadePrincipal)) {
        capacidades.push(capacidadePrincipal);
    }

    localStorage.setItem('capacidades', JSON.stringify(capacidades));
    console.log("Capacidades armazenadas no LocalStorage:", capacidades);

    // Adicionar funcionalidade do dropdown
    var dropdownText = document.querySelector('.dropdown-text');
    var dropdownContent = document.getElementById('dropdown-content');

    dropdownText.addEventListener('click', function(event) {
        dropdownContent.classList.toggle('show');
        event.stopPropagation(); // Impede que o evento de clique seja propagado para outros elementos
    });

    // Fechar dropdown ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!dropdownText.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    // Adiciona os critérios ao dropdown de "Trabalho em Equipe"
    var criterios = JSON.parse(localStorage.getItem('criterios')) || {};
    console.log("Critérios recuperados do LocalStorage:", criterios);
    
    if (Array.isArray(criterios['Trabalho em Equipe'])) {
        console.log("Adicionando critérios ao dropdown...");
        criterios['Trabalho em Equipe'].forEach(function(criterio) {
            var div = document.createElement('div');
            div.textContent = criterio;
            dropdownContent.appendChild(div);
            console.log("Critério adicionado:", criterio);
        });
    }
});
