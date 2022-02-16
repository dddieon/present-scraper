const {Present} = require('../models')

const createPresent = async ({imageUrl, name, brand, price}) => {
  try {
    const present = await Present.create({
      imageUrl,
      name,
      brand,
      price,
    })
    return present
  } catch (err) {
    console.log(err)
  }
}

module.exports ={
  createPresent,
}
