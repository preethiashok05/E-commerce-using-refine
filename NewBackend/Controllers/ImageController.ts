import fs from 'fs';
import { Request, Response } from 'express';
import path from 'path';
export const getImage = (req: Request, res: Response) => {
 
  let image = req.params.id;
  let imagePath = '..\\Images\\' + image + '.png';
  var data = fs.readFileSync(path.join(__dirname, imagePath));
  res.end(data);
};
