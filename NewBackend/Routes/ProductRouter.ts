import * as express from 'express'
import {
  getProductByID,
  getProductByCategory,
} from '../Controllers/ProductController';
const productRouter = express.Router()

import { manage, create } from '../Controllers/ManageController';
productRouter.get('/:category', (req, res) => {
  getProductByCategory(req, res)
})
productRouter.get('/:category/:id', (req, res) => {
  getProductByID(req, res);
});
productRouter.post('/', create);
productRouter.get('/',manage);

export default productRouter


