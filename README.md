<h1 align="center">Egadnet Challenge</h1>

<p align="center">
  <a href="#about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

## Sobre este projeto

<div id="about"></div>

Teste de habilidades NodeJs.

## Tecnologias

<div id="tecnologias"></div>

- [JWT](https://jwt.io/) - JSON Web Token
- [Axios](https://github.com/axios/axios) - HTTP Client
- [Express](https://expressjs.com/) - Web Framework
- [ESlint](https://eslint.org/) - Linter

## Documentação, CURL, Insomnia.

Um arquivo .json está disponível na pasta **files**, podendo ser importado para o Insomnia.

Use o comando curl abaixo para testar ou utilize-o importando no Insomnia.

**_Criando Token_**

```curl
curl --request POST \
  --url http://localhost:3001/token \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "email@gmail.com"
}'
```

Com o token faça...

```curl
curl --request POST \
  --url http://localhost:3001/cep \
  --header 'Authorization: Bearer {{TOKEN}}' \
  --header 'Content-Type: application/json' \
  --data '{
	"cep": "89120000"
}'
```

## License

<div id="license"></div>

MIT [LICENSE](LICENSE.md)
