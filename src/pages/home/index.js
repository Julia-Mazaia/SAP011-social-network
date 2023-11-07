export default () => {
    const container = document.createElement ('div');

    const template = `<main id="main" class="main"> 
    <div class="newPost">
      <div class="infoUser">
        <div class="imageUser"></div>
        <srtong> Usuário </srtong>
      </div>
      <form action="">
        <textarea name="textarea" placeholder="O que você está pensando?"></textarea>
        <div class="iconsAndButton">
          <div class="icons">
            <button class="btnFileForm"><img src="url da imagem" alt="adicionar uma imagem"></button>
            <button class="btnFileForm"><img src="url da imagem" alt="adicionar um gif"></button>
            <button class="btnFileForm"><img src="url da imagem" alt="adicionar um video"></button>
          </div>
          <button type="submit" class="btnSubmitForm"> Publicar </button>
        </div>  
      </form>
    </div>
  </main> `;
    
    
    container.innerHTML = template;

    return container;
}