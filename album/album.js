// Логика отрисовки альбома

async function renderAlbum({ id, title }) {
    const album = document.createElement('div');
    album.setAttribute('class', 'album');
    album.appendChild(getTitleElement(title));
    album.appendChild(leftButton());
    album.appendChild(rightButton());
    album.appendChild(await getContent(id));
    const albumContainer = document.querySelector('.container');
    albumContainer.appendChild(album);

}

function getTitleElement(title) {
    const titleElement = document.createElement('h1');
    titleElement.setAttribute('class', 'album__title');
    titleElement.innerText = title;
    return titleElement;
}

async function getContent(albumId) {
    const content = document.createElement('div');
    content.setAttribute('class', 'album__content-wrapper');
    await renderPhotos(content, albumId);

    return content;
}

async function getPhotoThumbnails(albumId) {
    const albumPhotos = await fetchPhotos(albumId);
    return albumPhotos.map(getThumbnail);
}

async function renderPhotos(wrapper, albumId) {
    const thumbnails = await getPhotoThumbnails(albumId);
    thumbnails.map(thumbnailElement => wrapper.appendChild(thumbnailElement));
}
function leftButton() {
    const buttonLeft = document.createElement('div');
    buttonLeft.setAttribute('class', 'left__Button');
    buttonLeft.addEventListener('click', moveBack);
    //ButtonLeft.appendChild('button');  
    return buttonLeft;
}

function rightButton() {
    const buttonRight = document.createElement('div');
    buttonRight.setAttribute('class', 'right__Button');
    buttonRight.addEventListener('click', moveForward);
    // const btn = document.createElement('button');
    // // btn.setAttribute("class", "album__right-btn");
    // buttonRight.appendChild(btn);
    return buttonRight;
}

function removeAlbum() {
    const album = document.querySelector('.container');
    console.log(album);
    
    album.innerHTML = '';
}

async function moveForward() {
    removeAlbum();
    selectedAlbumIndex++;
    await renderAlbum(albumsData[selectedAlbumIndex]);
}
async function moveBack() {
    removeAlbum();
    selectedAlbumIndex--;
    await renderAlbum(albumsData[selectedAlbumIndex]);
}


