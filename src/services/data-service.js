const Data = require('../models/data');

class DataService {
  get = async () => {
    const data = await Data.find();
    console.log('data: ', data);
    if (!data.length) {
      const emptyData = { successExam: 0, unsuccessExam: 0, questions: [] };
      Data.create(emptyData);
      return emptyData;
    }

    return data;
  };

  update = async (data) => {
    console.log('post data: ', data);
    await Data.updateMany(data);

    return { message: 'db updated' };
  };
}

module.exports = new DataService();
