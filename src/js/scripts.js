const newImageTitleInput = document.querySelector('input[name="title"]');
const newImageURLInput = document.querySelector('input[name="url"]');
const newImageForm = document.querySelector('#new-image');
const gallery = document.querySelector('#gallery');

newImageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Create a div to wrap the image.
    const newImageWrapper = document.createElement('div');
    // Add the 'image' class to the div.
    newImageWrapper.classList.add('image');
    // Create the image element.
    const newImage = document.createElement('img');
    // Set the image source and alt text.
    newImage.src = newImageURLInput.value;
    newImage.alt = newImageTitleInput.value;
    newImage.title = newImageTitleInput.value;
    // Add the image to the wrapper.
    newImageWrapper.appendChild(newImage);
    // Add the wrapper to the gallery.
    gallery.appendChild(newImageWrapper);
    // Clear the input fields.
    newImageTitleInput.value = '';
    newImageURLInput.value = '';
});