// routes for athurization-------------------------------------------------------------

async function auth(req, res) {
    const {login, password} = req.body
    try{
        const userData = await usersModel.findOne({login: login, password: password});
        if(userData.userType!=="user") res.send({res:true, admin:true, token:userData._id})
        res.send({res:true, token:userData._id})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
}
async function register(req, res) {
    try{
        const record = new usersModel(req.body);
        await record.save();
        res.send({res:true, token:record._id})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
}

// routes for user data---------------------------------------------------------------

async function getUserData(req, res) {
    const {token} = req.params
    try{
        const userData = await usersModel.findOne({_id: token});
        
        res.send({res:true, data:userData})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
   
}
async function getAllUsers(req, res) {
    
    try{
        const data = await usersModel.find();
        
        res.send({res:true, data:data.length})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
   
}
async function updateUserData(req, res) {
    const {token} = req.params

    if (!req.body) {
        return res.status(400).send({
          message: 'No Data to Update',
        });
    }
    try{
        const record = await usersModel.findOneAndUpdate({_id: token}, req.body, {new: true,useFindAndModify:false});
        res.send({res:true})

    } catch (error) {
        res.status(400).send({  res:false, error: error.message});
    }
  
}
async function updateUserTask(req, res) {
    const {token} = req.body
    if (!req.body) {
        return res.status(400).send({
          message: 'No Data to Update',
        });
    }
    try{
        const record = await usersModel.findOneAndUpdate({_id: token}, req.body, {new: true,useFindAndModify:false});
        res.send({res:true})

    } catch (error) {
        res.status(400).send({  res:false, error: error.message});
    }
  
}

const usersModel = require('../models/usersModel');

module.exports = {
                auth, 
                register, 
                getUserData, 
                updateUserData, 
                updateUserTask,
                getAllUsers
                }; 