const dataService = require('../services/data-service');

class DataController {
  get = async (_req, res) => {
    try {
      const data = await dataService.get();
      return res.json(data);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  update = async (req, res) => {
    try {
      const message = await dataService.update(req.body);

      return res.json(message);
    } catch (e) {
      return res.status(500).json(e);
    }
  };
}

module.exports = new DataController();
