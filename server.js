const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

const LogBookAPI = require("./server/src/LogBookAPI.js");


app.prepare()
    .then(() => {
        const server = express()
        server.use(express.json());

        // Fontend views

        server.get('/', (req, res) => {
            return app.render(req, res, '/homepage', req.query)
        })

        server.get('/logInPage', (req, res) => {
            return app.render(req, res, '/logInPage', req.query)
        })

        server.get('/mainPage/:email/:password', (req, res) => {
            return app.render(req, res, '/mainPage', {email: req.params.email, password: req.params.password})
        })

        server.get('/browsePostsPage/:email/:password', (req, res) => {
            return app.render(req, res, '/browsePostsPage', {email: req.params.email, password: req.params.password})
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        // Backend API

        server.post('/getUserInfo', function (req, res) {
            LogBookAPI.logIn(req.body).then(({response, code}) => {
                res.status(code).send(response);
            }).catch((err) => {
                res.status(404).send(err);
            });
        });

        
        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })