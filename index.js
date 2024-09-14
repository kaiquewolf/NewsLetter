let baseUrl = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"


async function fetchData() {
    const url = `${baseUrl}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados: ', error);
    }
}


function itemsInitialPage(products) {


    divConteudo = document.getElementById('produtos');
    divConteudo.innerText = "";


    products.products.map(function (produto) {

        const div = document.createElement('div');
        div.classList.add('conteudoProduto');

        div.innerHTML =
            `
                                    <div class="retangulo">
                                        <img src=${produto.image} alt="Imagem demonstrativa do produto">
                                    </div>
                                    <div class="info-produto">
                                        <h3>${produto.name}</h3>
                                        <p class="descricaoDoProduto">${produto.description}
                                        <p>De: R$ ${produto.oldPrice}</p>
                                        <p class="precoPromocional"><strong>Por: R$ ${produto.price} </strong></p>
                                        <p class="parcelamento">ou ${produto.installments.count}x de R$ ${produto.installments.value}</p>
                                        <button type="button">Comprar</button>
                    `
        divConteudo.appendChild(div);
    })
};

// Função para carregar Página inicial
async function loadInitialPage() {
    const data = await fetchData();


    // Exibir os dados na interface
    if (data) {
        // Atualiza a página atual 
        itemsInitialPage(data);
        console.log('passou aqui')
    } else {
        console.log('Não há mais itens para carregar');
    }
}



async function addNextPage() {
    
    divConteudo = document.getElementById('produtos');
    
    data = await fetchData();
    console.log(data);

    baseUrl = data.nextPage;



    data.products.map(function (produto) {

        const div = document.createElement('div');
        div.classList.add('conteudoProduto');

        div.innerHTML =
            `
                                    <div class="retangulo">
                                        <img src=${produto.image} alt="Imagem demonstrativa do produto">
                                    </div>
                                    <div class="info-produto">
                                        <h3>${produto.name}</h3>
                                        <p class="descricaoDoProduto">${produto.description}
                                        <p>De: R$ ${produto.oldPrice}</p>
                                        <p class="precoPromocional"><strong>Por: R$ ${produto.price} </strong></p>
                                        <p class="parcelamento">ou ${produto.installments.count}x de R$ ${produto.installments.value}</p>
                                        <button type="button">Comprar</button>
                    `
                    divConteudo.insertBefore(div, null);
    })

}


// Carrega a primeira página de itens
loadInitialPage();

