const newImageTitleInput = document.querySelector('input[name="title"]');
const newImageURLInput = document.querySelector('input[name="url"]');
const newImageTagsInput = document.querySelector('input[name="tags"]');
const newImageForm = document.querySelector('#new-image');
const logButton = document.querySelector('button');
const searchInput = document.querySelector('input[name="search"]');
const message = document.querySelector('.error-message');
const gallery = document.querySelector('#gallery');

const images = JSON.parse(localStorage.getItem('images')) || [];
for (const image of images) {
  image.ref = addImage(image.title, image.tags.join(','), image.url);
}
searchInput.addEventListener('input', () => {
  for (const image of images) {
    if (
      image.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      image.tags.some((tag) => tag.toLowerCase().includes(searchInput.value.toLowerCase()))
    ) {
      image.ref.classList.remove('hidden');
    } else {
      image.ref.classList.add('hidden');
    }
  }
});

logButton.addEventListener('click', () => {
  console.log(images);
});

function addImage(title, tags, url) {
  // Create a div to wrap the image.
  const newImageTile = document.createElement('div');
  const newImageWrapper = document.createElement('div');
  // Add the 'image' class to the div.
  newImageTile.classList.add('image');
  // Create the image element.
  const newImage = document.createElement('img');
  // Set the image source and alt text.
  newImage.src = url;
  newImage.alt = title;
  newImage.title = title;
  // Add the image to the wrapper.
  newImageWrapper.appendChild(newImage);
  // Create the caption element.
  const newImageCaption = document.createElement('p');
  newImageCaption.textContent = title;
  // Create the tags element.
  const newImageTags = document.createElement('p');
  newImageTags.classList.add('tags');
  for (const tag of tags.split(',')) {
    const newImageTag = document.createElement('a');
    newImageTag.href = '#';
    newImageTag.textContent = '#' + tag;
    newImageTags.appendChild(newImageTag);
    newImageTag.addEventListener('click', () => {
      searchInput.value = tag;
      searchInput.dispatchEvent(new Event('input'));
    });
  }

  // Add the tags to the caption.
  newImageCaption.appendChild(newImageTags);

  // Add the wrapper to the gallery.
  newImageTile.appendChild(newImageWrapper);
  newImageTile.appendChild(newImageCaption);
  newImageTile.appendChild(newImageTags);
  gallery.appendChild(newImageTile);

  return newImageTile;
}

newImageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Check if both title and URL are empty
  if (newImageTitleInput.value.trim() === '' || newImageURLInput.value.trim() === '') {
    message.classList.remove('hidden');
    // Set the error message text
    message.textContent = 'Title and URL should not be empty';
  }
  // Check if image already exists
  else if (images.some((image) => image.url.toLowerCase().includes(newImageURLInput.value.toLowerCase()))) {
    message.classList.remove('hidden');
    // Set the error message text
    message.textContent = 'This image URL has already been added. Please provide a unique URL.';
  } else {
    // Hides the error message
    message.classList.add('hidden');



    images.push({
      title: newImageTitleInput.value,
      url: newImageURLInput.value,
      ref: addImage(newImageTitleInput.value, newImageTagsInput.value, newImageURLInput.value),
      tags: newImageTagsInput.value.split(','),
    });

    localStorage.setItem('images', JSON.stringify(images));
    // Clear the input fields.
    newImageTitleInput.value = '';
    newImageURLInput.value = '';
    newImageTagsInput.value = '';
  }
});


document.querySelector('#toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('menu');
});