export default () => {
  const container = document.createElement('div');

  const template = `
  <main id="main" class="main"> 
      <div class="newPost">
          <form class="formPost" id="postForm">
              <div class="imageUser"></div>
              <strong>Usuário da Silva</strong>
              <textarea name="textarea" placeholder="O que você está pensando?"></textarea>
              <div class="iconsAndButton">
                  <div class="icons">
                      <button class="btnFileForm"><img src="url_da_imagem1" alt="adicionar uma imagem"></button>
                      <button class="btnFileForm"><img src="url_da_imagem2" alt="adicionar um gif"></button>
                      <button class="btnFileForm"><img src="url_da_imagem3" alt="adicionar um video"></button>
                  </div>
                  <button type="button" class="btnSubmitForm" id="btnSubmitForm">Publicar</button>
              </div>  
          </form>
      </div>

      <ul class="posts" id="postsList">
          <!-- Posts serão adicionados aqui -->
      </ul>
  </main>
  `;

  container.innerHTML = template;

  // Adiciona um evento de clique ao botão "Publicar"
  const btnSubmitForm = container.querySelector('#btnSubmitForm');
  btnSubmitForm.addEventListener('click', function() {
      const postText = container.querySelector('.formPost textarea').value;
      if (postText.trim() !== '') {
          const newPost = createPostElement(postText);
          const postsList = container.querySelector('#postsList');
          postsList.appendChild(newPost);
          container.querySelector('.formPost textarea').value = '';
      }
  });

  // Adiciona eventos de clique aos botões de curtir, editar, e apagar em todos os posts
  container.addEventListener('click', function(event) {
      if (event.target.classList.contains('btnLike')) {
          handleLikeClick(event.target);
      } else if (event.target.classList.contains('btnEdit')) {
          handleEditClick(event.target);
      } else if (event.target.classList.contains('btnDelete')) {
          handleDeleteClick(event.target);
      }
  });

  // Função auxiliar para criar um novo elemento de post
  function createPostElement(postText) {
      const newPost = document.createElement('li');
      newPost.classList.add('post');
      newPost.innerHTML = `
          <div class="infoUserPost">
              <div class="imgUserPost"></div> 
              <div class="nameAndHour">
                  <strong>Usuário da Silva</strong>
                  <p>${getCurrentTime()}</p>
              </div>
          </div>
          <p class="postText">${postText}</p>
          <div class="actionBtnPost">
              <button type="button" class="filesPost btnLike">Curtir</button>
              <button type="button" class="filesPost btnEdit">Editar</button>
              <button type="button" class="filesPost btnDelete">Apagar</button>
              <span class="likeCount">0 curtidas</span>
          </div>
      `;
      return newPost;
  }

  // Função auxiliar para lidar com o clique no botão de curtir
  function handleLikeClick(likeButton) {
      const likeCountElement = likeButton.parentElement.querySelector('.likeCount');
      let likeCount = parseInt(likeCountElement.innerText, 10);
      likeCount++;
      likeCountElement.innerText = `${likeCount} curtida${likeCount !== 1 ? 's' : ''}`;
  }

  // Função auxiliar para lidar com o clique no botão de editar
  function handleEditClick(editButton) {
      const post = editButton.closest('.post');
      const postTextElement = post.querySelector('.postText');
      const newText = prompt('Editar postagem:', postTextElement.innerText);
      if (newText !== null) {
          postTextElement.innerText = newText;
      }
  }

  // Função auxiliar para lidar com o clique no botão de apagar
  function handleDeleteClick(deleteButton) {
      const post = deleteButton.closest('.post');
      post.remove();
  }

  // Função auxiliar para obter a hora atual formatada
  function getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
  }

  return container;
}