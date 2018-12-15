const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

/* para toda requisicao que chegar no formato urlencoded, 
 * use o bodyParser para interpreta-la */
server.use(bodyParser.urlencoded({ extended: true }))

/* para toda requisicao que chegar no formato json, 
 * use o bodyParser para interpreta-la */
server.use(bodyParser.json())

/* permite que aplicativos de origens diferentes utilize a api.
 * Em outras palavras, permite que o frontend utilize a api */
server.use(allowCors)

/* converte a string numerica passada por parapetro na requisicao
 * para int, permitindo utilizar parametros de requisicao como 
 * 'localhost:3003/api/billingCycles?skit=0&limit=1' */
server.use(queryParser())

/* fica escutando a porta definida. Caso a porta seja
 * usada por um serviço, exibe mensagem na tela. */
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server