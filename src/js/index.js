//document.getElementById('Chopper');
//objetivo 1 cliclar no botao do personagem na lista marcar o botao como selecionado
//objetivo 2 - quando clilar no botao do personagem mostrar as informaçoes do personagem 

//passo 1 - pegar os botoes no js para poder verificar quando o usuario clicar em cima de um deles
const botoes = document.querySelectorAll('.botao');
// objetivo 2 passo 1 - pegar os personagens no js para poder verificar quando o usuario clicar no botao para selecionar
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", ()=> {


        //passo 3 - verificar se ja existe um botao selecionado, se sim, devemos remover a seleção dele
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

       //passo 2 - adicionar a classe "selecionado" no botão que o usuario clicou
        botao.classList.add("selecionado"); 

        //objetivo 2 -  passo 3 - verificar se ja existe um personagem selçecionado, se sim, devemos remover a seleção dele
        const personagemSelecionado = document.querySelector(".personagem.selecionado"); 
        personagemSelecionado.classList.remove("selecionado");

        //objetivo 2 - passo 2 - adicionar a lcasse "selecionado" no personagem que o usuario selecionou

        personagens[indice].classList.add("selecionado");
        
            
    }); 

});

