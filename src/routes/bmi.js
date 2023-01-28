const express = require('express');
const { createBMI, getHistory } = require('../controller/bmi');
const BR = express.Router();

BR.post('/:id',createBMI)
BR.get('/:id',getHistory)




module.exports = BR