
let condutividadeAtual = document.getElementById("condutividadeAtual");
let condutividadeDesejada = document.getElementById("condutividadeDesejada");
let agua = document.getElementById("agua");
let res = document.getElementById("res");
let limp = document.getElementById("limp");

function calcular(){ 
    let select = document.getElementById("tiposnutrientes");
    let opcao = select.options[select.selectedIndex].value;
    switch(opcao){
        case "a":
            let diferenca = condutividadeDesejada.value - condutividadeAtual.value;
            let x = diferenca * 690 / 1500;
            let y = parseFloat(x / 1000 * agua.value);
            res.innerHTML = (`<p>Adicione <span style="color: red;">${y.toFixed(2)}</span>g Flex <span style="color: blue;">Azul</span></p> <p>Adicione <span style="color: red;">${y.toFixed(2)}</span>g Flex <span style="color: red;">Vermelho</span></p>`);
            limp.innerHTML = (`<input type="button" id="limpar" value="LIMPAR" onclick="limpar()">`);
            break;

        case "b":
            res.innerHTML = (`<p><span style="color: red;">Essa função ainda não esta pronta!!</span></p>`);
            break;

        case "c":
            res.innerHTML = (`<p><span style="color: red;">Essa função ainda não esta pronta!!</span></p>`);
            break;      
    };
};

function limpar(){
    limp.innerHTML = "";
    res.innerHTML = "";
    condutividadeAtual.value = "";
    condutividadeDesejada.value = "";
    agua.value = "";
};