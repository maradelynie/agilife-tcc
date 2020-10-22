
async function getAllNotifications(_, res) {

    try{
        const record = await notificationsModel.find();
        res.send(record)

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
  
}



const notificationsModel = require('../models/notificationsModel');

module.exports = {
                getAllNotifications
                }; 