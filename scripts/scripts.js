//----------Função para transitar entre as screens----------------------
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

//--------------------Função de Adicionar Imagem------------------------
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

<<<<<<< HEAD
//-------------------Função para cadastrar e excluir produtos---------------
  function adicionaProduto() {
    var nomeProduto = document.getElementById("produto").value;
    // Aqui você pode fazer o processamento do nome do produto, como salvá-lo em uma variável ou enviá-lo para um servidor.
    console.log("Produto cadastrado:", nomeProduto);
  }
=======
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
>>>>>>> 527ef553c6896b917d0089813e2afd69cb6aaece

  function deletaProduto() {
  // Exibir mensagem de confirmação ao usuário
  var confirmacao = confirm("Deseja realmente excluir o produto?");

  if (confirmacao) {
    // Remover o produto da seção de exibição
    var containerProductsList = document.querySelector(".container-products-list");
    containerProductsList.remove();

    // Limpar os campos de nome do produto, preço e descrição
    document.getElementById("produto").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("descricao").value = "";

    console.log("Produto excluído");
  }
}