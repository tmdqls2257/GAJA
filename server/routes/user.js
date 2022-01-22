const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.post('/signin', controller.signin)
router.delete('/signout', controller.signout)
module.exports = router
