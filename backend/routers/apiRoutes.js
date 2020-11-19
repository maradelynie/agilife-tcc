const express = require('express');
const controllerUser = require('../services/usersServices');
const controllerContents = require('../services/contentsServices');
const controllerNotifications = require('../services/notificationsServices');

const recordsRouter = express.Router();

recordsRouter.post('/authorization', controllerUser.auth);//
recordsRouter.post('/register', controllerUser.register);//

recordsRouter.get('/user/:token', controllerUser.getUserData);//
recordsRouter.patch('/user/:token', controllerUser.updateUserData);//

recordsRouter.patch('/task', controllerUser.updateUserTask);//

recordsRouter.get('/notifications', controllerNotifications.getAllNotifications);//

recordsRouter.get('/allUsers', controllerUser.getAllUsers);//
recordsRouter.post('/content', controllerContents.getAllContent);//
recordsRouter.get('/adm/content/:ownerToken', controllerContents.getContent);//
recordsRouter.post('/adm/content', controllerContents.createContent);//
recordsRouter.patch('/adm/content/:id', controllerContents.updateContent);//
recordsRouter.delete('/adm/content/:id/:ownerToken', controllerContents.deleteContent);//

module.exports = recordsRouter;
