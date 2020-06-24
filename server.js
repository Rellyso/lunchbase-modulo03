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
    express: server,
    autoescape: false
})

//pegar do server a / e retonar uma função com requisição e resposta  
server.get('/', function (req, res) {
    //mandar send() o servidor uma resposta (res) 
    // return res.send('Hi! How are you?')

    //retorna a renderização da página index
    const about = {
        img_url: "https://avatars2.githubusercontent.com/u/63888510?s=460&u=a435f843937d4f52e261df7a9578bc5bb2acf449&v=4",
        name: "Rellyson Douglas",
        role: "Estudante - Rocketseat",
        description: 'Desenvolvedor web fullstack em aprendizagem. Aluno da <a href="http://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            {name: "Github", url: "https://github.com/rellyso/"},
            {name: "Twitter", url: "https://twitter.com/rellyson1/"},
            {name: "Linkedin", url: "https://linkedin.com/in/rellyson-douglas/"}
        ]
    }

    return res.render('about', {about})
})

server.get('/portfolio', function (req, res) {
    return res.render('portfolio', {
        items: videos
    })
})

server.listen(5000, function () {
    console.log('server is running')
})