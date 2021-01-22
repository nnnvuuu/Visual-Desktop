const router = require('express').Router();
var axios = require('axios');
require('dotenv').config();

// Get top headlines in the US
const url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=' + process.env.newsAPI;

router.route('/').get((req, res) => {
  axios.get(url).then(response => {
    // console.log(response.data);
    res.json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

module.exports = router;
