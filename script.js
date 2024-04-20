

//////////// CARTAZ POP-UP ///////////

document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.getElementById("popup-container");
  const closeButton = document.getElementById("close-btn");
  
  // Exibir o pop-up ao carregar a página
  popupContainer.style.display = "flex";

  // Associar a ação de fechar ao botão
  closeButton.addEventListener("click", function () {
    //Ocultar o pop-up ao clicar no botão
    popupContainer.style.display = "none";
  });
  ;


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
    

  //////////// START ANIMATION ///////////
  AOS.init()
})

////////////CADASTRO DE NEWSLETTER////////
document.addEventListener("DOMContentLoaded", function() {
    const subscribeButton = document.getElementById("subscribeButton");

    subscribeButton.addEventListener("click", function() {
        const emailInput = document.getElementById("emailInput");
        const email = emailInput.value;

        // Validação de email
        if (!validateEmail(email)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        // Compondo o link para enviar o email
        const subject = encodeURIComponent("Novo inscrito na NewsLetter da Banda 'NRock'");
        const body = encodeURIComponent(`Novo inscrito na NewsLetter da Banda 'NRock':\n\nEmail: ${email}`);
        const destinatario = "nrockoficial@gmail.com";
        const mailtoLink = `mailto:${destinatario}?subject=${subject}&body=${body}`;

        // Abrindo o cliente de email padrão do usuário com o link
        window.location.href = mailtoLink;

        // Limpa o campo de entrada após a subscrição
        emailInput.value = "";

        alert("Obrigado por se inscrever na nossa newsletter!");
    });
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
