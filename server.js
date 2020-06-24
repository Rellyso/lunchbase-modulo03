const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

// configurar no server para que o express use páginas estáticas dentro da pasta public/
server.use(express.static('public'))

//definindo o mecanismo de visualização como o html
server.set('view engine', 'njk')

//configurando o nunjucks passando o nome da pasta que será utlizada
// o template engine (views)
nunjucks.configure('views', {
    express: server
})

//pegar do server a / e retonar uma função com requisição e resposta  
server.get('/', function (req, res) {
    //mandar send() o servidor uma resposta (res) 
    // return res.send('Hi! How are you?')

    //retorna a renderização da página index
    return res.render('about')
})

server.get('/portfolio', function (req, res) {
    return res.render('portfolio', {
        items: videos
    })
})

server.listen(5000, function () {
    console.log('server is running')
})