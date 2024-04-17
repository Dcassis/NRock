

//////////// CARTAZ POP-UP ///////////

//  document.addEventListener("DOMContentLoaded", function () {
//   const popupContainer = document.getElementById("popup-container");
//  // const closeButton = document.getElementById("close-btn");
//   const banner = document.getElementById("banner")  

    
// // Esconder Banner para mostrar o POP-UP
//     banner.classList.add("block")
//     banner.classList.remove("hidden")

//   // Exibir o pop-up ao carregar a página
//     popupContainer.style.display = "flex";

//   // Associar a ação de fechar ao botão
//     //closeButton.addEventListener("click", function() {
//    //Ocultar o pop-up ao clicar no botão
//     popupContainer.style.display = "none";
//     banner.classList.remove("hidden")
//     banner.classList.add("block")
//   });
// ;


//////////// MODAL MUSICOS ///////////

let paragrafo = document.getElementById("vocal")
let botaoModalOpen = document.getElementById("botaoModalOpen")
let botaoAbrir = document.getElementById("botaoModal")

botaoModalOpen.onclick = function () {
    paragrafo.style.display = "block"
    botaoModalOpen.style.display = "none"
}

botaoModal.onclick = function () {
    paragrafo.style.display = "none"
    botaoModalOpen.style.display = "flex"
}

let paragrafo2 = document.getElementById("baixo")
let botaoModalOpen2 = document.getElementById("botaoModalOpen2")
let botaoAbrir2 = document.getElementById("botaoModal2")

botaoModalOpen2.onclick = function () {
    paragrafo2.style.display = "block"
}

botaoModal2.onclick = function () {
    paragrafo2.style.display = "none"
}

let paragrafo3 = document.getElementById("guitar")
let botaoModalOpen3 = document.getElementById("botaoModalOpen3")
let botaoAbrir3 = document.getElementById("botaoModal3")

botaoModalOpen3.onclick = function () {
    paragrafo3.style.display = "block"
}

botaoModal3.onclick = function () {
    paragrafo3.style.display = "none"
}

let paragrafo4 = document.getElementById("drums")
let botaoModalOpen4 = document.getElementById("botaoModalOpen4")
let botaoAbrir4 = document.getElementById("botaoModal4")

botaoModalOpen4.onclick = function () {
    paragrafo4.style.display = "block"
}

botaoModal4.onclick = function () {
    paragrafo4.style.display = "none"
}

//////////// HORAS PARA O SHOW ///////////

//  // Seu código JavaScript aqui
//        const dataDoEvento = moment.tz('2024-04-19T17:00:00', 'America/Sao_Paulo');
//         const agora = moment();
//         const diferenca = moment.duration(dataDoEvento.diff(agora));

//         const diasFaltando = diferenca.days();
//         const horasFaltando = diferenca.hours();
//         const minutosFaltando = diferenca.minutes();

// document.getElementById('tempo-para-evento').innerText = ` Faltam: ${diasFaltando} dias, ${horasFaltando} horas e ${minutosFaltando} minutos  
//             Para nosso próximo Show!`;


/////EXIBIR ANO ATUAL NO COPYRIGHT////
 var anoAtual = moment().format('YYYY');
    
  // Exiba o ano atual na página HTML
document.getElementById('ano').innerText = anoAtual;
  

/////QUIZ//////

 function verificarResposta() {
      var respostaCorreta = "c"; // Defina a resposta correta aqui
      var respostaUsuario = document.querySelector('input[name="resposta"]:checked');

      if (respostaUsuario) {
        if (respostaUsuario.value === respostaCorreta) {
          document.getElementById("resultado").innerText = "Correto! Eles usaram macacões no Rock in Rio em 2015.";
        } else {
          document.getElementById("resultado").innerText = "Incorreto. Tente novamente!";
        }
      } else {
        document.getElementById("resultado").innerText = "Por favor, selecione uma resposta!";
      }
 }
    




//////////// rock news ///////////

// async function loadNews() {
//             const apiKey = '751beb5f9ee84103b6810e1da10346a1'; // Substitua pela sua chave de API do Google
//             const query = 'rock music'; // Sua consulta de pesquisa
//             const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

//             try {
//                 const response = await fetch(url);
//                 const data = await response.json();

//                 if (data.articles && data.articles.length > 0) {
//                     const newsContainer = document.getElementById('news');
//                   newsContainer.innerHTML = ''; // Limpa o conteúdo anterior
                  

//                     data.articles.forEach(article => {
//                         const articleElement = document.createElement('div');
//                         articleElement.innerHTML = `
//                             <h2>${article.title}</h2>
//                             <p>${article.description}</p>
//                             <a href="${article.url}" target="_blank">Leia mais</a>
//                             <hr>
//                         `;
//                         newsContainer.appendChild(articleElement);
//                     });
//                 } else {
//                     console.error('Nenhuma notícia encontrada.');
//                 }
//             } catch (error) {
//                 console.error('Erro ao carregar notícias:', error);
//             }
//         }

//         // Chamada à função de carregamento de notícias quando a página carrega
// window.onload = loadNews;
        

// Função para traduzir o texto usando a API de Tradução do Google
// async function translateText(text, targetLanguage) {
//     const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${text}`);
//     const translatedData = await response.json();
//     return translatedData[0][0][0]; // Extrai o texto traduzido
// }

// async function loadNews() {
//     const apiKey = '751beb5f9ee84103b6810e1da10346a1'; // Sua chave de API do Google
//     const query = 'rock music'; // Sua consulta de pesquisa
//     const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.articles && data.articles.length > 0) {
//             const newsContainer = document.getElementById('news');
//             newsContainer.innerHTML = ''; // Limpa o conteúdo anterior

//             for (const article of data.articles) {
//                 const translatedTitle = await translateText(article.title, 'pt');
//                 const translatedDescription = await translateText(article.description, 'pt');

//                 const articleElement = document.createElement('div');
//                 articleElement.innerHTML = `
//                     <h2>${translatedTitle}</h2>
//                     <p>${translatedDescription}</p>
//                     <a href="${article.url}" target="_blank">Leia mais</a>
//                     <hr>
//                 `;
//                 newsContainer.appendChild(articleElement);
//             }
//         } else {
//             console.error('Nenhuma notícia encontrada.');
//         }
//     } catch (error) {
//         console.error('Erro ao carregar notícias:', error);
//     }
// }

// // Chama a função para carregar as notícias quando a página carrega
// window.onload = loadNews;


//////////// START ANIMATION ///////////
AOS.init();

