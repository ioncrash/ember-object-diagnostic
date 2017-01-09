/// Ember Object Diagnostic ///

const Order = Ember.Object.extend({
  price: undefined,
  qty: undefined,
  orderPrice: Ember.computed('price', 'qty', function(){
    return this.get('price') * this.get('qty');
  })
});

const Cart = Ember.Object.extend({
  orders: [],
  addToCart: function(order) {
    this.get('orders').addObject(order);
    return this.orders;
  },
  totalPrice: Ember.computed('orders', function(){
    let total = 0;
    this.get('orders').forEach((e) => {
      console.log('price is ' + total);
      total += e.get('orderPrice');
    });
    return total;
  })
});

let myCart = Cart.create({
});

let orderOne = Order.create({
  name: 'hat',
  price: 5,
  qty: 2
});

let orderTwo = Order.create({
  name: 'desk lamp',
  price: 20,
  qty: 1
});

let orderThree = Order.create({
  name: 'hand towel',
  price: 8,
  qty: 3
});

myCart.addToCart(orderOne);
myCart.addToCart(orderTwo);
myCart.addToCart(orderThree);

console.log('total price: ' + myCart.get('totalPrice'));

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)
