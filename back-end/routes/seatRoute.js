const express = require('express')
const Router = express.Router()
const {getAllSeats, createSeat, updateSeat, deleteSeat, getOneSeat, updateStatusSeat}
    = require('../controllers/seatController')
Router.route('/').get(getAllSeats)
Router.route('/:seatId&:nameId').delete(deleteSeat).get(getOneSeat)
Router.route('/:startTimeId').post(createSeat)
Router.route('/:seatId').patch(updateStatusSeat).put(updateSeat)

module.exports = Router