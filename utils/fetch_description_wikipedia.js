const axios = require('axios');


async function fetchDescriptionWikipedia(url){
    
    // Fetch title using the URL
    let title = await fetchTitle(url)

    // URL-encode title
    let uriTitle = encodeURIComponent(title)

    // Fetch description from Wikipedia
    let description = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&
    exintro=true&redirects=true&titles=${uriTitle}`)

        
    return description


}
async function fetchTitle(url){

    // Fetch WikiData ID by removing everything prior to the actual ID
    const wikiDataID = url.replace(/.+?\/wiki\//, '');

    try {

      // Get the title from the wikiDataURL based on the WikiData ID
      const res = await axios.get(`https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${wikiDataID}&format=json&props=sitelinks`);
      const title = res.data.entities[
        Object.keys(res.data.entities)[0]
      ].sitelinks.enwiki.title

      return title;

    } catch (error) {
      throw console.log('Fetch title from WikiData failed', error);
    }
  }



module.exports = {
    fetchDescriptionWikipedia
}