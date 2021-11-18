// Consegna:
// Dati tre array contenenti:
//  - una lista ordinata di 5 immagini,
//  - una lista ordinata dei relativi 5 luoghi e
//  - una lista di 5 news,
// creare un carosello come nella foto allegata.

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


const mainImagesContainer = document.querySelector('.main-images-container');
for(let i = 0; i < items.length; i++) {
    const thisPath = items[i];
    const thisTitle = title[i];
    const thisDescription = text[i];

    const singleImageDiv = `
    <div class="single-image">
            <img src="${thisPath}" alt="">

            <div class="single-image-description">
                <h3>${thisTitle}</h3>
                <p>${thisDescription}</p>
            </div>
    </div>
    `;

    mainImagesContainer.innerHTML += singleImageDiv;
}


const thumbsContainer = document.querySelector('.thumbs');
for(let i = 0; i < items.length; i++) {
    const thisThumb = items[i];

    const singleThumbImage = `
    <div class="single-thumb">
        <img src="${thisThumb}" alt=""> 
    </div>
    `;

    thumbsContainer.innerHTML += singleThumbImage;
}




// Diamo la classe active ad un elemento
let activeImage = 0;
const allImages = document.getElementsByClassName('single-image');
const allThumbs = document.getElementsByClassName('single-thumb');
allImages[activeImage].classList.add('active');
allThumbs[activeImage].classList.add('active');

// Al click di prev e next, sposto le classi active all'immagine e al cerchietto
const nextArrow = document.querySelector('.next');
nextArrow.addEventListener('click', function() {
    // Rimuovere active all'immagine corrente
    allImages[activeImage].classList.remove('active');
    allThumbs[activeImage].classList.remove('active');

    // incrementare activeImage di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if( activeImage < items.length - 1 ) {
        activeImage++;
    } else {
        activeImage = 0;
    }

    // assegnare all'immagine col nuovo indice la classe active
    allImages[activeImage].classList.add('active');
    allThumbs[activeImage].classList.add('active');
});

const prevArrow = document.querySelector('.prev');
prevArrow.addEventListener('click', function() {
    // Rimuovere active all'immagine corrente
    allImages[activeImage].classList.remove('active');
    allThumbs[activeImage].classList.remove('active');

    // decrementare activeImage di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if ( activeImage > 0 ) {
        activeImage--;
    } else {
        activeImage = items.length - 1;
    }

    // assegnare all'immagine col nouvo indice la classe active
    allImages[activeImage].classList.add('active');
    allThumbs[activeImage].classList.add('active');
});