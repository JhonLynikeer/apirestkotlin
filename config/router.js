const express = require('express')
const routes = express.Router()

let db = [

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