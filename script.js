async function fetchData() {
  try {
    const response = await fetch("https://api.mocki.io/v2/79fb05cb"); // endpoint simulado
    if (!response.ok) throw new Error("Falha ao carregar dados do servidor");
    const data = await response.json();
    renderChart(data);
  } catch (error) {
    alert("Erro ao carregar dados. Modo offline ativado.");
    renderChart([5, 8, 12, 9, 15, 10]);
  }
}


function renderChart(data) {
  const ctx = document.getElementById("fireChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [{
        label: "Casos de incêndio",
        data,
        borderColor: "#dc3545",
        backgroundColor: "rgba(220,53,69,0.3)",
        fill: true,
        tension: 0.3
      }]
    }
  });
}

fetchData();
