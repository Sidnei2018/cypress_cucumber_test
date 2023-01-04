import PagePesquisa from '../pageobjects/PesquisaPage'
const pagePesquisa = new PagePesquisa

Given("acesso o site publicazo", () => {
    pagePesquisa.acessarSite();
})

When("pesquisar a palavra teste", () => {
    pagePesquisa.abraPaginaLogin();
})

Then("devo visualizar {string}", (palavra) => {
    pagePesquisa.visualizarPalavra();
})