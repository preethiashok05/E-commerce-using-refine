import fs from 'fs';


export const writeImage64 = (photo: string, filename: string) => {

  let base64Image = photo.split(';base64,').pop() as string;
  console.log(filename);
  fs.writeFile(filename, base64Image, { encoding: 'base64' }, function (err) {
    console.log(err);
  });


};
