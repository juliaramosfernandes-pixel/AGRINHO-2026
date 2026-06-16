// Mensagem de boas-vindas
window.onload = function () {
alert("Bem-vindo ao projeto Agrinho 2026!");
};

// Botão voltar ao topo
const botaoTopo = document.getElementById("voltarTopo");

if (botaoTopo) {
botaoTopo.addEventListener("click", function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});
}
