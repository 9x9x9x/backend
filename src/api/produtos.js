const express = require('express')
const router = express.Router()
const { produtos } = require('../models')
const ProdutoService = require('../services/produtos')

const produtoService = new ProdutoService(produtos)

router.get('/', async (req, res) => {
  const produtos = await produtoService.get()
  res.status(200).json(produtos)
})

module.exports = router