const mongoose = require('mongoose');

const Data = new mongoose.Schema(
  {
    successExam: { type: Number, required: true, default: 0 },
    unsuccessExam: { type: Number, required: true, default: 0 },
    questions: [],
  },
  { collection: 'data-bsc' }
);

module.exports = mongoose.model('Data', Data);
