const mongoose =require("mongoose")
const {ObjectId} = mongoose.Schema;

const ProductCartSchema =new mongoose.Schema({
    product:{
        type: ObjectId,
        ref:"Products"
    },
    name: String,
    count: Number,
    price: Number,
});

const ProductCart =mongoose.model("ProductCart",ProductCartSchema);

const orderSchema = new mongoose.Schema(
    {
        products: [ProductCartSchema],
        transaction_id: {},
        amount: {type: Number},
        address: String,
        user: {
            type: ObjectId,
            ref: "Users",
        }

},
{timestamps: true}
);

const order = mongoose.model("Order", OrderSchema)

module.export = {Order , ProductCart}