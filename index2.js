function checkPriceIsPositive(price) {
  if (price <= 0) {
    throw new Error("Price is wrong");
  }
}

class Voucher {
  constructor(nameParam, priceParam) {
    checkPriceIsPositive(priceParam);

    if (nameParam.length === 0) {
      throw new Error("Name must have a length");
    }

    if (name === undefined) {
      throw new Error("You are missing a field");
    }

    if (price === undefined) {
      throw new Error("You are missing a field");
    }

    this.name = nameParam;
    this.price = priceParam;
  }
}

class Product {
  constructor(nameParam, priceParam, isOfferParam, styleParam) {
    checkPriceIsPositive(priceParam);

    if (nameParam.length === 0) {
      throw new Error("Name must have a length");
    }

    this.name = nameParam;
    this.price = priceParam;
    this.isOffer = isOfferParam;
    this.style = styleParam;
  }
}

let product1 = new Product("quechua water bottle", 10, false, [
  "mountain products"
]);
let v123 = new Voucher("summer discount", 10);
