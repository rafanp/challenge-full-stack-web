# Sobre o Frontend

Tratando-se de um módulo administrador, é esperado que o número de páginas (e domínios) podem crescer exponencialmente. Pensando nisso é interessante adicionar templates e componentes escaláveis, de maneira que simplifiquem a criação de novos domínios com facilidade e agilidade.

O domínio dos componentes são pensados e criados sob o nome de 'Students', nas quais poderiam ser substituídos por um nome genérico e utilizados puramente como Template. Criação de telas subsequentes poderiam compartilhar os componentes de templates.

### Bibliotecas

- Vee-validate: Para a validação dos formulários
- Vue-router: Para redirecionamento das rotas
- Vuetify: Como biblioteca de VUE UI com componentes do Material UI
- Vuex: Padrão de gerencimanento de estados para a aplicação Vue

### Melhorias

- Abstração das lógicas dos componentes em /templates, para serem preparados e utilizados por múltiplos domínios.
- Adicionar novas informações no arquivo de views/Students/config.js. Cada domínio poderá conter um arquivo chamado config.js, sendo possível personalizar os cabeçalhos da tabela, services utilizados, e demais configurações das páginas.
- Adicionar no arquivo config.js um objeto com os campos do formulário de estudantes.
- Inclusão de testes e melhores tratativas de erros

# Sobre o Backend

Backend desenvolvido em Node utilizando Singleton pattern, separando as responsabilidades em Layers.

- Banco de dados: Postgres
- ORM: TypeORM
- Express.js

### Melhorias
- Atualmente a paginação e filtro é realizada pelo Frontend, logo é necessário adicionar a busca e paginação na API.