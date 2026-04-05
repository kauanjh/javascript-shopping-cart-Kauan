# 🛒 Shopee Cart

Projeto desenvolvido em **JavaScript** com foco em praticar **lógica de programação**, **modularização**, **manipulação de arrays e objetos** e criação de um sistema simples de **carrinho de compras** com **wishlist separada**.

---

## 📌 Sobre o projeto

O **Shopee Cart** é uma aplicação simples feita para simular a lógica de um carrinho de compras no terminal.  
Nele, é possível adicionar produtos, aumentar quantidade, remover itens, calcular o valor total do carrinho, limpar tudo e também trabalhar com uma **wishlist independente**.

Esse projeto foi criado com o objetivo de fortalecer a base em JavaScript e entender melhor como organizar regras de negócio em arquivos separados.

---

## 🚀 Funcionalidades

### Carrinho de compras
- Adicionar item ao carrinho
- Adicionar mais unidades de um item já existente
- Remover uma unidade de um item
- Deletar um item pelo nome
- Exibir todos os itens do carrinho
- Contar a quantidade total de itens no carrinho
- Calcular o valor total da compra
- Limpar todo o carrinho
- Exibir mensagem quando o carrinho estiver vazio

### Wishlist
- Criar uma wishlist separada do carrinho
- Adicionar itens à wishlist
- Exibir os itens da wishlist
- Evitar duplicação de itens na wishlist
- Garantir que carrinho e wishlist sejam independentes

### Validações
- Impedir preço negativo
- Impedir quantidade menor ou igual a zero
- Validar quando um item não for encontrado

---

## 🧠 Conceitos praticados

Neste projeto, foram aplicados conceitos importantes de JavaScript, como:

- `import` e `export`
- modularização de código
- funções
- arrays e objetos
- métodos de array como `findIndex()` e `reduce()`
- validações
- organização de lógica em arquivos separados
- separação de responsabilidades

---

## 📂 Estrutura do projeto

```bash
📁 shopee-cart
 ┣ 📄 index.js
 ┣ 📄 package.json
 ┗ 📁 services
    ┣ 📄 cart.js
    ┗ 📄 item.js