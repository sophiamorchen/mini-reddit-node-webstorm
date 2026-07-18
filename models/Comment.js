const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: {
        type: String,
        require: [true, "Le texte du commentaire est obligatoire"],
    },
    link: {
        type: Schema.Types.ObjectId, // stocke l'ID d'un objet Link
        ref: 'Links',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Comment', CommentSchema);