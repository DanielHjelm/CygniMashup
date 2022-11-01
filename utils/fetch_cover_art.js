const axios = require('axios');

async function fetchCoverArt(albumID){
    // Use the Cover Art Archive API with the specific album ID to fetch image
    try {
        return await axios.get(`http://coverartarchive.org/release-group/${albumID}`).then(res => {
            if(res.status == 200) {
                return res.data.images[0].image;

            } else {
                return "Cover art not found"
            }
          
        });
      } catch (error) {
        // console.log(albumID)
        // throw console.log("Fetch for cover art failed", error)
        return `Error when fetching cover art. Error code: ${error.response.status}`
      }
    }
    
module.exports = { fetchCoverArt };
