//declaração das variáveis pra fonte do elemento p
const vezesModificadas = {
    h1: 0,
    p: 0
} ;

const botaoAumentarH1 = document.getElementById("h1Aumentar");
const botaoDiminuirH1 = document.getElementById("h1Diminuir");
const botaoAumentarP = document.getElementById("pAumentar");
const botaoDiminuirP = document.getElementById("pDiminuir");
const elementoh1 = document.querySelector("h1");

const p15 = modificarFonte(15);
const p17 = modificarFonte(17);
const p19 = modificarFonte(19);
const p21 = modificarFonte(21);
const p24 = modificarFonte(24);
const h17 = modificarFonteH(17);
const h20 = modificarFonteH(20);
const h23 = modificarFonteH(23);
const h26 = modificarFonteH(26);

function modificarFonte(tamanho) {
    return function() {
        document.body.style.fontSize = tamanho + "px";
    };
}

function modificarFonteH(tamanho) {
    return function() {
        elementoh1.style.fontSize = tamanho + "px";
    };
}

function aumentarH1() {
    switch(vezesModificadas.h1) {
        case 0:
            h20();
            vezesModificadas.h1++;
            break;
        case 1:
            h23();
            vezesModificadas.h1++;
            break;
        case 2:
            h26();
            vezesModificadas.h1++;
            break;
        case 3:
            alert("Tamanho máximo pro título");
            break;
    }
}

function diminuirH1() {
    switch (vezesModificadas.h1) {
        case 3:
            h23();
            vezesModificadas.h1--;
            break;
        case 2:
            h20();
            vezesModificadas.h1--;
            break;
        case 1:
            h17();
            vezesModificadas.h1;
            break;
        case 0:
            alert("Tamanho mínimo pro título");
            break;
    }
}

function aumentarP() {
    switch (vezesModificadas.p) {
        case 0:
            p17();
            vezesModificadas.p++;
            break;
        case 1:
            p19();
            vezesModificadas.p++;
            break;
        case 2:
            p21();
            vezesModificadas.p++;
            break;
        case 3:
            p24();
            vezesModificadas.p++;
            break;
        case 4:
            alert ("Este é o tamanho máximo");
            break;
    }
}

function diminuirP() {
    switch (vezesModificadas.p) {
        case 4:
            p21();
            vezesModificadas.p--;
            break;
        case 3:
            p19();
            vezesModificadas.p--;
            break;
        case 2:
            p17();
            vezesModificadas.p--;
            break;
        case 1:
            p15();
            vezesModificadas.p--;
            break;
        case 0:
            alert("Já está no tamanho mínimo");
            break;

    }
}

//event listeners
botaoAumentarP.addEventListener('click', () => {
    aumentarP();
});

botaoDiminuirP.addEventListener('click', () => {
    diminuirP();
});

botaoAumentarH1.addEventListener('click', () => {
    aumentarH1();
});

botaoDiminuirH1.addEventListener('click', () => {
    diminuirH1();
});