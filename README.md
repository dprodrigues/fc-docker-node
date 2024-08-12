# Desafio Nginx com Node.js

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A ideia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

## Tecnologias

- Docker
- Node.js (Express)
- MySql
- Nginx
- Wait-for

## Como rodar

- Clone o repositório
- Basta rodar o projeto com o Docker Compose

```sh
docker compose up
```

- Aguarde a aplicação iniciar
- E acesse a url: [localhost:8080](http://localhost:8080)
