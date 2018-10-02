import config from './config'

//const apiKey = config.apiKey
const { apiKey } = config
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`

//getArtist() devuelve el objeto JSON de lastfm con la informacion solicitada.
export default function getArtists(country) {
	const url = URL.replace(':country', country)
	return fetch(url)
		.then(respuesta => respuesta.json())
		.then(json => json.topartists.artist)
}

/**********************************************************************************
| Estamos recuperando un archivo JSON a través de red y estamos sacando del array
| topartists el objeto artist y devolviendola por la función getArtists()
**********************************************************************************/