import * as express from 'express'
import { addToCart,getCartProducts,viewCart } from '../Controllers/CartController'
const cartRouter = express.Router()

cartRouter.post('/', (req, res) => {
  console.log("Inside Cart")
  addToCart(req, res)
})

// cartRouter.get('/:uid' , (req,res) => {
//   viewCart(req,res);
// })

cartRouter.get('/',(req,res)=>{
  getCartProducts(req, res);
})
export default cartRouter
