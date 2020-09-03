var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu")
});

document.querySelector('#qtd').addEventListener("change", refreshprice);
document.querySelector('#js').addEventListener("change", refreshprice);
document.querySelector('#layout-sim').addEventListener("change", refreshprice);
document.querySelector('#layout-nao').addEventListener("change", refreshprice);
document.querySelector('#prazo').addEventListener("change", function (){
    const prazo = document.querySelector('#prazo').value;
    if(prazo>1) document.querySelector('label[for="prazo"]').innerHTML = `${prazo}  Semanas`;
    else{document.querySelector('label[for="prazo"]').innerHTML = `${prazo}  Semana`;}
    refreshprice()
});

function refreshprice(){
    const qtd = document.querySelector('#qtd').value;
    const temJS = document.querySelector('#js').checked;
    const laysim = document.querySelector('#layout-sim').checked;
    const prazo = document.querySelector('#prazo').value;
    let preco = qtd * 100;
    if(temJS && laysim) preco *= 2;
    else if(temJS || laysim) preco *= 1.5;
    preco *= 10/(prazo);
    document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`;
}
