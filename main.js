let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');
let contagemPalpites = 1;
let botaoReiniciar;

function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }

    palpites.textContent += palpiteUsuario + " ";

     if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabéns! Você acertou!!!";
        ultimoResultado.style.backgroundColor = "green";
        baixoOuAlto.textContent = "";
        finalizarJogo();
        } else if (contagemPalpites === 10) {
            ultimoResultado.textContent = "FIM DE JOGO!!!";
            baixoOuAlto.textContent = "";
            finalizarJogo();
        } else {
            ultimoResultado.textContent = "ERRADO!!!!!!!";
            ultimoResultado.style.backgroundColor = "red";
            if (palpiteUsuario < numeroAleatorio) {
                baixoOuAlto.textContent = "MUITO BAIXO!!!!!!"
            } else if (palpiteUsuario > numeroAleatorio) {
                baixoOuAlto.textContent = "MUITO ALTO!!!!!!"
            }
        }

        contagemPalpites++;
        campoPalpite.value = "";
        campoPalpite.focus();
   }

   envioPalpite.addEventListener('click', verificarPalpite)

   function finalizarJogo() {
    campoPalpite.disable = true;
    envioPalpite.disable = true;
    botaoReiniciar = document.createElement('button');
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reiniciarJogo);
   }


   function reiniciarJogo() {
    contagemPalpites = 1;
    const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultado p');
    for (const paragrafosReiniciar of paragrafosReiniciar) {
        paragrafosReiniciar.textContent = "";
    }

    botaoReiniciar.parentNode.removeChild(botaoReiniciar);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();
    ultimoResultado.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
   }
