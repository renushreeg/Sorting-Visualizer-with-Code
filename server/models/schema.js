const mongoose = require('mongoose');

const SSchema = new mongoose.Schema({
    sortingTechnique: {
        type: String,
        required: true,
        unique: true,
    },
    bestComplexity: {
        type: String,
        required: true
    },
    worstComplexity: {
        type: String,
        required: true
    },
    averageComplexity: {
        type: String,
        required: true
    },
    spaceComplexity: {
        type: String,
        required: true
    },
    CCode: {
        type: String,
        required: true
    },
    CppCode: {
        type: String,
        required: true
    },
    PythonCode: {
        type: String,
        required: true
    },
    JavaCode: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Info', SSchema)
