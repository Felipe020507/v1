var capacidades = JSON.parse(localStorage.getItem('capacidades'));

var selectCapacidade = document.getElementById("capacidade");

selectCapacidade.innerHTML = "";

capacidades.forEach(function (capacidade) {
    var option = document.createElement("option");
    option.value = capacidade;
    option.textContent = capacidade;
    selectCapacidade.appendChild(option);
});


function adicionarCriterio() {
    var capacidade = document.getElementById("capacidade").value; 
    var novoCriterio = document.getElementById("criterio").value;


    var criterios = JSON.parse(localStorage.getItem('criterios')) || {};

  
    if (!criterios[capacidade]) {
        criterios[capacidade] = [];
    }
    criterios[capacidade].push(novoCriterio);

    
    localStorage.setItem('criterios', JSON.stringify(criterios));

    alert("Critério adicionado com sucesso!");
}
