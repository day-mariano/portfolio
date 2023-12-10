const elementFooter = document.getElementById('footer')

function autoYear () {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  elementFooter.innerText = `Desenvolvido por Dayana Mariano ${anoAtual}`
}

autoYear()