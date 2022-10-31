
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
        url: MusicBrianzRelation(artist)
        
    };
}

function MusicBrianzRelation(artist){
    // let relationTest = artist.data.relations.filter(
    //     (function (relation) {
    //         relation.type == "wikipedia"
    //       })
    // )
    console.log(artist.data.relations)


}

module.exports = {
    fetchArtistMusicBrianz
  };  