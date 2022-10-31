const axios = require('axios');


async function fetchDescriptionWikipedia(url){
    
    let title = await fetchTitle(url)

    let uriTitle = encodeURIComponent(title)

    let description = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&
    exintro=true&redirects=true&titles=${uriTitle}`)

        
    return description

    // const res = axios.get()

}
async function fetchTitle(url){

    // Fetch WikiData ID
    const wikiDataID = url.replace(/.+?\/wiki\//, '');
    const newURL = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${wikiDataID}&format=json&props=sitelinks`;
    try {
      const res = await axios.get(newURL);
      const title = res.data.entities[
        Object.keys(res.data.entities)[0]
      ].sitelinks.enwiki.title
      console.log
      return title;
    } catch (error) {
      throw new Error('Fetch title from WikiData failed');
    }
  }



module.exports = {
    fetchDescriptionWikipedia
}