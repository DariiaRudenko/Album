let albumsData;
let selectedAlbumIndex;

async function fetchPhotos(albumId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    const photos = await response.json();
    return photos;
}

async function fetchAlbums() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums = await response.json();
    return albums;
}

async function setInitialState() {
    const albums = await fetchAlbums();    
    renderAlbum(albums[0]);
    albumsData = albums;
    selectedAlbumIndex = 0;
} 

setInitialState();