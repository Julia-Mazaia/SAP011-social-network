import home from "./pages/home/index.js";
import biblioteca from "./pages/biblioteca/index.js";
import mensagens from "./pages/mensagens/index.js";
import login from "./pages/login/login.js";
import cadastro from "./pages/cadastro/cadastro.js";


const main = document.querySelector("#root");
console.log (main);
const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = " ";
    switch (window.location.hash) {
      case "#feed":
        main.appendChild(home());
        break;
      case "#biblioteca":
        main.appendChild(biblioteca());
        break;
      case "#mensagens":
        main.appendChild(mensagens());
        break;
      case "#cadastro":
        main.appendChild(cadastro())
        break;
      case "#login":
        main.appendChild(login());
    }
  })
}
window.addEventListener("load", () => {
  main.appendChild(login());
  init()
})