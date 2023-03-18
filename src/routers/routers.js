const express = require('express')
const Controller = require('../controllers/Controller')
const router = express.Router()
router.get ('/',Controller.index)
router.post('/criar',Controller.criarModelo)

module.exports = app => app.use('',router)