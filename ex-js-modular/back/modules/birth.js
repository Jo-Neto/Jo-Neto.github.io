const reqedData = require('../database.js');

module.exports = function branchfilter(req, res) {
    const filteredArr = reqedData.filter((elem) => {
        let workerBirthMonth = new Date(Date.parse(elem.birth)).getMonth();
        return (workerBirthMonth === (Number(req.query.fparam)-1));
    });
    res.json(filteredArr);
};