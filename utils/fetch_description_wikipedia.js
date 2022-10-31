const axios = require('axios');

async function fetchDescriptionWikipedia(url){

    try {
        const description = await axios.get("https://en.wikipedia.org/w/api.php")
        console.log(description.data.query.pages)
    } catch (error) {
        throw new Error("Fetch from Wikipedia failed.")
    }

} 

module.exports = {
    fetchDescriptionWikipedia
}