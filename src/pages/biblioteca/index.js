export default () => {
    const container = document.createElement ('div');

    const template =`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <title>Biblioteca Online</title>
    </head>
    <body>
        <header>
            <h1>Biblioteca Online</h1>
        </header>
    
        <div class="container">
            <!-- Seção de Catálogo de Livros -->
            <div class="bookCatalog">
                <!-- Card do Livro 1 -->
                <div class="bookCard">
                    <img src="C:\Users\User\Desktop\Projetos\SAP011-social-network\src\pages\biblioteca\autismobook1.jpg" alt="Capa do Livro 1">
                    <div class="bookInfo">
                        <h2>Título do Livro 1</h2>
                        <p>Autor: Autor do Livro 1</p>
                        <p>Ano de Publicação: 2022</p>
                        <p>Gênero: Ficção</p>
                    </div>
                </div>
                <!-- Card do Livro 1 -->
                <div class="bookCard">
                    <img src="autismobook2.jpg" alt="Capa do Livro 1">
                    <div class="bookInfo">
                        <h2>Título do Livro 1</h2>
                        <p>Autor: Autor do Livro 1</p>
                        <p>Ano de Publicação: 2022</p>
                        <p>Gênero: Ficção</p>
                    </div>
                <!-- Adicione mais cards conforme necessário -->
            </div>
        </div>
    
    </body>
    </html> `;
    
    container.innerHTML = template;

    return container;
}