import createItem from "./services/item.js";
import * as cart from "./services/cart.js";

const userCart = [];
const userWishlist = [];

const item1 = createItem("hotwheels ferrari", 20.99, 2);
const item2 = createItem("hotwheels porsche", 29.99, 1);
const item3 = createItem("hotwheels lamborghini", 39.99, 1);

await cart.addItem(userCart, item1);
await cart.addItem(userCart, item2);

await cart.moreItens(userCart, createItem("hotwheels ferrari", 20.99, 3));

console.log("\n=== CARRINHO INICIAL ===");
await cart.displaycart(userCart);

console.log("\n=== TOTAL DE ITENS ===");
await cart.itensInCart(userCart);

console.log("\n=== VALOR TOTAL ===");
await cart.calculateTotal(userCart);

console.log("\n=== REMOVENDO 1 UNIDADE DO FERRARI ===");
await cart.removeItem(userCart, item1);
await cart.displaycart(userCart);

console.log("\n=== DELETANDO O PORSCHE ===");
await cart.deleteItem(userCart, "hotwheels porsche");
await cart.displaycart(userCart);

console.log("\n=== ADICIONANDO NA WISHLIST ===");
await cart.addItemWishlist(userWishlist, item3);
await cart.addItemWishlist(userWishlist, item2);
await cart.displayWishlist(userWishlist);

console.log("\n=== LIMPANDO CARRINHO ===");
await cart.clearCart(userCart);
await cart.displaycart(userCart);
