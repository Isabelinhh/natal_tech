const express = require('express');
const router = express.Router();
const natalController = require('../controllers/productController');

// Rotas de produtos
router.get('/natal', productController.getAllnatal);
router.get('/natal/:id', productController.getProductById);
router.post('/natal', productController.createProduct);
router.put('/natal/:id', productController.updateProduct);
router.delete('/natal/:id', productController.deleteProduct);

module.exports = router;