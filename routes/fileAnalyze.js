const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');

router.use(
  fileUpload({
    createParentPath: true
  })
);

router.route('/').post((req, res) => {
  try {
    if (!req.files) {
      return res
        .status(400)
        .json({ success: false, message: 'Please upload a file.' });
    }

    let file = req.files.upfile;

    res
      .status(200)
      .json({ name: file.name, type: file.mimetype, size: file.size });
  } catch (err) {
    res.status(500).json({ success: false, message: 'An error occurred.' });
  }
});

module.exports = router;
