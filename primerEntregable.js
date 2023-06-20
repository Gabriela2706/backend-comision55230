class ProductManager {
  #id = 0;
  constructor() {
    this.products = [];
  }
  addProducts = (prod) => {
    const { title, description, price, thumbnail, code, stock } = prod;

    const validation = this.products.some(
      (productfind) => productfind.code === code
    );
    if (validation) {
      console.log("Producto con codigo ya existente");
      return;
    }
    // PROBE CON EL INCLUDE Y NO ME DEVUELVE ERROR COMO EL SOME.
    // TE LO DEJO PARA VER SI ESTA BIEN HECHO O NO FUNCIONA POR ALGO QUE HICE MAL.

    // const validation2 = this.products.includes(
    //   (prodfind) => prodfind.code === code
    // );
    // if (validation2) {
    //   console.log("producto ya encontrado con includes");
    //   return;
    // }

    const newProduct = {
      id: this.#id++,
      ...prod,
    };
    this.products.push(newProduct);
    return console.log("Producto Agregado Correctamente");
  };

  getProducts = () => {
    return this.products;
  };

  getProductById = (idProduct) => {
    const encontrarProducto = this.products.find(
      (product) => product.id == idProduct
    );
    if (encontrarProducto) {
      console.log(`Producto Encontrado!! `);
      return encontrarProducto;
    } else {
      return `El producto con id ${idProduct} no se encuentra en nuestra lista`;
    }
  };
}
const productManager = new ProductManager();
productManager.addProducts({
  title: `Remera Guason`,
  description: `Remera mangas cortas al cuerpo`,
  price: `6420`,
  thumbnail: `https://res.cloudinary.com/dy66f9pgr/image/upload/v1687020677/guason_cntzhv.jpg`,
  code: `R_25`,
  stock: 20,
});
productManager.addProducts({
  title: `Remera Batman`,
  description: `Remera mangas cortas al cuerpo`,
  price: `7520`,
  thumbnail: `https://res.cloudinary.com/dy66f9pgr/image/upload/v1687020680/batman_djggwa.png`,
  code: `R_25`,
  stock: 17,
});
productManager.addProducts({
  title: `Remera Capitan America`,
  description: `Remera mangas cortas al cuerpo`,
  price: `6420`,
  thumbnail: `https://res.cloudinary.com/dy66f9pgr/image/upload/v1687020677/capitan_america_k4zgbn.jpg`,
  code: `R_35`,
  stock: 15,
});

console.log(productManager.getProducts());
console.log(productManager.getProductById(1));
