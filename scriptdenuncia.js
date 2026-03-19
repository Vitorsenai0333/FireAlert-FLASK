const inputImagem = document.getElementById('imagem');
const preview = document.getElementById('preview');

inputImagem.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.innerHTML = `<img src="${e.target.result}" alt="Pré-visualização da imagem">`;
    }
    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = '';
  }
});


const form = document.getElementById('denunciaForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("✅ Denúncia enviada com sucesso! Obrigado por colaborar com o Fire Alert.");
  form.reset();
  preview.innerHTML = '';
});
