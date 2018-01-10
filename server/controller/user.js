const express = require('express')
const router = express.Router()

const Register = (req, res) => {
	
	if (req.body.email === 'test@test.de'){
		res.json({success: false, reason: 'user already exist'});
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
