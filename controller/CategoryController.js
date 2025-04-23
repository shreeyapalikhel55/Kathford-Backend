const Category = require('../model/CategoryModel')
exports.addcategory = async (req, res) => {
  try{
    category = await Category.findOne({category_name:req.body.category_name});
  if(!category){
    let categoryadd = new Category({
      category_name: req.body.category_name,
    })
    categoryadd = await categoryadd.save()
    res.status(200).send({category: categoryadd, msg : "added"})
  }
  else{
    res.status(201).json({error:"Category already exists"})
  }
  }catch(err){
    return res.status(400).json({error:err.message, detail:"Category not added"})
  }
}

exports.getCategory=async(req,res)=>{
  let category=await Category.find();
  if(!category){
    res.status(404).json({error:"No category found"})
  }
  res.send(category)
};

exports.getCategoryById = async (req, res) => {
  let category = await Category.findByIdAndDelete(req.params.id)
  if (!category) {
    res.status(404).json({ error: 'category not found' })
  }
  res.send(category)
}

exports.updateCategory = async(req,res)=>{
  let category = await Category.findByIdAndUpdate(req.params.id, {category_name:req.body.category_name}, {new:true})
  if (!category) {
    res.status(404).json({ error: 'category not found' })
  }
  res.status(200).json({category, success:"category updated"})
}

exports.deleteCategory=async(req,res)=>{
  let category=await Category.findByIdAndDelete(req.params.id);
  if(!category)
    res.status(404).json({error:"category not found"})
  res.status(200).json({success:"category deleted"})
}