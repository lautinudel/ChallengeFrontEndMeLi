class Response {
  author = {
    name: "Lautaro",
    lastname: "Nudel",
  };
  constructor() {}
}

class Price {
  currency;
  amount;
  decimals;

  constructor(currency, amount) {
    this.decimals = Math.round(Math.round((amount % 1) * 100) / 100);
    this.currency = currency;
    this.amount = Math.round(amount);
  }
}

class ItemDetails {
  id;
  title;
  price;
  picture;
  condition;
  free_shipping;
  sold_quantity;
  description;
  categories;

  constructor(
    id,
    title,
    currency_id,
    price,
    thumbnail,
    condition,
    shipping,
    sold_quantity,
    description,
    pictures,
    categories
  ) {
    this.id = id;
    this.title = title;
    this.price = new Price(currency_id, price);
    this.picture = pictures?.length > 0 ? pictures[0].url : thumbnail;
    this.condition = this.getConditionType(condition);
    this.free_shipping = shipping.free_shipping;
    this.sold_quantity = sold_quantity;
    this.description = description;
    this.categories = categories;
  }

  getConditionType(condition) {
    switch (condition) {
      case "new":
        return "Nuevo";
      case "not_specified":
        return "No especificado";
      case "used":
        return "Usado";
      default:
        return "";
    }
  }
}

class ItemDetailsResponse extends Response {
  item = {};
  constructor(item) {
    super();
    this.item = new ItemDetails(
      item.id,
      item.title,
      item.currency_id,
      item.price,
      item.thumbnail,
      item.condition,
      item.shipping,
      item.sold_quantity,
      item.description,
      item.pictures,
      item.categories
    );
  }
}

module.exports = { ItemDetailsResponse };
