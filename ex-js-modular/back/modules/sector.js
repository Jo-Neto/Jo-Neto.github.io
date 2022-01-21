const reqedData = require('../database.js');

module.exports = function branchfilter(req, res) {
    const filteredArr = reqedData.filter((elem) => {
        return (((elem.sector).toLowerCase()).includes((req.query.fparam).toLowerCase()));
    });
    res.json(filteredArr);
};