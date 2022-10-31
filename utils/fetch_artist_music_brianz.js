
const axios = require('axios');

function fetchArtistMusicBrianz(id){
    try{
        return axios.get(`http://musicbrainz.org/ws/2/artist/${id}?&fmt=json&inc=url-rels+release-groups`).then(res => {
            return createArtist(res)
        })

    } catch (error) {
        throw new Error("Fetch from MusicBrianz failed.")
    }
   
}

function createArtist(artist){
    return {
        name: artist.data.name,
        mbid: artist.data.id,
        url: WikiDataID(artist),
        description: ''
        
    };
}

function WikiDataID(artist){
    // Check if there exists a Wikidata ID and uses it if it exists
    let relationTest = artist.data.relations.filter(
        relation => relation.type == 'wikidata'
      )[0];
    
    if (relationTest) {
        return relationTest.url.resource;

    } else {
        return null
    }


}

module.exports = {
    fetchArtistMusicBrianz
  };  