const express = require('express')
const routes = express.Router()

let db = [
    {'1': {Task: 'Acordar', Urgent: 'false', Done: 'true'}},
    {'2': {Task: 'Tomar cafe', Urgent: 'false', Done: 'false'}},
    {'3': {Task: 'Treinar', Urgent: 'false', Done: 'false'}}
]

routes.get('/tasks', (req, res) => {
    return res.json(db)
})

routes.post('/task/new', (req,res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req,res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    return res.send(newDB)
})

module.exports = routes