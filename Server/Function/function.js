const myfun = (req, res) => {
    res.send({"hi": "hello "+req.query.name}); //json
};

const home = (req, res) => {
    res.json({"msg" : "You logged in as Admin."+req.query.first_name});
};

module.exports = {home};