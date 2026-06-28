// Simulação de dados do aplicativo Kathy-Financ
document.addEventListener("DOMContentLoaded", () => {
    console.log("Kathy-Financ iniciado com sucesso!");
    
    // Simulando a busca de um Score de Crédito do Banco Central
    setTimeout(() => {
        const scoreElement = document.getElementById("score-val");
        if (scoreElement) {
            scoreElement.textContent = "785 (Excelente)";
            scoreElement.style.color = "#27ae60";
        }
    }, 1500); // Demora 1.5 segundos para fingir que está carregando da internet
});
