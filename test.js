let wikipediaUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&redirects=true&titles=Nirvana%20(band)"
console.log(wikipediaUrl)
wikipediaUrl.replace(/.+?\/wiki\//, ''); // 
console.log(wikipediaUrl)

