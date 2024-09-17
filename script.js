const btn = document.querySelector('#export')

btn.addEventListener("click", () => {

    // pega a div do conteudo que desejamo gerar o pdf
    const content = document.querySelector("#cv");

    //configuração da bilioteca html2pdf
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: { scale: 2 },
        image: { type: 'png', quality: 0.98 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    }

    //gerar e baixar pdf
    html2pdf().set(options).from(content).save();
});