export class ProductService {
  getProductsSmall() {
    return fetch("products-small.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
