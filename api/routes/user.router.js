const router = require('express').Router()
const { getOneUser } = require('../controllers/user.controller')

router.get('', getOneUser)

module.exports = router
