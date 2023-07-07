# Marvel Heroes

<br>

<a href="https://desafio-frontend-fpass.vercel.app/" title="Clique aqui para acessar o projeto">Clique aqui para acessar o projeto
<img width="3161" alt="previsao-tempo" src="https://github.com/MarceloKade/social-network/assets/98852912/2904ad1e-00d9-41a4-987f-218b4089363c">
</a>

<br>

## Menu

- [Marvel Heroes](#marvel-heroes)
  - [Apresentação](#apresentação)
  - [Objetivo](#objetivo)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias](#tecnologias)
  - [Execução](#execução)
  - [Status](#status)
  - [Contato](#contato)

### Apresentação

- Esse aplicativo é um desafio front-end proposto pela empresa Fpass, com o objetivo de testar as capacidades do candidato.
- O projeto foi iniciado com Next.js, React.js, typescript.
- Foi instalado a dependência de estilização Styled Components 
- Definido as configurações do Styled Components no arquivo registry.tsx para ingetar automáticamente a estilização nos arquivos html.
- As tipagens separadas na pasta interfaces e a lógica na pasta utils para facilitar a manutenção.
- Foi criado pastas para armazenar arquivos de estilização e componentes reutilizáveis.
- Dentro da pasta app tem o arquivo page.tsx que é a página inicial, a página search para pesquisar pelos personagens e a página description para mostrar a descrição de cada personagem selecionado, seja na página inicial, seja na página de busca.
- Na página inicial é listado 21 personagens para desktop, e 20 para tablet e mobile
- Foi criado dois botões na página inicial, o botão para mostrar os próximos 21 ou 20 personagens, e o botão para voltar para os personagens anteriores.
- Na página de busca, se o campo estiver vazio, irá renderizar todos os personagens, se digitar um nome que não existe, aparecerá uma mensagem avisando que não foi encontrado o personagem, se o nome do heroi pesquisado existir no array, será listado os personagens referente ao valor do input.

### Objetivo

O objetivo deste projeto é criar uma aplicação de que exiba os personagens da marvel por cartas, e ao selecionar uma carta específica, mostrar detalhes desse personagem, podendo pesquisar também pelo nome na página de busca.

### Funcionalidades

- Exibir as cartas dos herois na página principal.
- Ao selecionar uma carta, será redirecionado para a página onde contem mais detalhes sobre esse personagem.
- Você também pode pesquisar pelo personagem específico indo em Search.

### Tecnologias

As seguintes tecnologias foram utilizadas neste projeto:

- Next.js.
- TypeScript.
- Styled Components.
- Axios.

### Execução

Para executar o projeto você pode fazer um clone com o commando

```bash
npm git clone git@github.com:MarceloKade/desafio-frontend-fpass.git
```

 e no terminal digitar

```bash
npm install
```


após instalar as dependências.
```bash
npm run dev
```

### Status

- Completed: [![Netlify Status](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/marcelokade/desafio-frontend-fpass/G4p5NNGWAKXvy5DAB62T76RqV8QG)

### Contato

<br>

<div>
  <a href="https://www.linkedin.com/in/marcelokade/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href="mailto:marcelo.kade@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>