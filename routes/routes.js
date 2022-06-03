var express = require('express');
var Routes = express.Router();
var cards_ctrl = require('../controllers/cards_ctrl');

//routes for Cards
Routes.route('/addDepartment').post(cards_ctrl.addDepartment);

module.exports = Routes;