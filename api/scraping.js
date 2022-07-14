const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const { url } = req.query;

    const { data } = await axios.get(url);

    res.send(data);
  } catch(err) { res.send(err); }
};

