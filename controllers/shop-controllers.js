

const registerShop = (req, res) => {
    res.send('registered')
}

const loggInToShop  = (req, res) => {
    res.send('logged in')
}




module.exports.registerShop = registerShop;

module.exports.loggInToShop = loggInToShop