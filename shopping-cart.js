let carts = document.querySelectorAll('.add-cart');

let products = [ 

    {

    name: 'Grey Beanie',
    tag: 'greybeanie',
    price: 20,
    inCart: 0

    },
    {

        name: 'Grey Hoodie',
        tag: 'greyhoodie',
        price: 40,
        inCart: 0
    
        },
     {

            name: 'Hoodie GB',
            tag: 'hoodiegb',
            price: 40,
            inCart: 0
        
            },
                {
                 name: 'White Shirt',
                    tag: 'whiteshirt',
                    price: 15,
                    inCart: 0
                
                    },  

                    {

                        name: 'Black Bucket Hat',
                        tag: 'blackbuckethat',
                        price: 25,
                        inCart: 0
                    
                        },

                        {

                            name: 'Blue Bucket Hat',
                            tag: 'bluebuckethat',
                            price: 18,
                            inCart: 0
                        
                            }, 

                            {
                            name: 'Black Hoodie',
                            tag: 'blackhoodie',
                            price: 35,
                            inCart: 0




                            },


                            {
                                name: 'Truck Hat',
                                tag: 'truckhat',
                                price: 20,
                                inCart: 0  



                            },

                            {
                                name: 'Blue hoodie',
                                tag: 'bluehoodie',
                                price: 35,
                                inCart: 0  



                            },

]

for (let i=0; i < carts.length; i++) {

carts[i].addEventListener('click', () => {

   cartNumbers(products[i]);
   totalCost(products[i]);

})


}

function onLoadCartNumbers() { 
    let productNumbers = localStorage.getItem('cartNumbers');
 if(productNumbers) {
    document.querySelector('.hoop-items').textContent = productNumbers ;

     }



}



function cartNumbers(product, action) {
let productNumbers = localStorage.getItem('cartNumbers');
productNumbers = parseInt(productNumbers);

let cartItems = localStorage.getItem('productInCart');
cartItems = JSON.parse(cartItems);

if( action == "decrease"){ 
  localStorage.setItem('cartNumbers', productNumbers -1)
  document.querySelector('.hoop-shop span').textContent = productNumbers -1;

} else if(productNumbers) {
 localStorage.setItem("cartNumbers", productNumbers + 1)
 document.querySelector('.hoop-shop span').textContent = productNumbers + 1;
} else {

localStorage.setItem('cartNumbers', 1);
document.querySelector('.hoop-shop span').textContent = 1;
}

setItems(product);

 }





function setItems(product) { 
let cartItems = localStorage.getItem('productsInCart');
cartItems = JSON.parse(cartItems);


if(cartItems != null) {

    if(cartItems[product.tag] == undefined) { 
     cartItems = {

     ...cartItems,
      [product.tag]: product
     
    }


    }

    cartItems[product.tag].inCart += 1;

} else {
    product.inCart = 1;
    cartItems = {
   [product.tag]: product
   

 
    }

}

localStorage.setItem("productsInCart", JSON.stringify
(cartItems));

}


function totalCost(product, action) { 

console.log('The products price is', product.price);

let cartCost = localStorage.getItem('totalCost');

console.log("My cartCost is", cartCost);
console.log(typeof cartCost)
if(action == "decrease") {
 cartCost = parseInt(cartCost);
 localStorage.setItem('totalCost', cartCost - product.price)

}else if(cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
} else { 

localStorage.setItem("totalCost", product.price);

   }



}

function displayCart() {

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    //console.log(cartItems);
    if(cartItems && productContainer ) {
    
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => { 
         
         productContainer.innerHTML += `
         <div class="product">
             <i class="fa-solid fa-square-xmark"></i>
             <img src="./img/${item.tag}.png">
             <span>${item.name}</span>
            </div>
        
        <div class="price">$${item.price},00</div>
        
        <div class="quantity">
            <i  class="fa-solid fa-circle-arrow-left"></i>
            <span>${item.inCart}</span>
            <i class="fa-solid fa-circle-arrow-right"></i>
         </div>
         
         <div class="total">
            $${item.inCart * item.price},00
           
         </div>
         
         
         
         `});

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total
        </h4>
        <h4 class="basketTotal">
          $${cartCost},00
        </h4>
        
        
        `;
    
}

   deleteButtons();
   manageQuantity();
  
    }
   

function deleteButtons() { 
    let deleteButtons = document.querySelectorAll('.product .fa-solid.fa-square-xmark ')
    let productName;
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
     let cartCost = localStorage.getItem('totalCost');

for (let i=0; i < deleteButtons.length; i++) {

  deleteButtons[i].addEventListener('click', () => { 
    productName = deleteButtons[i].parentElement.textContent.trim()
    .toLowerCase().replace(/ /g, '');
    console.log(productName)
    console.log(cartItems[productName].name + " " + cartItems
   [productName].inCart);

     localStorage.setItem('cartNumbers', productNumbers - cartItems
     [productName].inCart );

     localStorage.setItem('totalCost', cartCost - (cartItems 
        [productName].price * cartItems[productName].inCart));

        delete cartItems[productName];
        localStorage.setItem('productsInCart', JSON.stringify
        (cartItems));
        

        
        displayCart();
        onLoadCartNumbers();

  });

}

   }

function manageQuantity() { 

   let decreaseButtons = document.querySelectorAll('.quantity .fa-solid.fa-circle-arrow-left');
   let increaseButtons = document.querySelectorAll('.quantity .fa-solid.fa-circle-arrow-right');
   let cartItems = localStorage.getItem('productsInCart');
   let currentQuantity = 0;
   let currentProduct = "";
   cartItems = JSON.parse(cartItems);
   console.log(cartItems)
   
   for( let i = 0; i < decreaseButtons.length; i++) { 
        decreaseButtons[i].addEventListener('click', () => { 
          currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
          console.log(currentQuantity);
          currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
           console.log(currentProduct);

           if(cartItems[currentProduct].inCart > 1) {  
           cartItems[currentProduct].inCart -=  1;
           cartNumbers(cartItems[currentProduct], "decrease");
           totalCost(cartItems[currentProduct], "decrease");
           localStorage.setItem('productsInCart', JSON.stringify(cartItems));
           displayCart();
            }
        });
    }

    for( let i = 0; i < increaseButtons.length; i++) { 
        increaseButtons[i].addEventListener('click', () => { 
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
  
            
             currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
             console.log(currentProduct);
  
               
             cartItems[currentProduct].inCart +=  1;
             cartNumbers(cartItems[currentProduct]);
             totalCost(cartItems[currentProduct]);
             localStorage.setItem('productsInCart', JSON.stringify(cartItems));
             displayCart();
              

        })
    }

}




onLoadCartNumbers();
displayCart();