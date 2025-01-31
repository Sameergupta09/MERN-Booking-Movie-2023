const express = require('express')
const Router = express.Router()
const {login, register, logout, getAllUser, getOneUser, updateUser, changePasswordUser, forgotPassword, updateNewPasswordUser, deleteUser} = require('../controllers/authController')
const {checkCurrentUser} = require('../middleware/checkCurrentUser')


Router.route('/').get(checkCurrentUser)
Router.route('/register').post(register)
Router.route('/login').post(login)
Router.route('/logout').get(logout)

Router.route('/forgot-password').post(forgotPassword).patch(updateNewPasswordUser)
Router.route('/user').get(getAllUser)
Router.route('/user/:userId').put(updateUser).get(getOneUser).patch(changePasswordUser).delete(deleteUser)

module.exports = Router