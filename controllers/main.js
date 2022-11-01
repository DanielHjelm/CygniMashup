
const {fetchArtistMusicBrianz} = require('../utils/fetch_artist_music_brianz');
const {fetchDescriptionWikipedia} = require('../utils/fetch_description_wikipedia');



async function main(req, res){

    
    // Set header
    res.setHeader('Content-Type', 'application/json')

    // Set mbid
    const id = req.params.id

    // Fetch artist from MusicBrainz
    let artistObj = fetchArtistMusicBrianz(id)

    
    artistObj.then(function(artist) {

        // Fetch the description from Wikipedia
        let description = fetchDescriptionWikipedia(artist.url)

        description.then(function(description){


            // Send the response
            res.send({
                name: artist.name,
                mbid: artist.mbid,
                // url: artist.url,
                description: description.data.query.pages[Object.keys(description.data.query.pages)[0]].extract,
                albums: artist.infoAlbumbs
            })
            
        })
                

     })

    

    

   

}

module.exports = { main };