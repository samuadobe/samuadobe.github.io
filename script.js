
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('change');
    menu.classList.toggle('change');
});

//FUNÇÃO DARK E WHITE MODE

function trocarModo (){
    //cria referenc aos elementos da pag
    var divSite = document.getElementById("divSite");
    
    var modo;  //define variavel que ira receber o modo
    
    //verifica qual radiobutton esta selecionado
    
    if (rbWhite.checked){
        modo = "White";
    } else if (rbDark.checked){
        modo = "Dark";
    } 
    
     //define as classes de divTitulo: row e cores do clube
     divSite.className = modo;
    
     // salva no navegador a escolha do cliente
     localStorage.setItem("modo",modo);
    }
    
    //captura os elementos do radiobutton
    var rbWhite = document.getElementById("rbWhite");
    var rbDark = document.getElementById("rbDark");
    
    //associa ao evento change a function trocarClube
    rbWhite.addEventListener("change", trocarModo);
    rbDark.addEventListener("change", trocarModo);
    
    function verificarModo(){
    
        //se ja estiver salvo algum modo
        if(localStorage.getItem("modo")){
    
            var modo = localStorage.getItem("modo");//obtem o modo
    
        //conforme o clube, marca um dos elementos do iput type radio
        if (modo == "White") {
            rbWhite.checked = true;
    
        } else if (modo == "Dark") {
            rbDark.checked = true;
    
        } 
        
        trocarModo(); // chama a function que troca a imagem e  cores
        }
    }
     // chama function q verifica  se cliente ja selecionou o modo
     verificarModo();

     //FIM DE FUNÇÃO

     //Liga e Desligar lampada
     var quebrada = false;

     function mudaLampada(tipo){

         if(tipo==1){
             arquivo ="imagens/ligada.png"
         }

         if(tipo==2){
             arquivo ="imagens/desligada.png"
         }
     
         if(tipo==3){
             arquivo ="imagens/quebrada.png"
         
         }
         if (!quebrada) {
             document.getElementById("luz").src = arquivo;
             if (tipo==3){
                 quebrada = true;
             }
         }

     }