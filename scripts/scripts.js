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
  // function adicionaProduto() {
  //   var nomeProduto = document.getElementById("produto").value;
  //   // Aqui você pode fazer o processamento do nome do produto, como salvá-lo em uma variável ou enviá-lo para um servidor.
  //   console.log("Produto cadastrado:", nomeProduto);
    
  //     function adicionaPreco() {
  //       var valorProduto = document.getElementById("preco").value
  //       // Aqui você pode fazer o processamento do nome do produto, como salvá-lo em uma variável ou enviá-lo para um servidor.
  //       console.log("Preço cadastrado:", valorProduto)
  //     }
  
  //         function adicionaDescricao() {
  //           var descricaoProduto = document.getElementById("descricao").value
  //           // Aqui você pode fazer o processamento do nome do produto, como salvá-lo em uma variável ou enviá-lo para um servidor.
  //           console.log("Descrição cadastrado:", descricaoProduto)
  //         }

  //            document.getElementById("produto").value = ""
  //            document.getElementById("preco").value = ""
  //            document.getElementById("descricao").value = ""

  //            console.log("Produto excluído")
  // }  

function deletaProduto() {
  var confirmacao = confirm("Deseja realmente excluir o produto?")

  if (confirmacao) {
    var containerProductsList = document.getElementById("lista-produtos")
    var produtos =
      containerProductsList.getElementsByClassName("product-container")

    if (produtos.length > 0) {
      containerProductsList.removeChild(produtos[produtos.length - 1])
    }

    if (produtos.length === 1) {
      containerProductsList.style.display = "none"
    }

    console.log("Produto excluído")
  }
}

function adicionaProduto() {
  var nomeProduto = document.getElementById("produto").value
  var valorProduto = document.getElementById("preco").value
  var descricaoProduto = document.getElementById("descricao").value
  var imagePreviewSrc = document
    .getElementById("image-preview")
    .getAttribute("src")

  if (!imagePreviewSrc || imagePreviewSrc === "#") {
    alert("Por favor, selecione uma imagem para o produto.")
    return
  }

  var containerProductsList = document.getElementById("lista-produtos")

  var produtoDiv = document.createElement("div")
  produtoDiv.classList.add("product-container")

  var imagemDiv = document.createElement("div")
  imagemDiv.classList.add("image-preview-container")

  var imagem = document.createElement("img")
  imagem.src = imagePreviewSrc
  imagem.alt = "Imagem do Produto"
  imagem.classList.add("image-preview")

  imagemDiv.appendChild(imagem)

  var infoDiv = document.createElement("div")
  infoDiv.classList.add("container-products-list-info")

  var nomeLabel = document.createElement("label")
  nomeLabel.textContent = "Produto: " + nomeProduto

  var precoLabel = document.createElement("label")
  precoLabel.textContent = "Preço: " + valorProduto

  var descricaoLabel = document.createElement("label")
  descricaoLabel.textContent = "Descrição: " + descricaoProduto

  infoDiv.appendChild(nomeLabel)
  infoDiv.appendChild(precoLabel)
  infoDiv.appendChild(descricaoLabel)

  produtoDiv.appendChild(imagemDiv)
  produtoDiv.appendChild(infoDiv)

  containerProductsList.appendChild(produtoDiv)

  containerProductsList.style.display = "flex"

  document.getElementById("produto").value = ""
  document.getElementById("preco").value = ""
  document.getElementById("descricao").value = ""
  document.getElementById("image-preview").src = "#"

  console.log("Produto cadastrado:", nomeProduto)
}




