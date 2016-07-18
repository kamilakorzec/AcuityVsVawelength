var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var InfoSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Info', InfoSchema);