let cartProducts = JSON.parse(localStorage.getItem('cartproducts'));
let products = JSON.parse(localStorage.getItem('products'));

console.log(cartProducts)
console.log(products)
let cartitems = document.getElementById('Cartitems');
let productslist = document.getElementById('Productslist');
let spanTotal = document.getElementById('spanTotal')
let total;


addproducts(cartProducts);
function addproducts(cartProducts) {
    if (cartProducts.length === 0) {
        cartitems.innerHTML = `<div id="emptyh1" style="display:flex;justify-content:center;align-items:center;flex-direction:column;">
                               <h1>Your cart is empty Shop now</h1>
                               <img src="../empty.png" alt="img" style="width:30rem;height:30rem;">
                                </div>`
        spanTotal.innerText = 0;
    }
    else {
        total = 0;
        // document.getElementById('entireConatiner').innerText = cartProducts.length;
        cartitems.innerHTML = '';

        cartProducts.forEach((obj) => {
            // console.log(obj.id)
            products.forEach((item) => {
                // console.log(item)
                if (item.id === obj.id) {
                    // console.log("matched")
                    let div = document.createElement('div');
                    div.className = 'card';
                    div.innerHTML = `<div class="imgdiv">
                                     <img class="img" src=${item.image} alt="shirt">
                                 </div>
                                 <div style="width: 200px;"><b>Title : ${item.title}</b></div>
                                        <div class="ps">
                                            <span><b>Price : $${item.price}</b></span>
                                         </div>
                                 <button class="removeFromCartButton" data-product-id="${item.id}">Remove from cart</button>`;
                    cartitems.appendChild(div);
                }
            })
        })


        productslist.innerHTML = ''
        cartProducts.forEach((obj, i) => {
            products.forEach((item) => {
                if (item.id === obj.id) {
                    // <div><span>1.shirt</span><span>$100</span></div>
                    let div = document.createElement('div');
                    div.innerHTML = `<div><span style="width: 80%;">${++i}.${item.title}</span><span style="width: 15%;">$${item.price}</span></div>`;
                    total += item.price;
                    productslist.appendChild(div);
                }
            })
        })


        spanTotal.innerText = `$${Math.floor(total)}`;
    }


}
addproducts(cartProducts);
const removeFromCartButton = document.querySelector('.removeFromCartButton');
removeFromCartButton.addEventListener('click', removefromcart);

function removefromcart() {
    // const id = event.target.dataset.productId;
    // let index = cartProducts.indexOf(id); // Find the index of the first occurrence of '2'

    // if (index !== -1) {
    //     cartProducts.splice(index, 1); // Remove the element at the found index
    // }
    let cartProduct=cartProducts.filter(item=>{
        if(item.id ===products.id){
            cartProducts.pop(item)
        }
    });

    localStorage.setItem('cartProducts', JSON.stringify(cartProduct))
    cartProducts = JSON.parse(localStorage.getItem('cartProducts'))
    addproducts(cartProducts);
}