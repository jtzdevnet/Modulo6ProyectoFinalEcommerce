function addToCart(item) {

    const toastTrigger = document.querySelector('.card-add-to-cart')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
    }

    let currentShoppingCart = localStorage.getItem("currentShoppingCart");
    item.uniqID = Math.floor(Math.random() * Date.now() / 100);
    let itemArray = [];
    if (currentShoppingCart === null) {
        itemArray.push(item);
        currentShoppingCart = JSON.stringify(itemArray);
    } else {
        itemArray = JSON.parse(currentShoppingCart);
        itemArray.push(item);
        currentShoppingCart = JSON.stringify(itemArray);
    }
    console.log("added to cart");
    localStorage.setItem("currentShoppingCart", currentShoppingCart);
}

function removeFromCart(item) {
    let currentShoppingCart = JSON.parse(localStorage.getItem("currentShoppingCart"));
    let arrayWithoutItem = currentShoppingCart.filter(function (product) {
        return product.uniqID !== item.uniqID;
    });
    currentShoppingCart = JSON.stringify(arrayWithoutItem);
    localStorage.setItem("currentShoppingCart", currentShoppingCart);
}

function getShoppingCartQty() {
    return JSON.parse(localStorage.getItem("currentShoppingCart")).length;
}

export { addToCart,removeFromCart }