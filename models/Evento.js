const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Evento = mongoose.model('Evento', new Schema({ 
    person_id: { type: Schema.Types.ObjectId, ref: 'Person'},
    name: String,
    handle: String,
    company: String,
    description: String,
    date: Date,
    status: String,
}))

module.exports = Evento