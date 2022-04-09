class Response {
    author = {
      name: 'Lautaro',
      lastname: 'Nudel',
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

  class Item {
    id;
    title;
    price;
    picture;
    condition;
    free_shipping;
    address;

    constructor( id, title, currency_id, price, thumbnail, condition, shipping, address) {
        this.id = id;
        this.title = title;
        this.price = new Price(currency_id, price);
        this.picture = thumbnail;
        this.condition = condition;
        this.free_shipping = shipping.free_shipping;
        this.address = address.state_name;
    }

    getConditionType(condition){
        switch (condition){
            case 'new' : return "Nuevo";
            case 'not_specified' : return "No especificado";
            case 'used' : return "Usado";
            default: return '';
        }
    }
  }
  
  class ItemsResponse extends Response {
    categories = [];
    items = [];
    constructor(categories, items) {
      super();
      this.categories = categories;
      this.items = items.map(item => new Item( item.id, item.title, item.currency_id, item.price, item.thumbnail, item.condition, item.shipping, item.address));
    }
  }
  
  module.exports = { ItemsResponse };
  