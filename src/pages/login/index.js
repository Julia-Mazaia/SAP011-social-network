export default () => {
    const container = document.createElement ('div');
    const template =`
    <div class="caixacentralizada">
    <h2> Rise up 2 autism </h2>
    <img src="https://genialcare.com.br/wp-content/uploads/2021/05/quebracabeca.webp" alt="logomarca" class="girar-imagem">
    <h2 class="title"> Rise up 2 autism </h2>
    <p><input type="text" id="email" placeholder="Numero do celular ou email">
    <p><input type="text" id="password" placeholder="Senha">
    <a class="buttonlogin" href="pages/home/index.js"><img src="https://genialcare.com.br/wp-content/uploads/2021/05/quebracabeca.webp" alt="Entrar">
      </a>
    <div id="cadastrar "> Não tem uma conta?</div>
    <a href="cadastro.html"> Cadastre-se </a>
    `
    container.innerHTML = template;
  const submitBtn = container.querySelector("#subimitBtn");
  submitBtn.addEventListener("click", () => {
    const email = container.querySelector("#email").value;
    const senha = container.querySelector("#password").value;
  })
    return container;
}