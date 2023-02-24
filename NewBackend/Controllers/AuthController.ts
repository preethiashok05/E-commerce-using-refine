import { Request, Response } from 'express'
import { db } from '../index';

export const login = (req: Request, res: Response) => {
    
    const email = req.body.email;
    const pswrd = req.body.password;
    const query = "select * from `user` where email = '"+email+"'";
    db.query(query , (err,result : Array<any>)=>{
       if(err)
       {
         console.log(err);
        return res.status(500).json({msg:'server error'})
       }
       else if(result.length == 0)
       {
        console.log('email not found');
        return res.status(400).json({msg:'email not found'})
       }else 
       {
            var crt_pswrd = result[0].password;
            if(pswrd !== crt_pswrd)
            {
                console.log('incorrect passord');
                return res.status(400).json({msg:'incorrect password'})
            }
            else{
                console.log('login successs!!');
                
                return res.status(200).send(result);
            }
       }
       
    })
}
export const register = (req: Request, res: Response) => {
    const email = req.body.email;
    let uname = 'guest';
    if(email === "admin@refine.dev")
        uname = 'admin';
    const pswrd = req.body.password;
    const query1 = 'select * from `user` where email = "'+email+'"';
    const query2 = "INSERT into `user` (username , email , password) values('"+uname+"' , '"+email+"','"+pswrd+"')";
    db.query(query1 , (err,result: Array<any>)=>{
        if(err)
        {
            console.log(err);
        return res.status(500).json({msg:'server error'})
        }
        if(result.length != 0)
        {
        console.log('email exists');
        return res.status(400).json({msg:'email alredy registered'});
        }
        db.query(query2 , (err,result) => {
        if(err)
        {
            console.log(err);
            return res.status(500).json({msg:'server error'})
        }
        return res.status(200).json({msg:'success'});
        })
        
    })
}