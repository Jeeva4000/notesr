const router = require('express').Router()
const userCtrl = require("../controllers/userCtrl")
const auth = require("../middlewares/auth")


//register
router.post('/register', userCtrl.registerUser)

//login
router.post('/login', userCtrl.loginUser)

//verify token
// router.get('/verify', auth, (req, res) => {
//     // console.log(req.user)
//     // res.json(req.user.id)

// })
router.get('/verify', userCtrl.verifiedToken)

module.exports = router