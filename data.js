const Bestbuy = [
    {
        name: "iphone14 pro",
        brand: "apple",
        price: "999",
        quality: "new",
        color: "black"
    },

    {
        name: "air force 1s",
        brand: "nike",
        price: "100",
        quality: "new",
        color: "red"
    },

    {
        name: "playstation 5",
        brand: "sony",
        price: "475",
        quality: "new",
        color: "white"
    },

    {
        name: "backpack",
        brand: "jansport",
        price: "60",
        quality: "new",
        color: "black"
    },

    {
        name: "airpod pros 2nd gen",
        brand: "apple",
        price: "250",
        quality: "new",
        color: "white"
    }
];

const Walmart = [
    {
        name: "iphone14 pro",
        brand: "apple",
        price: "899",
        quality: "used",
        color: "red",
    },

    {
        name: "air force 1s",
        brand: "nike",
        price: "110",
        quality: "new",
        color: "white",

    },
    
    {
        name: "playstation 5",
        brand: "sony",
        price: "550",
        quality: "new",
        color: "white",
    },

    {
        name: "backpack",
        brand: "jansport",
        price: "53",
        quality: "refurbished",
        color: "grey",
    },
    
    {
        name: "airpod pros 2nd gen",
        brand: "apple",
        price: "199",
        quality: "new",
        color: "white"
    }

];






roducts.forEach(StoreA => {
    const StoreADiv = document.createElement('div');
    StoreADiv.innerHTML = `
      <div class="product-info">
        <h2>${StoreA.name}</h2>
        <p>Quality: ${storeA.quality}</p>
      </div>
      <div class="price">$${StoreA.price}</div>
      <div class="brand">$${storeA.brand}</div>
      <div class= "color">$${storeA.color}</div>
    `;
}
