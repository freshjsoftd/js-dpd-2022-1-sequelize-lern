const multer = require('multer');
const path = require('path');
const { static_path } = require('../config/config')

const storageBookImage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, path.resolve(static_path, './images'));
  },
  filename: (req, file, cb) =>{
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const filterBookImage = (req, file, cb) => {
  const MIMETYPE_REGEXP = /^image\/(jpeg|gif|png)$/
  if(MIMETYPE_REGEXP.test(file.mimetype)){
    return cb(null, true)
  }
  cb(null, false);
  /* if(file.mimetype === 'image/png'
    || file.mimetype === 'image/jpeg'
    || file.mimetype === 'image/gif') {
    return cb(null, true)
  }
  cb(null, false) */
}

module.exports.uploadBookImage = multer({
  storage: storageBookImage,
  fileFilter: filterBookImage
})