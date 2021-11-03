// GOAL RESPOSTA CERTA - eu clico na resposta certa e aparece-me HTML e CSS a dizer "correcto"

// GOAL RESPOSTA ERRADA - eu clico  numa resposta errada e aparece-me HTML e CSS "oops errada" + "algo específico à resposta que eu cliquei" + "tenta outra vez"


// GOAL RESPOSTA CERTA

// 1. tenho que ir buscar o botão com a resposta correcta
const respostaCerta = document.getElementById('resposta-certa');

// 1.2 tenho que ir buscar o p para onde eu quero injectar contudo
const explicacao= document.getElementById('explicacao');

// 2. tenho que por o elemento resposta certa a escutar o meu click'

respostaCerta.addEventListener('click',(event) => {
	explicacao.innerHTML = "<strong> Correcto!!</strong>"
})

// GOAL RESPOSTA ERRADA 

// 1. tenho que ir buscar todas as respostas com a classe resposta-errada

const respostasErradas = document.querySelectorAll('.resposta-errada');
	
// 2. Iterar por cada resposta errada
respostasErradas.forEach((resposta) => {
	// 3. JS estar à escuta do click em cxada resposta
	resposta.addEventListener('click', (event) => {
		 let explicacaoConteudo = "<strong> Ops, errado...</strong>"

		 	// 4. Distinguir que resposta é se é HTML, CSS ou Ruby
		 	if(resposta.id === "resposta-html") {
		 		explicacaoConteudo += " HTML permite-nos dar estrutura à nossa página."
		 	} else if(resposta.id === "resposta-css") {
		 		explicacaoConteudo += " CSS permite-nos dar estilo à nossa página."
		 	} else if (resposta.id === "resposta-ruby") {
		 		explicacaoConteudo += " Ruby é uma das várias linguagens que pode ser utilizada no back end"
		 	}

		 	explicacaoConteudo += " Tenta outra vez"

		 explicacao.innerHTML = explicacaoConteudo;


		}) 

	})
