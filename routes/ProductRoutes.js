const express=require("express");
const { addProduct, getProduct, getProductById, getProductByCategoryId, updateProduct, deleteProduct } = require('../controller/ProductController');
const router = express.Router();

router.post('/addproduct', addProduct);
router.get("/", getProduct);
router.get("/:id", getProductById);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/category/:id", getProductByCategoryId);

module.exports = router;