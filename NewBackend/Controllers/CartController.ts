import { Request, Response } from 'express';
import { db } from '../index';

export const addToCart = (req: Request, res: Response) => {
  console.log(req.body);

  const { uid, size, pid } = req.body;
  const query1 =
    'SELECT * from `cart` where user_id = "' +
    req.body.uid +
    '" and prdt_id = "' +
    req.body.pid +
    '" and size = "' +
    req.body.size +
    '"';

  const query2 =
    'INSERT INTO `cart` (`user_id` , `prdt_id` ,`size`) VALUES (' +
    '"' +
    req.body.uid +
    '"' +
    ' , ' +
    req.body.pid +
    ' , "' +
    req.body.size +
    '")';

  db.query(query1, (err, result: Array<any>) => {
    if (err) {
      console.log('err1//////////////////////////', err);
      return res.status(500).json({ msg: err });
    }
    if (result.length == 0) {
      db.query(query2, (err, result) => {
        if (err) {
          // console.log(err);
          console.log(err);

          return res.status(500).json({ msg: 'something went wrong at q2' });
        }
        console.log('cart updated');
        return res.status(200).json({ msg: 'success' });
      });
    } else {
      var cnt = result[0].count;
      const cid = result[0].cart_id;
      cnt += 1;
      // console.log(cnt)
      const query3 =
        'UPDATE `cart` SET `count` = "' +
        cnt +
        '" WHERE `cart_id` = "' +
        cid +
        '"';
      db.query(query3, (err, result) => {
        if (err) {
          console.log('err2+++++++++++++++++++++++++++++++', err);
          return res.status(500).json({ msg: 'something went wrong' });
        }
        console.log('cart updated');
        return res.status(200).json({ msg: 'success' });
      });
    }
  });
};

export const viewCart = (req: Request, res: Response) => {
  const query1 =
    'SELECT c.cart_id , c.size , c.count ,p.*  from `cart` c , `products` p  WHERE c.user_id = "' +
    req.params.uid +
    '" and c.prdt_id = p.prdt_id';
    
  const query2 =
    'SELECT  sum(p.product_cost) as total from `cart` c , `products` p  WHERE c.user_id = "' +
    req.params.uid +
    '" and c.prdt_id = p.prdt_id';
  db.query(query1, (err, result: Array<any>) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ msg: err });
    }

    db.query(query2, (err, total) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: err });
      }
      console.log(result);
      return res.status(200).json(result);
    });
  });
};

export const getCartProducts = (req: Request, res: Response) => {
  const query2 =
    'select * from cart where user_id=' + '"' + req.query.email + '";';

   const query3 =
     'select * from(SELECT X.product_cost , Y.* FROM products  X INNER JOIN cart Y ON X.prdt_id = Y.prdt_id)as a where user_id=' +
     '"' +
     req.query.email +
     '";';
  db.query(query3, (err, result: Array<any>) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ msg: err });
    }

    

    
 

    console.log(result);
    return res.status(200).json(result);
  });
};
