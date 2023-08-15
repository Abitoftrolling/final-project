const StoreA = [
    {
        name: ""
        brand:
        price:
        quality: (new, used, refurbished)
        color:
    } 
];

const StoreB = [{
    
}

]






roducts.forEach(StoreA => {
    const StoreADiv = document.createElement('div');
    StoreADiv.className = 'store';
    StoreADiv.innerHTML = `
      <div class="product-info">
        <h2>${StoreA.name}</h2>
        <p>Quality: ${storeA.quality}</p>
      </div>
      <div class="price">$${StoreA.price}</div>
      <div class="brand">$${storeA.brand}</div>
      <div class= "color">$${storeA.color}</div>
    `;

