const router = require('express').Router();
require('dotenv').config();
/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */

const apiKey = process.env.alphavantage;
const alpha = require('alphavantage')({ key: apiKey });

// router.route('/').get((req, res) => {
//   alpha.data.intraday(`msft`).then(data => {
//     res.json(data);
//   });
// });

/* Define all Intraday Routes */
router.route('/intrad/msft').get((req, res) => {
  alpha.data.intraday(`msft`).then(data => {
    res.json(data);
  });
});

router.route('/intrad/goog').get((req, res) => {
  alpha.data.intraday(`goog`).then(data => {
    res.json(data);
  });
});

// router.route('/intrad/fb').get((req, res) => {
//   alpha.data.intraday(`fb`).then(data => {
//     res.json(data);
//   });
// });

router.route('/intrad/aapl').get((req, res) => {
  alpha.data.intraday(`aapl`).then(data => {
    res.json(data);
  });
});

router.route('/intrad/ibm').get((req, res) => {
  alpha.data.intraday(`ibm`).then(data => {
    res.json(data);
  });
});

/* Define all Forex Rates*/
router.route('/forex/btc').get((req, res) => {
  alpha.forex.rate('btc', 'usd').then(data => {
    res.json(data);
  });
});

module.exports = router;
