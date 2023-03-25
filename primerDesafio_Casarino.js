class ProductManager {
    constructor() {
      this.products = [];
      this.lastId = 0;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Error: Todos los campos son obligatorios.");
        return;
      }
  
      // Validar que no se repita el campo "code"
      if (this.getProductByCode(code)) {
        console.error("Error: El código ya existe.");
        return;
      }
  
      // Crear el producto con un id autoincrementable
      const product = {
        id: ++this.lastId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      // Agregar el producto al array de productos
      this.products.push(product);
  
      console.log(`Producto agregado: ${title} (ID: ${product.id})`);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
  
      if (!product) {
        console.error("Error: Producto no encontrado.");
        return;
      }
  
      return product;
    }
  
    getProductByCode(code) {
      return this.products.find((p) => p.code === code);
    }
  }
  

//Agrego productos manualmente
const productManager = new ProductManager();

productManager.addProduct("Torta de chocolate", "Sin azucar", 100, "imagen1.jpg", "ABC123", 10);
productManager.addProduct("Torta de zanahoria", "Descripción 2", 200, "imagen2.jpg", "DEF456", 20);
productManager.addProduct("Torta de banana", "Sin azucar", 150, "imagen1.jpg", "DEF556", 15);
productManager.addProduct("Torta de vainiilla", "Sin azucar", 180, "imagen1.jpg", "DFF431", 23);
productManager.addProduct("Torta de chocolate", "Sin azucar", 100, "imagen1.jpg", "ABC123", 10);

//Muestro todos los productos
const products = productManager.getProducts();
console.log(products);

//Muestro solo los productos con el ID 2
const productID = productManager.getProductById(2);
console.log(productID);


// Muestro el error ya que no ID 3
const nonExistentProd = productManager.getProductById(6); 
console.log(nonExistentProd);