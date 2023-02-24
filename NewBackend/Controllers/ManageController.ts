import { Request, Response } from 'express';
import { writeImage64 } from './helper';
import { db } from '../index';
export const manage = (req: Request, res: Response) => {
  res.send(['Hello']);
};

export const create = (req: Request, res: Response) => {
  const { category, type, title, price, description, photo } = req.body;



  const getMaxId = 'select max(prdt_id) from products;';

  db.query(getMaxId, (err, result) => {
    if (err) {
      console.log(err);
    }
    const Array = result as Array<any>;
    const maxId = Array[0]['max(prdt_id)'];

      const queryString = `INSERT into products 
    (category,product_type,product_name,product_details,product_cost,img_path)
    VALUES ('${category}', '${type}', '${title}', '${description}', '${price}','./Images/${
        maxId + 1
      }.png')`;
    db.query(queryString, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send([]);
      }
      console.log(result);
      res.status(201).send('Created');
        writeImage64(photo, `./Images/${maxId + 1}.png`);

    });
  });
  //   console.log(type);

 

};
