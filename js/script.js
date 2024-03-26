let lightThemeBtn = document.querySelector('.theme-button-light');
let darkThemeBtn = document.querySelector('.theme-button-dark');
let sansSerifFontBtn = document.querySelector('.font-button-sans-serif');
let serifFontBtn = document.querySelector('.font-button-serif');
const burgerBtn = document.getElementById('burger');

lightThemeBtn.onclick = function() {
  document.body.classList.remove('dark');
  lightThemeBtn.classList.add('active');
  darkThemeBtn.classList.remove('active');
}

darkThemeBtn.onclick = function() {
  document.body.classList.add('dark');
  lightThemeBtn.classList.remove('active');
  darkThemeBtn.classList.add('active');
}

sansSerifFontBtn.onclick = function () {
  document.body.classList.remove('serif');
  sansSerifFontBtn.classList.add('active');
  serifFontBtn.classList.remove('active');
};

serifFontBtn.onclick = function () {
  document.body.classList.add('serif');
  sansSerifFontBtn.classList.remove('active');
  serifFontBtn.classList.add('active');
};

///////////////////////////////////

let articleSections = document.querySelectorAll('.blog-article');

for (let articleSection of articleSections) {
  let moreButton = articleSection.querySelector('.more');
  moreButton.onclick = function () {
    articleSection.classList.remove('short');
  };
}

///////////////////////////////////

let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');

let cardsList = document.querySelector('.cards');

gridViewButton.onclick = function () {
  cardsList.classList.remove('list');
  gridViewButton.classList.add('active');
  listViewButton.classList.remove('active');
};

listViewButton.onclick = function () {
  cardsList.classList.add('list');
  gridViewButton.classList.remove('active');
  listViewButton.classList.add('active');
};

////////////////////////////////////

let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for (let currentPhoto of previews) {
  currentPhoto.onclick = function (evt) {
    evt.preventDefault();
    activePhoto.src = currentPhoto.href;

    let currentActive = document.querySelector('.active-item');
    currentActive.classList.remove('active-item');
    currentPhoto.classList.add('active-item');
  };
}

/////////////////////////////////////
burgerBtn.addEventListener('click', function () {
  document.querySelector('.main-nav').classList.toggle('open');
});