

async function getAllContent(req, res) {
    const {contents} = req.body
    try{
        const records = await contentsModel.find();
        const data = records.map(content => { 

            if(!contents.includes(content._id.toString())){
                content.link = ""
            }
            return content
        })
            
            
        res.send({ res:true, data: data})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
  
}
async function getContent(req, res) {
    const {ownerToken} = req.params
    try{
        const records = await contentsModel.find({ownerId:ownerToken});
       
        res.send({res:true, data:records})
    
    } catch (error) {
        res.status(400).send({  res:false, error: error.message});
    }
}
async function createContent(req, res) {
    try{
        const record = new contentsModel(req.body);
        await record.save();
        res.send({res:true, data:record})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
}
async function updateContent(req, res) {
    const {id} = req.params
    if (!req.body) {
        return res.status(400).send({
          message: 'No Data to Update',
        });
    }
    try{
        const record = await contentsModel.findOneAndUpdate({_id: id}, req.body, {new: true,useFindAndModify:false});
        if(!record) res.status(404).send({message: 'Content not found in your user data' });
        res.send({res:true})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
}
async function deleteContent(req, res) {
    const {id,ownerToken} = req.params

    try{
        const record = await contentsModel.findOneAndDelete( {_id: id,ownerId:ownerToken});
        if(!record) res.status(404).send({message: 'Content not found in your user data' });

        res.send({res:true})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
}

const contentsModel = require('../models/contentsModel');

module.exports = {
                getAllContent, 
                getContent, 
                createContent,
                updateContent,
                deleteContent
                }; 