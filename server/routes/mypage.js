const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.put('/mypage/:id', controller.edit)
module.exports = router
