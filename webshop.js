function renderProductList(){
    const productList = JSON.parse(window.localStorage.getItem("productList")) || [] ;

    if (productList == undefined){
        productList = [];
    }

    const productListEl = document.getElementById("productList");
    productListEl.innerHTML = "";
    for (const product of productList) {
        const productEl = document.createElement("div");
        // "Deconstructoring"
        //const {name, image, price, description} = product
        // ==>
        const { name, image, price, description } = product;
        productEl.innerHTML = `<h4>${name}</h4>
            ${(image ? `<div><img height='200px' src="${ image }" /></div> `: "")} 
            <div>${ description }</div> 
            <div><small>Price:${ price }</small></div>`; 
        productListEl.appendChild(productEl);
    }
}

function createNewProduct(event){
    event.preventDefault();

    const name = document.querySelector("[name='name']").value;
    const price = document.querySelector("[name='price']").value;
    const description = document.querySelector("[name='description']").value;
    const image = document.querySelector("[name='image']").files[0].name;

    const product = {name,price,description,image};


    const productList = JSON.parse(window.localStorage.getItem("productList")) || [];
    productList.push(product);
    window.localStorage.setItem("productList", JSON.stringify(productList));
    renderProductList();

    event.target.reset();
}
renderProductList();

window.addEventListener("storage", function(event) {
    if (event.key === "productList") {
        renderProductList();
    }
});