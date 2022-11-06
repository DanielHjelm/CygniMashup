
const axios = require('axios');

function fetchArtistMusicBrianz(id){
    try{
        // Fetch artist from MusicBrainz using mbid
        return axios.get(`http://musicbrainz.org/ws/2/artist/${id}?&fmt=json&inc=url-rels+release-groups`).then(res => {
            // Create artist object using the MusicBrainz information fetched
            return createArtist(res)
        })

    } catch (error) {
        throw new Error("Fetch from MusicBrianz failed.")
    }
   
}

function createArtist(artist){
    // Create artist object with name, mbid and url with WikiDataID
    return {
        name: artist.data.name,
        mbid: artist.data.id,
        url: WikiDataID(artist),
        infoAlbums: infoAlbums(artist)         
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
        throw new Error("Could not find WikiData url")
    }


}

function infoAlbums(artist){

    // Fetch all data that have the "primary-type" = album
    let albums = artist.data['release-groups'].filter(release => {
        return release["primary-type"].toLowerCase() == 'album'})

   // Return an array of albums containing only title and id information
    return albums.map(album => {
        return (album = {
            title: album.title,
            id: album.id
        } 
    )})

}

module.exports = {
    fetchArtistMusicBrianz
  };  