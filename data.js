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

const productList = document.getElementById('productList'); // Make sure you have an HTML element with this ID

for (let i = 0; i < Walmart.length; i++) {
    const walmartProduct = Walmart[i];
    const bestbuyProduct = Bestbuy[i];

    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    const cheaperBrand = (parseFloat(walmartProduct.price) < parseFloat(bestbuyProduct.price)) ? "Walmart" : "Best Buy";
    
    productDiv.innerHTML = `
      <div class="product-info">
        <h2>${walmartProduct.name}</h2>
        <p>Brand: ${walmartProduct.brand}</p>
        <p>Price - Walmart: $${walmartProduct.price} | Best Buy: $${bestbuyProduct.price}</p>
        <p>Quality - Walmart: ${walmartProduct.quality} | Best Buy: ${bestbuyProduct.quality}</p>
        <p>Color - Walmart: ${walmartProduct.color} | Best Buy: ${bestbuyProduct.color}</p>
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
            const newOpinion = (cheaperBrand === "Walmart")
                ? "Walmart might be the better option due to its lower price."
                : "Best Buy might be the better option due to its lower price.";

            opinionDiv.textContent = newOpinion;
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
