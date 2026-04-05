 function createItem(name, price, quantity) {
  if (price < 0) {
    throw new Error("O preço não pode ser negativo.");
  }

  if (quantity <= 0) {
    throw new Error("A quantidade deve ser maior que zero.");
  }

  return {
    name,
    price,
    quantity,
    subtotal() {
      return this.price * this.quantity;
    }
  };
}

export default createItem;