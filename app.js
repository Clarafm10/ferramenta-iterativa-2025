function criaCartao(categoria, pergunta, respota) {
    console.log(categoria, pergunta, respota)

    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    //17-09-25//
    cartao.innerHTML = `
    <div class="cartao conteudo">
        <h3>${categoria}</h3>
        <div class="cartao_contudo_pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao_contudo_pergunta">
            <p>${resposta}</p>
    </div>

</div>
`
container.appendChild(cartao);
}