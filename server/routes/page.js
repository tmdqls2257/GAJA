const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.get('/internship', controller.internship)
router.get('/scholarship', controller.scholarship)

module.exports = router
