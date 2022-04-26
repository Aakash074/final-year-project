var express = require('express')
var router = express.Router()
var deleteTodo = require("./todo/deleteTodo")
var createTodo = require("./todo/createTodo")
var getTodo = require("./todo/getTodo")
var listTodo = require("./todo/listTodo")
var updateTodo = require("./todo/updateTodo")
var handler = require("./handler")


router.use(function(res,req,next){
    res.header(
        'Access-Control-Allow-Origin', '*'
    )
    next()
})

router.get("/hello", handler.hello)
router.post("/createTodo",createTodo.handler)
router.delete("/deleteTodo",deleteTodo.handler)
router.get("/listTodo",listTodo.handler)
router.put("/updateTodo",updateTodo.handler)
router.get("/getTodo",getTodo.handler)

module.exports = router;