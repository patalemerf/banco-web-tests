# Testes Automatizados Web — Banco Web

Projeto de testes automatizados de interface desenvolvido com **Cypress e JavaScript** durante a **Mentoria 2.0, de Julio de Lima**. O projeto pratica a criação e a organização de testes end-to-end (E2E), a reutilização de código por meio de *custom commands* e a geração de relatórios HTML.

Os testes validam fluxos da aplicação Banco Web por meio da interface, simulando ações que uma pessoa usuária faria no navegador.

## Objetivos

- Automatizar cenários importantes da aplicação Banco Web.
- Verificar comportamentos esperados e mensagens de validação.
- Reutilizar ações comuns com *custom commands*.
- Organizar os testes para facilitar manutenção e evolução.
- Executar os testes pela interface do Cypress ou pela linha de comando.
- Gerar relatórios HTML para facilitar a análise dos resultados.

## Projetos necessários

Para executar os testes, **a API do banco e a aplicação web precisam estar em execução**.

- **Banco Web:** https://github.com/juliodelimas/banco-web
- **Banco API:** https://github.com/juliodelimas/banco-api

Clone e configure esses projetos seguindo as instruções de seus respectivos READMEs. Confira também as portas e URLs utilizadas por cada aplicação e se elas correspondem ao `baseUrl` configurado no projeto de testes.

## Tecnologias e ferramentas

- **JavaScript** — linguagem dos testes.
- **Cypress** — automação de testes end-to-end.
- **cypress-mochawesome-reporter** — geração de relatórios HTML.
- **npm** — instalação de dependências e execução de scripts.

As dependências e versões do projeto estão declaradas no `package.json` e no `package-lock.json`.

## Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/) — preferencialmente uma versão compatível com a versão do Cypress definida no projeto.
- npm, que acompanha o Node.js.
- Git.
- Banco Web e Banco API configurados e em execução.

## Instalação

1. Clone este repositório de testes e entre na pasta do projeto:

   ```bash
   git clone <URL_DESTE_REPOSITORIO>
   cd <PASTA_DO_PROJETO>
   ```

   Substitua os valores entre `< >` pelo endereço e nome reais deste repositório.

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Confirme a configuração em `cypress.config.js`, especialmente o `baseUrl`, para garantir que o Cypress acesse a aplicação web no endereço correto.

4. Inicie a **Banco API** e a **Banco Web** conforme as instruções de cada repositório. Mantenha os serviços em execução durante os testes.

## Como executar os testes

### Abrir a interface do Cypress

```bash
npm run cy:open
```

Na interface, selecione o tipo de teste E2E e o arquivo de especificação que deseja executar.

### Executar em modo headless

```bash
npm test
```

Esse comando executa os testes pela linha de comando, sem abrir a interface interativa do Cypress. É útil para execuções repetíveis e futuras integrações com CI/CD.

### Executar com o navegador visível

```bash
npm run cy:headed
```

Os comandos acima correspondem aos scripts configurados no `package.json`:

| Script | Finalidade |
|---|---|
| `npm test` | Executa `cypress run` em modo headless. |
| `npm run cy:headed` | Executa os testes com o navegador visível. |
| `npm run cy:open` | Abre a interface interativa do Cypress. |

Também é possível executar diretamente:

```bash
npx cypress run
```

## Cenários de teste

Os cenários trabalhados no projeto incluem o fluxo de login e a validação de credenciais inválidas.

| Cenário | O que validar |
|---|---|
| Login com credenciais válidas | Preencher os campos necessários, enviar o formulário e verificar o comportamento esperado após a autenticação. |
| Login com senha inválida | Informar uma senha incorreta, enviar o formulário e verificar se a aplicação apresenta o comportamento ou mensagem de erro esperada. |

Os testes usam comandos do Cypress para visitar páginas, localizar elementos, preencher campos, clicar em botões e realizar asserções. Por exemplo, seletores como `#username` e `#password` podem localizar campos de formulário, enquanto `cy.contains('button', 'Entrar')` identifica o botão pelo texto.

