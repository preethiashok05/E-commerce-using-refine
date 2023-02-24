import { useState } from "react";
import { useOne, HttpError, useShow } from "@pankod/refine-core";
import { host } from "utils/api";
import '../store/styles/productShow.css'
interface IProduct {
    prdt_id: number;
    product_name: string;
    product_type: string;
    product_details : string;
    gender : string;
    product_cost: number;
}


const Product: React.FC = () => {
    const [size, setsize] = useState("$");
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const cloth_values = ['XS' ,'S' , 'M' ,'L' ,'XL'];
    const shoe_values = ['5' , '6' ,'7' ,'8' ,'9' ,'10'];
    const record = data?.data;
    const product = record?.[0];

    const handleClick = (e,prdt_id:number) => {
        e.preventDefault();
        if(size === "$"){
         alert('select the size');
         return;
     }
        const email = localStorage.getItem('email');
   
        const data = {
         'uid':email,
         'pid':prdt_id,
         'size':size
         }
         fetch(`${host}/cart` , { method:'post', headers:{'Accept':'application/json' , 'Content-Type':'application/json'} , body:JSON.stringify(data) })
         .then(data => data.json())
         .then(data => {
             console.log(data.msg)
             if(data.msg === 'success')
             {
                 alert('cart updated');
                 return <p>success</p>;
             }else{
                 alert('something went wrong ,try again');
                 return ;
             }
         } )
     
     }

    return (
        <>
        <div className="showcard">

        <div className="photo">
            <img src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"/>
        </div>

        <div className="description">
            <h2>ClassNameic Peace Lily</h2>
            <h4>Popular House Plant</h4>
            <h1>₹18</h1>
            <div className="size">
            <h5>Select Size : {product?.product_type}</h5>
            <>
            
            {( product?.product_type === 'Shoes') ?  
                shoe_values.map((value) => {
                   return <button key={value} onClick={(e) => {setsize(value)}} className={size ===  value ? 'selected' : 'small'} >{value}</button>
                }):null}
                
            { (product?.product_type !== "Shoes")  && 
                cloth_values.map((value) => {
                   return  <button key={value} onClick={(e) => {setsize(value)}} className={size ===  value ? 'selected' : 'small'} >{value}</button>
                }) }
                
            </>
            </div>
            <p>ClassNameic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.</p>
            <button className="button" onClick={ (e) => handleClick(e ,product.prdt_id)} >Add to cart</button>
        </div>
        {/* <div className="description">
            <h2>{product?.product_name}</h2>
            <h4>Popular House Plant</h4>
            <h1>₹{product?.product_cost}</h1>
            <p>{product?.product_details}</p>
            <button onClick={ (e) => handleClick(e ,product.prdt_id)} >Add to cart</button>
        </div> */}
        </div>
        </>
    );
};

export default Product;
