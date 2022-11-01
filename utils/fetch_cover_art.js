const axios = require('axios');

async function fetchCoverArt(albumID){
    // Use the Cover Art Archive API with the specific album ID to fetch image
    try {
        return await axios.get(`http://coverartarchive.org/release-group/${albumID}`).then(res => {
          return res.data.images[0].image;
        });
      } catch (error) {
        throw new Error("Fetch from Cover Art Archive failed.")
      }
    }
    
module.exports = { fetchCoverArt };
