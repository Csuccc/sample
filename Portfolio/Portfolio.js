var i = 0;
var images = [];
var texts = [];

// image list
images[0] = 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc';
images[1] = 'https://vuanem.com/blog/wp-content/uploads/2023/02/cho-corgi.jpg';
images[2] = 'https://cdn.britannica.com/02/236302-050-E1F61BB1/Alaskan-Malamute-sled-dog.jpg';
images[3] = 'https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg'

// text list
texts = ['Text0','TWelsh Corgi','Alaskan Malamute','Shiba Inu'];
texts[0]="Golden Retriever"
// change image
function changeImgLeft() {
if (i > 0) {
        i--;
    } else {
        i = 2;
    }
    changeTextLeft(i);
    
    document.slide.src = images[i];
}

function changeImgRight() {
if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    changeTextRight(i);
    
    document.slide.src = images[i];
}

window.onload = document.slide.src = images[i];
window.onload = document.getElementsByName("carousel_text")[0].innerText = texts[i];

// change text
function changeTextLeft(counter) {
    document.getElementsByName("carousel_text")[0].innerText = texts[counter];
}

function changeTextRight(counter) {
    document.getElementsByName("carousel_text")[0].innerText = texts[counter];
}

const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });