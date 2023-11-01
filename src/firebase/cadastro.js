import { cadastrar } from "../../firebase/firebaseAuth.js";

export ddefault () => {
    const container = document.createElement ("section");

    const template =
    <form class = "formlogin">
        <h1>Login</h1>
        <p>Digite os dados de acesso no campo abaixo</p>
        <label for = "email"> E-mail </label>
        <input id = "email" type = "email" placeholder = "Digite o seu e-mail" autofocus = "true" />
        <label for = "password"> Senha </label>
        <input id = "password" type = "password" placeholder = "Digite sua senha" />
        <input id = "submitbtn" type = "submit" value = "Cadastrar" class = "btn" />
    </form>;

    container.innerHTML = template;
    const submitBtn = container.querySelector ("#submitBtn");
    submitBtn.addEventListener ('click', () => {
    const email = container.querySelector ("#email").value; 
    const senha = container.querySelector ("#password").value;
    cadastrar (email, senha)
    .then (() => {
        // levar ao feed
    })
    .catch (() => {
        alert ("Erro ao cadastrar usuário");
    })
    }
    return container;
}