const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let catSchema = new Schema({
	id: {type: String, required: true, max: 100},
	scoreRate: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Cat', catSchema, 'ranking');