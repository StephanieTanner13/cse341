const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get( '/', (req, res, next) => {
    //to get the right path, you add the path const above and then this line of code
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;