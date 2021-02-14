const jwt=require("jwt-simple");
const moment = require("moment");
const SECRET_KEY = "74V7qI55V36ZghBpr3";


exports.ensureAuth=(req,res,next)=>{
    if(!req.headers.autorization){
        return res.status(403).send({message:"No hay header de autenticación"});
    }

    const token = req.headers.autorization.replace(/['"]+/g, "");
    try{
        
        const payload=jwt.decode(toke, SECRET_KEY);
        if(payload.exp<=moment.unix()){
            return res.status(404).send({message:"El token a expirado"});
        }
    }catch(ex){
        return res.status(404).send({
            message:"Token invalido"
        });
    }
    req.user = payload;
    next();
};