const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuHamIcon=document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer=document.querySelector('#shoppingCardContainer');
const cardsContainer= document.querySelector('.cards-container');
const productDetailContainer=document.querySelector('#productDetail');
const productDetailCloseIcon=document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);


function toggleDesktopMenu(){
    const mobileMenuClosed=mobileMenu.classList.contains('inactive');
    if(!mobileMenuClosed){
        shoppingCardContainer.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed=shoppingCardContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

function toggleCarritoAside(){
    const mobileMenuClosed=mobileMenu.classList.contains('inactive');
    //const asideClosed=aside.classList.contains('inactive');

    //aside.classList.toggle('inactive');
    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } 
    const isProductDetailClosed=productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    } 
    shoppingCardContainer.classList.toggle('inactive');
}

const productsList=[];
productsList.push({
    name:"bike",
    price:120,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productsList.push({
    name:"pantalla",
    price:220,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productsList.push({
    name:"Compu",
    price:620,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function closeProductDetailAside(){
    
    productDetailContainer.classList.add('inactive');

}
function openProductDetailAside(){
    shoppingCardContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function renderProducts(arr){
for (product of arr){ //elemento, y con in el elemento del array
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');

    const productImg=document.createElement('img');
    productImg.setAttribute('src',product.img);
    productImg.addEventListener('click',openProductDetailAside)

    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');

    const productDiv=document.createElement('div');
    
    const productPrice=document.createElement('p');
    productPrice.innerText= '$' +product.price;
    const productName=document.createElement('p');
    productName.innerText=product.name;

    productDiv.appendChild(productPrice);
    productDiv.appendChild(productName);

    const productInfoFigure=document.createElement('figure');
    const productImgCard=document.createElement('img');
    productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}

}

renderProducts(productsList);