const express = require('express');
const router = express.Router();

router.route('/').post((req, res) => {
  res.json({ success: true });
});

module.exports = router;
