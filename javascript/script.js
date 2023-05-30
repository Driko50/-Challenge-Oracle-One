function criptografarTexto() {
    const originalTexto = document.getElementById('originalTexto').value;
    var minhaDiv = document.getElementById("minha-div");
    var botaoCopiar = document.getElementById("botaoCopiar");
    var botaoLimpar = document.getElementById("botaoLimpar")
    var textarea = document.getElementById("processarTexto");
    textarea.style.display = "none";
    if (textarea.style.display === "none") {
      textarea.style.display = "block";  
      minhaDiv.style.display = "none";
      botaoCopiar.style.display = "block";
      botaoLimpar.style.display = "block";
      var criptografar = originalTexto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
      document.getElementById("processarTexto").value = criptografar;
      minhaDiv.innerHTML = "";  
    } else {
      textarea.style.display = "none";
    }

  }
  
  function decodificarTexto() {
    const criptografar = document.getElementById('originalTexto').value;
    var decodificar = criptografar
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("processarTexto").value = decodificar;
  }
  
  function limparEntrada() {
    document.getElementById('originalTexto').value = '';
  }
  
  function limparSaida() {
    document.getElementById('processarTexto').value = '';    
  }
  
  function copiarTexto() {
    const processar = document.getElementById('processarTexto').value;
    navigator.clipboard.writeText(processar)
      .then(() => {
        alert('Texto copiado para a área de transferência!');
      })
      .catch((error) => {
        console.error('Falha ao copiar o texto: ', error);
      });
  }