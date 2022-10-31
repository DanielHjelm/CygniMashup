const router = require('express').Router();
const controller = require('../controllers/fetch_artist');


// router.get('/', (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify('/api/artist/id'));
// });

router.get('/:id', controller.fetchArtist);



module.exports = router;
