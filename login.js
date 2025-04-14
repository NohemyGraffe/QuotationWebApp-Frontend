document.addEventListener("DOMContentLoaded", () => {
  const loginBox = document.getElementById("login-section");
  const content = document.getElementById("secureContent");

  function showLogin() {
    loginBox.style.display = "block";
    content.style.display = "none";
  }

  function showContent() {
    loginBox.style.display = "none";
    content.style.display = "block";
  }

  netlifyIdentity.on("init", (user) => {
    if (user) showContent();
    else showLogin();
  });

  window.login = () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    netlifyIdentity.login(email, password, true)
      .then(() => showContent())
      .catch(() => {
        document.getElementById("login-error").innerText = "Credenciales incorrectas.";
      });
  };

  netlifyIdentity.on("logout", () => location.reload());

  netlifyIdentity.init();
});
