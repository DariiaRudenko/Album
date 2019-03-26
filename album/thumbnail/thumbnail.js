function getThumbnail({url, thumbnailUrl}) {
    const thumbnail = document.createElement('div');
    thumbnail.setAttribute('class', 'thumbnail');
    thumbnail.appendChild(getThumbnailElement(url, thumbnailUrl));
    return thumbnail;
}
function getThumbnailElement(url, thumbnailUrl){
    const elementPhoto = document.createElement('a');
    elementPhoto.setAttribute('href', url);
    const element = document.createElement('img');
    element.setAttribute('src',thumbnailUrl);
    elementPhoto.appendChild(element);
    return elementPhoto;
}