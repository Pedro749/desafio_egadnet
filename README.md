<h1 align="center">Egadnet Challenge</h1>

<p align="center">
  <a href="#about">Sobre este projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

## :notebook: Sobre este projeto

<div id="about"></div>

Teste de habilidade.

## Tecnologias 🐱‍🏍🎂

<div id="tecnologias"></div>

- [JWT](https://jwt.io/) - JSON WEB TOKEN
- [Axios](https://github.com/axios/axios) - HTTP Client
- [ESlint](https://eslint.org/) - Linter

### Documentação, CURL, Insomnia e postman.

<div id="doc"></div>

Um arquivo .har está disponível na pasta **files**, podendo ser importado para o Insomnia.

Use o comando curl abaixo para testar ou utilize o importando no Insomnia ou Postman

**_Criando TOKEN_**

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
