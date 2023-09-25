const product = [
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
        id: 3,
        image: 'imgs/yogurt.jpeg',
        title: 'No-fat Greek yogurt',
        price: 5,
    },
    {
        id: 4,
        image: 'imgs/milk.jpeg',
        title: 'Organic Milk',
        price: 20,
    }
];

const  categories = [...new Set(product.map((item) => 
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item) =>
{ 
        var { image, title, price} = item;
        return( 
            `<div class='box'>
            <div class='img-box'>
                <img class ='images' src= ${image}></img>

            </div>
            <div class='bottom'>
            <p> ${title}</p>
            <h2>$ ${price}.00</h2>`+ 
            "<button onClick=' addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
               
                 

            
            
        )
}).join('')

var cart =[];

function addtocart (a) {
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a) {
    let j = 0;
    if(cart.length==0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items) =>
        {
            var {image, title, price} = items;
            return(
                ` <div class= 'cart-item'>
                <div class="row-img>
                    <img class='rowing' src=${image}>
                </div>
                <p style='font-size: 12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onClick='delElement("+(j++) +")'></i></div>"

            )
        })

    }
}
            
        
 
   