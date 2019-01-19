const jwt = require("jwt-simple");
const User = require("../models/user");
const config = require("../config");

function TokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next){
    // user already had their email and password authenticated
    // we just need to give them a token
    res.send({ token: TokenForUser(req.user) });
};

exports.signup = function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    
    if(!email || !password){
        return res.status(422).send({ error: "You must provide both email and password." });
    }
    
    // see if a user with given credentials exists
    User.findOne({ email: email }, function(err, existingUser){
        if(err){
            return next(err);
        }   
        // if a user exists, return an error 
        if(existingUser){
            res.status(422).send({ error: 'Email is already registered' });
        }
        // if doesn't exist, create and save user record
        const user = new User({
            email: email,
            password: password
        });
        
        user.save(function(err){
            if(err){
                return next(err);
            }
        });
        
        // respond to request indicating the user was created
        res.json({ token: TokenForUser(user) });
    });
};