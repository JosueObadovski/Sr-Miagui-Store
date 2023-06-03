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
