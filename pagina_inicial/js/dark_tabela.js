function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  document.querySelectorAll('.circulo').forEach((circulo) => {
      circulo.classList.toggle('dark-mode-circulo');
  });

  var imagemClara = document.getElementById('imagemClara');
  var imagemDark = document.getElementById('imagemDark');

  if (document.body.classList.contains('dark-mode')) {
      imagemClara.style.display = 'none';
      imagemDark.style.display = 'inline-block';
  } else {
      imagemClara.style.display = 'inline-block';
      imagemDark.style.display = 'none';
  }

  var iconeEscuro = document.getElementById("iconePessoaEscuro");
  var iconeBranco = document.getElementById("iconePessoaBranco");

  var botaoClara = document.getElementById('claraModeToggle');
  var botaoDark = document.getElementById('darkModeToggle');

  if (document.body.classList.contains('dark-mode')) {
      iconeEscuro.style.display = 'none';
      botaoDark.style.display = 'none'
      iconeBranco.style.display = 'inline-block';
      botaoClara.style.display = 'inline-block';
  } else {
      iconeEscuro.style.display = 'inline-block';
      botaoDark.style.display = 'inline-block';
      iconeBranco.style.display = 'none';
      botaoClara.style.display = 'none'
  }
}


function mudarTitulo() {
    var selectedValue = document.getElementById("testeSelect").value;
    document.getElementById("testeTitle").innerText = selectedValue.toUpperCase();

    document.querySelectorAll('.tabela').forEach((tabela) => {
        tabela.style.display = 'none';
    });

    if (selectedValue === 'trabalho em Equipe') {
        document.getElementById('tabelaTeste1').style.display = 'table';
    } else if (selectedValue === 'Demonstrar Raciocinio Logico') {
        document.getElementById('tabelaTeste2').style.display = 'table';
    } else if (selectedValue === 'Demonstrar Capacidade de Organização') {
        document.getElementById('tabelaTeste3').style.display = 'table';
    }
}


function desmarqueOutro(checkbox) {
    var checkboxes = document.getElementsByName(checkbox.name);
    checkboxes.forEach(function (item) {
        if (item !== checkbox) {
            item.checked = false;
        }
    });
}
