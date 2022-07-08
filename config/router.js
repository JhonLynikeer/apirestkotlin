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

routes.delete('/tasks/:id', (req,res) => {
    const id = req.params.id

    const index = db.indexOf(id);

    if (index > -1) {
      db.splice(index, 1);
    }

    return res.send(newDB)
})

module.exports = routes