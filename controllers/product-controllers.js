


const getProducts = (req, res) => {
    res.send('products')
}

const getProductById = (req, res) => {
    res.send('product by id')
}
const addProduct = (req , res) => {
    res.send('product added')
}

const editProduct = (req, res) => {
    res.send('editted')
}

const deleteProduct = (req, res) => {
    res.send('deleted')
}

module.exports.getProducts = getProducts

module.exports.getProductById = getProductById

module.exports.addProduct = addProduct

module.exports.editProduct = editProduct

module.exports.deleteProduct = deleteProduct