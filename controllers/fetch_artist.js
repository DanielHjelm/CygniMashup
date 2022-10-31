
const {fetchArtistMusicBrianz} = require('../utils/fetch_artist_music_brianz');
const {fetchDescriptionWikipedia} = require('../utils/fetch_description_wikipedia');



async function fetchArtist(req, res){

    
    // Set header
    res.setHeader('Content-Type', 'application/json')

    // Set mbid
    const id = req.params.id

    // Fetch artist from MusicBrainz
    let artistObj = fetchArtistMusicBrianz(id)

    
    artistObj.then(function(artist) {

    
        let description = fetchDescriptionWikipedia(artist.url).then()

        description.then(function(description){

            res.send({
                name: artist.name,
                mbid: artist.mbid,
                // url: artist.url,
                description: description.data.query.pages[Object.keys(description.data.query.pages)[0]].extract,
                albums: ''
            })
            
        })
        
        // Send artist object 
        

     })

    

    

   

}

module.exports = { fetchArtist };