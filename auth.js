document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();


      if (!email || !password) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      if (email === "admin@firealert.com" && password === "123456") {
        alert("Login realizado com sucesso!");
        window.location.href = "index.html";
      } else {
        alert("E-mail ou senha incorretos!");
      }
    });
  }


  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;


      if (!name || !email || !password || !confirmPassword) {
        alert("Preencha todos os campos!");
        return;
      }

      // Verifica se as senhas coincidem
      if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
      }

      // Verifica força da senha
      const senhaForte = validarSenha(password);
      if (!senhaForte) {
        alert(
          "Senha fraca!\nA senha deve ter no mínimo 8 caracteres, incluindo:\n- Uma letra maiúscula\n- Uma letra minúscula\n- Um número\n- Um caractere especial (!@#$%&*)"
        );
        return;
      }


      alert(`Usuário ${name} cadastrado com sucesso!`);
      window.location.href = "login.html";
    });
  }
});

function validarSenha(senha) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*?])[A-Za-z\d!@#$%&*?]{8,}$/;
  return regex.test(senha);
}
