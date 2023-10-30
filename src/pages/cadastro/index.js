export default () => {
    const container = document.createElement ('div');

    const template =` 
    <div class="caixacentralizada">
    <img src="https://genialcare.com.br/wp-content/uploads/2021/05/quebracabeca.webp" alt="logomarca" class="girar-imagem">
    <h2 class="title"> Rise up 2 autism </h2>
    <p class="descript"> Junte- se a nós e apoie a diversidade da nossa comunidade.</p>
    <p><input type="text" id="email" placeholder="Numero do celular ou email">
    <p><input type="text" id="name" placeholder="Nome completo"> 
    <p><input type="text" id="user" placeholder="Nome do usuario">
    <p><input type="text" id="password" placeholder="Senha"> 
    <a class="buttoncadastro" href="pages/home/index.js"> Cadastre-se </a>
  </div>
    `
    container.innerHTML = template;

    return container;
}