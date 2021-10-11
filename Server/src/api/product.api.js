const router = require("express").Router();
const ProductController = require('../controller/product.controller');

// const multer = require("multer");

// const storage = multer.diskStorage({
//     destination:(req, file, callback) => {
//       callback(null, "../Client/public/images/");
//     },
//     filename: (req, file, callback) => {
//       callback(null, file.originalname);
//     }
//   })
// const upload = multer({storage: storage});

module.exports = function (){
   // router.get('/:name', ProductController.getProductFromName);
      router.post("/create", ProductController.createProduct);
     // router.post("/create",upload.single("imageURL"), ProductController.createProduct);
    router.put("/update/:id", ProductController.updateProduct);
    router.delete("/delete/:id", ProductController.deleteProduct);
    router.get("/", ProductController.getAllProducts);
    return router;
}