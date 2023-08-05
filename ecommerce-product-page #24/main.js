// Cambio en la cantidad de productos por el usuario
let minusBtn = document.querySelector(".input__minus");
let userInput = document.querySelector(".input__number");
let plusBtn = document.querySelector(".input__plus");

let userInputNumber = 0;

minusBtn.addEventListener("click", () => {
  userInputNumber--;
  if (userInputNumber <= 0) {
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
  //   console.log(userInputNumber);
});
plusBtn.addEventListener("click", () => {
  userInputNumber++;
  userInput.value = userInputNumber;
  //   console.log(userInputNumber);
});

// Agregar al carrito de compra

const addToCartBtn = document.querySelector(".details__button"); //Boton Add Cart
let cartNotification = document.querySelector(".header__cart--notification"); //Notificacion
let previousValue = parseInt(cartNotification.innerText);

const productContainer = document.querySelector(
  ".cart-modal__checkout-container"
);

// Mostrar modal del detalle del carrito
const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
// let priceModal = document.querySelector(".cart-modal__price");

addToCartBtn.addEventListener("click", () => {
  previousValue = previousValue + userInputNumber;
  cartNotification.style.display = "block";
  cartNotification.innerText = previousValue;
  drawProductInModal();
});

cartIconBtn.addEventListener("click", () => {
  cartModal.classList.toggle("show");

  if (previousValue == 0) {
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
  } else {
    drawProductInModal();
  }
});

function deleteProduct() {
  // Eliminar productos carrito
  const deleteProductBtn = document.querySelector(".cart-modal__delete");
  deleteProductBtn.addEventListener("click", () => {
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    previousValue = 0;
    cartNotification.innerText = previousValue;
  });
}

//Cambiar imagenes de la galeria
const imageContainer = document.querySelector(".gallery__image-container");
const previousGalleryBtn = document.querySelector(".gallery__previous");
const nextGalleryBtn = document.querySelector(".gallery__next");
let indexImg = 1;
nextGalleryBtn.addEventListener("click", () => {
  changeNextImage(imageContainer);
});

previousGalleryBtn.addEventListener("click", () => {
  changePreviousImage(imageContainer);
});

// Mostrar modal desktop
const imagesModal = document.querySelector(".modal-gallery__background");
const closeModalBtn = document.querySelector(".modal-gallery__close");

imageContainer.addEventListener("click", () => {
  if (window.innerWidth > 1115) {
    imagesModal.style.display = "grid";
  }
});

closeModalBtn.addEventListener("click", () => {
  imagesModal.style.display = "none";
});

//cambiar imagen del modal desde los thumbnails
let thumbnails = document.querySelectorAll(".gallery__thumbnail");
thumbnails = [...thumbnails];

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    // console.log(e.target.id); //Selecionar id del html
    imageContainer.style.backgroundImage = `url('../images/image-product-${e.target.id}.jpg')`;
  });
});

//cambiar imagen del modal desde los thumbnails del modal
let modalthumbnails = document.querySelectorAll(".modal-gallery__thumbnail");
const modalImageContainer = document.querySelector(
  ".modal-gallery__image-container"
);
modalthumbnails = [...modalthumbnails];

modalthumbnails.forEach((modalthumbnail) => {
  modalthumbnail.addEventListener("click", (e) => {
    // console.log(e.target.id.slice(-1)); //Selecionar id del html
    modalImageContainer.style.backgroundImage = `url('../images/image-product-${e.target.id.slice(-1)}.jpg')`;
  });
});

//cambiar imagen del modal desde Next and Previous.

const nextModalBtn = document.querySelector(".modal-gallery__next");
const previousModalBtn = document.querySelector(".modal-gallery__previous");

nextModalBtn.addEventListener("click", () => {
  changeNextImage(modalImageContainer);
});

previousModalBtn.addEventListener("click", () => {
  changePreviousImage(modalImageContainer);
});

//Menu Hamburguesa
const hamburguerMenu = document.querySelector(".header__menu");
const modalNabvar = document.querySelector(".modal-navbar__background");
const modalClose = document.querySelector(".modal-navbar__close");

hamburguerMenu.addEventListener("click", (e) => {
  modalNabvar.style.display = "block";
});

modalClose.addEventListener("click", () => {
  modalNabvar.style.display = "none";
});

// Functions

function drawProductInModal() {
  productContainer.innerHTML = `
<div class="cart-modal__details-container">
    <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="image-thumbnail">
        <div>
            <p class="cart-modal__product-name">Autum Limited Edition...</p>
            <p class="cart-modal__price">$125.00 x 3 <span>$375.00</span></p>
        </div>
    <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="icon-delete">
</div>
<button class="cart-modal__checkout">Checkout</button>`;
  deleteProduct();
  let priceModal = document.querySelector(".cart-modal__price");
  priceModal.innerHTML = `$125.00 x ${previousValue} <span>$${
    previousValue * 125
  }.00</span>`;
}

function changeNextImage(imgContainer) {
  if (indexImg < 4) {
    indexImg++;
  } else {
    indexImg = 1;
  }
  imgContainer.style.backgroundImage = `url('../images/image-product-${indexImg}.jpg')`;
}

function changePreviousImage(imgContainer) {
  if (indexImg <= 1) {
    indexImg = 4;
  } else {
    indexImg--;
  }
  imgContainer.style.backgroundImage = `url('../images/image-product-${indexImg}.jpg')`;
}
