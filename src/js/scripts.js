const newImageTitleInput = document.querySelector('input[name="title"]');
const newImageURLInput = document.querySelector('input[name="url"]');
const newImageForm = document.querySelector('#new-image');
const gallery = document.querySelector('#gallery');

newImageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Create a div to wrap the image.
    const newImageTile = document.createElement('div');
    const newImageWrapper = document.createElement('div');
    // Add the 'image' class to the div.
    newImageTile.classList.add('image');
    // Create the image element.
    const newImage = document.createElement('img');
    // Set the image source and alt text.
    newImage.src = newImageURLInput.value;
    newImage.alt = newImageTitleInput.value;
    newImage.title = newImageTitleInput.value;
    // Add the image to the wrapper.
    newImageWrapper.appendChild(newImage);
    // Create the caption element.
    const newImageCaption = document.createElement('p');
    newImageCaption.textContent = newImageTitleInput.value;


    // Add the wrapper to the gallery.
    newImageTile.appendChild(newImageWrapper);
    newImageTile.appendChild(newImageCaption);
    gallery.appendChild(newImageTile);
    // Clear the input fields.
    newImageTitleInput.value = '';
    newImageURLInput.value = '';
});