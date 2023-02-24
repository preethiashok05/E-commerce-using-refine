import {
  useTable,
  HttpError,
} from "@pankod/refine-core";
import React, { useEffect, useState } from "react";
import CartCard from "components/store/CartCard";
import { host } from '../../utils/api'
import axios from "axios";
// interface Iitem {
//   cart_id: number;
//   size: string;
//   count: number;
//   category: string; //men || women
//   product_name: string;
//   prdt_id: number;
//   product_type: string;
//   product_details: string;
//   product_cost: number;
//   img_path: string;
// }
interface Iitem {
  cart_id: number;
  prdt_id: number;
  product_cost:number;
  count: number;
  size: string;
  user_id: string;
}
export default function Cart() {

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Iitem[]>([])
  // const { tableQueryResult } = useTable<Iitem, HttpError>({resource:`cart?email=${localStorage.getItem('email')}&`});
  // const items = tableQueryResult?.data?.data ?? [];

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  useEffect(() => {

    setLoading(true);


    axios.get(`${host}/cart?email=${localStorage.getItem('email')}`).then((response) => {


      setLoading(false);
      return response.data
    }).then((data) => {
      setItems(data)
    })
      .catch((error) => {
        setLoading(false);

      })


  }, [])



  return (
    <div>
      <h1>Cart Details</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Size</th>
            <th>Cost</th>
            <th>Count</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item , id) => (
              
             
            <CartCard id={id} setItems={setItems} items={items }/>
            
            ))}
        </tbody>
      </table>
      <div className="container">
        <button className="update">
          update cart
        </button>
        <button className="subtotal">
          subtotal
        </button>
        <button className="back-to-shop">
          back to shopping
        </button>
      </div>
    </div>
  )
}
