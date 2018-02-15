// write a function to retrieve a blob of json
// make an ajax request! use the "fetch" function
// https://rallycoding.herokuapp.com/api/music_albums


function fetchAlbum() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json));
}

async function fetchAlbum() {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()
  console.log(json);
}

const fetchAlbum = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()
  console.log(json);
}

fetchAlbum();
