const products = [
    {
        id: 0,
        image: 'imgs/images.jpeg',
        title: 'Organic Strawberries',
        price: 10,
    },
    {
        id: 1,
        image: 'imgs/Organic-Avocado.jpg',
        title: 'Organic Avocado',
        price: 10,
    },
    {
        id: 2,
        image: 'imgs/yogurt.jpeg',
        title: 'No-fat Greek yogurt',
        price: 5,
    },
    {
        id: 3,
        image: 'imgs/milk.jpeg',
        title: 'Organic Milk',
        price: 20,
    }
];

const categories = [...new Set(products.map((item) => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { id, image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button onClick='addtocart(${id})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...products[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0;
    total = 0;
    document.getElementById("count").innerHTML = cart.length;
    document.getElementById("total").innerHTML = "$" + 0 + ".00";
    
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$" + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class="row-img">
                        <img class='rowing' src='${image}'>
                    </div>
                    <p style='font-size: 12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onClick='delElement(${j})'></i>
                </div>`
            );
        }).join('');
    }
}
