const path = require('path');
const DIR = __dirname;

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(DIR, '../views/index.html'));
    });
    app.get('/resume', function (req, res) {
        res.sendFile(path.join(DIR, '../views/resume.html'));
    });
    app.get('/portfolio', function (req, res) {
        res.sendFile(path.join(DIR, '../views/portfolio.html'));
    });
}