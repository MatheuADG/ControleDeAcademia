const express = require('express')
const routes = express.Router()
const instructors = require('./instructors')
routes.get('/', function(rec,res){
    return res.redirect("/instructors")
})

routes.get('/instructors', function(rec,res){
    return res.render("instructors/index");
})

routes.get('/instructors/create', function(rec,res){
    return res.render("instructors/create");
})

routes.get('/instructors/:id', instructors.show)

routes.get('/instructors/:id/edit', instructors.edit)

routes.post("/instructors", instructors.post)

routes.put("/instructors", instructors.put)

routes.delete("/instructors", instructors.delete)

routes.get('/members', function(rec,res){
    return res.send("members");
})


module.exports = routes;