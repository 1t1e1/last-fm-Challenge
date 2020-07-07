const apikey = "97cee60fe2193b383cd8377301901a80";
const limit = "&limit=10";
const topTracks = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${apikey}&format=json&${limit}`;
const topArtists = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${apikey}&format=json&${limit}`;

export { topTracks, topArtists };
