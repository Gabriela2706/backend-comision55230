import fs from "fs";

class ProductManager {
  #id = 0;
  constructor() {
    this.products = [];
    this.path = "./files.txt"; // AGREGO EL METODO PATH PARA PODER USAR LA PERSISTENCIA EN EL RESTO DEL CODIGO
  }
  addProducts = async (prod) => {
    // CONVIERTO LA FUNCION EN ASINCRONA AGREGANDOLE EL ASYNC
    const { title, description, price, thumbnail, code, stock } = prod;

    const validation = this.products.some(
      (productfind) => productfind.code === code
    );
    if (validation) {
      console.log("Producto con codigo ya existente");
      return;
    }

    const fileProducts = await fs.promises.readFile(this.path, "utf8"); // GUARDO EN UNA VARIABLE LA LECTURA DE CADA AGREGADO DE PRODUCTOS
    const productParseado = JSON.parse(fileProducts); // LO PASO A OBJETO ASI PUEDO AGREGARLO COMO PRODUCTO CON PROPIEDADES

    const newProduct = {
      id: this.#id++,
      ...prod,
    };
    this.products = productParseado; // IGUALO EL THIS.PRODUCTS CON EL NUEVO PRODUCTO PARSEADO
    productParseado.push(newProduct); // LE EMPUJO EL NUEVO PRODUCTO
    // return console.log("Producto Agregado Correctamente");
    await fs.promises.writeFile(this.path, JSON.stringify(productParseado)); // ESCRIBO EN EL ARCHIVO EL NUEVO PRODUCTO PASADO A TEXTO PLANO
    return productParseado;
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
await productManager.addProducts({
  title: `Remera Guason`,
  description: `Remera mangas cortas al cuerpo`,
  price: `6420`,
  thumbnail: `https://res.cloudinary.com/dy66f9pgr/image/upload/v1687020677/guason_cntzhv.jpg`,
  code: `R_25`,
  stock: 20,
});
await ProductManager.addProducts({
  title: `Remera Batman`,
  description: `Remera mangas cortas al cuerpo`,
  price: `7520`,
  thumbnail: `https://res.cloudinary.com/dy66f9pgr/image/upload/v1687020680/batman_djggwa.png`,
  code: `R_25`,
  stock: 17,
});
await ProductManager.addProducts({
  title: `Remera Capitan America`,
  description: `Remera mangas cortas al cuerpo`,
  price: `6420`,
  thumbnail: `https://res.cloudinary.com/dy66f9pgr/image/upload/v1687020677/capitan_america_k4zgbn.jpg`,
  code: `R_35`,
  stock: 15,
});

console.log(ProductManager.getProducts());
console.log(ProductManager.getProductById(1));
