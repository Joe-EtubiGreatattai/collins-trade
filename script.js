// JavaScript for previewing the uploaded image
const giftCardImageInput = document.getElementById('giftCardImage');
const previewContainer = document.getElementById('previewContainer');
const previewImage = document.getElementById('previewImage');

giftCardImageInput.addEventListener('change', function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    previewImage.src = e.target.result;
    previewImage.classList.remove('hidden');
  };

  reader.readAsDataURL(file);
});

// JavaScript for drag and drop functionality
previewContainer.addEventListener('dragover', function (e) {
  e.preventDefault();
  previewContainer.classList.add('border-blue-400');
});

previewContainer.addEventListener('dragleave', function (e) {
  e.preventDefault();
  previewContainer.classList.remove('border-blue-400');
});

previewContainer.addEventListener('drop', function (e) {
  e.preventDefault();
  previewContainer.classList.remove('border-blue-400');

  const file = e.dataTransfer.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    previewImage.src = e.target.result;
    previewImage.classList.remove('hidden');
  };

  reader.readAsDataURL(file);
});

// JavaScript for click functionality
previewContainer.addEventListener('click', function () {
  giftCardImageInput.click();
});


