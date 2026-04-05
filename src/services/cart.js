export {addItem, removeItem, deleteItem, calculateTotal, moreItens, displaycart, itensInCart, clearCart, addItemWishlist, displayWishlist,
};

function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

async function addItem(userCart, item) {
  userCart.push({ ...item });
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((i) => i.name === item.name);

  if (indexFound === -1) {
    console.log("Item não foi encontrado.");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
  }
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  } else {
    console.log("Item não encontrado para deletar.");
  }
}

async function calculateTotal(userCart) {
  if (userCart.length === 0) {
    console.log("Não contém nada dentro do carrinho.");
    return;
  }

  const total = userCart.reduce((total, item) => total + item.subtotal(), 0);

  console.log(`Total do carrinho: ${formatPrice(total)}`);
}

async function moreItens(userCart, item) {
  const index = userCart.findIndex((i) => i.name === item.name);

  if (index === -1) {
    userCart.push({ ...item });
  } else {
    userCart[index].quantity += item.quantity;
  }
}

async function displaycart(userCart) {
  if (isEmptyCart(userCart)) {
    return;
  }

  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - ${formatPrice(item.price)} | ${
        item.quantity
      }x | Subtotal = ${formatPrice(item.subtotal())}`
    );
  });
}

async function itensInCart(userCart) {
  const total = userCart.reduce((total, item) => total + item.quantity, 0);
  console.log(`Contém um total de ${total} itens em seu carrinho.`);
}

async function clearCart(userCart) {
  userCart.length = 0;
  console.log("Carrinho limpo com sucesso.");
}

function isEmptyCart(userCart) {
  if (userCart.length === 0) {
    console.log("Carrinho vazio.");
    return true;
  }

  return false;
}

async function addItemWishlist(userWishlist, item) {
  const index = userWishlist.findIndex((i) => i.name === item.name);

  if (index === -1) {
    userWishlist.push({ ...item });
  } else {
    console.log("Esse item já está na wishlist.");
  }
}

async function displayWishlist(userWishlist) {
  if (userWishlist.length === 0) {
    console.log("Lista de desejos vazia.");
    return;
  }

  console.log("\nShopee lista de desejos list:");
  userWishlist.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - ${formatPrice(item.price)} | ${
        item.quantity
      }x | Subtotal = ${formatPrice(item.subtotal())}`
    );
  });
}