const Product=require("../models/Products")

const createProduct=async (req,res)=>{
    const newProduct=new Product(req.body);
    try{
        await newProduct.save()
        res.status(200).json("product created successfully")
    }
    catch(err){
        console.log(err)
        res.status(500).json("failed to create the product")
    }
}

const getAllProduct=async (req,res)=>{
    try{
        const products=await Product.find().sort({createAt:-1})
        res.status(200).json(products)
    }
    catch(err){
        console.log(err)
        res.status(500).json("failed to fetch products")
    }
}

const getProductById=async (req,res)=>{
    
    try{
        const product=await Product.findById(req.params.id)
        res.status(200).json(product)
    }
    catch(err){
        console.log(err)
        res.status(500).json("failed to fetch product")
    }
}

const searchProduct=async (req,res)=>{
    
    try{
        const result=await Product.aggregate(
            [
                {
                  $search: {
                    index: "default",
                    text: {
                      query: req.params.key,
                      path: {
                        wildcard: "*"
                      }
                    }
                  }
                }
              ]
        )

        res.status(200).json(result)
    }
    catch(err){
        console.log(err)
        res.status(500).json("failed to fetch product")
    }
}

module.exports ={
    createProduct,
    getAllProduct,
    getProductById,
    searchProduct
}