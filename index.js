// product object declaration and init
let product = {
  "name": "the bible",
  "section": "books",
  "styles": ["religion", "history"],
  "price": 12,
  "isOffer": true,
  "seller": {
    "name": "infobooks",
    "address": {
      "city": "Madrid",
      "postcode": 28999,
      "country": "Spain"
    }
  }
};

console.log(product)

// let productForATable = {
//   name: "the bible",
//   section: "books",
//   price: 12,
//   isOffer: true
// };

// // get the product name
console.log(product.name);

// // get the product's seller postcode
console.log(product.seller.address.postcode);

// get the product name with array notation
console.log(product["name"]);

// get the product's seller postcode
console.log(product["seller"]["address"]["postcode"]);

// sequential key adding to the object
for (var i = 0; i < 10; i++) {
  product["characteristic" + i] = "char" + i;
}

// get the values of 5 keys
for (var i = 0; i < 5; i++) {
  console.log(product["characteristic" + i]);
}

// get all object keys
Object.keys(product);

// get all object values
Object.values(product);

// access to all object's keys (object traversing)
for (let key in product) {
  console.log(key, product[key]);
}

// check key existence
product.hasOwnProperty("isOffer");
"isOffer" in product;

// negation of isOffer key check
!("isOffer" in product);

function productReport(productObj) {
  console.log(
    `${productObj.name} ${productObj.isOffer} ${productObj.price} eur`
  );
}

productReport(product);

// delete some object keys
delete product.seller;
delete product.styles;
