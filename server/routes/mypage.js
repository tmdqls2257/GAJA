const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.get('/mypage', controller.mypage)
router.post('/memo', controller.memo)
router.post('/memo-delete', controller.memoDelete)
module.exports = router