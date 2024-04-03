var capacidades = JSON.parse(localStorage.getItem('capacidades'));

var selectCapacidade = document.getElementById("capacidade");

// Limpar opções existentes no select
selectCapacidade.innerHTML = "";

// Adicionar as opções ao select
capacidades.forEach(function (capacidade) {
    var option = document.createElement("option");
    option.value = capacidade;
    option.textContent = capacidade;
    selectCapacidade.appendChild(option);
});


function adicionarCriterio() {
    var capacidade = document.getElementById("capacidadeSelect").value;
    var novoCriterio = document.getElementById("novoCriterio").value;

    // Verifica se há critérios armazenados no LocalStorage
    var criterios = JSON.parse(localStorage.getItem('criterios')) || {};

    // Adiciona o novo critério à capacidade correspondente
    if (!criterios[capacidade]) {
        criterios[capacidade] = [];
    }
    criterios[capacidade].push(novoCriterio);

    // Salva a lista atualizada de critérios no LocalStorage
    localStorage.setItem('criterios', JSON.stringify(criterios));

    alert("Criterio adicionado com sucesso!");
}
