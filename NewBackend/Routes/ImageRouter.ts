import express from "express";
import {getImage} from '../Controllers/ImageController'


 const imageRouter = express.Router();

 imageRouter.get('/:id', getImage);




 export default imageRouter;