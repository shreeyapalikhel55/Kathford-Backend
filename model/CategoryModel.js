const mongoose=require('mongoose');

const CategorySchema=new mongoose.Schema({
    category_name: {
        type:String,
        required: true,
        unique:true
    }//,
    // price:{
    //     type:Number,
    //     require:true,
    //}

},{timestamps:true});
module.exports=mongoose.model("Category",CategorySchema);
