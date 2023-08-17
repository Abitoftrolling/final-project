const Bestbuy = [
    {
        name: "iPhone 14 Pro",
        brand: "Apple",
        price: "999",
        quality: "New",
        color: "Black"
    },

    {
        name: "Air Force 1s",
        brand: "Nike",
        price: "100",
        quality: "New",
        color: "Red"
    },

    {
        name: "Playstation 5",
        brand: "Sony",
        price: "475",
        quality: "New",
        color: "White"
    },

    {
        name: "Backpack",
        brand: "Jansport",
        price: "60",
        quality: "New",
        color: "black"
    },

    {
        name: "Airpods Pro (2nd gen)",
        brand: "Apple",
        price: "250",
        quality: "New",
        color: "white"
    }
];

const Walmart = [
    {
        name: "iPhone 14 Pro",
        image: "images/phone.png",
        brand: "Apple",
        price: "899",
        quality: "used",
        color: "Black",
    },

    {
        name: "Air Force 1s",
        image: "images/shoes.png",
        brand: "Nike",
        price: "110",
        quality: "new",
        color: "white",

    },
    
    {
        name: "Playstation 5",
        image: "images/PS5.png",
        brand: "Sony",
        price: "550",
        quality: "new",
        color: "white",
    },

    {
        name: "Backpack",
        image: "images/backpack.png",
        brand: "Jansport",
        price: "53",
        quality: "refurbished",
        color: "grey",
    },
    
    {
        name: "Airpods Pro (2nd gen)",
        image: "images/airpods.png",
        brand: "Apple",
        price: "199",
        quality: "new",
        color: "white"
    }

];

const productList = document.getElementById('productList'); // Make sure you have an HTML element with this ID

for (let i = 0; i < Walmart.length; i++) {
    const walmartProduct = Walmart[i];
    const bestbuyProduct = Bestbuy[i];

    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    const cheaperBrand = (parseFloat(walmartProduct.price) < parseFloat(bestbuyProduct.price)) ? "Walmart" : "Best Buy";
    
    productDiv.innerHTML = `
      <div class="product-info">
        <div><h2>${walmartProduct.name}</h2></div>
        <div><img src="${walmartProduct.image}"></div>
        <div><p>Brand: ${walmartProduct.brand}</p></div>
        <div><p>Price - Walmart: $${walmartProduct.price} | Best Buy: $${bestbuyProduct.price}</p></div>
        <div><p>Quality - Walmart: ${walmartProduct.quality} | Best Buy: ${bestbuyProduct.quality}</p></div>
        <div><p>Color - Walmart: ${walmartProduct.color} | Best Buy: ${bestbuyProduct.color}</p></div>
      </div>
      <div class="price">
        <button class="opinion-button">Get Opinion</button>
      </div>
      <div class="opinion"></div>
    `;

    const opinionButton = productDiv.querySelector('.opinion-button');
    const opinionDiv = productDiv.querySelector('.opinion');
    
    opinionButton.addEventListener('click', function () {
        if (opinionDiv.textContent) {
            opinionDiv.textContent = ''; // Clear the opinion text
        } else {
            let opinionMessage = '';

            const walmartPrice = parseFloat(walmartProduct.price);
            const bestbuyPrice = parseFloat(bestbuyProduct.price);
            const priceDifference = Math.abs(walmartPrice - bestbuyPrice).toFixed(2);

            opinionMessage = `You can save $${priceDifference} by choosing the ${cheaperBrand} option.`;

            opinionDiv.textContent = opinionMessage;

            // Close other open opinions
            const allOpinionDivs = document.querySelectorAll('.opinion');
            allOpinionDivs.forEach(div => {
                if (div !== opinionDiv) {
                    div.textContent = '';
                }
            });
        }
    });

    productList.appendChild(productDiv);
}