class ProductManager {
  constructor() {
    this.products = [];
  }
  addProducts = (title, description, price, thumbnail, code, stock) => {
    const newProduct = {
      id: this.products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(newProduct);
    return;
  };

  getProducts = () => {
    return this.products;
  };

  getProductById = (idProduct) => {
    const encontrarProducto = this.products.find(
      (product) => product.id == idProduct
    );
    if (encontrarProducto) {
      console.log(`el producto encontrado es ${encontrarProducto.id}`);
    } else {
      console.log(`El producto no se encuentra`);
    }
  };
}
const productoX = new ProductManager();
productoX.addProducts(
  `Remera Guason`,
  `Remera mangas cortas al cuerpo`,
  `6420`,
  `https://res.cloudinary.com/dy66f9pgr/image/upload/v1687020677/guason_cntzhv.jpg`,
  `R_01`,
  20
);
productoX.addProducts(
  `Remera Batman`,
  `Remera mangas cortas al cuerpo`,
  `7520`,
  `https://res.cloudinary.com/dy66f9pgr/image/upload/v1687020680/batman_djggwa.png`,
  `R_25`,
  17
);
productoX.addProducts(
  `Remera Capitan America`,
  `Remera mangas cortas al cuerpo`,
  `6420`,
  `https://res.cloudinary.com/dy66f9pgr/image/upload/v1687020677/capitan_america_k4zgbn.jpg`,
  `R_35`,
  15
);

console.log(productoX.getProducts());
console.log(productoX.getProductById(6));
