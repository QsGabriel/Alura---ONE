alert('Boas-vindas ao jogo do numero secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 10');
// mas se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }  else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

