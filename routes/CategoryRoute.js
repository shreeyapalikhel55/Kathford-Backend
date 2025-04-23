const express = require('express')
const {
  addcategory,
  getCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require('../controller/CategoryController')
const router = express.Router()
router.get('/', getCategory)
router.post('/categoryadd', addcategory)
router.get('/:id', getCategoryById)
router.put('/updateCategory/:id', updateCategory)
router.delete('/deletecategory/:id', deleteCategory)
module.exports = router