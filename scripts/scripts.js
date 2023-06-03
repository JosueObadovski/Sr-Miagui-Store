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

//-------------------Função para cadastrar e excluir produtos---------------
  function adicionaProduto() {
    var nomeProduto = document.getElementById("produto").value;
    // Aqui você pode fazer o processamento do nome do produto, como salvá-lo em uma variável ou enviá-lo para um servidor.
    console.log("Produto cadastrado:", nomeProduto);
  }

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