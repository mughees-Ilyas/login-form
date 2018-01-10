const express = require('express')
const router = express.Router()

const Register = (req, res) => {
	
	if (req.body.email === 'test@test.de'){
		res.json({success: false, reason: 'user already exist'});
	}
	// this password check could have been easly implimented on frontend but just for demo purpose moved it to backed.
	else if (req.body.password !== req.body.checkPass){
		res.json({success: false, reason: 'password does not match'});
	} else {
		res.json({success: true});
	}

}

const Login = (req, res) => {
	if (req.body.email === 'test@test.de' && req.body.password ==='Password123' ){
		res.json({success: true, token:"randomtokenhere"});
	} else {
		res.json({success: false});
	}

}

module.exports = (router) => {
	router.post('/register', Register),
	router.post('/login', Login)
}
