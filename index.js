const FriesShop = require("./fries-order");
const Drink = require("./drink");

const friesshop = new FriesShop();
const drink = new Drink();

friesshop.on("order", (size, topping)=>{
    console.log(`Making ${size} fries with ${topping}`);
    drink.serveDrink(size);
})

friesshop.order("big", "mushrooms");
friesshop.displayOrderNumber();