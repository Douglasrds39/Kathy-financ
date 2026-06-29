// Função que roda assim que o site carrega totalmente
document.addEventListener("DOMContentLoaded", () => {
    
    // Procura o campo do Score no HTML
    const scoreResultado = document.getElementById("score-resultado");
    
    // Faz uma simulação de carregamento antes de mostrar o Score
    if (scoreResultado) {
        setTimeout(() => {
            scoreResultado.textContent = "785 (Excelente)";
            scoreResultado.style.color = "#00b37e"; // Deixa o texto verde
        }, 1500); // Espera 1 segundo e meio para dar o efeito de análise
    }

    console.log("Kathy-Financ: JavaScript carregado com sucesso!");
});
