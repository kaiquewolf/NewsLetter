const baseUrl = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
let currentPage = 1; // Página inicial
const itemsPerPage = 8; // Itens por página

async function fetchData(page, limit) {
    const url = `${baseUrl}?page=${page}&limit=${limit}`;

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

    products.products.map(function(produto) {
        return (
            page.innerHTML =
            `
            <div class="conteudoProduto">
                                    <div class="retangulo">
                                        <img src=${produto.image} alt="Imagem demonstrativa do produto">
                                    </div>
                                    <div class="info-produto">
                                        <h3>${produto.name}</h3>
                                        <p class="descricaoDoProduto">${produto.description}
                                        <p>De: R$ ${produto.oldPrice}</p>
                                        <p class="precoPromocional"><strong>Por: R$ ${products.price} </strong></p>
                                        <p class="parcelamento">ou ${console.log(produto.name)}x de R$ </p>
                                        <button type="button">Comprar</button>
                                    </div>
                    `
        );
   })
};

// Função para carregar Página inicial
async function loadInitialPage() {
    const data = await fetchData(currentPage, itemsPerPage);


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
    data = await fetchData(currentPage, itemsPerPage);
    console.log("funcionando")
}


loadInitialPage(); // Carrega a primeira página de itens