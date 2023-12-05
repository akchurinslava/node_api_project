const app = require('express')();
const port = 8080
const swaggerUI = require('swagger-ui-express');
const yamljs = require('yamljs');
//const swaggerDocument = require('./docs/swagger.json');
const swaggerDocument = yamljs.load('./docs/swagger.yaml');
const games = [
    {id: 1, name: "Team Fortress 1", price: "free", rating: 11},
    {id: 2, name: "Team Fortress 2", price: 2.99, rating: 24},
    {id: 3, name: "Team Fortress 3", price: 4.32, rating: 39},
    {id: 4, name: "Team Fortress 4", price: 6.3, rating: 44},
    {id: 5, name: "Team Fortress 5", price: 6.32, rating: 56},
    {id: 6, name: "Team Fortress 6", price: 6.3, rating: 61},
    {id: 7, name: "Team Fortress 7", price: 63.3, rating: 74},
    {id: 8, name: "Team Fortress 8", price: 6.23, rating: 82},
    {id: 9, name: "Super Mario 9", price: 353.2, rating: 93}
]

app.get('/games/:id', (req, res) =>{
    if(typeof games[req.params.id - 1] === 'undefined'){
        return res.status(404).send({error: "Game not found"})
    }
    res.send(games[req.params.id - 1])
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {console.log(`API up at: http://localhost:${port}`)})
