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
    <div class="single-image active">
            <img src="${thisPath}" alt="Img 1">

            <div class="single-image-description">
                <h3>${thisTitle}</h3>
                <p>${thisDescription}</p>
            </div>
    </div>
    `;

    mainImagesContainer.innerHTML += singleImageDiv;
}