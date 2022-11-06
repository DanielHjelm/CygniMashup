# Mashup REST API
**Mashup REST API of MusicBrainz, Wikipedia and CoverArtArchive API:s**

## Installation
```sh
$ git clone git@github.com:DanielHjelm/CygniMashup.git
$ cd CygniMashup
$ npm install
```

## How to run

### Start API
```sh
$ npm run
```

### Send request to route /id/:id
Example: 
```sh
$ localhost:4000/id/255e2420-5b02-452b-9771-0512ebe78090
```

## Example answer
```json
{
    "name": "Basshunter",
    "mbid": "255e2420-5b02-452b-9771-0512ebe78090",
    "description": "<p class=\"mw-empty-elt\">\n</p>\n<p><b>Jonas Erik Altberg</b> (<small>Swedish pronunciation: </small><span title=\"Representation in the International Phonetic Alphabet (IPA)\" lang=\"sv-Latn-fonipa\">[ˈjûːnas ˈêːrɪk ˈâltbærj]</span>; born 22 December 1984), known professionally as <b>Basshunter</b> is a Swedish singer, record producer, songwriter and DJ.\n</p><p>Basshunter has recorded five studio albums: <i>The Bassmachine</i> (2004), <i>LOL</i> (2006), <i>Now You're Gone – The Album</i> (2008), <i>Bass Generation</i> (2009), and <i>Calling Time</i> (2013). In addition to his own music, he has written for El Capon, Mange Makers, and Lana Scolaro. He has taken part in the seventh series of the British reality television show <i>Celebrity Big Brother</i>, episodes of the Swedish game show <i>Fångarna på fortet</i>, and an episode of the British television quiz show <i>Weakest Link</i>.\n</p><p>Basshunter has won awards such as a European Border Breakers Award (2008), a Musikförläggarnas pris in category Newcomer of the Year (2006), and a Telia award for Best Ringtone of the Year (2007). He was also nominated for a BT Digital Music Award, an MTV Europe Music Award, and a Rockbjörnen among others. According to <i>Svenska Dagbladet</i> figures published in 2009, more than 3 million Basshunter records have been sold.</p>",
    "albums": [
        {
            "image": "http://coverartarchive.org/release/9fba8397-afd3-4520-a932-1e8160c27eef/1362296211.jpg",
            "title": "The Bassmachine",
            "id": "a4be133a-ada5-32cd-ae80-d79adfdd1140"
        },
        {
            "image": "http://coverartarchive.org/release/ac4927cf-55df-432f-b475-725da8db7ba8/8146433110.jpg",
            "title": "LOL <(^^,)>",
            "id": "4b50fad1-0e27-3502-8874-7d3e42477eaf"
        },
        {
            "image": "http://coverartarchive.org/release/270e8186-9ff5-3e82-b594-5917f6e7fbb9/29640422246.jpg",
            "title": "Now You're Gone - The Album",
            "id": "54eb90f2-b71a-3b3e-8fcf-65f7bd7ffdfb"
        },
        {
            "image": "http://coverartarchive.org/release/36937c43-8676-48cc-ab3d-0db1d5cdfa92/10157748181.jpg",
            "title": "Bass Generation",
            "id": "fe099423-cd18-4b5b-aa9e-9895992138e2"
        },
        {
            "image": "http://coverartarchive.org/release/a4905cd7-4e13-44cd-a3c1-4190c7973144/5191864822.jpg",
            "title": "Calling Time",
            "id": "ce9dab96-a588-4078-90d3-35714fe1df27"
        },
        {
            "image": "http://coverartarchive.org/release/69e4e2a1-3e77-46a0-82c4-6712046bdcc0/4268068040.jpg",
            "title": "The Old Shit",
            "id": "f797b439-3d97-38cc-9fb7-5bed116c75cf"
        },
        {
            "image": "Error when fetching cover art. Error code: 404",
            "title": "The Early Bedroom Sessions",
            "id": "6e7580ab-9604-413a-879d-4cdad60b5f6c"
        }
    ]
}
```