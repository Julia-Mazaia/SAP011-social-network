import {login} from "../../firebase/firebaseAuth.js" 

export default () => {
    const container = document.createElement('section');
    const template =
    `<form class = "formlogin">
        <h1>Login</h1>
        <p>Digite os dados de acesso no campo abaixo</p>
        <label for = "email"> E-mail </label>
        <input id = "email" type = "email" placeholder = "Digite o seu e-mail" autofocus = "true" />
        <label for = "password"> Senha </label>
        <input id = "password" type = "password" placeholder = "Digite sua senha" />
        <a href = "/"> Esqueci minha senha </a>
        <input id = "submitbtn" type = "submit" value = "Acessar" class = "btn" />
    </form>`;
    
    container.innerHTML = template;

    const submitBtn = container.querySelector ("#submitbtn");

    submitBtn.addEventListener ('click', (event) => {
        event.preventDefault ();
        const email = container.querySelector ("#email").value;
        const senha = container.querySelector ("#password").value;

        login (email, senha)
        .then ( () => {
            // levar ao feed
            window.location.hash = "#feed"
    })
        .catch ( (error) => {
            // mostrar erro de login 
           console.log (error)
            alert ("Dados de login incorretos");
    })

    });

    return container;
};