import { cadastrar } from "../../firebase/firebaseAuth.js";

export default () => {
    const container = document.createElement ("section");

    const template =
    `<form class = "formlogin">
        <h1>Cadastro</h1>
        <p>Digite seus dados para cadastrar</p>
        <label for = "email"> E-mail </label>
        <input id = "email" type = "email" placeholder = "Digite o seu e-mail" autofocus = "true" />
        <label for = "password"> Senha </label>
        <input id = "password" type = "password" placeholder = "Digite sua senha" />
        <input id = "submitbtn" type = "submit" value = "Cadastrar" class = "btn" />
    </form>`;

    container.innerHTML = template;
    const submitBtn = container.querySelector ("#submitbtn");
    submitBtn.addEventListener ('click', (event) => {
        event.preventDefault();
    const email = container.querySelector ("#email").value; 
    const senha = container.querySelector ("#password").value;
    cadastrar (email, senha)
    .then (() => {
        // levar ao feed
        window.location.hash = "#feed"
    })
    .catch (() => {
        alert ("Erro ao cadastrar usuário");
    })
    })
    return container;
}