const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    titre: {
        type: String,
        required: [true, "Le titre est obligatoire"],
        trim: true, // enlève les espaces superflus
    },
    url: {
        type: String,
        required: [true, "L'url est obligatoire"]
    },
    description: {
        type: String,
        default: '',
    },
    createdAT: {
        type: Date,
        default: Date.now,

    },
});

module.exports = mongoose.model('Link', LinkSchema);

