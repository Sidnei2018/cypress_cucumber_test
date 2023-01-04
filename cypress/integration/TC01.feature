
Feature: Pesquisa Publicazo

    Scenario: Pesquisar a palavra teste
        Given acesso o site publicazo
        When pesquisar a palavra teste
        Then devo visualizar "teste de software"