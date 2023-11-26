export default () => {
    const container = document.createElement ('div');

    const template = `<main id="main" class="main"> 
    <div class="newPost">
      <form class ="formPost">
      <div class="imageUser"></div>
        <strong>Usuário da Silva </strong>
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

    <ul class= "posts">
    <li class= "post">
    <div class= "infoUserPost">
    <div class= "imgUserPost"> </div> 
    <div class= "nameAndHour">
    <strong> Usuário da Silva </strong>
    <p> 21h </p>
    </div>
    </div>
    
    <p> Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Praesent vel viverra nisi. 
    Mauris aliquet nunc non turpis scelerisque, eget.
    Quem num gosta di mim que vai caçá sua turmis! Morbi viverra placerat justo, vel pharetra turpis. </p>

    <div class= "actionBtnPost">
    <button type="button" class= "filesPost"> <img src= " "//insira imagem aqui alt="Curtir"> </button>
    <button type="button" class= "filesPost"> <img src= " "//insira imagem aqui alt="Comentar"> </button>
    <button type="button" class= "filesPost"> <img src= " "//insira imagem aqui alt="Compartilhar"> </button>
    </div>


  </main> `;
    
    
    container.innerHTML = template;

    return container;
}