const whois = require('whois-light');

module.exports = async (req, res) => {
  const { url } = req.query;
  
  if(url !== '') {
    try {
      const data = await whois.lookup(url);
      res.status(200 || 304).json({ domain: data});
    } catch (err) {
      res.status(400 || 500).json({ msg: err.message });
    }
  } else {
    res.status(404).json({ msg: 'no blank query'});
  }
};
