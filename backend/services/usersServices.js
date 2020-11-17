// routes for athurization-------------------------------------------------------------

async function auth(req, res) {
    const {login, password} = req.body
    try{
        const userData = await usersModel.findOne({login: login, password: password});
       
        res.send({res:true, token:userData._id})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
}
async function register(req, res) {
    try{
        const record = new usersModel(req.body);
        await record.save();
        const dataUser = { 
            content: record.content,
            name: record.name,
            points: record.points,
            userNotification: record.userNotification,
            tasks: record.tasks,
            token: record._id
        }
        res.send({res:true, data:dataUser})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
}

// routes for user data---------------------------------------------------------------

async function getUserData(req, res) {
    const {token} = req.params
    try{
        const userData = await usersModel.findOne({_id: token});
        const dataUser = { 
            content: userData.content,
            name: userData.name,
            email: userData.login,
            points: userData.points,
            userPartner: userData.userPartner,
            tasks: userData.tasks,
            token: userData._id
        }
        res.send({res:true, data:dataUser})

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
                updateUserTask
                }; 