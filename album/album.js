// Логика отрисовки альбома

async function renderAlbum({ id, title }) {
    const album = document.createElement('div');
    album.setAttribute('class', 'album');
    album.appendChild(getTitleElement(title));
    album.appendChild(getButton('left-button', moveBack));
    album.appendChild(getButton('right-button', moveForward));
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

function getContent(albumId) {
    const content = document.createElement('div');
    content.setAttribute('class', 'album__content-wrapper');
    renderPhotos(content, albumId);

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
// function leftButton() {
//     const buttonLeft = document.createElement('div');
//     buttonLeft.setAttribute('class', 'album__left-button');
//     buttonLeft.addEventListener('click', moveBack);
//     //ButtonLeft.appendChild('button');  
//     return buttonLeft;
// }

// function rightButton() {
//     const buttonRight = document.createElement('div');
//     buttonRight.setAttribute('class', 'album__right-button');
//     buttonRight.addEventListener('click', moveForward);
//     // const btn = document.createElement('button');
//     // // btn.setAttribute("class", "album__right-btn");
//     // buttonRight.appendChild(btn);
//     return buttonRight;
// }
// function makeButton(place) {
//     const button = document.createElement('div');
//     button.setAttribute('class', `album__${place}-button`);
//     if (place === 'right') {
//         button.addEventListener('click', moveForward);

//     } else {
//         button.addEventListener('click', moveBack);
//     }
//     const btn = document.createElement("p");
//     const content = document.createTextNode("ЭТО  КНОПКА");
//     btn.setAttribute("class", "album__btn");
//     // content.setAttribute("id", "btn-text");
//     btn.appendChild(content);
//     button.appendChild(btn);
//     return button;
// }
function getButton(className, eventHandler) {
    const button = document.createElement('div');
    button.setAttribute('class', `album__${className}`);
    button.addEventListener('click', eventHandler);
    const btn = document.createElement("p");
    const content = document.createTextNode("ЭТО  КНОПКА");
    btn.setAttribute("class", "album__btn");
    btn.appendChild(content);
    button.appendChild(btn);
    return button;
}



function removeAlbum() {
    const album = document.querySelector('.container');
    album.innerHTML = '';
}

function moveBack() {
    removeAlbum();
    if (selectedAlbumIndex === 0) {
        selectedAlbumIndex = albumsData.length - 1;
    } else {
        selectedAlbumIndex--;
    }
    renderAlbum(albumsData[selectedAlbumIndex]);
}
function moveForward() {
    removeAlbum();
    if (selectedAlbumIndex === albumsData.length - 1) {
        selectedAlbumIndex = 0;
    } else {
        selectedAlbumIndex++;
    }
    renderAlbum(albumsData[selectedAlbumIndex]);
}
