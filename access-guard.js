// access-guard.js

document.addEventListener("DOMContentLoaded", () => {
  const secureContent = document.getElementById("secureContent");
  const loading = document.getElementById("loading");

  function showContent() {
    if (loading) loading.style.display = "none";
    if (secureContent) secureContent.style.display = "block";
  }

  function redirectToLogin() {
    window.location.href = "index.html"; // 🔁 Change to your login/home page
  }

  netlifyIdentity.on("init", (user) => {
    if (user) {
      showContent();
    } else {
      redirectToLogin();
    }
  });

  netlifyIdentity.init();
});
