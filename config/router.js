const express = require('express')
const routes = express.Router()

let db = [
    {id: 1, task: 'Acordar', urgent: 'false', done: 'true'},
    {id: 2, task: 'tomar cafer', urgent: 'false', done: 'true'},
    {id: 3, task: 'treinar', urgent: 'false', done: 'true'}
]

routes.get('/tasks', (req, res) => {
    return res.json(db)
})

routes.post('/tasks/new', (req,res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/tasks/:id/:id', (req,res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    return res.send(newDB)
})

module.exports = routes