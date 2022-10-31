
const {fetchArtistMusicBrianz} = require('../utils/fetch_artist_music_brianz');
const {fetchDescriptionWikipedia} = require('../utils/fetch_description_wikipedia');



async function fetchArtist(req, res){

    
    // Set header
    res.setHeader('Content-Type', 'application/json')

    // Set mbid
    const id = req.params.id

    let artistObject = fetchArtistMusicBrianz(id)

    // let description = fetchDescriptionWikipedia("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&redirects=true&titles=Nirvana%20(band)")

    artistObject.then(function(artist) {
        // Send artist object 
        res.send(artist)

     })

    // res.status(200).json({
    //     message: "hej"
    // })

    

   

}

module.exports = { fetchArtist };