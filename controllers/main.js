const {
  fetchArtistMusicBrianz,
} = require("../utils/fetch_artist_music_brianz");
const {
fetchDescriptionWikipedia,
} = require("../utils/fetch_description_wikipedia");
const { fetchCoverArt } = require("../utils/fetch_cover_art");

async function main(req, res) {
  // Set header
  res.setHeader("Content-Type", "application/json");

  // // Set mbid
  // const id = req.params.id;

  // Fetch artist from MusicBrainz
  let artist = await fetchArtistMusicBrianz(req.params.id);

  // Fetch the description from Wikipedia
  let description = fetchDescriptionWikipedia(artist.url);

  // Fetch cover art from Cover Art Archive
  let albumWithcoverArt = await artist.infoAlbums.map(async (album) => {
    let coverArt = await fetchCoverArt(album.id);
    return { image: coverArt, title: album.title, id: album.id };
  });

  // Await description and albumWithcoverArt. Send response when ready!
  await Promise.all([description, ...albumWithcoverArt]).then((result) => {
    res.send({
      name: artist.name,
      mbid: artist.mbid,
      description:
        result[0].data.query.pages[Object.keys(result[0].data.query.pages)[0]]
          .extract,
      albums: [...result].slice(1),
    });
  });
}

module.exports = { main };