> Mantenha esta tabela alinhada aos arquivos `*.cy.js` existentes no projeto. Ao adicionar novos testes, documente o nome do cenário, o comportamento validado e o resultado esperado.

## Organização dos testes

A estrutura exata deve acompanhar os arquivos existentes no repositório. Em um projeto Cypress, os principais locais usados neste projeto são:

```text
.
├── cypress/
│   ├── e2e/                  # Arquivos de especificação (*.cy.js)
│   ├── fixtures/             # Dados de teste reutilizáveis
│   └── support/
│       ├── commands.js       # Definição dos custom commands
│       └── e2e.js            # Configuração de suporte dos testes
├── cypress.config.js         # Configuração do Cypress
├── package.json              # Dependências e scripts npm
└── package-lock.json         # Versões resolvidas das dependências
```

Esta árvore é uma referência dos caminhos usados pelo Cypress; ajuste-a caso a estrutura real do repositório seja diferente.

## Custom commands

Os *custom commands* permitem encapsular ações repetidas e reutilizá-las em vários testes. No projeto, eles são centralizados em `cypress/support/commands.js` e podem ajudar a manter os testes mais legíveis, reduzindo duplicação.

As ações reutilizáveis trabalhadas na mentoria incluem operações comuns como login, navegação e preenchimento/interação com formulários. Para entender exatamente o que cada comando faz, consulte sua implementação em `cypress/support/commands.js`.

### Como documentar um custom command

Ao criar ou alterar um comando, registre-o aqui com o nome real, os parâmetros e seu propósito. Exemplo de formato:

| Custom command | Finalidade | Parâmetros |
|---|---|---|
| `cy.<nome-do-comando>()` | Descrever a ação reutilizável realizada pelo comando. | Informar os argumentos necessários ou `Nenhum`. |

O nome entre `< >` é um marcador de documentação, não um comando pronto para executar. Substitua-o pelo nome definido em `commands.js`.

## Relatórios HTML

O projeto utiliza `cypress-mochawesome-reporter` para gerar relatórios com os resultados da execução. O relatório pode ajudar a identificar testes aprovados ou reprovados e a investigar falhas.

A geração depende da configuração do reporter em `cypress.config.js` e da importação do registro no arquivo de suporte do Cypress. Para confirmar o diretório e o nome do relatório gerado, consulte a configuração efetiva do projeto.

Após executar os testes, abra o arquivo HTML gerado no diretório configurado pelo reporter. Os relatórios e outros artefatos gerados podem ser recriados a cada execução; por isso, confira o `.gitignore` antes de versioná-los.

Documentação do reporter: https://github.com/LironEr/cypress-mochawesome-reporter

## Boas práticas adotadas

- Usar nomes claros para os testes (`describe` e `it`).
- Separar cenários positivos e negativos.
- Preferir seletores estáveis e específicos.
- Reutilizar ações repetidas por meio de *custom commands*.
- Validar o comportamento da aplicação com asserções, não apenas se uma ação foi executada.
- Manter a API e a aplicação web disponíveis durante a execução.
- Não armazenar senhas reais, tokens ou outras informações sensíveis nos testes, fixtures ou no repositório.
- Manter os relatórios e evidências gerados fora do controle de versão, quando apropriado.

## Referências

- [Mentoria 2.0 — Julio de Lima](https://github.com/juliodelimas)
- [Repositório Banco Web](https://github.com/juliodelimas/banco-web)
- [Repositório Banco API](https://github.com/juliodelimas/banco-api)
- [Documentação oficial do Cypress](https://docs.cypress.io/)
- [Custom Commands — Cypress](https://docs.cypress.io/api/cypress-api/custom-commands)
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter)

---

Projeto desenvolvido para fins de aprendizado e prática de automação de testes web durante a Mentoria 2.0.
