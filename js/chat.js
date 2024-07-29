      //VARIAVEIS DE SISTEMA 
      const mostrar_emoji = document.getElementById('emoji');
      const lista_emoji = document.querySelector('.div-emoji');
      const altura_chat = document.querySelector('.div-chat');
      const altura_listaUsuario = document.querySelector('.div-lista-usuarios');
      const btn_buscar = document.querySelector('#btn-buscar');
      const btn_sendMsg = document.querySelector('#btn-send-msg');
      var txt_sendMsg = document.querySelector('#txt-msg');
      var btnSairChat = document.querySelector('#btn-sair-chat');
      var btnMostrarLista = document.querySelector('.div-mostrar');
      var MostrarListaUsuario = document.querySelector('.div-online');
      var btnBanner = document.querySelector('#btn-banner');

      
      
      

      
      //teste
      function toggleFullScreen() {
          if (!document.fullscreenElement &&    // alternative standard method
              !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
              document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            }
          }
        }
        
        
     



      //fim
      setInterval(()=> {
          if(btnBanner.innerHTML === 'FECHAR' && window.innerWidth > 1024){
              MostrarListaUsuario.classList.toggle('div-online-mob');
              btnBanner.innerHTML = 'CHAT PETSPOT';
              btnMostrarLista.classList.toggle('btn-mostrar-listausuario');

             }


      },1);
      btnMostrarLista.addEventListener('click',() => {
       //MostrarListaUsuario.style.display = 'flex';
  
       MostrarListaUsuario.classList.toggle('div-online-mob');
         btnBanner.innerHTML = 'FECHAR';
         btnMostrarLista.classList.toggle('btn-mostrar-listausuario');
         
         
        });

        btnBanner.addEventListener('click',() => {
         if(btnBanner.innerHTML === 'FECHAR'){
          MostrarListaUsuario.classList.toggle('div-online-mob');
          btnMostrarLista.classList.toggle('btn-mostrar-listausuario');
         
          btnBanner.innerHTML = 'CHAT PETSPOT';
         }

         
          
         });
 



      //ESSE EVENTO CAPTURA DO CLICK DO BOTAÃO SAIR DO CHAT
       btnSairChat.addEventListener('click',() => {
          alert('Saindo do chat')
        })
   
      // ESSE BLOCO CAPTURA O EVENTO QUANDO A TECLA ENTER E PRECIONADA
      txt_sendMsg.addEventListener('keypress',(e)=>{
          if(e.keyCode == 13){
              e.preventDefault();
              btn_sendMsg.click();
          }
      })
     
     
      // ESSE BLOCO CAPTURA QUANDO O USUARIO CLICA NO BOTAO E LIMPA O CAMPO MENSAGEM
      btn_sendMsg.addEventListener('click', ()=> {
          txt_sendMsg.value = '';
      })
    
      //ESSE EVENTO REALIZADO  FILTRO DE USUARIOS ONLINE
      btn_buscar.addEventListener('click',()=>{
          inserirUsuario(); 
      })
   
      // ESSA FUNÇÃO INSERI O CARD QUANDO O USUARIO ESTA ONLINE
      function inserirUsuario() {
          const CardUsuario = document.createElement('div');
          CardUsuario.className = 'div-card-usuario';
          CardUsuario.innerHTML = `
          <div class="div-foto-usuario">
                      <img src="imagens/foto.png" alt="">
              </div>
              <div class="div-status-card">
                      <h2>Robson</h2>
                      <h3>Online</h3>
              </div>
               <div class="div-btn-usuario">
                      <a href="#">Chamar</a>
              </div>`;
          altura_listaUsuario.appendChild(CardUsuario);    
       
      }
  
      //ESSA BLOBO ATUALIZA A ALTURA DA LISTA ONLINE DE ACORDO COM O TAMANHO DA TELA DO CHAT
    var monitor =  setInterval(() => {
      if(lista_emoji.getAttribute('class') === 'div-emoji mostrar-emoji'){
          altura_listaUsuario.style.height = altura_listaUsuario.clientHeight + 'px'; 
      } else {
          altura_listaUsuario.style.height = altura_chat.clientHeight + 'px';
      }
          
      }, 1);

      // ESSE BLOCO MOSTRA A LISTA DE EMOJI PARA SER ENVIANDO
      var statusEmoji = false;
      mostrar_emoji.addEventListener('click', () => {
        
              lista_emoji.classList.toggle('mostrar-emoji');
       })