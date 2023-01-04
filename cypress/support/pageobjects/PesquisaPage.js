import PesquisaPublicazo from '../elements/PesquisaElements'
const pesquisaPublicazo = new PesquisaPublicazo
const url = Cypress.config("baseUrl")

/// <reference types="cypress"/>

class PagePesquisa {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão e pesquisa pela palavra teste
    abraPaginaLogin() {

        cy.get('#search').type('teste')

        cy.get('.btn').click()

    }

    // Verifica se existe o texto 'teste de software' no site
    visualizarPalavra() {

        cy.xpath('/html/body/div[1]/div/div[1]/div[2]/div[2]/div[5]/div/div[2]/a').click()
            .should('be.visible')
            .and('contain', 'teste de software')
        
    }
}

export default PagePesquisa;