const validateSignupInput = require('../validation/signup')
const validateLoginInput = require('../validation/login')
const User = require('../model/userSchema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



const SignuUser = (req,res)=>{
 
          //for validation using validator
     const { errors, isValid } = validateSignupInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({
        email: req.body.email
    }).then(async user => {
        if(user) {
            return res.status(400).json({
                email: 'Email already exists'
            });
        }
        else {
          const hash = await bcrypt.hash(req.body.password,10)
          
          //user data create in data base
            User.create({
                name: req.body.name,
                email: req.body.email,
                password: hash         
            }).then(user =>{
              res.json(user)
            })
    
        }
    });

}

const loginUser = (req,res)=>{
   
       
    //for validation using validator
     const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;
 
    User.findOne({email}) 
        .then(user => {
            if(!user) {
                errors.email = 'User not found'
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {
                                id: user.id,
                                name: user.name                             
                            }
                            
                            //creating jwt token and send to frontend

                            jwt.sign(payload, 'secret', 
                            {
                                expiresIn: '3d'
                            }, (err, token) => {
                                if(err) console.error('There is some error in token', err);
                                else {
                                    res.json({
                                        success: true,
                                        name: user.name,
                                        email:user.email, 
                                        userId:user.id,
                                        token: `Bearer ${token}`
                                    });
                                }
                            });
                        }
                        else {
                            errors.password = 'Incorrect Password';
                            return res.status(400).json(errors);
                        }
                    });
        });
}



module.exports = {loginUser,SignuUser}