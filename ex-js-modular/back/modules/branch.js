const reqedData = require('../database.js');

module.exports = function branchfilter(req, res) {
    res.json(reqedData);
};