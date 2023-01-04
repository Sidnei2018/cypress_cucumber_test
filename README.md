# cypress_cucumber_test 🥒

Testes automatizados com cypress e cucumber

## Configurando o ambiente de testes 🚩<br>

1 - Instale o Nodejs do site oficial em sua máquina: https://nodejs.org/en/ 🌍<br>
2 - Escolha uma IDE de sua escolha, estarei utilizando o Visual Studio Code neste tutorial: https://code.visualstudio.com/ 🌍<br>
3 - Instale o cypress com o cucumber 🥒<br>

Criaremos a pasta do projeto e apontaremos para esta pasta no terminal;<br>
Após acessar a pasta, executamos o comando de instalação: npm install --save-dev cypress@9.7.0 cypress-cucumber-preprocessor<br>
No comando acima, (cypress@x.x.x) você escolhe qual versão do cypress vai utilizar. Para este exemplo foi utilizada a versão 9.7.0<br>
Ainda na pasta, digite o comando (npx cypress open) para terminar a instalação dos arquivos locais<br>

Configurar o cucumber no cypress 🥒<br>

Adicione ao arquivo cypress\plugins\index.js o seguinte script:<br>

const cucumber = require('cypress-cucumber-preprocessor').default<br>
module.exports = (on, config) => {<br>
  on('file:preprocessor', cucumber())<br>
}<br>
<br>

![index](https://user-images.githubusercontent.com/28484134/210561829-b46b7002-aab1-4801-9bf1-bad0512e143e.jpg)<br>

Após configurar o arquivo, podemos iniciar os testes!<br>

## Conhecendo os comandos do cypress:<br>

Podemos automatizar todos os elementos de uma página web utilizando os comandos do cypress,<br>
ele possui uma documentação completa para consulta aqui: https://docs.cypress.io/api/table-of-contents<br>

GET - cy.get(): Comando responsável por selecionar elementos na tela para executarmos uma ação;<br>
CLICK - .click(): O comando click é responsável por clicar nos elementos da página em conjunto com o comando GET;<br>
TYPE - type('text'): Type é utilizado para setar informações em campos, funcionando igual a digitarmos no teclado;<br>
VISIT - cy.visit(http://): O comando visit é utilizado para acessar endereços na internet para realizarmos os testes;<br>
SHOULD - .should(''): O comando should é utilizado para realizar asserções na página. Normalmente é o último comando<br>
utilizado no cenário, sendo responsável por validar se um teste passou ou reprovou.<br>

## Continuando a configuração das pastas 📂<br>

Após a instalação do cypress e do cucumber, teremos uma estrutura de pastas;<br>

![pastas](https://user-images.githubusercontent.com/28484134/210562731-a71dd1f3-9692-4efb-92fc-584fae2f49aa.jpg)<br>

1 - integration: Nesta pasta colocaremos nossos cenários de teste escritos na linguagem Gherkin;<br>
2 - plugin/index.js: Este arquivo é destinado para a configuração de plugins. Utilizamos ele para configurar o cucumber;<br>
3 - support: Nesta pasta colocamos os steps, os scripts e o mapeamento de elementos do nosso site;<br>
4 - node_modules: Nesta pasta ficam os arquivos do cypress e do cucumber;<br>
5 - cypress.json: Neste arquivo podemos realizar configurações globais do nosso projeto, como criar variáveis, definir navegador,<br>
setar url, etc...<br>
6 - elements: Nesta pasta colocamos os elementos da página para reutilização e manutenção;<br>
7 - pageobjects: Nesta pasta colocamos os scripts do cypress no formato .js para cada página ou fluxo do site,<br>
assim ficará mais fácil de organizar os códigos;<br>
8 - steps: Nesta pasta colocamos os passos que farão a conexão entre o que escrevemos em Gherkin e os scripts do cypress.<br>

## Adicione o seguinte código no arquivo package.json:<br>

{<br>
    "scripts": {<br>
        "test:chrome": "cypress run --browser chrome --no-exit"<br>
    },<br>
    "cypress-cucumber-preprocessor": {<br>
        "step_definitions": "cypress/support/steps"<br>
    }<br>
}<br>

## Rodando o primeiro teste 🛠<br>

Com o ambiente configurado, podemos realizar um teste prático;<br>

### Objetivo:<br>
Automatizar a pesquisa em um site buscando por um elemento!<br><br>

Aqui temos nosso cenário de teste escrito em Gherkin;<br>

![gherkin](https://user-images.githubusercontent.com/28484134/210563028-0d4fa5f1-c844-4b4c-8b85-c456ff7ad56e.jpg)<br>

Neste arquivo estão os dados referentes aos elementos do site e seu endereço;<br>

![pageobjects](https://user-images.githubusercontent.com/28484134/210563627-b6edeec7-94cb-4812-9572-ace07be9c8d1.jpg)<br>

Neste arquivo se encontram os passos do teste descritos em nosso cenário;<br>

![pesquisa](https://user-images.githubusercontent.com/28484134/210564623-af2525ac-a17a-471e-8720-e0db65306334.jpg)<br>

Neste arquivo temos as funções e comandos do cypress que executaremos no site;<br>

![pesquisapage](https://user-images.githubusercontent.com/28484134/210565021-2db3caf7-ea37-49c7-98a9-34d7ab3cf9dd.jpg)<br>

O próximo passo é abrir o terminal de sua IDE e digitar o comando para iniciar o cypress:<br><br>
"npx cypress open" - Ele abre o cypress para um teste manual!<br>

![manual](https://user-images.githubusercontent.com/28484134/210566590-9c46a3df-847a-405d-9de5-2ee142ad9206.jpg)<br>
![testeok](https://user-images.githubusercontent.com/28484134/210569918-a51847a4-55dc-4430-982c-5c083a4e4f93.jpg)<br>

"npm run test" - Ele abre o cypress para um teste automático!<br>
![testeautomatico](https://user-images.githubusercontent.com/28484134/210569669-bbcc03ef-00e2-4d70-8432-aec107622897.jpg)<br>

Nosso teste passou com sucesso! 🚀<br><br>
