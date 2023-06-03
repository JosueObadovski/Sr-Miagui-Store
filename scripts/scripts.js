function showScreen1() {
  document.getElementById("screen1").style.display = "block";
  document.getElementById("screen2").style.display = "none";
  document.getElementById("showScreen2").style.display = "block"; // Exibe o botão da tela 2
}

function showScreen2() {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "block";
}

// Evento de clique para carregar a tela 1 e exibir o botão da tela 2
document.getElementById("showScreen1").addEventListener("click", function() {
  showScreen1();
});

function addImage() {
  var fileInput = document.getElementById("image-input")
  var file = fileInput.files[0]
  var imagePreview = document.getElementById("image-preview")

  if (file) {
    var reader = new FileReader()

    reader.onload = function (e) {
      imagePreview.src = e.target.result
    }

    reader.readAsDataURL(file)
  }
}

function cadastrar() {
  var nomeInput = document.getElementById("nome-input").value
  var precoInput = document.getElementById("preco-input").value
  var descricaoInput = document.getElementById("descricao-input").value

  // Exemplo de ação: exibindo os valores no console
  console.log("Nome:", nomeInput)
  console.log("Preço:", precoInput)
  console.log("Descrição:", descricaoInput)

  // Adicione o código adicional para realizar o cadastro ou qualquer outra ação desejada

  // Limpar os campos após o cadastro
  document.getElementById("nome-input").value = ""
  document.getElementById("preco-input").value = ""
  document.getElementById("descricao-input").value = ""
}

// Evento de clique para cadastrar
document.getElementById("cadastrar-button").addEventListener("click", cadastrar)

