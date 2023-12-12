export default () => {
    const container = document.createElement('div');

    const template = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="styles.css">
            <title>Minha Rede Social</title>
        </head>
        <body>
            <header>
                <h1>Caixa de mensagens</h1>
                <nav></nav>
            </header>

            <div class="container">
                <!-- Seção de Mensagens Diretas -->
                <div class="directMessages">
                    <div class="conversationList">
                        <!-- Lista de Conversas -->
                        <div class="conversation">
                            <div class="userAvatar"></div>
                            <div class="userInfo">
                                <h3>Nome do Usuário</h3>
                                <p>Última mensagem...</p>
                            </div>
                        </div>
                        <div class="userAvatar"></div>
                        <div class="userInfo">
                            <h3>Nome do Usuário</h3>
                            <p>Última mensagem...</p>
                        </div>
                        <div class="userAvatar"></div>
                        <div class="userInfo">
                            <h3>Nome do Usuário</h3>
                            <p>Última mensagem...</p>
                        </div>
                        <!-- Adicione mais conversas conforme necessário -->
                    </div>

                    <div class="messageArea">
                        <!-- Área de Mensagens -->
                        <div class="chatHeader">
                            <div class="userAvatar"></div>
                            <h2>Nome do Usuário</h2>
                        </div>
                        <div class="messageList">
                            <!-- Lista de Mensagens -->
                            <div class="message fromMe">
                                <p>Olá! Como você está?</p>
                            </div>
                            <div class="message fromOther">
                                <p>Oi! Estou bem, obrigado.</p>
                            </div>
                            <!-- Adicione mais mensagens conforme necessário -->
                        </div>
                        <div class="messageInput">
                            <textarea id="messageInput" placeholder="Digite sua mensagem..."></textarea>
                            <button id="sendMessageBtn">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>

        </body>
        </html>`;

    container.innerHTML = template;

    // Adiciona um evento de clique ao botão "Enviar"
    const sendMessageBtn = container.querySelector('#sendMessageBtn');
    sendMessageBtn.addEventListener('click', function () {
        // Obtém o valor da mensagem do campo de texto
        const messageInput = container.querySelector('#messageInput');
        const messageText = messageInput.value;

        // Verifica se o texto da mensagem não está vazio
        if (messageText.trim() !== '') {
            // Cria um novo elemento de mensagem e adiciona à lista de mensagens
            const messageList = container.querySelector('.messageList');
            const newMessage = document.createElement('div');
            newMessage.classList.add('message', 'fromMe');
            newMessage.innerHTML = `<p>${messageText}</p>`;
            messageList.appendChild(newMessage);

            // Limpa o campo de texto após o envio da mensagem
            messageInput.value = '';
        }
    });

    return container;
}