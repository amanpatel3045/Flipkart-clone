import jwt  from "jsonwebtoken";
import orderItemModel from "../Models/orderItems.model.js"

const getItems = async(req,res) => {
    try {
        const orderItems = await orderItemModel.find({userId: req.params.id}); // get order items
        return res.status(200).send(
            {
                status: "Success",
                data: orderItems
            }
        );
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }
    
} 


export {getItems}