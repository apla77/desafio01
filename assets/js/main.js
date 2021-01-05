const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValor = e.target.querySelector('#valor');

    const valor = Number(inputValor.value);
    
    if (!valor || valor < 1 || valor > 100) {
        setResultado('Valor inválido!', false);
        return;
    }

    const valorNum = getValor(valor); 

    const msg = `Valor ${valor}  (${valorNum}).`;

    setResultado(msg, true);
    
});

function getValor (valor) {
    const nivel = ['Weird', 'Not Weird', 'Weird', 'Not Weird',];

    if (valor % 2 !== 0) return nivel[0];
    if (valor >= 2 && valor <= 5 && valor % 2 === 0) return nivel[1];
    if (valor >= 6 && valor <= 20 && valor % 2 === 0) return nivel[2];
    if (valor > 20 && valor % 2 === 0) return nivel[3];

}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

