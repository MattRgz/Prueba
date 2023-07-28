const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.register = async (req,res) => {
    try{
        const user = await User.create(req.body);
        return res.json({ user, msg: 'Usuario registrado!'});
    }catch(err){
        return res.status(500).json({ msg: 'Ha ocurrido un error!', error: err});
    }
}
module.exports.logout = async (_, res) => {
    try {
        return res.clearCookie("usertoken").json({msg:"Token correctamente eliminado"})
    } catch (err){
        return res.status(403).json({msg:"Usuario inexistente", err})
    }
}

module.exports.login = async (req, res) => {
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(403).json({msg:'El correo ingresado no es valido'});
        }else{
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);
            if(isValidPassword){
                const newJWT = jwt.sign({
                    _id:user._id,
                    name:user.name
                }, process.env.SECRET_KEY);
                return res
                    .cookie('usertoken', newJWT, process.env.SECRET_KEY,{httpOnly:true})
                    .json({
                        message:"Registro exitoso!"
                    });
            }else{
                return res.status(403).json({msg:'Contraseña Invalida'});
            }
        }
    }catch(err){
        return res.status(403).json({msg:'Credenciales invalidas',err})
    }
};

module.exports.ingreso = async (_,res) => {
    try{
        res.json({msg: 'Bienvenido!'})
    } catch(err){
        return res.status(403).json({msg: 'No tienes permisos', err})
    }
}