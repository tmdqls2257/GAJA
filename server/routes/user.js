const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.post('/signin', controller.signin)
router.post('/signout', controller.signout)
module.exports = router
